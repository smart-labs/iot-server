const User = require('../models/User');
const errors = require('../errors');

module.exports = {
  async create(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json(user);
    } catch (error) {
      return errors.signUpFailed(res);
    }
  },

  async show(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      return res.json(user);
    } catch (error) {
      return errors.signUpFailed(res);
    }
  },
};
