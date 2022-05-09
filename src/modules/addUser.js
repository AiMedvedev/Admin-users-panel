import { render } from "./render";

export const addUser = () => {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('#form-name');
    const emailInput = form.querySelector('#form-email');
    const childrenInput = form.querySelector('#form-children');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.dataset.method) {
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false  
            };
    
            userService.addUser(user)
            .then(() => {
                userService.getUsers()
                .then(users => {
                    render(users);
                    form.reset();});
            });
        }    
    });   
};