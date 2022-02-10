import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    map( ({clientX, clientY}) => ({clientX, clientY})),
    first(e => e.clientY >= 150)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})