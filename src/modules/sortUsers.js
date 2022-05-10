import { render } from "./render";

export const sortUsers = () => {
    const headerSortIsChildren = document.getElementById('sort-is-children');
    headerSortIsChildren.style.cursor = 'pointer';

    let isSort = false;

    headerSortIsChildren.addEventListener('click', () => {
        userService.getData(`http://localhost:3232/users?_sort=children&_order=${isSort ? 'asc' : 'desc'}`)
        .then(users => render(users));       
        isSort = !isSort;
    });
};