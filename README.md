# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

*(npm run build) and then import files to github and deploy for react apps.
/* WeatherApp.jsx acts as a parent component for searchbox and info box, to connect the two component we pass props to these components
. Specifically here-- weatherinfo state variable is created that is passed as a prop{info}={weatherInfo} to infobox , it stores the information regarding weather
data that is to be displayed. For getting the SearchBox data we pass a function called updateInfo that sets the weatherinfo to the newInfo obtained 
from searchbox.jsx provided by the api, this fn is passed as prop and executed with the value (result) in searchbox.jsx */ 
