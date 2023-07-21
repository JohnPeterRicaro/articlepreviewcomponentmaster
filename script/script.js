const showBttn = document.querySelectorAll("#bttnShare")
const popUp = document.getElementById("popUp")

const bttnClick = () => {
    showBttn.forEach((item) =>{
        item.addEventListener('click', () =>{
            popUp.classList.toggle('hidden')
        })
    })
}

bttnClick()