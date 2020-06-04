import {csvParse} from 'd3-dsv'

async function importBulletin(file) {
    const text = await (await fetch(file)).text()
    const rows = csvParse(text)
    return rows.filter(({Status}) => Status === 'Active')
}

export default importBulletin