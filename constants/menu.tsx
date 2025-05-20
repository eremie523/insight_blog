// import { Home, Newspaper } from "lucide-react"
import { Book, BriefcaseBusiness, CircuitBoard, DollarSign, Github, HeartPulse, PersonStanding, Shirt, Twitter } from "lucide-react"
import { ReactNode } from "react"

export type NAV_LINKS_TYPE = {
    label: string,
    href: string,
    icon?: ReactNode
}

export const NAV_LINKS: NAV_LINKS_TYPE[] = [
    {
        label: "Home",
        href: "/",
        // icon: <Home />
    },
    {
        label: "Blog",
        href: "/blog",
        // icon: <Newspaper />
    },
    {
        label: "Categories",
        href: "/categories",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    }
]

export const SOCIAL_MEDIA_LINKS = [
    {
        label: "Github",
        icon: <Github size={18} />,
        href: "https://github.com/eremie523"
    },
    {
        label: "Twitter",
        icon: <Twitter size={18} />,
        href: "https://x.com/reremie523"
    },
    {
        label: "Portfolio",
        icon: <PersonStanding size={18} />,
        href: "https://scriptsdevportfolio.vercel.app"
    }
]

export const CATEGORIES = [
    {
        id: 1,
        title: "Technology",
        description: "lorem ipsum set amen dolor latir flexido",
        icon: <CircuitBoard />,
        color: "red"
    },
    {
        id: 2,
        title: "Health",
        description: "lorem ipsum set amen dolor latir flexido",
        icon: <HeartPulse />,
        color: "blue"
    },
    {
        id: 3,
        title: "Business",
        description: "lorem ipsum set amen dolor latir flexido",
        icon: <BriefcaseBusiness />,
        color: "yellow"
    },
    {
        id: 4,
        title: "Finance",
        description: "lorem ipsum set amen dolor latir flexido",
        icon: <DollarSign />,
        color: "purple"
    },
    {
        id: 5,
        title: "Education",
        description: "lorem ipsum set amen dolor latir flexido",
        icon: <Book />,
        color: "gray"
    },
    {
        id: 6,
        title: "Fashion",
        description: "lorem ipsum set amen dolor latir flexido",
        icon: <Shirt />,
        color: "orange"
    }
]