const { User } = require('../models');
const userData = require('./userData.json');
const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;
