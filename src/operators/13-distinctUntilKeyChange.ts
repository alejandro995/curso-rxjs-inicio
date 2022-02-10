import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'Wraith'
},
{
    nombre: 'Pathfinder'
},
{
    nombre: 'Loba'
},
{
    nombre: 'Wraith'
},
{
    nombre: 'Wraith'
},
{
    nombre: 'Pathfinder'
},
{
    nombre: 'BloodHound'
},
{
    nombre: 'BloodHound'
},
{
    nombre: 'Revenant'
},
{
    nombre: 'Watson'
},
{
    nombre: 'Pathfinder'
},
{
    nombre: 'BloodHound'
}
]

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)