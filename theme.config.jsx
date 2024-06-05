const config = {
    logo: <strong>NEXTRA</strong>,
    project: {
      link: 'https://github.com/SanjaykarGC/nextrademo',
    },
    useNextSeoProps(){
      return {
        titleTemplate: "Nextra Demo - %s",
      };
    },

    footer: {
        text: "Copyright SanjaykarGC 24",
    },
    chat: {
        link: "https://discord.com",
    }
  };
  
  export default config;
  