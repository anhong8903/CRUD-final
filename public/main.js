// main.js
const update = document.querySelector('#update-button')

const deleteButton = document.querySelector('#delete-button')



update.addEventListener('click', _ => {

    // Send PUT Request here
    fetch('/quotes', {

        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        
        body: JSON.stringify({
            ID: '11',
            name: 'Hotwheels 73 Honda Civic Custom',
            price: '123000'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        //console.log(response)

        // refresh -> browser
        window.location.reload(true)
    })
})


deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Hotwheels 73 Honda Civic Custom'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        window.location.reload()
    })        
})


