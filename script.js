console.log("Hello")

function cBox()
{
    let total = 0;
    for(let i=0; i<document.form1.food.length; i++)
    {
        if(document.form1.food[i].checked)
        {
            total+=1;
        }
    }

    if(total < 2)
    {
        alert("Please Select Atleast Two Food");
        
    }
}

function addData()
{
    let fname = document.getElementById("fname").value;
    console.log(fname);
    let lname = document.getElementById("lname").value;
    console.log(lname);
    let email = document.getElementById("email").value;
    console.log(email);
    let address = document.getElementById("address").value;
    console.log(address);
    let pin = document.getElementById("pin").value;
    console.log(pin);
    let state = document.getElementById("state").value;
    console.log(state);
    let country = document.getElementById("country").value;
    console.log(country)
    let gender = document.getElementById("gender");
    let fchoice = [];

    gender.checked ? gender = "Male" : gender = "Female";
    console.log(gender);
    for(let i=0; i<document.form1.food.length; i++)
    {
        if(document.form1.food[i].checked)
        {
            console.log(document.form1.food[i].value);
            fchoice.push(document.form1.food[i].value);
        }
    }

    localStorage.setItem('ls-fname', fname);
    localStorage.setItem('ls-lname', lname);
    localStorage.setItem('ls-email', email);
    localStorage.setItem('ls-address', address);
    localStorage.setItem('ls-pin', pin);
    localStorage.setItem('ls-gender', gender);
    localStorage.setItem('ls-fchoice', fchoice);
    localStorage.setItem('ls-state', state);
    localStorage.setItem('ls-country', country);
    // window.location.href = "C:\Users\Intel\OneDrive\Desktop\GUVI\FormTable\table.html";
    const tr = document.createElement("tr");
        const td1 = tr.appendChild(document.createElement("td"));
        const td2 = tr.appendChild(document.createElement("td"));
        const td3 = tr.appendChild(document.createElement("td"));
        const td4 = tr.appendChild(document.createElement("td"));
        const td5 = tr.appendChild(document.createElement("td"));
        const td6 = tr.appendChild(document.createElement("td"));
        const td7 = tr.appendChild(document.createElement("td"));
        const td8 = tr.appendChild(document.createElement("td"));
        const td9 = tr.appendChild(document.createElement("td"));
        
        
        td1.innerHTML = localStorage.getItem('ls-fname');
        td2.innerHTML = localStorage.getItem('ls-lname');
        td3.innerHTML = localStorage.getItem('ls-email');
        td4.innerHTML = localStorage.getItem('ls-address');
        td5.innerHTML = localStorage.getItem('ls-pin');
        td6.innerHTML = localStorage.getItem('ls-gender');
        td7.innerHTML = localStorage.getItem('ls-fchoice').split(",").join(" ");
        td8.innerHTML = localStorage.getItem('ls-state');
        td9.innerHTML = localStorage.getItem('ls-country');

        console.log(td1.innerText);
        console.log(td2.innerText);
        console.log(td3.innerText);
        console.log(td4.innerText);
        console.log(td5.innerText);
        console.log(td6.innerText);
        console.log(td7.innerText);
        console.log(td8.innerText);
        console.log(td9.innerText);

        document.getElementById("tb1").appendChild(tr);

}