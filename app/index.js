import 'whatwg-fetch';
import data from './data.js';
import addGamesToList from './twitch/add-games-to-list';

const ul = document.querySelector('.grid');

addGamesToList(ul, data.top);
