export class UserService {
    getUsers() {
        return fetch('http://localhost:3232/users').then(res => res.json());
    }

    addUser(user) {
        return fetch('http://localhost:3232/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    }

    removeUser(id) {
        return fetch(`http://localhost:3232/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json());
    }

    changeUser(id, data) {
        return fetch(`http://localhost:3232/users/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }

    getUser(id) {
        return fetch(`http://localhost:3232/users/${id}`)
        .then(res => res.json());
    }

    editUser(id, user) {
        return fetch(`http://localhost:3232/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    }
}