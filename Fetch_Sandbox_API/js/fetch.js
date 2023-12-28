document.getElementById('getText').addEventListener
('click', getText);

document.getElementById('getUsers').addEventListener
('click', getUsers);

document.getElementById('getPosts').addEventListener
('click', getPosts);

document.getElementById('addPosts').addEventListener
('submit', addPosts);

function getText(){
    // fetch('sample.txt')
    // .then(function(res){
    //     return log(res.text());
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    // using arrow function
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        // display the data in the console
        console.log(data);
        // display the data in the browser
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err)); // catch any error
}
function getUsers(){
    fetch('data/users.json') // fetch the json file
    .then(res => res.json()) // convert the json file to a javascript object
    .then(data => {
        let output = '<h2>Users</h2>';
        // loop through the data
        data.forEach(function(user){
            // display the data in the console
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) // convert the json file to a javascript object
    .then(data => {
        let output = '<h2>Posts</h2>';
        // loop through the data
        data.forEach(function(post){
            // display the data in the console
            output += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}
    
function addPosts(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        // convert the data to a string 
        body: JSON.stringify({title:title, body:body})
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

