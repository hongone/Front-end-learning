
module.exports = {

  plugins: [
    require('precss'),
    require('autoprefixer')({
      'overrideBrowserslist': ['> 1%', 'last 2 versions']
    })
  ]
}
// {
   
//   'postcss-preset-env': {
//     stage: 0,
//     features: {
//       'nesting-rules': true
//     }
//   }
// }