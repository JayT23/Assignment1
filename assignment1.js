//COMP125-Assignment1
//Author: Jayson Tuazon
//Date:   05/26/2023
//Filename: assignment1.js


//The "drawTable()" function is defined to be used to invoke the operations inside it and create the table
function drawTable() {

    //The variable "table" acts as a storage of the id "MultiplicationTable" that is used for the table structure in assignment1.html
    let table = document.getElementById("MultiplicationTable");

    //This is used in order to clear existing contents of the table
    table.innerHTML = '';

    //The variable "rowsInput" and "columnsInput" acts as a storage of the values of ids "rows" and "columns" respectively in assignment1.html
    let rowsInput = document.getElementById("rows").value;
    let columnsInput = document.getElementById("columns").value;

    //The values stored in "rowsInput" and "columnsInput" are then assigned to these new variables
    let rows = rowsInput;
    let columns = columnsInput;

    //"for loop" is used in order to create the table row.
    //Variable "i" is initiated to the value 1. The loop will continue as long as the value of "i" is less than or equal to the value stored in rows
    //The value of "i" will be incremented by 1 after each iteration
    for (let i = 1; i <= rows; i++) {

        //document.createElement("tr") is used to create the rows of the MultiplicationTable that will increment by 1 until it reaches the condition of the "for loop"
        let row = document.createElement("tr");

        //"for loop" is used in order to create the table column.
        //Variable "j" is initiated to the value 1. The loop will continue as long as the value of "j" is less than or equal to the value stored in rows
        //The value of "j" will be incremented by 1 after each iteration
        for (let j = 1; j <= columns; j++) {

            //The variable cellContent is declared in order to store the result of the operation (i * j) which is the product of value of "rows" & "columns"
            let cellContent = (i * j);

            //The "row.insertAdjacentHTML" is used in order to insert the value of cellContent into the "row" element in the html
            row.insertAdjacentHTML('beforeend', '<td>' + cellContent + '</td>');
        }
        
        //The "table.insertAdjacentElement" is used in order to insert the value of row into the "table" id in the html
        table.insertAdjacentElement('beforeend', row);
        
    }
}

