document.getElementById('getText').addEventListener
('click', getText);

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