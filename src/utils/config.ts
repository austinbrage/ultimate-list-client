export const API_URL = 'http://localhost:3000/personal-blog'

export const PATHS = {
    USER: '/user',
}

export const addPath = (pathname: string, url: string): string => {
    return `${url}${pathname}`
}
