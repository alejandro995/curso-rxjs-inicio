import { count, Observable, Observer } from 'rxjs';

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
    
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo completado');
    }
})

const subscription1 =  intervalo$.subscribe( num => console.log('Num:', num));
const subscription2 =  intervalo$.subscribe( num => console.log('Num:', num));
const subscription3 =  intervalo$.subscribe( num => console.log('Num:', num));

setTimeout(() =>{
    subscription1.unsubscribe()
    subscription2.unsubscribe()
    subscription3.unsubscribe()
}, 3000)



