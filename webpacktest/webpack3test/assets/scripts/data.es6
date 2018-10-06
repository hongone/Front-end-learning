const m = new Map();
m.set('data','Index init');
export const test = function(){
    console.log('test treeShaking');
}
export const data = m.get('data');