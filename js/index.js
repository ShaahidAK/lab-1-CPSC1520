/*
My chosen variables:

//open modal
// button close
//value-visibility

*/

const openModal = document.querySelector("#open-modal")
const buttonClose = document.querySelector("#button-close")
const valueVisibility = document.querySelector("#value-visibility")


openModal.addEventListener("click", openModalHandler)

buttonClose.addEventListener("click", buttonCloseHandler)

function openModalHandler(e)    {
valueVisibility.showModal();
}

function buttonCloseHandler(e)    {
valueVisibility.close();    
}

//Attempting the optional part of the lab


/*
(attempted and was confused/unsuccessful)

openModal.addEventListener("click",onClickOutsideDialog)

function onClickOutsideDialog(e){
    const dialogDimensions = dialog.getBoundingClientRect();
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom 
        {
            e.currentTarget.close();
        }
    )
}
*/