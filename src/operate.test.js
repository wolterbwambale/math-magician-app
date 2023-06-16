import operate from './logic/operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const result = operate('10', '5', '+');
    expect(result).toMatchSnapshot();
  });

  it('should perform subtraction correctly', () => {
    const result = operate('10', '5', '-');
    expect(result).toMatchSnapshot();
  });

  it('should perform multiplication correctly', () => {
    const result = operate('10', '5', 'x');
    expect(result).toMatchSnapshot();
  });

  it('should perform division correctly', () => {
    const result = operate('10', '5', '÷');
    expect(result).toMatchSnapshot();
  });

  it('should handle division by zero', () => {
    const result = operate('10', '0', '÷');
    expect(result).toMatchSnapshot();
  });

  it('should perform modulo correctly', () => {
    const result = operate('10', '5', '%');
    expect(result).toMatchSnapshot();
  });

  it('should handle modulo with zero divisor', () => {
    const result = operate('10', '0', '%');
    expect(result).toMatchSnapshot();
  });
});
