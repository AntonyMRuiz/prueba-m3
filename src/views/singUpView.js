export function singUpRender() {
    return `
        <div class="d-flex justify-content-center align-items-center vh-100 vw-100">
            <div class="card" style="width: 500px;">
                <form class="card-body ubuntu-medium">
                    <h2 class="card-title ubuntu-bold text-center">Register</h2>
                <div class="mb-3">
                    <label for="full-name" class="form-label">Full Name</label>
                    <input
                    type="text"
                    class="form-control"
                    id="full-name"
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                    type="email"
                    class="form-control"
                    id="email"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                    type="password"
                    class="form-control"
                    id="password"
                    />
                </div>
                <div class="mb-3">
                    <label for="confirm-password" class="form-label">Confirm Password</label>
                    <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                    />
                </div>
                <div class="d-grid mb-3">
                    <button type="submit" class="btn btn-purple">Register</button>
                </div>
                <p class="text-muted text-center">Already have an account? <a href="#/singIn" class="text-decoration-none">Login</a></p>
                </form>
            </div>
        </div>
    `
}

export function singUpService() {

}