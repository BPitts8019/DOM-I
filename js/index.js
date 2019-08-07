const siteContent = {
   "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
   },
   "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
   },
   "main-content": {
      "features-h4": "Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4": "About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
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
      "copyright": "Copyright Great Idea! 2018"
   },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// setup Nav Bar
let navBarLinks = document.querySelectorAll("header nav a");
navBarLinks.forEach((anchor, idx) => {
   anchor.style.color = "green";
   anchor.textContent = siteContent.nav[`nav-item-${idx+1}`];
});

//Add extra links
let setupAnchor = (text, link) => {
   let rtnAnchor = document.createElement("a");
   rtnAnchor.href = link || "#";
   rtnAnchor.textContent = text || "Click Me!";
   rtnAnchor.style.color = "green";

   return rtnAnchor;
};
let navBar = document.querySelector("header nav");
navBar.appendChild( setupAnchor(null, "https://www.google.com/") );
navBar.prepend( setupAnchor("YouTube", "https://www.youtube.com/") );

// Setup cta section
let ctaH1 = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaImg = document.querySelector("#cta-img");
ctaH1.textContent = siteContent.cta["h1"];
ctaButton.textContent = siteContent.cta["button"];
ctaImg.src = siteContent.cta["img-src"];

//setup main content
//-- top content
let topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

//-- middle image
let midImage = document.querySelector("#middle-img");
midImage.src = siteContent["main-content"]["middle-img-src"];

//-- bottom content
let bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].children[1].textContent = siteContent["main-content"]["vision-content"];

//setup contact info
let contactH4 = document.querySelector(".contact h4");
let contactInfo = document.querySelectorAll(".contact p");
contactH4.textContent = siteContent.contact["contact-h4"];
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

//setup footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;