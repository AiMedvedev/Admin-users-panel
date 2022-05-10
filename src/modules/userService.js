export class UserService {
    getData(url = 'http://localhost:3232/users') {
        return fetch(url).then(res => res.json());
    }
 
    sendData(method, data, url = 'http://localhost:3232/users') {
        return fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }
}



    /* getUsers() {
        return fetch('http://localhost:3232/users').then(res => res.json());
    } */

    /* addUser(user) {
        return fetch('http://localhost:3232/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    } */

    /* removeUser(id) {
        return fetch(`http://localhost:3232/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json());
    } */

    /* changeUser(id, data) {
        return fetch(`http://localhost:3232/users/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    } */

    /* getUser(id) {
        return fetch(`http://localhost:3232/users/${id}`)
        .then(res => res.json());
    } */

    /* editUser(id, user) {
        return fetch(`http://localhost:3232/users/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    } */

    /* filterUsers(filterOption) {
        return fetch(`http://localhost:3232/users?${filterOption}=true`)
        .then(res => res.json());
    } */
 
    /* getSortUsers(sortOption) {
        return fetch(`http://localhost:3232/users?_sort=${sortOption.name}&_order=${sortOption.value}`)
        .then(res => res.json());
    } */

    /* getSearchUsers(str) {
        return fetch(`http://localhost:3232/users?name_like=${str}`)
        .then(res => res.json());
    } */