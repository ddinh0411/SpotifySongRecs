# SpotifySongRecs

## Project Overview
This is a remaster of an older project called [SpotifyRecs](https://github.com/laurenszlosek/spotifyRecs). This was a group project completed Spring 2023 and was a Spotify recommendation app that would take a song link and then recommend similar songs from a database based off of songs with similar metadata metrics. This database was defined by the users, so users could contribute and add in more songs to the database to expand the app's variety of songs. Although we did have a functional application there were limitations on the final product, namely on the fact that it was hardcoded and required installation onto the user's local machine and not truly on the web app.

This project will be a fully web-based implementation and improvement of the old project's code and logic based off of new knowledge and skills that me and my team didn't have access to prior. This project will also be done entirely by me as a showcase of my skills and improvements in web-engineering and full-stack development.

## Features

The main features from the previous iteration should roughly be the same with a Site that serves as the front-end, a database that will have records of the songs to recommend to the user, and the backend logic to grab the necessary information from either Spotify's API or the database and display it on the frontend. The major differences is where each of these components are hosted and stored and also additional features such as new and updated displays for the frontend, and a redesigned database to store more information from the API and potentially more tables to keep track of more data.

## Technologies Used

This project will feature technologies that the original didn't utilize:

- Flask -> React.js
- sqlite 3 -> supabase
- local machine -> Vercel
- Spotipy (Spotify API Python Library) -> Spotify Web API

## Credits

There are several Spotify Song Recommendation Sites and Apps out there but the one that this project will be based off of is my own [SpotifyRecs](https://github.com/laurenszlosek/spotifyRecs).


<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
