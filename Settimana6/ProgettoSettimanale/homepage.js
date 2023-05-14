// HOMEPAGE

const getProdotti = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNiOTg4Zjc0MDAwMTQyODc0ZTMiLCJpYXQiOjE2ODM4ODUyNDIsImV4cCI6MTY4NTA5NDg0Mn0.s6AzfJyUJlN94i_VCnp9bW8_l9N5-9DbouNLsCEZl-U"
        }
    })

        .then((res) => {
            console.log(`Response`, res)
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(`errore!`)
            }
        })

        //CARD PRODOTTO
        .then((data) => {
            console.log(`Prodotti`, data)
            data.forEach((prodotto) => {
                let columnTemplate = `
    <div class="col-12 col-md-3">
      <div class="card mb-4">
      <img id=image src="${prodotto.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prodotto.name}</h5>
          <p class="card-text">
            ${prodotto.description}
          </p>
          <p>
          ${prodotto.price}€
          </p>
          <a href="./backoffice.html?productId=
          ${prodotto._id}" 
          class="btn btn-primary">Modifica</a>
          <a href="./details.html?productId=" class="btn btn-secondary" onclick="mostraDettagli('${prodotto._id}')">Dettagli</a>
        </div>
      </div>
    </div>
    `
                let Row = document.getElementById('products-container')
                Row.innerHTML += columnTemplate
            })
        })
        .catch((error) => {
            console.log(`mi do fuoco non ho capito un cazzo vado a tiltare in ranked su lol AAAAAAAAAAAAAAAAA `, error)
        })
}

window.onload = () => {
    getProdotti()
}