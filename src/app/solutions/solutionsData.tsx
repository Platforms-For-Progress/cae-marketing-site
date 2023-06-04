import { SolutionCardProps } from "./SolutionCard";

import { Icon } from "@chakra-ui/icons";
import {
  FcAbout,
  FcBriefcase,
  FcConferenceCall,
  FcGraduationCap,
  FcReading,
} from "react-icons/fc";

import { FaDiscord } from "react-icons/fa";

export const solutionsData: SolutionCardProps[] = [
  {
    heading: "Career Advancement Community",
    description:
      "Discord community serving resources for succeeding in the workplace from an underrepresented background.",
    icon: FcConferenceCall,
    // learnMoreHref: "/solutions/community",
    ctaButtonProps: {
      label: "Join Now",
      href: "https://discord.gg/kdbFkWujGN",
      colorScheme: "gray",
      leftIcon: <FaDiscord />,
    },
  },
  {
    heading: "CAEPortfolio",
    description:
      "Request service for personalized ePortfolios that allows for active collaboration in the development process.",
    icon: FcBriefcase,
    // learnMoreHref: "/solutions/portfolios",
    ctaButtonProps: {
      label: "Visit",
      href: "https://caeportfolio.com",
    },
  },
  {
    heading: "CAPE",
    description:
      "Summer learning experience targeted at leaders passionate about community-building and equity.",
    icon: FcReading,
    // learnMoreHref: "/solutions/cape",
    ctaButtonProps: {
      label: "Visit",
      href: "https://caeportfolio.com/resources/cape",
    },
  },

  {
    heading: "Resources Explorer",
    description:
      "A publicy available database of career resources geared to underrepresented individuals, such as job offerings, scholarships, and more.",
    icon: FcAbout,
    // learnMoreHref: "/solutions/resources",
    comingSoon: true,
  },
  {
    heading: "Professional Social Network",
    icon: FcGraduationCap,
    description:
      "Professional social networking web and mobile app for underrepresented persons.",
    // learnMoreHref: "/solutions/socialnetwork",
    comingSoon: true,
  },
];
