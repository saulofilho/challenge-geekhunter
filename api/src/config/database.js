module.exports = {
  db: {
    connectionString: process.env.MONGO_URL,
  },
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
