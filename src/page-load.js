export default function loadHomePage() {

    // create the content wrapper
    const contentWrap = document.createElement('div');
    contentWrap.classList.add('content-wrapper');

    // create navigation then add logo and links
    const nav = document.createElement('nav');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerText = 'Dine 101';

    const navLinkWrap = document.createElement('div');
    navLinkWrap.classList.add('nav-links');
    const linkText = ["What's On", "Menu", "Book a table", "Contact"];
    const navLinks = linkText.map(text => {
        const link = document.createElement('div');
        link.classList.add('link-itm');
        link.innerText = text;
        navLinkWrap.appendChild(link);
    });

    nav.appendChild(logo);
    nav.appendChild(navLinkWrap);
    contentWrap.appendChild(nav)

    // create banner and add text
    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('banner');

    const h2 = document.createElement('h2');
    h2.innerText = "Dine 101";
    bannerDiv.appendChild(h2);

    const p = document.createElement('p');
    p.innerText = "Enjoy our delicous meals";
    bannerDiv.appendChild(p);

    const button = document.createElement('button');
    button.innerText = 'Book A Table';
    bannerDiv.appendChild(button);

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    const itm1 = document.createElement('p');
    itm1.innerText = 'Lephala Road';
    locationDiv.appendChild(itm1);
    const itm2 = document.createElement('p');
    itm2.innerText = 'Plot 7512, Block 6.';
    locationDiv.appendChild(itm2);
    bannerDiv.appendChild(locationDiv);

    contentWrap.appendChild(bannerDiv);

    // create about section
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(contentWrap);

    console.log('OOps Poops')
};