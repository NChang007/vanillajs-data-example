//get the info

let mydata = []
fetch('./people.json')
.then((response) => response.json())
.then((data) => {
    mydata = data.people
    loadPeopleList()
});

// pass an idx with sessionStarage
const handleClick = (idx) => {
    sessionStorage.setItem('personIndex', idx)
}
// if you wanted to do it with the url
const handleClick2 = (idx) => {
    window.location = `http://127.0.0.1:5500/test-vjs/aboutPage.html?id=${idx}`
}

const loadPeopleList = () => {
    let box = document.getElementById('listofpeople')
    mydata.forEach((person,idx) => {
        let newPerson = document.createElement('div')
        newPerson.innerHTML = `
        <div 
            class="singlePerson"
            style="display: flex; margin-bottom: 1rem; justify-content: space-between; align-items: center;"
        >
            <p>${person.first_name} ${person.last_name}</p>
            <div>
                <a href="${person.github}">GitHub</a>
                <a href="aboutPage.html" onclick="handleClick(${idx})">Learn More</a>
            </div>
        </div>`
        box.appendChild(newPerson)
    })
}
    
