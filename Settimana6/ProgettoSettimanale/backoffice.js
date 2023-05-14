// BACKOFFICE

fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNiOTg4Zjc0MDAwMTQyODc0ZTMiLCJpYXQiOjE2ODM4ODUyNDIsImV4cCI6MTY4NTA5NDg0Mn0.s6AzfJyUJlN94i_VCnp9bW8_l9N5-9DbouNLsCEZl-U"
    }
})

let contentBarraIndirizzo = new URLSearchParams(window.location.search)
let productId = contentBarraIndirizzo.get(`productId`)
let url = "https://striveschool-api.herokuapp.com/api/product/"
console.log(`IDPRODOTTO`, productId)


if (productId) {
    document.getElementsByTagName('h2')[0].innerText = 'Backoffice - Modifica prodotto'
    document.getElementById('save-button').innerText = 'Modifica prodotto'
    let deleteButton = document.getElementById('delete-button')
    deleteButton.classList.remove('d-none')
    deleteButton.addEventListener('click', () => {
        fetch("https://striveschool-api.herokuapp.com/api/product/" + productId.trim(), {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNiOTg4Zjc0MDAwMTQyODc0ZTMiLCJpYXQiOjE2ODM4ODUyNDIsImV4cCI6MTY4NTA5NDg0Mn0.s6AzfJyUJlN94i_VCnp9bW8_l9N5-9DbouNLsCEZl-U",
                'Content-Type': 'application/json',
            },
        })

            .then((res) => {
                if (res.ok) {
                    alert('prodotto eliminato')
                    location.assign('homepage.html')
                } else {
                    throw new Error("Errore!")
                }
            })
            .catch((err) => {
                console.log(err)
            })

        //non funziona il recupero dei dati 😢

        fetch("https://striveschool-api.herokuapp.com/api/product/" + productId.trim(), {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNiOTg4Zjc0MDAwMTQyODc0ZTMiLCJpYXQiOjE2ODM4ODUyNDIsImV4cCI6MTY4NTA5NDg0Mn0.s6AzfJyUJlN94i_VCnp9bW8_l9N5-9DbouNLsCEZl-U",
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("Errore!")
                }
            })
            .then((prodotto) => {
                console.log('Prodotto recuperato', prodotto)
                document.getElementById('name').value = prodotto.name
                document.getElementById('description').value = prodotto.description
                document.getElementById('brand').value = prodotto.brand
                document.getElementById('price').value = prodotto.price
                document.getElementById('imageURL').value = prodotto.image
            })
            .catch((error) => {
                console.log(error)
            })
    })
} else { }

// qua termina il recupero dei dati...che non funziona... e' la terza volta che mi riguardo la lezione del prof stefano ma non capisco l'errore sto impazzendo 😭

const productForm = document.getElementById('product-form')
productForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('invio info')
    let nameInput = document.getElementById('name')
    let descriptionInput = document.getElementById('description')
    let brandInput = document.getElementById('brand')
    let priceInput = document.getElementById('price')
    let imageInput = document.getElementById('imageUrl')

    let newProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        price: priceInput.value,
        imageUrl: imageInput.value,
    }
    console.log('prodotto pronto da inviare alle API', newProduct)

    fetch(productId ? "https://striveschool-api.herokuapp.com/api/product/" + productId.trim() : "https://striveschool-api.herokuapp.com/api/product/", {
        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),

        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGNiOTg4Zjc0MDAwMTQyODc0ZTMiLCJpYXQiOjE2ODM4ODUyNDIsImV4cCI6MTY4NTA5NDg0Mn0.s6AzfJyUJlN94i_VCnp9bW8_l9N5-9DbouNLsCEZl-U",
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            console.log('RESPONSE', res)
            if (res.ok) {
                alert(productId ? 'Prodotto modificato' : 'Prodotto creato')
                location.assign(`homepage.html`)
            } else {
                alert(`ERRORE`)
                throw new Error(`ERRORE`)
            }
        })
        .catch((err) => {
            console.log(err)
        })
})

function salvaIdProdotto(prodottoId) {
    localStorage.setItem('prodottoId', prodottoId);
}
salvaIdProdotto();
