import { interval, timer } from "rxjs"


const obs = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
}

const hoyEn5 = new Date(); //Ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const interval$ = interval(1000);

const timer$ = timer(hoyEn5);

// const interval$ = interval(1000);
// const timer$ = timer(2000);


console.log('Inicio');
//interval$.subscribe(obs);
timer$.subscribe(obs);
console.log('Fin');