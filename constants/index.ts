export type FEATURED_PRODUCTS_TYPE = {
    id: number,
    title: string,
    imgSrc: string,
    dateCreated: string,
    category?: string,
    author: {
        id: number,
        name: string,
        profileSrc: string
    }
}

export const FEATURED_PRODUCTS: FEATURED_PRODUCTS_TYPE[] = [
    {
        id: 0,
        title: 'the future of AI in everyday life',
        imgSrc: '/assets/images/feed-1.jpg',
        dateCreated: 'April 25, 2025',
        category: "finance",
        author: {
            id: 3,
            name: 'Eremie Johnson',
            profileSrc: '/assets/icons/user.svg'
        }
    },
    {
        id: 1,
        title: 'Sustainable Living: Small Changes, Big Impact',
        imgSrc: '/assets/images/feed-2.jpg',
        dateCreated: 'April 25, 2025',
        author: {
            id: 3,
            name: 'Eremie Johnson',
            profileSrc: '/assets/icons/user.svg'
        }
    },
    {
        id: 2,
        title: 'Remote Work Revolution: The New Normal',
        imgSrc: '/assets/images/feed-3.jpg',
        dateCreated: 'April 25, 2025',
        category: "health",
        author: {
            id: 3,
            name: 'Eremie Johnson',
            profileSrc: '/assets/icons/user.svg'
        }
    },
    {
        id: 3,
        title: 'the future of AI in everyday life',
        imgSrc: '/assets/images/feed-1.jpg',
        dateCreated: 'April 25, 2025',
        category: "finance",
        author: {
            id: 3,
            name: 'Eremie Johnson',
            profileSrc: '/assets/icons/user.svg'
        }
    },
    {
        id: 4,
        title: 'Sustainable Living: Small Changes, Big Impact',
        imgSrc: '/assets/images/feed-2.jpg',
        dateCreated: 'April 25, 2025',
        author: {
            id: 3,
            name: 'Eremie Johnson',
            profileSrc: '/assets/icons/user.svg'
        }
    }
]

export const SORT_OPTIONS = {
    default: "oldest",
    values: [
        'recommended',
        'latest',
        'oldest',
        'title_(asc)',
        'Title_(desc)'
    ]
}