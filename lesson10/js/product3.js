// Using private properties syntax
'use strict';
class Person {
    #fullname = null;
    constructor(name) {
        this.#fullname = name;
    }

    getName() {
        return this.#fullname;
    }
}

class PersonApp {
    main()
    {
        p1 = new Person("Bob");
        console.log(p1.getName());
        console.log(p1.fullname);
    }
    }
PersonApp.main();
   