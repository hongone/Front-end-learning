module.exports = {
  plugins: {
      'postcss-pxtorem': {
          rootValue: 37.5,
          propList: ['*'],
      },
  },
};
// module.exports = {
//   plugins: {
//       'postcss-pxtorem': {
//           rootValue({ file }){
//             console.log(file, file.indexOf('vant'));
//             return file.indexOf('vant') !== -1 ? 3.75 : 75;
//           },
//           propList: ['*']
//       },
//   },
// };