import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

import '../_site/src/Learn the basics.css';
import init from '../_site/src/MapTiler.js';
import config from '../_site/src/config.json' with { type: 'json' }

window.maptilersdk = maptilersdk;
init(config.maptiler_api_key);
