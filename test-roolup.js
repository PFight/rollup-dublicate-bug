(function () {
'use strict';

class SomeDep {
	foo() {
		console.info("SomeDep");
	}
}

class SomeDep$1 {
	foo() {
		console.info("SomeDep");
	}
}

var x = new SomeDep();
x.foo();
var x2 = new AnotherDep();
x2.foo();

}());
