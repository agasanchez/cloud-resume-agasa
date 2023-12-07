const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://2prtlwlksrciwllkr5xj7nd2pm0hzpns.lambda-url.us-east-2.on.aws/");
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    let data = await response.json();


    counter.innerHTML = `This page has ${data} Views!`;
}

updateCounter();

var express = requiere('express')

    (() => {
        const form = document.querySelector('form');
        const submitResponse = document.querySelector('#email_response');
        const formURL = 'https://rsbemo4rnvyby6ye72zboin4mi0luaib.lambda-url.us-east-1.on.aws/';

        form.onsubmit = e => {
        e.preventDefault();

        // Capture the form data
        let data = {};
        Array.from(form).map(input => (data[input.id] = input.value));
        console.log('Sending: ', JSON.stringify(data));
        submitResponse.innerHTML = 'Sending...'

        // Create the AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, formURL, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.setRequestHeader('Access-Control-Allow-Origin:', 'http://anasanchez.net');

        // Send the collected data as JSON
        xhr.send(JSON.stringify(data));

        xhr.onloadend = response => {
            if (response.target.status === 200) {
            form.reset();
            submitResponse.innerHTML = 'Form submitted. Success!';
            } else {
            submitResponse.innerHTML = 'Error! Please try again.';
            console.error(JSON.parse(response));
            }
        };    
        };
    })();
