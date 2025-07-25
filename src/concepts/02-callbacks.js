import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const callbacksComponent = ( element ) => {

      const id = '5d86371fd55e2e2a30fe1cc3';
      findHero(id, (error, hero) => {
        //element.innerHTML = hero?.name || 'There is no Hero.';
        if (error ) {
            element.innerHTML = error;
            return;
        }
        
        element.innerHTML = hero.name;
        
      })

}

/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object) => void } callbacks 
 */

const findHero = (id, callbacks) => {

    const hero = heroes.find( hero => hero.id === id);

    if (!hero){
        callbacks(`Hero with id ${ id } not found`);
        return;
    }

    callbacks( null, hero );
}

