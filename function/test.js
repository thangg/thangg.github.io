function bai1(x) {
	
	document.write("<h3>Bài tập 1</h3");

	return x*x;
}

function bai2(a,b,c) {
	
	document.write("<h3>Bài tập 2</h3");

	x = (3*a+2*b-c);

	return x*x;
}

function bai3(string) {

	return string.slice(0,10).concat('...');

	console.log(bai3("1 2 3 4 5 6 78 9 4 548 5 79 4 87 6 8"))
}