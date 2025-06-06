import init from './MapTiler.js'
import config from './config.json' with { type: 'json' }
(function () {
    init(config.maptiler_api_key);
})();
