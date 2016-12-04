import { SomeDep } from "somelib/SomeDep";
import 'somelib/subdir/AnotherDep';

var x = new SomeDep();
x.foo();
var x2 = new AnotherDep();
x2.foo();