const BASE_URL = '/skills'

export interface Skill {
    id?: number;
    name: string;
    image: string;
    work: number;
    personal: number;
}

export const frontends: Skill[] = [
    { id: 1, name: 'HTML', image: `${BASE_URL}/html.png`, work: 1, personal: 2 },
    { id: 2, name: 'CSS', image: `${BASE_URL}/css.png`, work: 1, personal: 2 },
    { id: 3, name: 'JavaScript', image: `${BASE_URL}/js.png`, work: 1, personal: 2 },
    { id: 4, name: 'TypeScript', image: `${BASE_URL}/ts.png`, work: 1, personal: 1.5 },
    { id: 5, name: 'React', image: `${BASE_URL}/react.png`, work: 1, personal: 1.5 },
    { id: 6, name: 'Next.js', image: `${BASE_URL}/next.png`, work: 1, personal: 1 },
    { id: 7, name: 'Redux', image: `${BASE_URL}/redux.png`, work: 1, personal: 1 },
    { id: 8, name: 'Tailwind', image: `${BASE_URL}/tailwind.png`, work: 1, personal: 1 },
    { id: 9, name: 'Flutter', image: `${BASE_URL}/flutter.png`, work: 0, personal: 0.5 },
]

export const backends: Skill[] = [
    { id: 1, name: 'PHP', image: `${BASE_URL}/php.png`, work: 1, personal: 2 },
    { id: 2, name: 'Laravel', image: `${BASE_URL}/laravel.png`, work: 1, personal: 1.5 },
    { id: 3, name: 'Node.js', image: `${BASE_URL}/node.png`, work: 1, personal: 1.5 },
    { id: 4, name: 'Express', image: `${BASE_URL}/express2.png`, work: 0, personal: 0.5 },
    { id: 5, name: 'Nest.js', image: `${BASE_URL}/nest.png`, work: 0, personal: 0.5 },
    { id: 6, name: 'Go', image: `${BASE_URL}/go.png`, work: 0, personal: 0.5 },
    { id: 7, name: 'Python', image: `${BASE_URL}/python.png`, work: 0.5, personal: 1 },
    { id: 8, name: 'FastAPI', image: `${BASE_URL}/fast.png`, work: 0, personal: 0.5 },
    { id: 9, name: 'GraphQL', image: `${BASE_URL}/graphql.png`, work: 0, personal: 0.5 },
]

export const devops: Skill[] = [
    { id: 1, name: 'GitHub', image: `${BASE_URL}/github.png`, work: 1, personal: 2 },
    { id: 2, name: 'AWS', image: `${BASE_URL}/aws2.png`, work: 0.5, personal: 0.5 },
    { id: 3, name: 'Dokcer', image: `${BASE_URL}/docker.png`, work: 1, personal: 2 },
    { id: 4, name: 'Firebase', image: `${BASE_URL}/firebase.png`, work: 0, personal: 0.5 },
]

export const breakpoints = {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1450px',
};