var answer=document.calc.output.value;
function run1()
{ document.calc.output.value += "1"; }
function run2()
{ document.calc.output.value += "2"; }
function run3()
{ document.calc.output.value += "3"; }
function run4()
{ document.calc.output.value += "4"; }
function run5()
{ document.calc.output.value += "5"; }
function run6()
{ document.calc.output.value += "6"; }
function run7()
{ document.calc.output.value += "7"; }
function run8()
{ document.calc.output.value += "8"; }
function run9()
{ document.calc.output.value += "9"; }
function run0()
{ document.calc.output.value += "0"; }
function plus()
{ document.calc.output.value += "+"; }
function minus()
{ document.calc.output.value += "-"; }
function mul()
{ document.calc.output.value += "*"; }
function div()
{ document.calc.output.value += "/"; }
function dot()
{ document.calc.output.value += "."; }
function per()
{ document.calc.output.value += "%"; }
function cl()
{ document.calc.output.value = " "; }
function evalu()
{
var evalo=eval(document.calc.output.value);

document.calc.output.value=evalo;
}
