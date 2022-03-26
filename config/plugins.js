module.exports = ({ env }) => ({
  /** upload media to cloudinary */
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },

  /** setup graphql options */
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 8,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  /** send email using mailgun */
  email: {
    config: {
      provider: "mailgun",
      providerOptions: {
        apiKey: env("MAILGUN_API_KEY"),
        domain: env("MAILGUN_DOMAIN"),
        host: env("MAILGUN_HOST"),
      },
      settings: {
        defaultFrom: env("MAILGUN_DEFAULT_FROM"),
        defaultReplyTo: env("MAILGUN_DEFAULT_REPLY_TO"),
      },
    },
  },
});
