const url = 'https://boiling-spire-55533.herokuapp.com'
const spanResRegLogAuth = document.querySelector('.res__content')


//POST registration
function setRegistration(path, num) {

    fetch(`${url}${path}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "email": `t${new Date().valueOf()}@mail.ru`,
            "password": "1111"
        })
    }).then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
        .then(data => {
            console.log(data)
            spanResRegLogAuth.innerHTML = data.token
        })
        .catch(error => console.log(error));


    }
