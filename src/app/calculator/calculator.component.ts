import {
  Component,
  computed,
  ElementRef,
  input,
  Signal,
  signal,
  viewChildren,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  calculated = signal(false)
  previousInput = signal('');
  lastOperation = signal('');
  currrentInput = signal('');
  display = signal('');
  result = signal('0');
  operator = signal('');
  // btn = viewChildren<ElementRef>('btn');

  readableDisplay = computed(() => {
    return this.display;
  });

  appendNumber(number: any) {
    this.currrentInput += number;
    this.display.set(`${this.currrentInput}`);
  }

  addOperation(operation: any) {
    if (this.display() !== '') {
      this.display.update((val) => (val += operation));
      this.lastOperation.set(`${operation}`);
    }
  }

  clearDisplay() {
    this.display.set('');
    this.result.set('')
  }

  addNumber(num: any) {
    this.display.update((val) => (val += num));
  }

  divide() {
    this.addOperation('/');
  }

  multiply() {
    this.addOperation('*');
  }

  subtract() {
    this.addOperation('-');
  }

  add() {
    this.addOperation('+');
  }

  equals() {
    try {
      this.display.update((val) =>
        eval(val.replace('+', '/').replace('x', '*'))

      );

      this.calculated.set(true)
      this.result.set(this.display())
    } catch (error) {}
  }

  deleteChar() {
    this.display.update((val) => val.slice(0, -1));
  }

  addDecimal() {}

  setOperator() {}
  calculate() {}
}

// add(){
//   this.result.update((val) => Number(this.display)  )
// }

// plus(){
//   this.display.update((val) => val + '+')
// }

// minus(){
//   this.display.update((val) => val + '-')
// }

// multiply(){
//   this.display.update((val) => val + "x")
// }

// equal(){}

// one():void{
//   this.display.update((val) => val + '1')
// }
// two():void{
//   this.display.update( (val) => val + '2')
// }
// three():void{
//   this.display.update( (val) => val + '3')
// }
// four():void{
//   this.display.update( (val) => val + '4')
// }
// five():void{
//   this.display.update( (val) => val + '5')
// }

// six():void{
//   this.display.update( (val) => val + '6')
// }

// seven():void{
//   this.display.update( (val) => val + '7')
// }

// eight():void{
//   this.display.update( (val) => val + '8')
// }

// nine():void{
//   this.display.update( (val) => val + '9')
// }

// zero():void{
//   this.display.update( (val) => val + '0')
// }

// reset():void{
//   this.display.set('')
// }
