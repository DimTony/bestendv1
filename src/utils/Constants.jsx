import standardPic from "../assets/images/standard.jpeg";
import executivePic from "../assets/images/executive.jpeg";
import superExecutivePic from "../assets/images/superExecutive.jpeg";
import jollof from "../assets/images/jollof-rice-with-grilled-chicken.png";
import pounded from "../assets/images/pounded-yam-and-egusi.png";
import pepper from "../assets/images/pepper-soup-goat-or-fish.png";
import fried from "../assets/images/yam-plantain-eggs.png";
import efo from "../assets/images/efo-riro-vegetable-soup-with-beef.png";
import amala from "../assets/images/amala-with-gbegiri-and-ewedu-soup.png";
import ofada from "../assets/images/ofada-rice-with-ayamase-pepper-sauce.png";
import palm from "../assets/images/fresh-palm-wine.png";
import chapman from "../assets/images/chapman-classic-nigerian-cocktail.png";
import akara from "../assets/images/akara-bean-fritters-with-pap.png";
import grilled from "../assets/images/grilled-steak-and-herb.png";
import caesar from "../assets/images/classic-caesar-salad.png";
import seafood from "../assets/images/fresh-seafood-platter.png";
import pizza from "../assets/images/wood-fired-margherita-pizza.png";
import burger from "../assets/images/gourmet-cheeseburger-with-truffle-fries.png";
import spag from "../assets/images/spaghetti-carbonara.png";
import cocktail from "../assets/images/signature-cocktails.png";
import juice from "../assets/images/freshly-squeezed-juices.png";
import beer from "../assets/images/craft-beer-selection.png";
import choc from "../assets/images/decadent-chocolate-lava-cake.png";
import { BiDrink } from "react-icons/bi";
import { PiBeerBottle } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

export const texts = [
  "MOST RELAXING PLACE",
  "THE BEST ESCAPE",
  "A PERFECT GETAWAY",
  "YOUR HOME AWAY FROM HOME",
];

export const impeccables = [
  {
    title: "Attentive Staff",
    description:
      "Our dedicated team is committed to anticipating your every need and ensuring your stay is flawless.",
  },
  {
    title: "Personalized Experience",
    description:
      "From arranging private excursions to curating in-room amenities, we tailor each detail to your preferences.",
  },
  {
    title: "Genuine Hospitality",
    description:
      "Warm smiles, genuine care, and unparalleled attention to detail are the hallmarks of our service.",
  },
];

export const exclusives = [
  {
    name: "Spacious Rooms",
    description:
      "Our guest rooms and suites offer ample space to relax and unwind in refined comfort.",
  },
  {
    name: "Thoughtful Amenities",
    description:
      "From high-end linens to state-of-the-art technology, every detail is designed for your ultimate satisfaction.",
  },
  {
    name: "Stunning Views",
    description:
      "Many of our accommodations offer breathtaking vistas of the city skyline or surrounding natural beauty.",
  },
  {
    name: "Elegant Decor",
    description:
      "Our rooms and suites exude a timeless elegance, creating a tranquil and luxurious ambiance.",
  },
];

export const roomInfo = [
  {
    name: "Standard Room",
    description:
      "Comfort meets value! Relax in our well-appointed Standard Room, perfect for a peaceful and affordable stay.",
    image: standardPic,
    price: 23000,
  },
  {
    name: "Executive Room",
    description:
      "Elevate your experience! Our Executive Room offers extra space, stylish decor, and added amenities for a touch of luxury.",
    image: executivePic,
    price: 30000,
  },
  {
    name: "Super Executive Room",
    description:
      "Indulge in ultimate comfort! The Super Executive Room boasts premium features, modern elegance, and stunning views for an unforgettable stay.",
    image: superExecutivePic,
    price: 50000,
  },
];

