# MapTiler integration playground #

## About ##

I am experimenting with the MapTiler SDK. Following their [Learn the basics](https://docs.maptiler.com/sdk-js/examples/how-to-use/) example, I integrated its basic map into a plain webpage using plain JavaScript and an NPM module. To bundle the NPM version, I picked [Webpack](https://webpack.js.org/).

## Build ##

Create a MapTiler [API key](https://cloud.maptiler.com/account/keys/), if you don’t have one. Fill it into the `maptilersdk.config.apiKey` variable in [src/MapTiler.js](src/MapTiler.js).

### Basic JavaScript ###

Simply open [Learn the basics Basic JavaScript.html](Learn the basics Basic JavaScript.html) in your browser.

### NPM Module ###

Have [NPM](https://npmjs.com/] and [Webpack](https://webpack.js.org/) installed, install the packages by running `npm install`. Then, build the sources by running `webpack bundle --mode development`.

Open [Learn the basics Basic JavaScript.html](Learn the basics Basic JavaScript.html) in your browser.

## License ##

🤷🏻‍♂️
