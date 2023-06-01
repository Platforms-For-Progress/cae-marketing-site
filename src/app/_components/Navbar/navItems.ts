export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  subLabel?: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Solutions",
    href: "/solutions",
    children: [
      {
        label: "ePortfolio Request Service",
        subLabel: "Request an ePortfolio using our services.",
        href: "https://caeportfolio.com",
      },
      {
        label: "Career Advancement Portfolio Education",
        subLabel: "Summer Learning Experience.",
        href: "https://caeportfolio.com/resources/cape",
      },
      {
        label: "Slack Community",
        subLabel: "Join our Slack community.",
        href: "https://join.slack.com/t/slack-gkx8909/shared_invite/zt-1wb4et1xt-Ti4CW4_LjTHoJ6Fi6DGP5Q",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
