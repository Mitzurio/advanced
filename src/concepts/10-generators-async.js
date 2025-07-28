import { ssrModuleExportsKey } from "vite/module-runner";
import { heroes } from "../data/heroes";

export const generatorsAsyncComponent = async( element ) => {

    const heroGenerator = getHeroGenerator();
    let isFinish = false;

 do {
        const { value, done } = await heroGenerator.next();
        isFinish = done;
        element.innerHTML = value;
        
    } while ( !isFinish );

}

// async function* getHeroGenerator()  {
    
//     for ( const hero of heroes ) {
//         await sleep();
//         yield hero.name;
//     }

//     return 'no hay más';
// }

// const sleep = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 500);
//     })
// }

async function* getHeroGenerator() {
    
    for ( const hero of heroes ) {
        await sleep();
        yield hero.name;
    }

    return 'no hay más';
}


const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}