function parity(n) {
  var i = 0;
  do {
  	console.log( i + " - " + printParity(i) );
  } while (++i <= n);
};

function printParity(n) {
	if (n == 0) return "это ноль";
	return isEven(n) ? "четное число" : "нечетное число";
};

function isEven(number) {
  return number % 2 == 0;
};

function firstNaturalN(n){
	for ( var i = 0; i <= n; console.log( i++ + "\n" ) );
};

function pyramid(n){
	for(var i = 1; i <= n; ++i, console.log( makeLineOfChars(i, "*") + "\n" ) );
};

function makeLineOfChars(count, symbol) {
	var line = "";
	for (var i = 1; i < count; ++i, line += symbol);
	return line;
};

/*
Простое число — натуральное (целое положительное) число, 
имеющее ровно два различных натуральных делителя — единицу и самого себя.

Алгоритм поиска простых чисел "Решето Сундарама"

Алгоритм работает с нечётными натуральными числами большими единицы,
представленными в виде 2m+1, где m является натуральным числом.

Если число 2m+1 является составным, то оно представляется в виде произведения
двух нечётных чисел больших единицы, то есть:

2m+1 = (2i+1)(2j+1)

где i и j — натуральные числа, что также равносильно соотношению:

m = 2ij+i+j.

Таким образом, если из ряда натуральных чисел исключить все числа вида 
2ij + i + j, 1 <= i <= j, то для каждого из оставшихся чисел m число 2m+1 обязано быть простым.
И, наоборот, если число 2m+1 является простым, то число m невозможно представить в виде 2ij+i+j и,
таким образом, m не будет исключено в процессе работы алгоритма.
*/
function primes(number){
	var n = Math.floor( (number - 1) / 2 );
	var seedOfPrimes = new Array(n + 1);

  // в i-ом элемнте массва seedOfPrimes содержится i-ое натуральное число
	for (var i = 1; i < seedOfPrimes.length; seedOfPrimes[i++] = true);

  // вычеркиваем из массива числа вида i+j+2*i*j <= n
  var i = j = 1;
  while (2 * i * j + i + j <= n){
  	while ( j <= (n - 1)/(2 * i + 1) ){

			seedOfPrimes[i + j + 2 * i * j] = false;

			j++;
  	}
  	i++;
  	j = 1;
  }

	/*
	  Алгоритм работает с нечётными натуральными числами большими единицы,
	  представленными в виде 2m+1, где m является натуральным числом.
	  (то есть начинает прореживать начиная с 3)
	 */
	var primeNumbers = [2];
	for (var i = 1; i < seedOfPrimes.length; i++) {
		if (seedOfPrimes[i] == true) {
			primeNumbers.push(2 * i + 1);
		}
	}

	return primeNumbers;
};
