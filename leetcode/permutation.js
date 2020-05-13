function permutation(str) {
  const result = [];
  if (str) {
    const queue = str.split('');
    permutationCore(result, queue);
  }

  result.sort();
  return [...new Set(result)]

}

function permutationCore(result, queue, temp = '', current = '') {
  current += temp;
  if (queue.length === 0) {
    result.push(current);
    return;
  }
  for (let i = 0; i < queue.length; i++) {
    temp = queue.shift();
    permutationCore(result, queue, temp, current);
    queue.push(temp);
  }

}