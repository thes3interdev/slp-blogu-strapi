module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "s3interdev@gmail.com",
        from: "hello@s3interdev.com",
        subject: `New Contact ${result.name}`,
        text: `
          We have a new contact with the following details;

          Name: ${result.name}
          Nationality: ${result.nationality}
          Email Address: ${result.email}
          Message: ${result.message}

          It would be prudent to acknowledge their message, by sending them a follow up email.

          Regards,

          Superior Software Solutions, Support.
        `,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
