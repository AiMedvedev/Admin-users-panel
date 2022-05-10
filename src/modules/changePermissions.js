import {render} from "./render";

export const changePermissions = () => {
    const tbody = document.getElementById('table-body');

    tbody.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.closest('input[type=checkbox]')) {
            const tr = e.target.closest('tr');
            const input = tr.querySelector('input[type=checkbox]');
            const id = tr.dataset.key;

            userService.sendData('PATCH', {permissions: input.checked}, `http://localhost:3232/users/${id}`)
            .then(res => {
                userService.getData().then(users => {
                    render(users);
                });
            });
        }
    });
};