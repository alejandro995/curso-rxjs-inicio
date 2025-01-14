import { Observable, Observer } from 'rxjs';

//const  obs$ = Observable.create()


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error), 
    complete: () => console.info('Completado [obs]')

}

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    //const a = undefined;
    //a.nombre = 'Fernando';


    subs.complete();
});

obs$.subscribe(observer);

// 3 argumentos next, error, complete
// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error), 
//     () => console.log('Completado')
// );



