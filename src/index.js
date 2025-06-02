import * as maptilersdk from '@maptiler/sdk';
import { init } from './npmmodule.js';

window.maptilersdk = maptilersdk
document.addEventListener('DOMContentLoaded', init);
