testButton.addEventListener('click', () => {
    fetch("http://localhost:3000/aac")
        .then(reponse => response.json())
        .then(data => {
            document.getElementById('test').value="success";
        });
    });