const {Parser} = require('json2csv');
const path = require('path')
const fs = require('fs')
const Airtable = require('airtable')

require('dotenv').config()
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME
const AIRTABLE_BULLETIN_NAME = process.env.AIRTABLE_BULLETIN_NAME
const directory = __dirname + '/data';

function getAllRecords(base, tableName) {
    return new Promise((resolve, reject) => {
        let records = [];
        base(tableName)
            .select()
            .eachPage(
                (partialRecords, fetchNextPage) => {
                    records = [...records, ...partialRecords];
                    fetchNextPage();
                },
                err => {
                    if (err) {
                        reject(err);
                    }
                    resolve(records);
                }
            )
    })
}

function setupDirectory(dir) {
    // Create the folder data if it doens't exist
    if (!fs.existsSync(dir)) {
        try {
            fs.mkdirSync(dir);
            console.log(' \tCreated ' + dir)
        } catch (e) {
            throw error
        }
    } else {
        console.log(' \tdata dir already exists, skipping creation')
    }
}

async function getRows(base, table, ignoreFields = []){
    console.log(` :: Getting rows from ${table}`)
    const records = await getAllRecords(base, table)
    const rows = records.map(row => row.fields).map(row => {
        let nRow = {}
        Object.entries(row).map(([key, value]) => {
            //don't include ignoreFields
            if(key in ignoreFields) return;
            //flatten array fields
            if(Array.isArray(value)){
                if(value.length > 0 && (typeof value[0] === 'object') && 'url' in value[0]){
                    //get attachment urls
                    nRow[key] = value.map(i => i.url).join(',')
                }else{
                    nRow[key] = value.join(',')
                }

            }else{
                nRow[key] = value
            }
        })
        return nRow
    }).sort((a, b) => a.id - b.id)

    const json2csvParser = new Parser()
    return json2csvParser.parse(rows);
}

async function main() {
    console.log(' :: Setting up directory structure')
    setupDirectory(directory)

    const base = new Airtable({
        apiKey: AIRTABLE_API_KEY
    }).base(AIRTABLE_BASE_ID)

    const all = await getRows(base, AIRTABLE_TABLE_NAME, ['Email','Update Requests'])
    const bulletin = await getRows(base, AIRTABLE_BULLETIN_NAME, [])

    console.log(' :: Writing data files')
    await fs.writeFileSync(path.join(directory, 'rows.csv'), all , 'utf8');
    await fs.writeFileSync(path.join(directory, 'bulletin.csv'), bulletin , 'utf8');
}

main()