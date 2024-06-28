const container = document.getElementById("container");
const logo = document.getElementById("logo");
const darkMode = document.getElementById("dark_mode");
const lightMode = document.getElementById("light_mode");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const header = document.getElementById("header");
const heroLeft = document.getElementById("hero_left");
const heroRight = document.getElementById("hero_righ");
const title = document.getElementById("title");
const text = document.getElementById("text");
const submit = document.getElementById("submit");
const img = document.getElementById("img");
const personImage = document.getElementById("person_Image");
const backgroundImage = document.getElementById("background_Image");
const titleEl = document.getElementById("title2");
const textEl = document.getElementById("text2");
const imgEl = document.getElementById("img2");
const sunEl = document.getElementById("sunEl")
const moonEl = document.getElementById("moonEl")


moon.addEventListener('click', function() {
    heroLeft.style.backgroundColor = "black"
    moon.style.color = "rgba(191,127,4,1)"
    sun.style.color = "gray"
    title.style.color = "white"
    text.style.color = "white"
})


sun.addEventListener('click', function() {
    heroRight.style.backgroundColor = "black"
    title.style.color = "white"
    text.style.color = "white"
    moon.style.color = "gray"
    sun.style.color = "rgba(191,127,4,1)"
})