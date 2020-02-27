Symbol.asyncIterator = Symbol.asyncIterator || Symbol('asyncIterator');

const delay = ms => new Promise(resolve => {
    setTimeout(resolve, ms);
})

async function* someGenerator() {
    await delay(1000);
    yield 1;
    await delay(1000);
    yield 2;
    await delay(1000);
    yield 3;
}

// async function main() {
//     for await (const value of someGenerator()) {
//         console.log(value);
//     }
// }

async function main() {
    const generator = someGenerator();
    while (true) {
        // const res = await generator.next();
        // console.log(res); // {value: 1, done: false}
        const {value, done}  = await generator.next();
        if (done) {
            break;
        }
        console.log(value);
    }
}

main();