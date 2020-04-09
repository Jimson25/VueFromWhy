// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 5000)
// }).then(() => {
//   console.log('hello world\n');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 5000)
//   }).then(() => {
//     console.log('hello java\n');
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject('error\n');
//       }, 5000)
//     }).then(res => {
//       console.log(res);
//     }, err => {
//       console.log(err);
//     })
//   })
// })


new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('something');
    if (true) {
      // throw 'error';
    }
  }, 1000)
}).then(res => {
  console.log('success');
}, err => {
  console.log('fail');
})
