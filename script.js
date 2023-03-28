var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var option_form, option_to;
input.addEventListener("keyup",myResult);
inputtype.addEventListener("change",myResult);
resulttype.addEventListener("change",myResult);
option_form= inputtype.value;
option_to = resulttype.value;

function myResult() {
    option_form = inputtype.value;
    option_to = resulttype.value;
    if (option_form==="Feet" && option_to==="Inch") {
        result.value = Number(input.value)*12;
    }else if(option_form==="Feet" && option_to==="Meter"){
        result.value= Number(input.value)*0.3048;
    }else if(option_form==="Feet" && option_to==="Feet"){
        result.value = Number(input.value)*1;
    }else if (option_form==="Inch" && option_to==="Feet") {
        result.value = Number(input.value)/12;
    }else if(option_form==="Inch" && option_to==="Meter"){
        result.value= Number(input.value)*0.0254;
    }else if(option_form==="Inch" && option_to==="Inch"){
        result.value = Number(input.value)*1;
    }else if(option_form==="Meter" && option_to==="Meter"){
        result.value = Number(input.value)*1
    }
}