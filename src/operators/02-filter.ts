import { filter, from, fromEvent, map, range } from "rxjs";


const range$ = range(0, 10);

const rangeFilter$ = range$.pipe(
    filter(rangeValue => rangeValue%2 === 1)
)

const rangeFilterIndex$ = range$.pipe(
    filter( (rangeValue, rangeIndex) => {
        return rangeIndex%2 === 1 && rangeIndex !== 1
    } )
)

rangeFilter$.subscribe(rangeFilterSub => console.log('rangeFilterSub', rangeFilterSub));
rangeFilterIndex$.subscribe(rangeFilterIndexSub => console.log('rangeFilterIndexSub', rangeFilterIndexSub));


const apexLegends: Legend[] = [
    {
        type: 'Assault',
        name: 'Wraith'
    },
    {
        type: 'Assault',
        name: 'Bangalore'
    },
    {
        type: 'Assault',
        name: 'Ash'
    },
    {
        type: 'Support',
        name: 'LifeLine'
    },
    {
        type: 'Support',
        name: 'Loba'
    },
    {
        type: 'Recon',
        name: 'Seer'
    },
    {
        type: 'Recon',
        name: 'PathFinder'
    },
    {
        type: 'Tank',
        name: 'Caustic'
    },
]

//Definicion de tipo por medio de una interfaz

interface Legend {
    type: string, 
    name: string
}

const apexLegends$ =  from<Legend[]>(apexLegends);

const apexLegendsAssaultTypeFilter$ = apexLegends$.pipe(
    filter<Legend>(apexLegend => {
        return apexLegend.type === 'Assault' 
    })
)

apexLegendsAssaultTypeFilter$.subscribe(apexLegendTypeFiltered => console.log('Assault Legend:', apexLegendTypeFiltered));


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpOperatorChain$ = keyUp$.pipe(
    map( keyUpEvent => keyUpEvent.code ),
    filter( keyUpKey => keyUpKey === 'Enter')
)

keyUp$.subscribe(keyUpEventSubValue => console.log(keyUpEventSubValue));
keyUpOperatorChain$.subscribe(keyUpEventSubValue => console.log(keyUpEventSubValue));