import 'reflect-metadata';
import { IsDefined, IsNumber, IsString, validate } from 'class-validator';

export class Test {
  @IsDefined()
  @IsNumber()
  public foo: number;

  @IsString()
  public bar?: string;

  constructor(foo: number, bar?: string) {
    this.foo = foo;
    this.bar = bar;
  }
}

const x: any = {
  bar: 'Hello World',
};

const t: Test = x as Test;

validate(t).then((errors) => {
  if (errors.length > 0) {
    console.log(errors);
  }
});

console.log(t);
console.log(t.foo);
