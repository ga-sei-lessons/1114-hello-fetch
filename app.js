console.log('script is linked!')
// API -- Application Programming Interface or Application Protocol Interface
// API is a piece of software that is designed to talk to another piece of software -- Defines how other code will talk to yours/how your code should talk to other code
// DATA APIs -- software that is designed to send data over the internet

// https://swapi.dev/api/films/

// don't run this until the dom content has loaded
document.addEventListener('DOMContentLoaded', () => {
    // // window.fetch() -- retrieves data from our data API
    // fetch('https://swapi.dev/api/films/') // returns a Promise (async operation)
    //     // dot then allows us to wait for the async operation to complete
    //     .then(responseData => {
    //         // this cb runs when the server response
    //         // converts raw response into usable json data (this is a fetch thing)
    //         return responseData.json() //returning from a dot then, lets us dot then again
    //     })
    //     .then(swapiJson => {
    //         // actual useful swapi data
    //         console.log(swapiJson.results)
    //         // select the body
    //         const body = document.querySelector('body')
    //         // loop over each movie and append the title and opening crawl to the page
    //         swapiJson.results.forEach(result => {
    //             // create some elements to load on the body
    //             const div = document.createElement('div')
    //             const p = document.createElement('p')
    //             const h2 = document.createElement('h2')
    //             // modify the properties of the elements
    //             p.innerText = result.opening_crawl
    //             h2.innerText = result.title
    //             console.log(p, h2)
    //             // append new elements to the dom
    //             div.append(h2, p)
    //             body.append(div)
    //         })
    //     })
    // ? starts the query strings, which are key/value pairs in a url
    // https://www.google.com/search?q=mango (query string google search example)
    const requestUrl = 'https://randomuser.me/api/?results='
    document.querySelector('form').addEventListener('submit', e => {
        // tell the form to not refresh the page
        e.preventDefault()
        const numberOfPeople = document.querySelector('#number').value
        console.log(numberOfPeople)
        fetch(requestUrl + numberOfPeople)
            .then(responseData => responseData.json()) // implicit return arrow function
            .then(peopleData => {
                console.log(peopleData)
                const peopleList = document.querySelector('#peopleList')
                console.log(peopleList)
                peopleData.results.forEach(person => {
                    console.log(person.name.title, person.name.first, person.name.last)
                    // create the new element
                    const li = document.createElement('li')
                    // set the element propeties
                    li.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
                    // append the element to the dom
                    peopleList.append(li)
                })
            })
            .catch(error => {
                console.warn(error)
            }) // catch handles any errors that might occur in the fetch process
    })
})
