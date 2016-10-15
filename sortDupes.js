function sort(array) {
  let set = new Set();
  array.filter((item) => {
    set.has(item) ? false : set.add(item);
  })
  return [...set]
}
