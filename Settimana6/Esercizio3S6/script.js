window.onload = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const div = document.querySelector(`.row`);
        for (let i = 0; i < data.lenght; i++) {
            const card = `<div class= "col-3 p-2>
            <div class= card h-100>
            <img class= "card-img-top" src="${data[i].title}">
            <div class="p-1">
                <p>Titolo: ${data[i].title}</p>
                <p>Prezzo: ${data[i].title}</p>
                <hr>
                </div>
                </div>`
        }
    })
}