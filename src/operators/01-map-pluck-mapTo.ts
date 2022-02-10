import { fromEvent, map, mapTo, pluck, range } from "rxjs";


range(1, 5).pipe(
    map<number, number>(rangeVal => rangeVal * 10)
    ).subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyUpMap$ = keyUp$.pipe
(map<KeyboardEvent, string>( keyUpevent => keyUpevent.code));

const keyUpPluck$ = keyUp$.pipe
                            (pluck<KeyboardEvent>('target', 'baseURI'))

const keyUpMapTo$ = keyUp$.pipe
                            (mapTo('tecla presionada'))

keyUp$.subscribe( keyUpVal => console.log('keyUpMapSubscrition', keyUpVal) );
keyUpMap$.subscribe( keyUpVal => console.log('keyUpMapSubscrition', keyUpVal) );
keyUpPluck$.subscribe( keyUpVal => console.log('keyUpPluckSubscrition', keyUpVal) );
keyUpMapTo$.subscribe( keyUpVal => console.log('keyUpMapToSubscrition', keyUpVal) );