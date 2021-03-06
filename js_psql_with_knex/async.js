// setTimeout();
// Takes in 2 arguments
// 1) a callback
// 2) a timeout (number) in ms

// const delay = 3000;


// function callback() {
//   console.log('a: callback executed');
// }

// console.log('b: before setTimeout');
// // settimeout is a async function it calls the provided callback after doing something asynchronously
// setTimeout(callback, delay);
// console.log('c: after setTimeout');

// setInterval()
// accepts 2 arguments
// 1) callback
// 2) delay

// after delay it will invoke the callback repeatedly

// let i = 0;
// const timerA = setInterval(() => {
//   if (i === 5) {
//     // clearInterval is used to stop a timer (setInterval)
//     clearInterval(timerA);
//   }
//   console.log(i);
//   i++;
// }, 1000);

// create  a stopWatch function()
// a number as an argument... it will count down from that argument
function stopWatch(n) {
  const a = setInterval(() => {
    n--;
    if (n === 0) {
      clearInterval(a);
    }
    console.log(n);
  }, 1000);
}

stopWatch(5);

