export function dashboardRender() {
    return `
        dashboard
    `
}

export function dashboardSevice() {
    location.hash = "/dashboard";

    document.body.classList = "bg-light";
}