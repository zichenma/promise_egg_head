// const promise = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove();
//         // reject();
//     }, 1000);
// });

// promise.then(
//     function() {
//         console.log("Fullfilled")
//     },
//     function() {
//         console.log("Rejected")
//     }
// )


function sleep(ms) {
    return  new Promise(resolve => {
        // throw new Error("...")
        setTimeout(resolve, ms)
    });
 }
 
 console.log("Right away");

sleep(1000)
.then(() => {
    console.log("After 1s")
})
.then(() => sleep(1000))
.then(() => {
    console.log("After 2s")
})
// .catch(() =>{
//     console.log("Rejected")
// })