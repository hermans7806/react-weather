// function getTempCallback (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempCallback('Singapore').then(function (temp) {
//   console.log('success', temp);
// }, function (err) {
//   console.log('error', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Ngaco lo!');
    }
  });
}

addPromise('a', 7).then(function (sum) {
  console.log('sum = ', sum);
}, function (err) {
  console.log(err);
});
