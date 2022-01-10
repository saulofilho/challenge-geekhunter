const { Router } = require('express');

const CandidateController = require('./app/controllers/CandidateController');
const JobController = require('./app/controllers/JobController');

const routes = new Router();

routes.get('/', (req, res) => {
  try {
    res.send(200, 'Fullstack Challenge GeekHunter.');
  } catch (error) {
    res.send(500, error);
  }
});

routes.get('/candidate/:id', CandidateController.index);
routes.get('/candidates/search', CandidateController.indexTeste);
routes.get('/candidates', CandidateController.indexAll);
routes.post('/candidates', CandidateController.store);

routes.get('/job/:id', JobController.index);
routes.get('/jobs', JobController.indexAll);
routes.post('/jobs', JobController.store);

module.exports = routes;
