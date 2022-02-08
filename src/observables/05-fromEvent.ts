import { fromEvent } from "rxjs";
/**
 * 
 * Eventos de Dom
 */

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const obs = {
    next: val => console.log('next', val)
}

src1$.subscribe(({x, y}) => {
    console.log(x, y);
});
src2$.subscribe(evento => {
    console.log(evento.key)
});