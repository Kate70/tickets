import start from "../js/start.js";
import getFormPerson from "./formPerson.js";

const init = (selectopApp, title)=>{
    const app = document.querySelector(selectopApp);
    const {main, firstForm} = start(app, title);
    console.log(firstForm);
    firstForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(firstForm.count.value);
        const forms = getFormPerson(firstForm.count.value);
        firstForm.remove();

        main.append(...forms)
    })

};
init('.app', "Выберите тур");
