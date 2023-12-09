export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "My Portfolio",
	description: "My portfolio updated with the latest features and recent works.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Portfolio",
      href: "/docs",
    },
    {
      label: "Skills",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Chanels",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Skills",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/ChaeMendoza",
		twitter: "https://twitter.com/ChaeMendoza9",
		docs: "https://www.linkedin.com/in/israel-mendoza-a939a61b1/",
		discord: "https://discord.gg/9b6yyZKmH4",
	},
};
