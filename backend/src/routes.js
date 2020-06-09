const { Router} = require('express');
const HikerController = require('./controllers/HikerController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/hikers', HikerController.index);
routes.post('/hikers', HikerController.store);

routes.get('/search', SearchController.index);

module.exports = routes;