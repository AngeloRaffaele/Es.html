const btn = document.querySelector(".btn");

function setData(firstname){
    const name = document.querySelector(".title-name");

    name.innerText = firstname;
    
    localStorage.setItem("title-name", firstname);
}

btn.addEventListener("click", () => {
    const input = document.querySelector(".firstname");
    const value = input.value;

    setData(value);
});

const localSave = localStorage.getItem("title-name") ;

if (localSave) {
    setData(localSave);
}
