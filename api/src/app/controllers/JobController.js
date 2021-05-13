const axios = require('axios');

const Job = require('../models/Job');

class JobController {
  async index(req, res) {
    const job = await Job.find({ id: req.params.id });

    return res.json(job);
  }

  async indexAll(req, res) {
    const jobs = await Job.find()
      .sort({ id: 'asc' })
      .limit(100);

    return res.json(jobs);
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

    const { jobs } = apiRequest;

    let item;

    for (item in jobs) {
      const saveDataBase = new Job(jobs[item]);

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

module.exports = new JobController();
