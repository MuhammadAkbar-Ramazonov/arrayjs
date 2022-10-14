var elSelect = document.querySelector(".js-select");
var elForm = document.querySelector(".js-form");
var elInputFirst = document.querySelector(".user-name");
var elInputLast = document.querySelector(".user-surname");
var elInputNumber = document.querySelector(".user-tel");
var elList = document.querySelector(".form-list-js");

var arry = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var obj = {
        select:elSelect.value,
        firstName:elInputFirst.value,
        lastName:elInputLast.value,
        phoneNumber:elInputNumber.value,
    };
    
    arry.push(obj);
    
    elForm.reset();
    elList.innerHTML = "";
    
    for(var i = 0; i < arry.length; i++){
        var item = document.createElement("li");
        item.classList.add("fs-2");
        item.classList.add("fw-normal");

        var elSelectResult = document.createElement("h3");
        elSelectResult.textContent = arry[i].select;
        item.appendChild(elSelectResult);

        var fristTitle = document.createElement("h3");
        fristTitle.textContent = arry[i].firstName + " " + arry[i].lastName;
        item.appendChild(fristTitle);
        
        var telNumber = document.createElement("p");
        telNumber.textContent = arry[i].phoneNumber;
        item.appendChild(telNumber);
        
        elList.appendChild(item);
    }
})
