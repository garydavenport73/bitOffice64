const fs=require('fs');
str="";
str+=fs.readFileSync("boiler-1-before-style-tag.php");
str+="<style>";
str+=fs.readFileSync("style.css");
str+="</style>";
str+=fs.readFileSync("boiler-2-between-style-and-main.php");
// str+=fs.readFileSync("mainPlanner.php");
// str+=fs.readFileSync("mainNotes.php");
// str+=fs.readFileSync("mainWrite.php");
// str+=fs.readFileSync("mainTables.php");
str+=fs.readFileSync("mainCalculator.php");
str+=fs.readFileSync("boiler-3-between-main-and-scripts.php");
str+="<script>";
str+=fs.readFileSync("license.js");
// str+=fs.readFileSync("csvreaderwriter.js");
// str+=fs.readFileSync("commonFunctions.js");
// str+=fs.readFileSync("planner.js");
// str+=fs.readFileSync("notes.js");
// str+=fs.readFileSync("write.js");
// str+=fs.readFileSync("tables.js");
str+=fs.readFileSync("calculator.js");
// str+=fs.readFileSync("nestedmenu.js");
str+="</script>";
str+="<script>";
str+=fs.readFileSync("selfSave.js");
// str+=fs.readFileSync("open-script-bitoffice.js");
// str+=fs.readFileSync("open-script-planner.js");
// str+=fs.readFileSync("open-script-notes.js");
// str+=fs.readFileSync("open-script-write.js");
// str+=fs.readFileSync("open-script-tables.js");
str+=fs.readFileSync("open-script-calculator.js");
str+="</script>";
str+=fs.readFileSync("boiler-4-after-scripts.php");
fs.writeFileSync("./singleFileApps/calculator.html",str,"utf8");