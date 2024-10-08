const wordInput = document.querySelector('#word');
const articleInput = document.querySelector('#article');
const descriptionInput = document.querySelector('#description');
const addBtn = document.querySelector('#add-btn');
const row = document.querySelector('.row');
const searchField = document.querySelector('.searchField');
const searchBtn = document.querySelector('#searchBtn');
const aramaInput = document.querySelector('#aramaInput');
const form = document.querySelector('form');


addBtn.addEventListener('click', () => {

    const word = wordInput.value.trim();
    const article = articleInput.value.trim();
    const description = descriptionInput.value.trim();

    row.innerHTML += `
        <div class="col-10 col-sm-5 border border-1 border-black  rounded-3  mx-4 my-2" >
            <p style='margin: 0;'><span style='color: red; font-weight: bold;'>${article}</span> <span style='font-weight: bold;'>${word}</span></p>
            <p style='margin: 0;'>Description : ${description}</p>
        </div>
    `
})

searchBtn.addEventListener('click', () => {

    if(searchField.style.display == 'none'){
        searchField.style.display = 'block'
    }else{
        searchField.style.display = 'none'
    }

})

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const searchValue = aramaInput.value.trim();

//     const allItems = row.querySelectorAll('.col-10, .col-sm-5');

//     allItems.forEach(item => {
//         const itemText = item.innerText.toLowerCase(); 
//         if (itemText.includes(searchValue.toLowerCase())) {
//             item.style.display = 'block'; 
//         } else {
//             item.style.display = 'none'; 
//         }
//     })
// })

aramaInput.addEventListener('input', () => {
    const searchValue = aramaInput.value.trim().toLowerCase(); // Get the search input value
    const allItems = row.querySelectorAll('.col-10, .col-sm-5'); // Get all items in the row

    allItems.forEach(item => {
        const itemText = item.innerText.toLowerCase(); // Get text content of each item
        if (itemText.includes(searchValue)) {
            item.style.display = 'block'; // Show item if it matches
        } else {
            item.style.display = 'none'; // Hide item if it doesn't match
        }
    });
});