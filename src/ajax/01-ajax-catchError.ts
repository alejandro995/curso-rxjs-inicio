import { catchError, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = (err: AjaxError) => {
    console.warn('error en', err.message);
    return of({})

}

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
).subscribe( users => console.log('usuarios', users));

