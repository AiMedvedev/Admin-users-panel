(()=>{"use strict";const e=e=>{const t=document.getElementById("table-body");t.innerHTML="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n            <tr data-key="${e.id}">\n                <th scope="row">${e.id}</th>\n                <td>${e.name}</td>\n                <td>${e.email}</td>\n                <td>${e.children?"Есть":"Нет"}</td>\n                <td>\n                    <div class="form-check form-switch">\n                        <input class="form-check-input" type="checkbox" role="switch"\n                            id="form-children" ${e.permissions?"checked":""}>\n                    </div>\n                </td>\n                <td>\n                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">\n                        <button type="button" class="btn btn-warning btn-edit">\n                            <i class="bi-pencil-square"></i>\n                        </button>\n                        <button type="button" class="btn btn-danger btn-remove">\n                            <i class="bi-person-x"></i>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n        `)}))};window.userService=new class{getData(e="http://localhost:3232/users"){return fetch(e).then((e=>e.json()))}sendData(e,t,n="http://localhost:3232/users"){return fetch(n,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()))}},userService.getData().then((t=>e(t))),(()=>{const t=document.querySelector("form"),n=t.querySelector("#form-name"),s=t.querySelector("#form-email"),r=t.querySelector("#form-children");t.addEventListener("submit",(c=>{if(c.preventDefault(),!t.dataset.method){const c={name:n.value,email:s.value,children:r.checked,permissions:!1};userService.sendData("POST",c,"http://localhost:3232/users").then((()=>{userService.getData().then((n=>{e(n),t.reset()}))}))}}))})(),document.getElementById("table-body").addEventListener("click",(t=>{if(t.target.closest(".btn-remove")){const n=t.target.closest("tr").dataset.key;userService.sendData("DELETE",void 0,`http://localhost:3232/users/${n}`).then((t=>{userService.getData().then((t=>{e(t)}))}))}})),document.getElementById("table-body").addEventListener("click",(t=>{if(t.preventDefault(),t.target.closest("input[type=checkbox]")){const n=t.target.closest("tr"),s=n.querySelector("input[type=checkbox]"),r=n.dataset.key;userService.sendData("PATCH",{permissions:s.checked},`http://localhost:3232/users/${r}`).then((t=>{userService.getData().then((t=>{e(t)}))}))}})),(()=>{const t=document.getElementById("table-body"),n=document.querySelector("form"),s=n.querySelector("#form-name"),r=n.querySelector("#form-email"),c=n.querySelector("#form-children");t.addEventListener("click",(e=>{if(e.target.closest(".btn-edit")){const t=e.target.closest("tr").dataset.key;userService.getData(`http://localhost:3232/users/${t}`).then((e=>{s.value=e.name,r.value=e.email,c.checked=e.children,n.dataset.method=t}))}})),n.addEventListener("submit",(t=>{if(t.preventDefault(),n.dataset.method){const t=n.dataset.method,a={name:s.value,email:r.value,children:c.checked,permissions:!1};userService.sendData("PUT",a,`http://localhost:3232/users/${t}`).then((()=>{userService.getData()})).then((t=>{e(t),n.reset(),n.removeAttribute("data-method")}))}}))})(),(()=>{const t=document.getElementById("btn-isChildren"),n=document.getElementById("btn-isPermissions"),s=document.getElementById("btn-isAll");t.addEventListener("click",(()=>{userService.getData("http://localhost:3232/users?children=true").then((t=>{e(t)}))})),n.addEventListener("click",(()=>{userService.getData("http://localhost:3232/users?permissions=true").then((t=>{e(t)}))})),s.addEventListener("click",(()=>{userService.getData().then((t=>{e(t)}))}))})(),(()=>{const t=document.getElementById("sort-is-children");t.style.cursor="pointer";let n=!1;t.addEventListener("click",(()=>{userService.getData("http://localhost:3232/users?_sort=children&_order="+(n?"asc":"desc")).then((t=>e(t))),n=!n}))})(),(()=>{const t=document.getElementById("search-input"),n=((e,t=300)=>{let n;return(...s)=>{clearTimeout(n),n=setTimeout((()=>{e.apply(void 0,s)}),t)}})((()=>{userService.getData(`http://localhost:3232/users?name_like=${t.value}`).then((t=>e(t)))}),500);t.addEventListener("input",n)})()})();