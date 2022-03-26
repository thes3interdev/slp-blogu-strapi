module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT_PRODUCTION"),
  url: env("URL_PRODUCTION"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
