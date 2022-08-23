

let saveSelection; 
const sectionRate = document.querySelectorAll('.section--rate .rate--button');
const form = document.getElementById('form');
const thankYouCard = document.getElementById('result');

sectionRate.forEach((element, i) => {
    element.addEventListener('click', () => {
        saveSelection = i+1;
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
