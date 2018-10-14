// const hello = ()=> {

//     return {
//         method:'GET',
//         path:'/hello',
//         handler:function(request,h) {

//             return'hello world';
//         }
//     };
// }
const hello = {
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
};
module.exports = [hello];