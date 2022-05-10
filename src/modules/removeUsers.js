import {render} from "./render";

export const removeUsers = () => {
    const tbody = document.getElementById('table-body');

    tbody.addEventListener('click', (e) => {
        
        if (e.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr');
            const id = tr.dataset.key;
            
            userService.sendData('DELETE', undefined, `http://localhost:3232/users/${id}`).then(res => {
                userService.getData().then(users => {
                    render(users);
                });
            });
        }
    });
};