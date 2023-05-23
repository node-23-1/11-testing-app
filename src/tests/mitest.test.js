
const multiply = (a, b) => a * b;

const average = (a, b, c) => {
    return (a + b + c) / 3;
}

const convert = (celsius) => {
    return celsius * 9/5 + 32;
}


test('multiplicar 3*5 debe retornar 15', () => {
    const result = multiply(3, 5);
    expect(result).toBe(15);
})

test('promedio de 5 10 y 15 debe retornar 10', () => {
    const result = average(5, 10, 15);
    expect(result).toBe(10);
})

test('convertir 20 grados celsius retorna 68 fahrenheit', () => {
    expect(convert(20)).toBe(68);
})
