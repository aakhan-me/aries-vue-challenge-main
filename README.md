## Options Strategy Risk & Reward Analysis
This project implements a Vue.js component for analyzing options strategy risk and reward. It visualizes the profit/loss profile of options contracts based on provided data using a simple line graph rendered with HTML5 Canvas.

## Installation
Clone the repository and install dependencies using npm:

## bash
Copy code
git clone <repository-url>
cd <project-folder>
npm install
Usage
To run the project locally, use the following command:

## bash
Copy code
npm run serve
Visit http://localhost:8080 in your browser to view the application.

## Implementation Details
This project is an implementation of the Vue.js assessment provided by Aries Financial Inc. The CodingChallenge.vue component accepts an array of options contract data through props and calculates:

Max Profit
Max Loss
Break Even Points
It then visualizes this data using a line graph to display the profit/loss profile based on different underlying prices.

## Technologies Used
Vue.js
HTML5 Canvas API
Project Structure

## The main files and directories included in the project are:

src/components/CodingChallenge.vue: Vue component implementing the options strategy analysis.
src/App.vue: Main Vue application file, integrating CodingChallenge.vue.
src/main.js: Entry point of the Vue application.

## Contributing
Contributions are welcome! If you find any issues or want to enhance the functionality, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.