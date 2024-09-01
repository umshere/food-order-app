# Food Order App

A React-based food ordering application that allows users to browse food items, add them to a cart, and place orders. This project demonstrates the use of modern React practices, including hooks, context API, and component-based architecture.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Tools](#development-tools)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a variety of food items with descriptions and prices.
- Add items to the cart with quantity adjustments.
- View the cart summary and proceed to checkout.
- Responsive design for a seamless experience on mobile and desktop devices.

## Demo

Check out the live demo of the application [here](#). (Replace `#` with your live demo link if available)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/umshere/food-order-app.git
   cd food-order-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

   This will start the app in development mode on [http://localhost:3000](http://localhost:3000).

## Usage

- **Browse Food Items:** View the available food items and their details.
- **Add to Cart:** Click on the "Add to Cart" button to add items to your shopping cart.
- **Checkout:** Review your order in the cart and proceed to checkout.

## Technologies Used

- **React (v18.0.0):** A JavaScript library for building user interfaces.
- **React DOM (v18.0.0):** For rendering React components to the DOM.
- **React Scripts (v4.0.1):** Provides a set of scripts from Create React App to simplify development.
- **Testing Library:** Includes `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event` for testing React components.
- **Web Vitals:** A library for measuring essential metrics of web performance.

## Scripts

The following scripts are available in this project:

- **`start`**: Runs the app in development mode.

  ```sh
  npm start
  ```

- **`build`**: Builds the app for production to the `build` folder.

  ```sh
  npm run build
  ```

- **`test`**: Launches the test runner in interactive watch mode.

  ```sh
  npm test
  ```

- **`eject`**: Removes the single build dependency from your project.

  ```sh
  npm run eject
  ```

  > **Warning:** This is a one-way operation. Once you `eject`, you can’t go back!

## Dependencies

- **React:** ^18.0.0
- **React DOM:** ^18.0.0
- **React Scripts:** 4.0.1
- **@testing-library/jest-dom:** ^5.11.6
- **@testing-library/react:** ^11.2.2
- **@testing-library/user-event:** ^12.5.0
- **Web Vitals:** ^0.2.4

## Development Tools

- **ESLint Configuration:**
  The project uses ESLint with the following configuration:

  ```json
  {
    "extends": ["react-app", "react-app/jest"]
  }
  ```

- **Browserslist:**
  This configuration helps to specify which browsers the application should support:

  ```json
  {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
  ```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
