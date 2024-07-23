export const viewDelay = 0;

export function wait(ms){
    const start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}
