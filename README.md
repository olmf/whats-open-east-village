# Open Business Directory

A directory of essential businesses using Airtable (or Google sheets) as database.

## How to Contribute

- File an issue via this [repo's issues page](https://github.com/BetaNYC/open_business_directory/issues).
- Request a feature via this [repo's issues page](https://github.com/BetaNYC/open_business_directory/issues).
- Comment on issues.
- Write code to fix issues or to create new features. When contributing code, please be sure to:
  - Fork this repository, modify the code (changing only one thing at a time), and then issue a pull request for each change.
  - Test your code locally before issuing a pull request.
  - Clearly state the purpose of your change in the description field for each commit.

### Todos

- Switch out of rollup (to vite?), then update all the packages.

## Architecture

This map shows business locations from data hosted in [Airtable](https://airtable.com/invite/l?inviteId=invQFDkvOXAlhjPH2&inviteToken=07de5769fb0c70e46f9818f77061f1721382f9ad682822103cb1a49e27a35e65).

Built using [Svelte](https://svelte.dev/), [Leaflet](https://leafletjs.com/), and [Carto.js](https://carto.com/developers/carto-js/).

Icons from [Maps Icons Collection](https://mapicons.mapsmarker.com).


#### Database overview
All data comes from 'public/data/row.csv', which is pulled every hour using `get-data-from-airtable.yml` github actions script.

If you would like to adapt this code for your project Duplicate the Airtable base using this [link](https://airtable.com/invite/l?inviteId=invQFDkvOXAlhjPH2&inviteToken=07de5769fb0c70e46f9818f77061f1721382f9ad682822103cb1a49e27a35e65).

Afterwards change `AIRTABLE_API_KEY` , `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_NAME`, `AIRTABLE_BULLETIN_NAME` on github secrets, or your .env file

#### Code overview
1. The `App` component loads the `public/data/row.csv` into the `rows` store via the util/importData.js script, which pulls styles from constants.js to set up icon and color.
2. The `App` component separated into two main components `Sidebar` and `MapView` which loads the `rows` Store.
3. The `filter` store array filters the `rows` Store for both `RowItems` components and `MapView`
4. When an item is selected by either clicking the element on the map or RowItems, it will set the `selectedItem` store (selectedItem.select(item)), and show the `ItemDetails` component.

- Including map and center attributes in the selectedItem.select method will toggle the map to zoom in.

## Setup

### Create an [Airtable token](https://airtable.com/create/tokens)

- Enable schema.bases:read , data.records:read
- Scoped to What's Open EV

### Setup .env
```bash
cd public
cp .env.example .env
# Fill in your `AIRTABLE_TOKEN` in the .env file
```

### Run the script to download data

In the public folder
```bash
npm install 
npm run start
```

### Setup the app

In the main directory
```bash
cd ..
npm install
```

You can either build by running `npm run build` or run live development environment by running `npm run dev`, then opening [localhost:5000](http://localhost:5000/) in your browser.

## Copyrights

Please see [license](https://github.com/BetaNYC/open_business_directory/blob/master/LICENSE) file for details.

- Non-code, Creative Commons Attribution 4.0
- Code, GNU General Public License