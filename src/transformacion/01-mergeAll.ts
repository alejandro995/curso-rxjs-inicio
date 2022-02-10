import { debounceTime, fromEvent, map, mergeAll, Observable, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GitHubUser } from "../interfaces/github-user.interface";
import { GitHubUsersResp } from "../interfaces/github-users.interface";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//Helpers

const monstrarUsuarios = (usuarios: GitHubUser[])=>{
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver Pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.append(li);


    }
}

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(kEvent => kEvent?.target?.['value']),
    map<string, Observable<GitHubUsersResp>>( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
    mergeAll<Observable<GitHubUsersResp>>(),
    map<GitHubUsersResp, GitHubUser[]>(userObs => userObs.items)    
).subscribe(monstrarUsuarios);