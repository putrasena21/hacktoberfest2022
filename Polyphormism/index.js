class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    introduce() {
        return `Hello, my name is ${this.name}`;
    }
    work() {
        return `${this.constructor.name}: Working!`;
    }
}

const PublicServer = Base => class extends Base {
    save() {
        return 'SFX: Thank you!';
    }
};

const Military = Base => class extends Base {
    shoot() {
        return "DOR!";
    }
};

class Doctor extends PublicServer(Human) {
    constructor(props) {
        super(props);
    }

    work() {
        return super.work() + "\n" + // dari class Human
            super.save();            // dari helper PublicServer
    }
}

class Police extends PublicServer(Military(Human)) {
    static workplace = "Police Station";

    constructor(props) {
        super(props);
        this.rank = props.rank;
    }

    work() {
        return super.work() + "\n" +
            super.shoot() + "\n" +
            super.save();
    }
}

class Army extends PublicServer(Military(Human)) {
    static workplace = "Police Station";

    constructor(props) {
        super(props);
        this.rank = props.rank;
    }

    work() {
        return super.work() + "\n" +
            super.shoot() + "\n" +
            super.save();
    }
}

class Writer extends Human {
    work() {
        return super.work() + "\n" +
            "Write books";
    }
}

const Wiranto = new Police({
    name: "Wiranto",
    address: "unknown",
    rank: "General"
});

const Prabowo = new Army({
    name: "Prabowo",
    addres: "unknown",
    rank: "General"
});

const Boyke = new Doctor({
    name: "Boyke",
    addres: "jakarta"
});

const Dee = new Writer({
    name: "Dee",
    address: "bandung"
});

console.log(Wiranto.shoot());
console.log(Prabowo.shoot());

console.log(Wiranto.save());
console.log(Prabowo.save());
console.log(Boyke.save());

console.log(Wiranto.work());
console.log(Prabowo.work());
console.log(Boyke.work());
console.log(Dee.work());
