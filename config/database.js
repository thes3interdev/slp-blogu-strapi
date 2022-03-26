module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    /** production configuration */
    return {
      connection: {
        client: "mysql",
        connection: {
          host: env("DATABASE_HOST"),
          port: env.int("DATABASE_PORT"),
          database: env("DATABASE_NAME"),
          user: env("DATABASE_USERNAME"),
          password: env("DATABASE_PASSWORD"),
          ssl: env.bool("DATABASE_SSL"),
        },
      },
    };
  } else {
    /** development configuration */
    return {
      connection: {
        client: "mysql",
        connection: {
          host: env("DATABASE_HOST_DEVELOPMENT"),
          port: env.int("DATABASE_PORT"),
          database: env("DATABASE_NAME"),
          user: env("DATABASE_USERNAME"),
          password: env("DATABASE_PASSWORD"),
          ssl: env.bool("DATABASE_SSL_DEVELOPMENT"),
        },
      },
    };
  }
};
