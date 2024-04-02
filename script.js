var checkBoxs = document.querySelectorAll("input[name='checkBox']");
var button = document.querySelector("button");

var label = document.querySelectorAll('.item');


var labelText = label.textContent;

var right = document.querySelector(".right added-list");
var value = 0
checkBoxs.forEach(function(checkbox){
    value = checkbox.addEventListener("change", function(elem){
        if(elem.target.checked){
            console.log("ha bhai")
        } else{
            console.log("na bhai")
        }

        label.forEach(function(label){
            console.log(label)
        })

        button.addEventListener("click", function(){
            // console.log("hello")
            // right.innerHTML = `<h5> ${list} </h5>`

        })
    })
    
})
