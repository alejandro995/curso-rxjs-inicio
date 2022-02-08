import {of} from 'rxjs'


const obs$ = of(1,2,3,4,5,6);

console.log('Inicio del Obs$');
obs$.subscribe( next => console.log('next', next),
null, () => console.log('Terminos la secuencia'));
console.log('Fin del Obs$');