
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const enviromentsComponent = ( element ) => {
    const html = `
        Dev: ${import.meta.env.DEV}
    `;

    element.innerHTML = html;

}