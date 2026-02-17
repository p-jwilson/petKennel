import happyDog from "./assets/happy_dog.png";
import angryDog from "./assets/angry_dog.png";
import lonelyDog from "./assets/lonely_dog.png";

import happyTurtle from "./assets/happy_turtle.png";
import angryTurtle from "./assets/angry_turtle.png";
import lonelyTurtle from "./assets/lonely_turtle.png";

import happyBird from "./assets/happy_bird.png";
import angryBird from "./assets/angry_bird.png";
import lonelyBird from "./assets/lonely_bird.png";

export const initialData = [
  {
    id: 1,
    name: "Luna",
    age: 3,
    gender: "Female",
    lifeExpectancy: "12–15 years",
    species: "Dog",
    breed: "Golden Retriever",
    petImg: [happyDog, angryDog, lonelyDog],
    mood: ["Happy", "Angry", "Lonely"],
  },
  {
    id: 2,
    name: "Mave",
    age: 12,
    gender: "Male",
    lifeExpectancy: "30–50 years",
    species: "Turtle",
    breed: "Red-Eared Slider",
    petImg: [happyTurtle, angryTurtle, lonelyTurtle],
    mood: ["Happy", "Angry", "Lonely"],
  },
  {
    id: 3,
    name: "Emma",
    age: 2,
    gender: "Female",
    lifeExpectancy: "10–15 years",
    species: "Parrot",
    breed: "Budgerigar (Parakeet)",
    petImg: [happyBird, angryBird, lonelyBird],
    mood: ["Happy", "Angry", "Lonely"],
  },
];
