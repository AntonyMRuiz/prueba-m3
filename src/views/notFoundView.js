export function notFoundRender() {
    return `
        <h1> NOT FOUND </h1>
    `
}

export function notFoundService() {
    location.hash = "/404"
}