


function myFun(){


    let fname = document.getElementById('fName')
    let lname = document.getElementById('lName')
    let address = document.getElementById('address')
    let pin = document.getElementById('pincode')
    let g_male = document.getElementById('male')
    let g_female = document.getElementById('female')
    let g_others = document.getElementById('others')
    let f_choc = document.getElementById('chocolates')
    let f_popcorn = document.getElementById('popcorn')
    let f_ice = document.getElementById('icecream')
    let f_cake = document.getElementById('cake')
    let f_chips = document.getElementById('chips')
    let country = document.getElementById('country')
    let state = document.getElementById('state')
    let tableData = document.getElementById('tableData')
    let gender = g_male.checked?male:(g_female.checked?female:(g_others.checked)?others:false)
    // to check food items condition
    let fitemsCount = 0
    let fList = []
    if(f_choc.checked){
        fitemsCount ++
        fList.push(f_choc.value)

    } 
    if(f_popcorn.checked){
        fitemsCount ++
        fList.push(f_popcorn.value)

    }
    if(f_ice.checked){
        fitemsCount ++
        fList.push(f_ice.value)

    } 
    if(f_cake.checked){
        fitemsCount ++
        fList.push(f_cake.value)

    }
    if(f_chips.checked){
        fitemsCount ++
        fList.push(f_chips.value)

    } 
    // storing user data
    console.log(gender.value)
    let userInput = [fname.value,lname.value,address.value,pin.value,gender.value,fList,country.value,state.value]
    console.log(userInput)

    if(userInput.includes(null) || userInput.includes("") || userInput.includes(false)){
        alert("Please enter all the fields")
    }
    else if(fitemsCount < 2){
        alert("Please choose 2 or more Items")
    } else {
        // creating Table using DOM
        let tr = document.createElement('tr')
        tableData.append(tr)
        for(i=0;i<8;i++){
            // if(i ==4 || i==5){

            // }
            let td = document.createElement('td')
            td.innerHTML=userInput[i]
            console.log(userInput[i])
            tr.appendChild(td)
        }
        
    }
    
}
