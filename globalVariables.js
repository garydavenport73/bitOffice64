/////////////////GLOBALS///////////////////
//         calculator        //
let calcString = "";
let calculatorInput = document.getElementById('calculator-input');
let charToAdd = "";
let expressionSpan = document.getElementById('expression-span');
//////////////////////////////////////////



///////////////////////////GLOBALS/////////////////////////////
//------------------contacts ----------------------
//let table = {};
let contactsTable = document.getElementById("contacts-table");
let contactsEditForm = document.getElementById("contacts-edit-form");
let contactsEditFormMessage = document.getElementById("contacts-edit-form-message");
//let sortAscending = 1; //direction -1 is descending, otherwise ascending
//let baseFilename = "";
/////////////////////////////////////////////////////

//////////////GLOBALS/////////////////////////
//  ------------notes --------------------
let noteFontSize = 2.5 / 3.0;
let note = document.getElementById('note');
////////////////////////////////////////////

///////////////GLOBALS///////////////////////
//-------------tables-----------------------
let tablesInitialTable = {
    headers: ["Column 1", "Column 2", "Column 3"],
    data: [
        { "Column 1": "hi", "Column 2": "", "Column 3": "" },
        { "Column 1": "there", "Column 2": "", "Column 3": "" },
        { "Column 1": "everybody", "Column 2": "", "Column 3": "" }
    ]
}

//let table = {}

/////////////////////////////////////


////////////////////GLOBALS/////////////////////////
//-----------------write---------------------

let writeBaseFilename = "";
let textarea = document.getElementById("text-editor");
let documentDiv = document.getElementById('document-result');
let remSize = 1;
let marginSize = 2;
let writeUndos = [];
//let needsSave = true;


////////////////////GLOBALS/////////////////////////
//----------------calendar-------------------------
let calendarTable = document.getElementById("calendar-table");
let calendarEditForm = document.getElementById("calendar-edit-form");
let calendarEditFormMessage = document.getElementById("calendar-edit-form-message");
let sortAscending = 1; //direction -1 is descending, otherwise ascending
let table = {}


let calendarDatabase = {};



////////////////////GLOBALS/////////////////////////