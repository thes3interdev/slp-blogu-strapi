import AuthLogo from "./extensions/logo.png";
import MenuLogo from "./extensions/logo.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    /** replace the Strapi logo in auth (login) views */
    auth: {
      logo: AuthLogo,
    },

    /** replace the Strapi logo in the main navigation */
    menu: {
      logo: MenuLogo,
    },

    /** replace the favicon */
    head: {
      favicon: favicon,
    },

    /** disable video tutorials */
    tutorials: false,

    /** disable notifications about new Strapi releases */
    notifications: {
      release: false,
    },
  },

  bootstrap() {},
};
