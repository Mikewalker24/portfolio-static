const currentYear = (new Date()).getFullYear();

module.exports = {
  siteTitle: "Michael Walker", // Site title.
  siteTitleAlt: "Front-End Web Development", // Alternative site title for SEO.
  siteLogo: "/logos/logo-192.png", // Logo used for SEO and manifest.
  siteUrl: "https://mikewalker.co", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Michael Walker, Front-End Web Developer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  copyright: `Copyright © ${currentYear}.`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#143329", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  navItems: [{
      name: 'Work',
      path: '#recent',
      secondPath: '/#recent',
    },
    {
      name: 'About',
      path: '#hi',
      secondPath: '/#hi',
    },
    {
      name: 'What I do',
      path: '#what',
      secondPath: '/#what',
    },
    {
      name: 'Contact',
      path: '#contact',
      secondPath: '/#contact',
    },
  ],
};