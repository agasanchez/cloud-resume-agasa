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
