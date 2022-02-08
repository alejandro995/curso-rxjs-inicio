
import { count, Observable, Observer, Subscriber } from 'rxjs';

//const  obs$ = Observable.create()


const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error), 
    complete: () => console.info('Completado')

}


const intervalo$ = new Observable<number>(subs => {
    //Crear un contador

    let count = 0

    const interval = setInterval( () => {
        count++;
        subs.next(count);
        console.log(count);
    
    }, 1000);

    setTimeout(() => {
        subs.complete()
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})

const subscription1 =  intervalo$.subscribe( observer);
const subscription2 =  intervalo$.subscribe( observer);
const subscription3 =  intervalo$.subscribe( observer);

subscription1.add( subscription2 );
subscription1.add( subscription3 );

setTimeout(() =>{
    subscription1.unsubscribe()
}, 3000)

