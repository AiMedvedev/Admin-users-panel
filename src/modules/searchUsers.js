import { render } from "./render";
import { debounce } from "./helpers";

export const searchUsers = () => {
    const input = document.getElementById('search-input');

    const debounceSearch = debounce(() => {
        userService.getData(`http://localhost:3232/users?name_like=${input.value}`).then(users => render(users));
    }, 500);

    input.addEventListener('input', debounceSearch);
};