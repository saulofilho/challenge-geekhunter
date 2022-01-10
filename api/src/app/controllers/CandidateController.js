const axios = require('axios');

const Candidate = require('../models/Candidate');

class CandidateController {
  async index(req, res) {
    const candidate = await Candidate.find({ id: req.params.id });

    if (candidate === undefined || candidate.length == 0) {
      res.json({ error: 'Data not found!' });
    }

    return res.json(candidate);
  }

  async indexAll(req, res) {
    const candidates = await Candidate.find()
      .sort({ id: 'asc' })
      .limit(100);

    return res.json(candidates);
  }

  async indexTeste(req, res) {
    const { city } = req.query;
    console.log('xxx->>', city);
    const candidate = await Candidate.find({ city });

    return res.json(candidate);
  }

  async store(req, res) {
    const apiRequest = await axios
      .get(`https://geekhunter-recruiting.s3.amazonaws.com/code_challenge.json`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err.message);
      });

    const { candidates } = apiRequest;

    let item;

    for (item in candidates) {
      const saveDataBase = new Candidate(candidates[item]);

      saveDataBase
        .save()
        .then(() => {
          console.log('Item was save successfully.');
        })
        .catch(err => {
          console.log(err);
        });
    }

    return res.send(200, 'Save successfully.');
  }
}

module.exports = new CandidateController();
