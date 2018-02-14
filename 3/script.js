/*const average = (...args) => 
	const result = args.reduce((a,b) =>{return a + b});
	return result/args.length;
};

console.log(average(1,2,3,2)); */

const average = (...args) => (args.reduce((a,b) => a + b ) / args.length );
console.log(average(1,2,3,4));