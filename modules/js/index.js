import start from "../js/start.js";
import getFormPerson from "./formPerson.js";
import readyPlane from "./readyPlane.js";
import getData from "../servis/getTout.js";


const init = async(selectopApp, title)=>{
    const app = document.querySelector(selectopApp);
    const data = await getData();
    const {main, firstForm, h1} = start(app, title, data);
   
    firstForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const tourData = data.find(tour => tour.id === firstForm.tour.value);
        h1.textContent = tourData.tour;       
        const forms = getFormPerson(firstForm.count.value);
        firstForm.remove();

        main.append(...forms);
        readyPlane(forms, main, tourData);
    })

};
init('.app', "Выберите тур");

