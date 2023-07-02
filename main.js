/* let nombre = prompt()


const saludar =(nombre) => {
    console.log("Hola" + " " + nombre)
}

saludar(nombrefacundo) */

const maquina1=(num)=>{
    resultado=num % 2;
    if(resultado===1){
        console.log("Tu número, es impar.")
    }
    else {
        console.log("Tu número, es par.")
    }
}

maquina1(8)

const maquina2=(a, b)=>{
    if(a>b){
        console.log(
            "El número mayor es" + " " + a
        )
    }

    else if(b>a){
        console.log( "El número mayor es"+" "+b)
    }

    else if(a==b){
        console.log("Los números son iguales")
    }
}

maquina2(40,40)

const maquina3=(num)=>{
    resultado=num % 5;
    if(resultado===0){
        console.log("El número"+" "+num+" "+"es multiplo de cinco.")
    }
    else{
        console.log("El número"+" "+num+" "+"no es múltiplo de cinco")
    }
}

maquina3("11")

const maquina4=(num)=>{
    for (let i=0; i <=num; i++){
        console.log(i);
    }
}

maquina4(3)

maquina5=(palabra, num)=>{
    for (let i=1; i <=num; i++){
        console.log(palabra)
    }
}

maquina5("pozole",10)

maquina6=(arr) =>{
    for(let i=0; i < arr.length; i++){
        console.log(arr[i])
    }
}

const chiflados = ["Larry", "Moe", "Curley"]

maquina6(chiflados)


let numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
maquina7=(numeros)=>{
    for(let i=0; i < numeros.length; i++){
        if (numeros[i]==4){
            continue
        }
        console.log(numeros[i])
    }
}

    maquina7(numeros)


    maquina8=(numeros, num)=>{
        for(i=0; i < numeros.length; i++){
            resultado= num * numeros[i];
            console.log (resultado)
        }
    }

maquina8(numeros, 10)