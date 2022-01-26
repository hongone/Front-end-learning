import { filter } from 'lodash-es';
const users = [{name: 'tomas', age: 20}, {name: 'peter', age: 30}];
const filteredUsers = filter(users, user => user.age>20  );
console.log(filteredUsers);
console.log('esm browser');