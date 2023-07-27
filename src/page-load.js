import BigPhoto from './img/chinese.jpg';
import IndianFood from './img/indian-food.jpg';
import Pizza from './img/pizza.jpg';
import Spinach from './img/water-spinach.jpg';
import Meal from './img/meal.jpg';
import Food from './img/good-food.jpg';
import Nem from './img/nem.jpg'; 
import RedWine from './img/red-wine.jpg';

function createNavigation() {
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

    return nav;
}

function loadHomePage() {

    // create the content wrapper
    const contentWrap = document.createElement('div');
    contentWrap.classList.add('content-wrapper');

    const nav = createNavigation();
    contentWrap.appendChild(nav)

    // create banner and add text
    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('banner');

    const h2 = document.createElement('h2');
    h2.innerText = "Dine 101";
    bannerDiv.appendChild(h2);

    const p1 = document.createElement('p');
    p1.innerText = "Enjoy our delicous meals";
    bannerDiv.appendChild(p1);

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

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const h1 = document.createElement('h1');
    h1.innerText = 'About Us';
    headerDiv.appendChild(h1);

    const p2 = document.createElement('p')
    p2.innerText = 'The finest cuisine in town.';
    headerDiv.appendChild(p2);
    aboutDiv.appendChild(headerDiv)

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    const p3 = document.createElement('p');
    p3.innerText = "Welcome to Dine 101, a classy and elegant dining destination in the heart of Gabs. Our passionate chefs meticulously craft a menu that blends classic and contemporary culinary traditions, offering a symphony of flavors and textures that will captivate your senses.";
    textDiv.appendChild(p3);
    aboutDiv.appendChild(textDiv);

    contentWrap.appendChild(aboutDiv);

    // grid header
    const mealH2 = document.createElement('h2');
    mealH2.innerText = "See Our Delicious Meals"
    mealH2.setAttribute('style', 'text-align: center;');
    contentWrap.appendChild(mealH2);

    // photo grid
    const grid = document.createElement('div');
    grid.classList.add('photo-grid');

    const bigPhotoDiv = document.createElement('div');
    bigPhotoDiv.classList.add('big-photo');
    const bigPhoto = new Image();
    bigPhoto.src = BigPhoto;
    bigPhotoDiv.appendChild(bigPhoto);
    grid.appendChild(bigPhotoDiv);

    const smallPhotosDiv = document.createElement('div');
    smallPhotosDiv.classList.add('small-photos');
    const imageLinks = [IndianFood, Pizza, Spinach, Meal, Food, Nem];

    imageLinks.forEach(link => {
        const photo = new Image();
        photo.src = link;
        smallPhotosDiv.appendChild(photo);
    });
    grid.appendChild(smallPhotosDiv);

    contentWrap.appendChild(grid);


    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundImage = `url(${RedWine})` 
    contentDiv.appendChild(contentWrap);
};

export {
    loadHomePage,
};