import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { addUser } from "./modules/addUser";
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import {editUsers} from "./modules/editUsers";

window.userService = new UserService;

userService.getUsers().then(data => render(data));

addUser();
removeUsers();
changePermissions();
editUsers();