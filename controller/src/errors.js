module.exports = {
  signUpFailed: res => res.status(400).send({ error: 'SIGN_UP_FAILED' }),
};
