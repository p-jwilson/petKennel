# Paul’s Exotic Animal Menagerie
*A React-based interactive pet dashboard*

This repository contains a small React application that displays three animal profiles in a kennel-style dashboard. Each profile card includes basic animal info and a button that cycles the animal’s mood, updating both the mood text and the displayed image.

---

## What the user sees

- A pale pink, full-screen page with a centered header: **Paul’s Exotic Animal Menagerie**
- Three animal “cards” shown in a centered 3-column layout
- Each card shows:
  - Name
  - Species
  - Breed
  - Age
  - Gender
  - Life Expectancy
  - Mood
  - An image that changes with mood
- Clicking the button cycles:

**Happy → Angry → Lonely → Happy**

Button labels cycle with the mood:
- Happy → **Make Angry**
- Angry → **Feed Treat**
- Lonely → **Give Hug**

---

## Tech Stack

- React (Class Components)
- Node.js + npm
- ES6 JavaScript
- CSS Grid / Flexbox (inline styling)
- Git / GitHub for version control

---

## Project Structure

```
src/
 ├── App.jsx               # Parent component (state + layout control)
 ├── childComponent.jsx    # Individual animal card
 ├── data.js               # Static pet data and image imports
 └── assets/               # Mood-based images for each animal
```

---

## How It Works

The application follows a simple React data flow:

1. `App.jsx` stores the list of animals in state.
2. Each animal starts with:
   ```
   curImg = 0
   curMood = 0
   ```
3. Clicking a button in `childComponent.jsx` triggers a callback to the parent.
4. The parent updates the selected animal using `.map()` and returns a new object:
   ```js
   return { ...pet, curImg: nextValue, curMood: nextValue };
   ```
5. React re-renders automatically with the new image and mood text.

This demonstrates React’s **unidirectional data flow** and immutable state updates.

---

## Installation & Running Locally

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd petKennel
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### 4. Open in your browser
```
http://localhost:3000
```

The app will hot-reload automatically when changes are made.

---

## Learning Goals

This exercise demonstrates:

- Building UI with React class components
- Passing data via props
- Managing state without mutation
- Handling events from child → parent
- Dynamically rendering assets based on application state
- Creating a clean, centered layout without external UI frameworks

---

## Attribution

Initial project scaffold adapted from instructional material by  
**Professor Hakeem Jones, Morehouse College**  
and modified to implement the Exotic Animal Menagerie dashboard.

---

## Future Improvements (Optional)

- Convert to React functional components + Hooks
- Add responsive mobile layout
- Persist pet state using local storage
- Expand to dynamic data from an API

