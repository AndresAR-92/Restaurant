import './styles.css';
import { pageLoad } from "./page1.js";
import { DisplayMenu } from './page2.js';
import { DisplayInfo } from './page3.js';

pageLoad();
document.querySelector('#home').addEventListener('click', pageLoad)
document.querySelector('#menu').addEventListener('click', DisplayMenu)
document.querySelector('#about').addEventListener('click', DisplayInfo)
