function search(query) {
    if (event.key === "Enter") {
        window.open(`https://google.com/search?q=${query.value.slice().toString().trim().replace(/ /g, "+")}`)
    }
}

function searchButton() {
    let inputValue = document.getElementById('search').value
    window.open(`https://google.com/search?q=${inputValue.slice().toString().trim().replace(/ /g, "+")}`)
}

function imLucky() {
    let inputValue = document.getElementById('search').value
    window.open(`https://www.google.com/search?q=${inputValue.slice().toString().trim().replace(/,/g, "+")}&btnI=`)
}