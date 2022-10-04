let arr = ['m','i','k','e'];

const recorte = (arr) =>{
    let recorta = arr.pop();
     arr.pop();
     arr.pop();
    return arr;
}



console.log(recorte(arr));

//practicando shift
const arre = ['m','i','k','e'];
const recortaPrimera = (arr) =>{
    arr.unshift('M');
    arr.unshift('M');
    arr.shift();
    arr.pop();
    return arr;
    
}
console.log(recortaPrimera(arre));

//practicing slice

let arreglito = [1,2,3,4,5,6,7,8,9,0];

const recorta = (arr) =>{
    arr.slice(3,4);
    return arr;
}

console.log(recorta(arreglito));


/********************************************* */
// Using slice, create newCar from myCar.
const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
const newCar = myCar.slice(0, 2);
console.log('myCar = ', myCar);



/**************************************************** */

const months = ['Jan', 'March', 'April', 'June'];

months.splice(2,1);

console.log(months);
/************************************************ */
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];


console.log(myFish.splice(2,0,'guitarra','loro'));


/********************************* */
let personas = [
    {id:'p1', nombre:'Luis', estatus:true},
    {id:'p2', nombre:'Pedro', estatus:true},
    {id:'p3', nombre:'Emmanuel', estatus:true},
   ];

const eliminar = 'p2';

const index = personas.findIndex(el => el.id === eliminar);

 personas.splice(index,1);
 console.log(personas);
 /************************************* */
 








