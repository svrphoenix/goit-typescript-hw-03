class Key {
  constructor(private signature: number = Math.random()) {}

  getSiganture(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected tenants: Person[];
  constructor(protected key: Key) {
    this.door = false;
    this.tenants = [];
  }

  abstract openDoor(key: Key): boolean;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): boolean {
    if (key.getSiganture() === this.key.getSiganture()) {
      this.door = true;
    }
    return this.door;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
