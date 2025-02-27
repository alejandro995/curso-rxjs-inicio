import { of, take, tap } from "rxjs";

const numeros$ = of(1,2,3,4,5).pipe(
    tap(console.log)
);

numeros$.pipe(
    tap(console.log),
    take(3)
).subscribe(
    {
        next: val => console.log('next:', val),
        complete: () => console.log('complete'),
    }
)