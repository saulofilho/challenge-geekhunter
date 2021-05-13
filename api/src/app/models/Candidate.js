const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    technologies: {
      type: [{}],
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model('Candidate', CandidateSchema);
