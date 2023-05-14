const dettagliId = localStorage.getItem("prodottoId")

window.onload = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${dettagliId}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNiOTg4Zjc0MDAwMTQyODc0ZTMiLCJpYXQiOjE2ODM4ODUyNDIsImV4cCI6MTY4NTA5NDg0Mn0.s6AzfJyUJlN94i_VCnp9bW8_l9N5-9DbouNLsCEZl-U"
        }
    })

        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Errore!")
            }
        })
        .then((data) => {
            const dettagli = `
            <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-8 text-center">
                    <div class="card mb-4">
                        <img id=image src="${data.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">
                                ${data.description}
                            </p>
                            <p>
                                ${data.price}€
                            </p>
                            <a class="btn btn-danger" href="./homepage.html">Torna indietro</a>
                        </div>
                    </div>
                </div>
            `;
            const details = document.getElementById("details");
            const dettagliElement = document.createElement('div');
            dettagliElement.innerHTML = dettagli;
            details.appendChild(dettagliElement);
        })
        .catch((err) => {
            console.log(err)
        })
}
