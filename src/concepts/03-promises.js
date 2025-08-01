import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */


export const promiseComponent = ( element ) => {
    

    const renderHero = ( hero ) => {

        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h2>Error:</h2>
            <h3>${ error }</h3>
        `;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>
        `;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371f97c29d020f1e1f6d';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ]).then( ([hero1, hero2]) => renderTwoHeroes( hero1, hero2) )
    .catch( renderError );

    // findHero( id1 )
    //     .then( (hero) => renderHero(hero) );     
    
    // findHero( id1 )
    //     .then( renderHero )
    //     .catch( renderError );

    // Forma 2
    // let hero1;
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeroes( hero1, hero2 );
    //     })
    //     .catch( renderError );

    // Forma 1
    // findHero( id1 )
    //     .then( (hero1) => {
  
    //         findHero( id2 )
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //             })
    //             .catch( renderError );
    //     })
    //     .catch( renderError );
    



}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */

const findHero = ( id ) => {
  
    return new Promise( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);

    });


 
}

