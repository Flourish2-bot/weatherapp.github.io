document.getElementById('yesBtn').onclick = function() {
    document.getElementById('formContainer').style.display = 'flex';
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
};

document.getElementById('noBtn').onclick = function() {
    alert("Thank you! Have a great day!");
    window.close();
};

document.getElementById('submitBtn').onclick = async function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;

    if (location.toLowerCase() == "") {
        document.getElementById('message').innerText = "Sorry, please enter a location.";
        return;
    }

    const apiKey = 'd8f61eaf9a106eff00136361655ff0da';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            const temperature = data.main.temp;
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `Hello ${name}, the temperature in ${location} is ${temperature}°C.`;
            weatherInfo.style.display = 'block';
            document.getElementById('formContainer').style.display = 'none';
        } else {
            document.getElementById('message').innerText = "Error fetching weather data.";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('message').innerText = "An error occurred. Please try again later.";
    }
};

document.getElementById('newsLink').onclick = function() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('newsPage').style.display = 'block';
};

document.getElementById('homeLink').onclick = function() {
    document.getElementById('newsPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'flex';
};