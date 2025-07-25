

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseRaceComponent = ( element ) => {
    
    console.log('promiseRaceComponent');

    const renderValue = ( value ) => {
        element.innerHTML = value;
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

    Promise.race([
        slowPromise(),
        mediumPromise(), 
        fastPromise(), 
        slowPromise(), 
        fastPromise(),
    ]).then( renderValue );



}