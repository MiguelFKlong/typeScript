//Basic Types
let myTypeString: string = "Hola Mundo";
let myTypeNumber: number = 20;
let myTypeBoolean: boolean = true;

// ARRAY

let arrayNumber: number[] = [1, 2, 3];
//let arrayNumber2: Array<number> = [1, 2, 3];
let arrayString: string[] = ["uno", "dos", "tres"];

let arrAny: any[] = ['Hola', 23, false]; //array de cualquier tipo, usar lo menos posible

//tuple
let tupllePayers: [string, number, boolean] = ['Dominic', 2, true];

//tuple array
let player: [number, string][];

player =[
    [1, 'Labron'],
    [2, 'Messi'],
    [3, 'Paco'],
];

let myVariable;

let myVariable1: string; //Inferencia de tipos sin valor

let myVariable2 = "Holaaaa pvtoooo"; //Inferencia de tipos con valor


//Unions

let myVariable3: string | number | null;
myVariable3= 'puede ser cualquiera de esos tres, o los que se elija';