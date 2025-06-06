import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

import './Learn the basics.css';
import init from './MapTiler.js';
import config from './config.json' with { type: 'json' }

window.maptilersdk = maptilersdk;
init(config.maptiler_api_key);
