
// array for each flavour
const flavors = [
    {
        name: "pink lemonade",
        bgcolor: "#F6F6F6",
        containerColor: "rgba(240, 41, 124, 0.178)",
        containerShadow: "0 20px 50px rgba(193, 59, 89, 0.35), 0 8px 20px rgba(193, 59, 89, 0.2)",
        mainColor: "#C13B59",
        image: "pink Lemonade.png",
        imageShadow: "drop-shadow(0 20px 30px rgba(193, 59, 89, 0.4))",
        circle:"#C13859"
    },
    {
        name: "pomegranate",
        bgcolor: "#F6F6F6",
        containerColor: "rgba(175, 6, 6, 0.18)",
        containerShadow: "0 20px 50px rgba(163, 38, 56, 0.35), 0 8px 20px rgba(163, 38, 56, 0.2)",
        mainColor: "#92091d",
        image: "pomegrate.png",
        imageShadow: "drop-shadow(0 20px 30px rgba(163, 38, 56, 0.4))",
        circle:"#92091d"

    },
    {
        name: "blueberry",
        bgcolor: "#F6F6F6",
        containerColor: "rgba(91, 75, 138, 0.178)",
        containerShadow: "0 20px 50px rgba(91, 75, 138, 0.35), 0 8px 20px rgba(91, 75, 138, 0.2)",
        mainColor: "#5B4B8A",
        image: "blueberry.png",
        imageShadow: "drop-shadow(0 20px 30px rgba(91, 75, 138, 0.4))",
        circle:"#5B4B8A"
    },
    {
        name: "pineapple",
        bgcolor: "#1A1A1A",
        containerColor: "rgba(212, 175, 55, 0.178)",
        containerShadow: "0 20px 50px rgba(212, 175, 55, 0.35), 0 8px 20px rgba(212, 175, 55, 0.2)",
        mainColor: "#D4AF37",
        image: "pinapple.png",
        imageShadow: "drop-shadow(0 20px 30px rgba(212, 175, 55, 0.4))",
        circle:"#D4AF37"
    },
    {
        name: "apple",
        bgcolor: "#1A1A1A",
        containerColor: "rgba(181, 101, 29, 0.178)",
        containerShadow: "0 20px 50px rgba(181, 101, 29, 0.35), 0 8px 20px rgba(181, 101, 29, 0.2)",
        mainColor: "#ebcb90",
        image: "apple.png",
        imageShadow: "drop-shadow(0 20px 30px rgba(181, 101, 29, 0.4))",
        circle:"#ebcb90"
    }
];
 
// declare elements to change theme
let currentIndex = 0;
const btn = document.getElementById("action");
const body = document.getElementById("body");
const container = document.getElementById("container");
const content = document.getElementById("content");
const canImg = document.getElementById("canImg");
const logo = document.querySelector(".container nav .logo");
const navLinks = document.querySelectorAll(".container nav li a");
const blob = document.getElementById("blob");
 
btn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % flavors.length;
    const flavor = flavors[currentIndex];
 
    body.style.backgroundColor = flavor.bgcolor;
    btn.style.backgroundColor = flavor.mainColor;
    content.style.color = flavor.mainColor;
    container.style.backgroundColor = flavor.containerColor;
    container.style.boxShadow = flavor.containerShadow;
    canImg.style.filter = flavor.imageShadow;
    canImg.src = flavor.image;
    blob.style.backgroundColor = flavor.circle;
 
    logo.style.color = flavor.mainColor;
    navLinks.forEach(link => {
        link.style.color = flavor.mainColor;
    });
});
 