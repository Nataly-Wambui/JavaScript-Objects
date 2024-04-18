// Question 1
const people = [
    {name:'Alice', age:17},
    {name:'Eunice', age:22},
    {name:'Charlie', age:14},
    {name:'Max', age:19},
];

function adults(people){
    let adult= people.filter(person => person.age >= 18).map(person => person.name);
    return adult;
}
console.log(adults(people));


// Question 2
const products = [
    {name:'Laptop', price:1200, category:'Electronics'},
    {name:'Shirt', price:25, category:'Clothing'},
    {name:'Headphones', price:80, category:'Electronics'},
    {name:'Shoes', price:60, category:'Clothing'},
];
function groupByCategory(products){
    let product = Object.groupBy(products, commodity => commodity.category);
    return product
}
console.log(groupByCategory(products));


// Question 3
const students = [
    {name:'John', scores:[90,80,85]},
    {name:'Jane', scores:[95,92,88]},
    {name:'Jim', scores:[70,80,75]},
    {name:'Jill', scores:[85,90,84]},
];
function studentsScore(students){
    return students.filter(student => {
        let averageScore = student.scores.reduce((acc, curr) => acc+curr,) / student.scores.length;
        return averageScore >=85;
    }).map(student => student.name);
}
console.log(studentsScore(students));


// Question 4
const car = {
    make:'Ford',
    model:'Ranger',
    year: 2023,
    displayInfo:function(){
        console.log(`Make: ${this.make}, Model:${this.model}, Year:${this.year}`);
    },
};

function carAge(car){
    car['age'] = 2024-car.year
    console.log(car)
}
carAge(car)





