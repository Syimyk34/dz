


const mass = [1, 2, 3, 4, 5,];
const mass2 = [6, 7, 8, 9, 9, 10,];
const mass3 = [23, 45, 76, 89, 55,];
const mass4 = [65, 87, 32, 9];
const mass5 = [44, 55, 54,  34,];
const mass6 = [...mass,...mass2,...mass3,...mass4,...mass5];
console.log(mass6);


/*
*************************/
const obj = {
    name: "jack",
    last_name:"BarBara",
    height: 196,
    age: 26,
    gender:"male"

}
const obj2 = {
    ...obj,
    family:"none",
    address: "fuchik7/1",
    gmail: "kamchybekov@gmail.com"

}
console.log(obj2);

const button = document.getElementById('btn');
const input =document.getElementById('input');
const container =document.querySelector('.container');
const greet = document.createElement('p');


button.onclick = () => {
    greet.innerText ='Hello ' + input.value;
    container.append(greet);
}