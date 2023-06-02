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
        label: "Discord Community",
        subLabel: "Join our Discord community.",
        href: "https://discord.gg/B9djunUm",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
