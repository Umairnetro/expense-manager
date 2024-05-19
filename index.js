let des = document.querySelector(".description")
let exp = document.querySelector(".expense")
let output = document.querySelector(".output")
let btn = document.querySelector('button')

console.log(des, exp, btn, output)

btn.addEventListener('click', function (e) {
    if (des.value === "" && exp.value === "") {
        alert("Empty");
    } else {
        console.log(des.value === "" && exp.value === "" )
        let div = document.createElement('div');
        output.appendChild(div)
        div.classList.add("list")

        let divChild = document.createElement('div')
        divChild.classList.add('box')
        div.appendChild(divChild)
        if (des.value === "") {
            alert("please Enter the Description")
        } else {
            divChild.innerHTML = des.value
        }

        let divSecondChild = document.createElement('div')
        divSecondChild.classList.add('box')
        div.appendChild(divSecondChild)
        if (exp.value === "") {
            alert("please Enter the Description")
        } else {
            divSecondChild.innerHTML = exp.value
        }
    }

})