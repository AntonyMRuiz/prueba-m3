export const config = {
    url : "http://localhost:3000",
    users : function() {
        return `${this.url}/users`
    },
    userByEmail: function(email) {
        return `${this.users()}?email=${email}`
    }
}