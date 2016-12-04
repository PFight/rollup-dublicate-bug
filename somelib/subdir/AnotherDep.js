import { SomeDep } from "../SomeDep";

export class AnotherDep {	
	foo() {
		var x = new SomeDep();
		x.foo();
	}
}