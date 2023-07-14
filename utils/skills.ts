const BASE_URL = '/skills'

export interface Skill {
    id?: number;
    name: string;
    image: string;
    category?: string;
}

export const frontends: Skill[] = [
    { id: 1, name: 'HTML', image: `${BASE_URL}/html.png` },
    { id: 2, name: 'CSS', image: `${BASE_URL}/css.png` },
    { id: 3, name: 'JavaScript', image: `${BASE_URL}/js.png` },
    { id: 4, name: 'TypeScript', image: `${BASE_URL}/ts.png` },
    { id: 5, name: 'React', image: `${BASE_URL}/react.png` },
    { id: 6, name: 'Next.js', image: `${BASE_URL}/next.png` },
    { id: 7, name: 'Redux', image: `${BASE_URL}/redux.png` },
    { id: 8, name: 'Tailwind', image: `${BASE_URL}/tailwind.png` },
    { id: 9, name: 'SCSS', image: `${BASE_URL}/scss.png` },
]

export const backends: Skill[] = [
    { id: 1, name: 'PHP', image: `${BASE_URL}/php.png` },
    { id: 2, name: 'Laravel', image: `${BASE_URL}/laravel.png` },
    { id: 3, name: 'Node.js', image: `${BASE_URL}/node.png` },
    { id: 4, name: 'Express', image: `${BASE_URL}/express.png` },
    { id: 5, name: 'Nest.js', image: `${BASE_URL}/nest.png` },
    { id: 6, name: 'Go', image: `${BASE_URL}/go.png` },
    { id: 7, name: 'Python', image: `${BASE_URL}/python.png` },
    { id: 8, name: 'Prisma', image: `${BASE_URL}/prisma.png` },
    { id: 9, name: 'GraphQL', image: `${BASE_URL}/graphql.png` },
]

export const devops: Skill[] = [
    { id: 1, name: 'GitHub', image: `${BASE_URL}/github.png` },
    { id: 2, name: 'AWS', image: `${BASE_URL}/aws.png` },
    { id: 3, name: 'Dokcer', image: `${BASE_URL}/docker.png` },
    { id: 4, name: 'Firebase', image: `${BASE_URL}/firebase.png` },
]