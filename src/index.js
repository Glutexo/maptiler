import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

import './index.css';
import init from './MapTiler.js';

window.maptilersdk = maptilersdk;
init();
