function sum(array){

	var sum = 0

	console.log(array + "\n");

	for (	var i = 0; i < array.length; sum += array[i++]);

	return sum;
}


function range(begin, end, step) {

	var array = [];

	if (step == undefined) step = 1;

	if ((begin < end) && (step > 0))
		for (var current = begin; current <= end; current += step)
			array.push(current);

	if ((begin > end) && (step < 0))
		for (var current = begin; current >= end; current += step)
			array.push(current);

	return array;
}

function range1(begin, end, step) {

  console.log("begin" + ":" + "end" + ":" + "step" + "\n");
  console.log(begin + " " + end + " " + step + "\n");

	var array = [];
	if (step == undefined) step = 1;

	if ((begin < end) && (step > 0)) continueMovement = function(x,y){return (x<=y);};
	if ((begin > end) && (step < 0)) continueMovement = function(x,y){return (x>=y);};

  if ( continueMovement != undefined)
		for (var current = begin; continueMovement(current,end) ; current += step)
			array.push(current);

	return array;
}

function printListLoop(list) {
	var currentNode = list;
	var array = [];
	console.log("Начало списка.\n");
	while( (currentNode != null) || (currentNode != undefined) ) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
	}
	console.log("Конец списка.\n");
	return array;
}

function printListLoopForward(list) {
  console.log( printListLoop(list) + "\n");
}

function printListLoopBackward(list) {
  console.log( printListLoop(list).reverse() + "\n");
}

function printListRecursiveBackward(currentNode) {

	if ( (currentNode == null) || (currentNode == undefined) )
		return null;
 	printListRecursiveBackward(currentNode.next);
	console.log(currentNode.value);
}

function printListRecursiveForward(currentNode) {

	if ( (currentNode == null) || (currentNode == undefined) )
		return null;
	console.log(currentNode.value);
	printListRecursiveForward(currentNode.next);
}

function deepEqual(a, b) {

	console.log("investigating arg1- " + a + " ");
	for (key in a ) console.log("key-" + key + "    " + "a[" + key + "]-" + a[key] + "\n");

	console.log("investigating arg2- " + b + " ");
	for (key in b ) console.log("key-" + key + "    " + "b[" + key + "]-" + b[key] + "\n");
	console.log("\n\n\n");

	if(isObject(a) && isObject(b)){

		if( isNull(a) || isNull(b)) {
	  	console.log("One of arg (or both) is null \n");
			return ( a === b);
		}

		for (key in a) {
			if (key in b){
				return deepEqual(a[key], b[key]);
			}
		}
	}

	console.log("One of arg is not object(or both)\n");
	return (a === b);
}

function isNull(x) {
	return (x == null);
}

function isObject(x) {
	return (typeof(x) == "object");
}