

let saveSelection; 
let preSaveSelection = 0; 
let preElement;

const sectionRate = document.querySelectorAll('.section--rate .rate--button');
const form = document.getElementById('form');
const thankYouCard = document.getElementById('result');

sectionRate.forEach((element, i) => {
    element.addEventListener('click', () => {
        saveSelection = i+1;

        if(preSaveSelection > 0 && preSaveSelection !== saveSelection)
        {
            element.classList.toggle('selected')
            preElement.classList.toggle('selected');
        }else{
            element.classList.toggle('selected')
        }
        
        preElement = element;
        preSaveSelection = saveSelection;
    })

});

form.onsubmit = (e) => {
    e.preventDefault();

    if( saveSelection !== undefined ){
        console.log(saveSelection)
        const rating = document.getElementById('rating');
        rating.innerHTML = saveSelection;
        form.classList.toggle('active');        
        thankYouCard.classList.toggle('active');        
    }
}
