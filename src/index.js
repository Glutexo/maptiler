import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

import { init } from './npmmodule.js';

window.maptilersdk = maptilersdk;
init();
