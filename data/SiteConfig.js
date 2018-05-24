const currentYear = (new Date()).getFullYear();

module.exports = {
  siteTitle: "Michael Walker", // Site title.
  siteTitleAlt: "Front-End Web Development", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://mikewalker.co", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Michael Walker, Front-End Web Developer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  copyright: `Copyright © ${currentYear}. Advanced User`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  navItems: [
    {
      id: 0,
      path: '/',
      name: 'Home'
    },
    {
      id: 1,
      path: '#recent',
      name: 'Recent',
    },
    {
      id: 2,
      path: '#about',
      name: 'About',
    },
    {
      id: 3,
      path: '#contact',
      name: 'Contact',
    },
  ],
};
