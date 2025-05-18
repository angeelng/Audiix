let temp_media0 = new Array (12, 10, 1);
let temp_media1 = new Array (5, 0, 2);
let temp_media2 = new Array (10, 8, 10);
/*
let temp_ciudades = new Array (3);
temp_ciudades [0] = temp_media0;
temp_ciudades [1] = temp_media1;
temp_ciudades [2] = temp_media2;
*/
let temp_ciudades = new Array (temp_media0, temp_media1, temp_media2);

console.log (temp_ciudades);

let N=5;

let matrizN = new Array (N);

for (let i=0; i<N; i++){
    matrizN[i] = new Array (N);
    for (let j=0; j<N; j++){
        matrizN[i][j] = 0;
    }
}

console.log(matrizN);

for (let i=0; i < temp_ciudades.length; i++){
    for (let j=0; j < temp_ciudades[i].length; j++){
        console.log (temp_ciudades[i][j]);
    }
}

var numeros = [
    [12,10,9],
    [1,1,1],
    [4,5,7]
];

let M=8;
let matriz = [];
for (let i=0; i<M; i++){
    matriz [i] = [];
    for (j=0; j<M; j++){
        matriz[i][j] = 0;
    }
}
console.log(matriz)