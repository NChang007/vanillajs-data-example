let mydata = []
let index = sessionStorage.getItem('personIndex')

fetch('./people.json')
.then((response) => response.json())
.then((data) => {
    mydata = data.people[index]
    console.log(mydata);
    loadPersonData()
});


const loadPersonData = () => {
    let box = document.getElementById('aboutPageCont')
    let personInfo = document.createElement('div')
    personInfo.innerHTML = `
    <div 
        class="singlePerson"
    >
        <h1>${mydata.first_name} ${mydata.last_name}</h1>
        <p>${mydata.disc}</p>
        <a href="${mydata.github}">GitHub</a>
    </div>`
    box.appendChild(personInfo)

}