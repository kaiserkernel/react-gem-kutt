module.exports = {
  PORT: process.env.KUTT_PORT,

  /* The domain that this website is on */
  DEFAULT_DOMAIN: process.env.KUTT_DOMAIN,

  /* Neo4j database credential details */
  DB_URI: 'bolt://localhost',
  DB_USERNAME: '',
  DB_PASSWORD: '',

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: 'securekey',

  /*
    Invisible reCaptcha secret key
    Create one in https://www.google.com/recaptcha/intro/
  */
  RECAPTCHA_SECRET_KEY: '',

  /*
    Your email host details to use to send verification emails.
    More info on http://nodemailer.com/
  */
  MAIL_HOST: '',
  MAIL_PORT: 587,
  MAIL_SECURE: false,
  MAIL_USER: '',
  MAIL_PASSWORD: '',
};
