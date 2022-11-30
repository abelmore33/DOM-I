const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};



console.log('project wired!')

const navClass = document.querySelectorAll("header nav a")
const navLinkTexts = Object.values(siteContent.nav)
navClass.forEach((link,idx) =>{
  link.textContent = navLinkTexts[idx]
  link.className = ("italic")

})






const logo = document.querySelector("header img");
logo.setAttribute("src","http://localhost:9000/img/logo.png");

const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];
const buttonContent = document.querySelector(".cta-text button");
buttonContent.textContent = siteContent["cta"]["button"];
const ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute("src",siteContent["images"]["cta-img"]);

const topLeftHeading = document.querySelector(".text-content h4")
topLeftHeading.textContent = siteContent["main-content"]["features-h4"];
const topLeftParagraph = document.querySelector(".text-content p");
topLeftParagraph.textContent = siteContent["main-content"]["features-content"];

const topRightHeading = document.querySelector(".text-content:nth-of-type(2) h4");
topRightHeading.textContent = siteContent["main-content"]["about-h4"];
const topRightParagraph = document.querySelector(".text-content:nth-of-type(2) p");
topRightParagraph.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src",siteContent["images"]["accent-img"])

const bottomLeftHeading = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4")
bottomLeftHeading.textContent = siteContent["main-content"]["services-h4"]
const bottomLeftP = document.querySelector(".bottom-content .text-content:nth-of-type(1) p")
bottomLeftP.textContent = siteContent["main-content"]["services-content"]

 const bottomMiddleHeading = document.querySelector(" .bottom-content .text-content:nth-of-type(2) h4 ")
 bottomMiddleHeading.textContent = siteContent["main-content"]["product-h4"]
 const bottomMiddleP = document.querySelector(" .bottom-content .text-content:nth-of-type(2) p")
 bottomMiddleP.textContent = siteContent["main-content"]["product-content"]

 const bottomRightHeading = document.querySelector(" .bottom-content .text-content:nth-of-type(3) h4")
 bottomRightHeading.textContent = siteContent["main-content"]["vision-h4"]
 const bottomRightP = document.querySelector(" .bottom-content .text-content:nth-of-type(3) p")
 bottomRightP.textContent = siteContent["main-content"]["vision-content"]

const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"]
const address = document.querySelector(".contact p");
address.textContent = siteContent["contact"]["address"];
const phoneNumber = document.querySelector(".contact p:nth-of-type(2)");
phoneNumber.textContent= siteContent["contact"]["phone"];
const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent["footer"]["copyright"]
footerLink.classList.add("bold")

