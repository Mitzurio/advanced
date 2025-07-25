import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwait2Component = async( element ) => {
    
    console.log('asyncAwait2Component');

    console.time('Start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    const[value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        value1: ${value1 } </br>
        value2: ${value2 } </br>
        value3: ${value3 } </br>
    `;

    console.timeEnd('Start');

}

const slowPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Slow Promise');
    }, 2000);

});

const mediumPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Medium Promise');
    }, 1500);

});

const fastPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Fast Promise');
    }, 1000);

});




//     const ids = [
//     '5d86371fd55e2e2a30fe1ccb',
//     '5d86371fd55e2e2a30fe1ccb1',
//     '5d86371fd55e2e2a30fe1ccb2'
//     ];

//     const hero1 = await findHero( ids[0] );
//     const hero2 = await findHero( ids[1] );

//     try {
//         element.innerHTML = `${hero1.name} / ${hero2.name}`;
//     } catch (error) {
//         element.innerHTML = error;
//     }
//     // console.log(findHero( ids[0] ));

//     // findHero( ids[0] )
//     //     .then( name => element.innerHTML = name)
//     //     .catch( error => element.innerHTML = error);
    

// }



// const findHero = async( id ) => {

//     const hero = heroes.find( hero => hero.id === id );
//     if (!hero)
//         throw `Hero with id ${ id } not found`;

//     return hero;
// };