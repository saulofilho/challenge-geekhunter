# Food Facts API Rest NodeJS

A scrapping bot on <https://world.openfoodfacts.org/> using NodeJS, MongoDB, Docker and Puppeteer.

The API is [REST API](https://en.wikipedia.org/wiki/Representational_State_Transfer "RESTful").
Currently, return format for all endpoints is [JSON](https://json.org/ "JSON").

## Technologies

This project was developed with the following technologies:

- [axios](https://github.com/axios/axios)
- [mongoose](https://mongoosejs.com/)
- [express](https://expressjs.com/)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## How to use it?

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] or higher + [Yarn][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/saulofilho/challenge-20201026

# Go into the repository
$ cd challenge-20201026 && cd api

# Install dependencies
$ npm install

# Run the app
$ npm start
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Setup for localhost

- Install Docker.
- Create a cluster at MongoDB: <https://www.mongodb.com/cloud/atlas>
- Set the variables in `.env` as `.env.example`.
- Build an image from a Dockerfile: `docker build -t food-api .`
- Run the container: `docker run -p 3333:3333 -d food-api`
- Launch api: `docker-compose up`
- That's all! Go to <http://localhost:3333/> to see live.

## API Rest

Get message and status: `GET /`
Get product by code: `GET /product/:code`
Get an array of 100 products: `GET /products`

By default the objects will be sorted by `imported_t` in order to have the most important objects first.

URL to query                   | Description
------------------------------ | ---------------------------
`GET` `/`             | Return `200`.
`GET` `/product/`           | Get a product by code eg. `/product/7622210713780`
`GET` `/products`             | Return a list of `Products`.

### Example

#### Request

``` json
GET /product/7622210713780
```

#### Return

``` json
  {
    "status": "imported",
    "_id": "602445b6f090bb0c5c34fedf",
    "code": 7622210713780,
    "barcode": "7622210713780(EAN / EAN-13)",
    "imported_t": "2021-02-10T20:44:38.442Z",
    "url": "https://world.openfoodfacts.org/product/7622210713780/belvita-petit-dejeuner-original-lu",
    "product_name": "Belvita Petit Déjeuner Original - LU - 400 g (8× 50 g e)",
    "quantity": "400 g (8× 50 g e)",
    "categories": "Snacks, Sweet snacks, Breakfasts, Biscuits and cakes, Biscuits, Chocolate biscuits, Dark chocolate biscuits",
    "packaging": "Etui-carton, Sachet-plastique, Boite",
    "brands": "LU",
    "image_url": "https://static.openfoodfacts.org/images/products/762/221/071/3780/front_fr.116.200.jpg",
    "__v": 0
  }
```

### Creator

#### Saulo Filho

- <https://github.com/saulofilho>
