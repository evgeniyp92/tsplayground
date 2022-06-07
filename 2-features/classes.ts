class Vehicle {
  // shorthand to init instance variables
  constructor(public color: string) {}

  protected honk(): void {
    console.log(`Beep`);
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Machine extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // when extending we can choose to override the parent class methods
  private drive(): void {
    console.log(`Vroom Vroom`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vroomer = new Machine(4, 'red');
vroomer.startDrivingProcess();
