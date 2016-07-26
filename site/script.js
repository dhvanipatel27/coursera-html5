var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstname = "Mark";
company.ceo.favcolor = "blue";
console.log("company CEO name is:" + company.ceo.firstname);
console.log(company["name"]);
company["$stock of company"] = 110;
console.log("stoke price is: " +company["$stoke of company"]);

//better way
var facebook = {
	name: "Facebook",
	ceo: {
		firstname: "Maerk",
		favcolor: "blue"
	},
	"stock of company":110;
};

console.log(facebook);
console.log(facebook.ceo.firstname);

//functions
//functn s nothing more and object
function mul(x,y) {
	return x * y;
}
console.log(mul(5,3));
mul.version = "v.1.0.0";
console.log(mul.version);

function test() {
	console.log(this);
	this.myName="Dhvani";
}
test(window.myName);

// fun constructor-- cant return anything 

function Circle(radius) {
	this.radius = radius;
	//console.log(this);
}

var myCircle = new Circle(10);
console.log(myCircle);