let values = [0,5,8,1,7,4]
values.sort((v1,v2) => {
  return v1 - v2;
})
console.log(values) //[0, 1, 4, 5, 7, 8] ascending

values.sort((v1,v2) => {
  return v2 - v1;
})
console.log(values) //[8, 7, 5, 4, 1, 0] descending