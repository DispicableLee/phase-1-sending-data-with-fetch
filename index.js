// Add your code here
const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
    })
}

fetch("http://localhost:3000/dogs", configObject)
    .then(function(res){
        return res.json();
    })
    .then(function (object){
        console.log(object);
    })
    .catch((err)=>{
        alert("bad things! Ragnarok!");
        console.log(err.message);
    })



function submitData(uName, uEmail){

    const formData = {};
    formData.userName = uName;
    formData.userEmail = uEmail;
    
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }


    fetch("http://localhost:3000/users", configObject)
    .then((res)=>{
        return res.json();
    })
    .then((object)=>{
        console.log(object)
    })
    .catch((err)=>{
        alert(err.message)
    })

}

submitData("ROb", "lee.robert053@gmail.com")