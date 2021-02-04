let arr = [
    { id: 121, name: 'trung anh', age: 25 },
    { id: 122, name: 'hoang nam', age: 26 },
    { id: 123, name: 'nhat hao', age: 29 },
    { id: 124, name: 'nguyen viet', age: 31 },
    { id: 124, name: 'trung anh', age: 31 }
]


let a = arr.filter((items) => items.age > 25);
console.log('ket qua la', a);
// nếu tìm được thì trả kết quả là tất cả object được tìm thấy, nếu không trả về mảng rỗng
// a là mảng , kết quả trả về dưới dạng mảng
let d = arr.find((items) => items.name === 'trung anh');
console.log('kết quả Find là: ', d);
// Find function chỉ tìm ra giá trị đầu tiên phù hợp với điều kiện

let b = arr.findIndex((items) => items.name === 'trung anh');
console.log('kết quả findIndex', b);
// nếu tìm được trả về kết quả là vị trí của object , nếu không trả về -1

// console.log('kết quả b2',b2);
let c = arr.reduce((sum, items) => {
    return sum + items.name + ''
}, '');
console.log(c);
// reduce function từ 1 mảng trả về 1 kết quả
// kết quả có thể là giá trị hoặc chuỗi 
// syntax như sau
let testReduce = arr.reduce((giaTriKhoiTao, items, index) => {
    console.log('index: ', index);
    console.log('items: ', items);
    return giaTriKhoiTao + items.age
}, 0)
console.log(testReduce);
// số 0 là gì trị ban đầu của giaTriKhoiTao


let arrMap = arr.map((items) => {
    let content = '';
    return content += `${items.age} ${items.name}`;
})
console.log(arrMap);
// arr.map()
// map function trả về mảng


const testMap = arr.map((items)=>`<p>${items.name}</p>`)
console.log(testMap);


for(items of testMap){
    console.log(items);
}
// for of duyệt từng phần từ của mảng

for(let items of arr){
    console.log(items);
    console.log(items.name);
}

for(let items in arr ){
    console.log(items);
}
// for in duyệt vị trí từng phần từ trong mảng , kết quả items là giá trị của phần tử


console.log('test kết quả',arr[1].name);
