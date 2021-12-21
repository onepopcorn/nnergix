# NNergix Technical Test

This site has been created with **vite.js**, for more information please refer to documentation at vite's [website](https://vitejs.dev/)

Click [here](https://onepopcorn.github.io/nnergix/) to see a working demo of the app

## Technical requirements

-   node ^16.0.0

## Development

use `npm i` to install project dependencies & `npm run dev` to run development environment. Optionally, you can use `npm run test:watch` to run test and watch for changes.

## Deployment

use `npm run preview` to locally preview a production build or use `npm run build` to create a production ready build

## Testing

use `npm test` to run run all tests

## Notes

Some layout components have been added to give context to the chart components but they are **out of the scope** of this test hence the little testing, mocked data & missing functionality.

## TODO

A list of some functionality considered _out of the scope_ and left out from this test:

-   Real world app should use a more sophisticated state managment like Redux or a useContext hook handled by reducers & actions
-   Caching fetch responses
-   More Unit & Integration testings
-   E2E testing
-   Code splitting to have a better user experience when the app is loaded
-   Use service workers to cache anything is that is not fetched data & make the app load instantly after a first load
-   Plot (plottly.js) component seems to not re-scale properly but that's a third-party issue not te be tested here
-   Plot data have some layout information that probably should be manage by the app like "height"
