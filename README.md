# Memory game

## Demo live

[Memory game](https://memory-game-mateoolarte.vercel.app/)

## Getting Started

Install dependencies

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run tests:

```bash
npm run dev
npm run cypress:open
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Onboarding form where you can setup a username and level (Easy, Medium, and Hard)
- Statistics to show the success & errors attempts
- Ability to edit the username
- Responsive design
- Successfull message when the game was ended and the posibility to change the level
- Cache the data from api
- Loading & Error states
- Custom UI/UX
- Deployed in Vercel through CI so every commit to the main branch will run the pipeline to deploy an updated version
- Performance & Accesibility compliant you can find a report made by Lighthouse in the `assets` folder

## Tech Stack

- NextJS
- React
- useReducer & context to state management
- Localstorage to save the user config
- Tailwind CSS
- Cypress

## Next steps

- Add Typescript
- Leaderboard
- The ability to change the tematic of cards (Superheroes, cities, etc)
- Redux to manage complex state management
