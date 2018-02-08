const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const average = (...args) => {
	const result = args.reduce((a,b) =>{return a + b});
	return result/args.length;
};
console.log(average(...grades));