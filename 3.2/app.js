let values = [0,5,8,1,7,4]
values.sort((v1,v2) => {
  return v1 - v2;
})
console.log(values) //[0, 1, 4, 5, 7, 8] ascending

values.sort((v1,v2) => {
  return v2 - v1;
})
console.log(values) //[8, 7, 5, 4, 1, 0] descending

//sorting a collection of unique functions
let ninja = function(){};
ninja.name = "Scamander"
let store = {
  nextId: 1,
  cache: {},
  add: function(fn){
    if(!fn.id){
      fn.id = this.nextId ++
      this.cache[fn.id] = fn;
      console.log(this.nextId)
      return true
      
    }
  }
};
assert(store.add(ninja),"function was safely added.")
assert(!store.add(ninja),"but it was only added once")



function assert(condition,msg){
  if(condition === true){
    console.log(msg)
  }
}