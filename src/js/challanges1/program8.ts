// Array of BIG O 
// Arrays 
// let names = ['Java', 'Script', 'Machine'];
// let common = [true, {}, 1, [], 'awesome']
/**
 * When to use Array 
 * When you need order 
 * list and doubly linked list that sill encode order 
 * There is its a linear it's a list structure where there's each element is in a particular spot and 
 * they're all connected in an order , but they sometimes can perform better than arrays 
 * depending on what you need
 * SO array are not the only ordered data strcture on Earth, they're 
 * just the onle one that we get for free in java script 
 * 
 * Anyways, length lists come later , so when you need an order you 
 * can use an array of course , but often
 * 
 * when youneed order 
 * whne you need fast
 * access/insertion and removal ( sort of )
 */

/**
 * Big O of arrays 
 * insertion - it depends 
 * Removal - It depend 
 * Searching    O(N)
 * Access O(1)
 * let see what we mean by that
 *
 */


/**
 * Big O of Array Operations
 * push = O(1)
 * pop = O(1)
 * shif = O(n)
 * unshift = O(n)
 * concat = O(n)
 * slice = O(n)
 * splice = O(n)
 * sort = O(n log n)
 * forEach/map/filter/reduce = O(n)
 * 
 */

var ar1 = ['a', 'b', 'c', 'd'];
var ar2 = ['e', 'f', 'g', 'h'];

var combine = ar1.concat(ar2);
console.log(combine);


//Slice 
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let new_animals = animals.slice(2, 4);
console.log(new_animals);









