import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncComponent = ( element ) => {
    
    const ids = [
    '5d86371fd55e2e2a30fe1ccb',
    '5d86371fd55e2e2a30fe1ccb1',
    '5d86371fd55e2e2a30fe1ccb2'
    ];

    console.log(findHero( ids[0] ));

    findHero( ids[0] )
        .then( name => element.innerHTML = name)
        .catch( error => element.innerHTML = error);
    

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */

const findHero = async( id ) => {
    
    const hero = heroes.find( hero => hero.id === id );
    if (!hero)
        throw `Hero with id ${ id } not found`;

    return hero.name;

}

