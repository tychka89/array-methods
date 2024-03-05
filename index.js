['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'].forEach((elem) => console.log(`Привет, ${elem}`));


let arr = [1, 2, 3, 4, 5].map(item => item * 10);
console.log(arr);

let arr2 = [5, 12, 8, 130, 44].filter(item => item > 10);
console.log(arr2);

const arr3 = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}];
const result = arr3.filter(p => p.age > 18).map(p => `${p.name}(${p.age} лет)`);
console.log(result);

const arr4 = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
const result2 = arr4.reduce((sum, current) => sum + current.price * current.quantity, 0);
console.log(result2);
