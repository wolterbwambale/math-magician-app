import calculate from './logic/calculate';
import operate from './logic/operate';

describe('calculate', () => {
  it('should return an object with total, next, and operation set to null when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toMatchSnapshot();
  });

  it('should return an empty object when buttonName is "0" and obj.next is "0"', () => {
    const result = calculate({ next: '0' }, '0');
    expect(result).toMatchSnapshot();
  });

  it('should concatenate the buttonName to obj.next when buttonName is a number and obj.operation exists', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '2';
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });

  it('should append a decimal point to obj.next when buttonName is "." and obj.next does not already include a decimal point', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: null,
    };
    const result = calculate(obj, '.');
    expect(result).toMatchSnapshot();
  });

  it('should return obj when buttonName is "." and obj.next already includes a decimal point', () => {
    const obj = {
      total: '2',
      next: '3.',
      operation: null,
    };
    const result = calculate(obj, '.');
    expect(result).toMatchSnapshot();
  });

  it('should set obj.next to "0." when buttonName is "." and obj.next is null and obj.operation exists', () => {
    const obj = {
      total: '5',
      next: null,
      operation: '+',
    };
    const result = calculate(obj, '.');
    expect(result).toMatchSnapshot();
  });

  it('should return an empty object when buttonName is "=" and obj.next and obj.operation are both null', () => {
    const obj = {
      total: '5',
      next: null,
      operation: null,
    };
    const result = calculate(obj, '=');
    expect(result).toMatchSnapshot();
  });

  it('should return the result of the operation when buttonName is "=" and obj.next and obj.operation exist', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    operate('5', '3', '+');
    const result = calculate(obj, '=');
    expect(result).toMatchSnapshot();
  });

  it('should negate obj.next when buttonName is "+/-" and obj.next exists', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const result = calculate(obj, '+/-');
    expect(result).toMatchSnapshot();
  });

  it('should negate obj.total when buttonName is "+/-" and obj.total exists', () => {
    const obj = {
      total: '5',
      next: null,
      operation: null,
    };
    const result = calculate(obj, '+/-');
    expect(result).toMatchSnapshot();
  });

  it('should return an empty object when buttonName is "+/-" and both obj.next and obj.total are null', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, '+/-');
    expect(result).toMatchSnapshot();
  });

  it('should update obj.operation to buttonName when buttonName is an operation and obj.next is null and obj.total exists', () => {
    const obj = {
      total: '5',
      next: null,
      operation: null,
    };
    const result = calculate(obj, '+');
    expect(result).toMatchSnapshot();
  });

  it('should return the result of the operation and update obj.operation to buttonName when buttonName is an operation and obj.total, obj.next, and obj.operation all exist', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '-',
    };
    const result = calculate(obj, '+');
    expect(result).toMatchSnapshot();
  });

  it('should set obj.total to obj.next, obj.next to null, and obj.operation to buttonName when buttonName is an operation and obj.next exists', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    const result = calculate(obj, '*');
    expect(result).toMatchSnapshot();
  });
});
