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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// setup Nav Bar
const navBarLinks = document.querySelectorAll("header nav a");
navBarLinks.forEach((anchor, idx) => {
   anchor.style.color = "green";
   anchor.textContent = siteContent.nav[`nav-item-${idx+1}`];
});

//Add extra links
const setupAnchor = (text, link) => {
   const rtnAnchor = document.createElement("a");
   rtnAnchor.href = link || "#";
   rtnAnchor.textContent = text || "Click Me!";
   rtnAnchor.style.color = "green";

   return rtnAnchor;
};
const navBar = document.querySelector("header nav");
navBar.appendChild( setupAnchor(null, "https://www.google.com/") );
navBar.prepend( setupAnchor("YouTube", "https://www.youtube.com/") );

// Setup cta section
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");
const titleTxt = siteContent.cta["h1"].split(" ");
ctaH1.innerHTML = `${titleTxt[0]}<br />${titleTxt[1]}<br />${titleTxt[2]}`;
ctaButton.textContent = siteContent.cta["button"];
ctaImg.src = siteContent.cta["img-src"];

//setup main content
//-- top content
const topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

//-- middle image
const midImage = document.querySelector("#middle-img");
midImage.src = siteContent["main-content"]["middle-img-src"];

//-- bottom content
const bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].children[1].textContent = siteContent["main-content"]["vision-content"];

//setup contact info
const contactH4 = document.querySelector(".contact h4");
const contactInfo = document.querySelectorAll(".contact p");
const address1 = siteContent.contact.address.substr(0, 18);
const address2 = siteContent.contact.address.substr(19);
contactH4.textContent = siteContent.contact["contact-h4"];
contactInfo[0].innerHTML = `${address1} <br /> ${address2}`;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

//setup footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;