

const sectionRate = document.querySelectorAll('.section--rate');

sectionRate.forEach((element, i) => {
    element.addEventListener('click', () => {
        const btn = document.querySelectorAll(`#btn-${i+1}}`)
        console.log(btn)

    })
});