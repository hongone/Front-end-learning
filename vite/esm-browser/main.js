import { filter } from './node_modules/lodash-es/lodash.js';
const users = [{name: 'tomas', age: 20}, {name: 'peter', age: 30}];
const filteredUsers = filter(users, user => user.age>20  );
console.log(filteredUsers);
console.log('esm browser');