export const carouselData = [
  {
    id: 1,
    title: "Jollof Rice with Grilled Chicken",
    imageUrl: jollof,
  },
  {
    id: 2,
    title: "Pounded Yam with Egusi Soup",
    imageUrl: pounded,
  },
  {
    id: 3,
    title: "Pepper Soup (Goat or Fish)",
    imageUrl: pepper,
  },
  {
    id: 4,
    title: "Fried Plantain (Dodo) or Yam with Eggs",
    imageUrl: fried,
  },
  {
    id: 5,
    title: "Efo Riro (Vegetable Soup) with Beef",
    imageUrl: efo,
  },
  {
    id: 6,
    title: "Amala with Gbegiri and Ewedu Soup",
    imageUrl: amala,
  },
  {
    id: 7,
    title: "Ofada Rice with Ayamase (Pepper Sauce)",
    imageUrl: ofada,
  },
  {
    id: 8,
    title: "Fresh Palm Wine",
    imageUrl: palm,
  },
  {
    id: 9,
    title: "Chapman (Classic Nigerian Cocktail)",
    imageUrl: chapman,
  },
  {
    id: 10,
    title: "Akara (Bean Fritters) with Pap",
    imageUrl: akara,
  },
  {
    id: 11,
    title: "Grilled Steak with Herb Butter",
    imageUrl: grilled,
  },
  {
    id: 12,
    title: "Classic Caesar Salad",
    imageUrl: caesar,
  },
  {
    id: 13,
    title: "Fresh Seafood Platter",
    imageUrl: seafood,
  },
  {
    id: 14,
    title: "Wood-Fired Margherita Pizza",
    imageUrl: pizza,
  },
  {
    id: 15,
    title: "Gourmet Cheeseburger with Truffle Fries",
    imageUrl: burger,
  },
  {
    id: 16,
    title: "Spaghetti Carbonara",
    imageUrl: spag,
  },
  {
    id: 17,
    title: "Signature Cocktails (Mojito, Martini, etc.)",
    imageUrl: cocktail,
  },
  {
    id: 18,
    title: "Freshly Squeezed Juices",
    imageUrl: juice,
  },
  {
    id: 19,
    title: "Craft Beer Selection",
    imageUrl: beer,
  },
  {
    id: 20,
    title: "Decadent Chocolate Lava Cake",
    imageUrl: choc,
  },
];

export const experiences = [
  {
    title: "Breakfast",
    description:
      "Start your day with our delectable breakfast menu, featuring fresh, locally sourced ingredients.",
  },
  {
    title: "Lunch",
    description:
      "Enjoy a midday meal crafted with care, perfect for a business meeting or a leisurely break.",
  },
  {
    title: "Dinner",
    description:
      "Indulge in our exquisite dinner menu, showcasing the finest seasonal and local produce.",
  },
];

export const crafts = [
  {
    icon: <BiDrink fontSize="3rem" color="#c5a880" />,
    title: "Craft Cocktails",
    description:
      "Sip on expertly crafted cocktails made with premium spirits and fresh, seasonal ingredients.",
  },
  {
    icon: <PiBeerBottle fontSize="3rem" color="#c5a880" />,
    title: "Fine Wines",
    description:
      "Explore our extensive wine list featuring a selection of the finest vintages from around the world.",
  },
  {
    icon: <RxHamburgerMenu fontSize="3rem" color="#c5a880" />,
    title: "Relaxing Ambiance",
    description:
      "Unwind in our inviting bar and lounge, offering a cozy and sophisticated atmosphere.",
  },
];

export const seasonals = [
  {
    title: "Farm-to-Table",
    description:
      "Our menu highlights the best of the season, sourcing ingredients from local purveyors and farmers.",
  },
  {
    title: "Sustainable Practices",
    description:
      "We are committed to supporting the local economy and reducing our environmental impact.",
  },
  {
    title: "Culinary Creativity",
    description:
      "Our chefs use these fresh, high-quality ingredients to create innovative and flavorful dishes.",
  },
];
