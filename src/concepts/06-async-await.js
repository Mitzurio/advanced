import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwaitComponent = async( element ) => {
    
    console.log('asyncAwaitComponent');

    const ids = [
    '5d86371fd55e2e2a30fe1ccb',
    '5d86371fd55e2e2a30fe1ccb1',
    '5d86371fd55e2e2a30fe1ccb2'
    ];

    const hero1 = await findHero( ids[0] );
    const hero2 = await findHero( ids[1] );

    try {
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    } catch (error) {
        element.innerHTML = error;
    }
    // console.log(findHero( ids[0] ));

    // findHero( ids[0] )
    //     .then( name => element.innerHTML = name)
    //     .catch( error => element.innerHTML = error);
    

}



const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if (!hero)
        throw `Hero with id ${ id } not found`;

    return hero;
};