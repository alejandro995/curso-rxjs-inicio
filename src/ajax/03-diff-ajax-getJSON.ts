import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

//const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.org/delsay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
}).pipe(
    catchError(manejaError)
);

const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

const obs3$ = ajax.getJSON(url);

const obs4$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
)

obs3$.subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en subs', err),
    complete: () => console.log('complete')
})

obs$.subscribe(data => console.log('getJson:', data));
obs2$.subscribe(data => console.log('ajax:', data));
obs4$.subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en subs', err),
    complete: () => console.log('complete')
});