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
const firstLink = document.querySelector("nav a");
const secondLink = document.querySelector("nav a:nth-of-type(2)")
const thirdLink = document.querySelector("nav a:nth-of-type(3)")
const fourthLink = document.querySelector("nav a:nth-of-type(4)")
const fifthLink = document.querySelector("nav a:nth-of-type(5)")
const sixthLink = document.querySelector("nav a:nth-of-type(6)")

firstLink.textContent = siteContent["nav"]["nav-item-1"];
secondLink.textContent = siteContent["nav"]["nav-item-2"];
thirdLink.textContent = siteContent["nav"]["nav-item-3"];
fourthLink.textContent = siteContent["nav"]["nav-item-4"];
fifthLink.textContent = siteContent["nav"]["nav-item-5"];
sixthLink.textContent = siteContent["nav"]["nav-item-6"];

const logo = document.querySelector("header img");
logo.setAttribute("src","http://localhost:9000/img/logo.png");

const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];
const buttonContent = document.querySelector(".cta-text button")
buttonContent.textContent = siteContent["cta"]["button"]
const ctaImage = document.querySelector("#cta-img")
ctaImage.setAttribute("src",siteContent["images"]["cta-img"])



