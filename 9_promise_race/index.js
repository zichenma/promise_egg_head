function resolveAfter(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value)
        }, ms);
    });
}
const promiseA = resolveAfter(1000, 'A');
const promiseB = resolveAfter(2000, 'B');

// where return whoever get resolved or rejected 
// if input array is empty, it will be pending

// const fastestPromise = Promise.race([promiseA, promiseB]);
// fastestPromise.then(value => {
//     console.log(value)
// });

function timeout(ms, promise) {
    let timeoutID;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutID = setTimeout(() => {
            reject(Error(`Operation timed out after ${ms} ms`));
        }, ms)
    })
    return Promise.race([promise, timeoutPromise]).finally(
        () => {
            clearTimeout(timeoutID);
        }
    );
}

const promise = resolveAfter(1000, 'A')

timeout(5000, promise).then(
    value => {
        console.log(value); // 'A' 
    },
    error => {
        console.log(error.message);
    }
)
// get the runing time:
// gtime -f "%e" node index.js