const fs=require('fs');
str="";
str+=fs.readFileSync("boiler-1-before-style-tag.php");
str+="<style>";
str+=fs.readFileSync("./min/style.min.css");
str+="</style>";
str+=fs.readFileSync("boiler-2-between-style-and-main.php");
str+=fs.readFileSync("mainPlanner.php");
str+=fs.readFileSync("mainNotes.php");
str+=fs.readFileSync("mainWrite.php");
str+=fs.readFileSync("mainTables.php");
str+=fs.readFileSync("mainCalculator.php");
str+=fs.readFileSync("boiler-3-between-main-and-scripts.php");
str+="<script>";
str+=fs.readFileSync("./min/license.min.js")+";";
str+=fs.readFileSync("./min/csvreaderwriter.min.js")+";";
str+=fs.readFileSync("./min/commonFunctions.min.js")+";";
str+=fs.readFileSync("./min/planner.min.js")+";";
str+=fs.readFileSync("./min/notes.min.js")+";";
str+=fs.readFileSync("./min/write.min.js")+";";
str+=fs.readFileSync("./min/tables.min.js")+";";
str+=fs.readFileSync("./min/calculator.min.js")+";";
str+=fs.readFileSync("./min/nestedmenu.min.js")+";";
str+="</script>";
str+="<script>";
str+=fs.readFileSync("./min/selfSave.min.js")+";";
str+=fs.readFileSync("./min/open-script-bitoffice.min.js")+";";
// str+=fs.readFileSync("open-script-planner.js");
// str+=fs.readFileSync("open-script-notes.js");
// str+=fs.readFileSync("open-script-write.js");
// str+=fs.readFileSync("open-script-tables.js");
// str+=fs.readFileSync("open-script-calculator.js");
str+="</script>";
str+=fs.readFileSync("boiler-4-after-scripts.php");
fs.writeFileSync("./singleFileAppsMinified/bitOffice.html",str,"utf8");