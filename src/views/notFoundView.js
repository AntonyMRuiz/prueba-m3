export function notFoundRender() {
    return `
        <div class="text-center">
            <h1 class="display-1 fw-bold text-danger">404</h1>
            <p class="fs-3">
                <span class="text-danger">Oops!</span> Page not found.
            </p>
            <p class="lead">
            The page you’re looking for doesn’t exist or has been moved.
            </p>
            <a href="#/dashboard" class="btn btn-primary" data-link>Go Dashboard</a>
        </div>
    `
}

export function notFoundService() {
    location.hash = "/404";
    document.body.classList.add("bg-light", "d-flex", "align-items-center", "justify-content-center", "vh-100");
}