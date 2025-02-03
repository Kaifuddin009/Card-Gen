const user = document.querySelector("#getuser")
function getnewuser() {
    fetch(`https://randomuser.me/api`)
    .then(raw => raw.json())
    .then(result =>{
        console.log(result.results[0]);
    const {name,email,gender,picture,phone,dob} = result.results[0];
    document.querySelector("#parent").innerHTML += `<div class="card w-60 p-4 rounded-md bg-gray-900 ">
                    <div class="w-17 h-17 bg-zinc-400 rounded-full mb-2 overflow-hidden">
                        <img src="${picture.large}" class = "w-full h-full fit-cover"alt="">
                    </div>
                    <h3 class="font-semibold text-2xl ">${name.first.last}</h3>
                    <h5 class=" text-sm font-semibold opacity-60">${gender}</h5>
                    <h5 class=" text-sm font-semibold opacity-60">${dob.date}</h5>
                    <h5 class=" text-sm font-semibold opacity-60">${dob.age}</h5>
                    <h6 class="text-sm font-semibold opacity-50">${email}</h6>
                    <p class=" mt-5 text-sm font-semibold opacity-70 ">${phone}</p>
                </div>`
    })  
}
user.addEventListener("click", function () {
    getnewuser();
    
})