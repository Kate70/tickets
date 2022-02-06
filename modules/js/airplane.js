import createElement from "./createElement.js";
import declOfNum from "./declOfNum.js";

const createCockpit = (titleText) =>{
    const cockpit = createElement('div', {
        className: 'cockpit'
    })

    const title = createElement('h1', {
        className: 'cockpit-title',
        textContent: titleText
    });

    const button = createElement( 'button', {
        className: 'cockpit-confirm',
        type: 'submit',
        textContent: 'Подтвердить'
    });

    cockpit.append(title, button);
    return cockpit;

}

const createExit = () => {
    const fuselage = createElement( 'div', {
        className: 'fuselage exit',
    })
    return fuselage;
};

const createBlockSeat = (n, count) =>{
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const fuselage = createElement('ol', {
        className: 'fuselage',
    });
for (let i=n; i < count + n; i++ ){
    const wrapperRow = createElement('li');
    const seats = createElement ('ol',{
        className: 'seats'
    });

    const seatsRow = letters.map(letter =>{
        const seat = createElement('li',{
            className: 'seat'
        });
        const wrapperCheck = createElement( 'label');
        const check = createElement( 'input', {
            className: 'seat',
            type: 'checkbox',
            value: `${i}${letter}`
        });
        //seats.append(seatsRow);
        wrapperCheck.append(check);
        seat.append(wrapperCheck);
        return seat
    })
    seats.append(...seatsRow)
    wrapperRow.append(seats);
    fuselage.append(wrapperRow);
   }
    return fuselage;
}

const createAirplane = (title, tourData) => {
    const scheme = tourData.scheme;
    const choisesSeat = createElement('form', {
         className: 'choises-seat'});
    const plane = createElement('fieldset', {
        className: 'plane',
        name: 'plane'
    })     

   const cockpit = createCockpit (title);

   let n = 1;

   const elemnts = scheme.map((type) => {
       if (type === 'exit'){
       return createExit()
       };

       if( typeof type === 'number'){
           const blockSeat = createBlockSeat(n, type);
           n = n + type;
           return blockSeat;
       }

})
   plane.append(cockpit, ...elemnts); 

   choisesSeat.append(plane);
   return choisesSeat;  

};

// const  ckeckedPlace = (arr, data) =>{

// }


// const checkseat = (form, data) => {
//     let a = [];
//     form.addEventListener('change', (e) => {
//         a.push(e.target);
//         console.log(a);      
//         //return a;
//         ckeckedPlace(a, data);  
        
//     }   
//     )
        


// }  
    


const checkseat = (form, data) => {
    let arr =[]
    form.addEventListener('change', () => {
        //const formData = new FormData(form);
        const cheked = e.target.value;
        arr.push(cheked)
        console.log(arr);         
        if (arr.length === data.length){
            form.disabled = true
                
            
            
        }    
        
        })

   
}


const airplane = (main, data, tourData) =>{
const title = `Выберите ${declOfNum(data.length, ['место',  'места', 'мест'])}` 
const choiseForm = createAirplane(title, tourData)
const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];
checkseat(choiseForm, data);
main.append(choiseForm);

};

export default airplane;