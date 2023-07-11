# Storefront App

This is an e-commerce storefront application built using React and Redux. The app allows users to browse products, add them to the shopping cart, and view the cart contents. It implements features such as category selection, product filtering, and cart management.

## Getting Started

Follow these instructions to get the storefront app up and running on your local machine.

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd storefront
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Features

- View a list of categories
- Select a category to see related products
- Add products to the shopping cart
- View the contents of the shopping cart
- Change the quantity of items in the cart
- Remove items from the cart

## UML Diagrams

### Lab 36
![Lab 31](assets/lab36.png)

### Code Sandbox

[Code Sandbox 37](https://codesandbox.io/p/github/nickmullaney/storeApp/cart?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljt719pe00ji356p34b13d1y%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljt719pe00jk356pjxjt3lan%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cljt719pe00ji356p34b13d1y%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljt719pe00jh356p3kze3upj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522cljt719pe00ji356p34b13d1y%2522%252C%2522activeTabId%2522%253A%2522cljt719pe00jh356p3kze3upj%2522%257D%252C%2522cljt719pe00jk356pjxjt3lan%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljt719pe00jj356pc6cpx0ae%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%2522%257D%255D%252C%2522id%2522%253A%2522cljt719pe00jk356pjxjt3lan%2522%252C%2522activeTabId%2522%253A%2522cljt719pe00jj356pc6cpx0ae%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

[Code Sandbox 38](https://codesandbox.io/p/github/nickmullaney/storeApp/fixedApi?file=%2FREADME.md%3A1%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cljyscj3h01lt356p19bkzlr9%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cljyscj3h01lo356pncivbnii%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cljyscj3h01lq356pef1z3hpp%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cljyscj3h01ls356pd2vwqjqz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cljyscj3h01lo356pncivbnii%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljyscj3h01ln356pnlkw7bsf%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522view%2522%253A%2522code%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cljyscj3h01lo356pncivbnii%2522%252C%2522activeTabId%2522%253A%2522cljyscj3h01ln356pnlkw7bsf%2522%257D%252C%2522cljyscj3h01ls356pd2vwqjqz%2522%253A%257B%2522id%2522%253A%2522cljyscj3h01ls356pd2vwqjqz%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljyscj3h01lr356py24i7h1s%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cljyscj3h01lr356py24i7h1s%2522%257D%252C%2522cljyscj3h01lq356pef1z3hpp%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljyscj3h01lp356p135opxp1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522cljyscj3h01lq356pef1z3hpp%2522%252C%2522activeTabId%2522%253A%2522cljyscj3h01lp356p135opxp1%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)
## Components

The app is structured into the following components:

- **Header**: Displays the application title and the shopping cart icon with a counter indicating the number of items in the cart. Clicking the cart icon opens the cart modal.
- **Categories**: Renders a list of categories. Clicking on a category updates the active category in the store.
- **Products**: Displays a grid of products based on the selected category. Each product card shows the name, description, and price. Clicking the "Add to Cart" button adds the product to the cart.
- **SimpleCart**: Shows the items in the user's cart. Each item card displays the title, price, and total price (quantity * price). The user can remove items from the cart, and the total price is calculated.

## Redux Store

The application uses Redux for state management. The store is divided into multiple reducers:

- **categories**: Manages the list of categories and the active category.
- **products**: Stores the list of products and filters them based on the active category.
- **cart**: Handles the cart items and provides actions to add and remove items from the cart.

## File Structure

The main files and directories in the project are organized as follows:

- `src/components`: Contains the different components used in the app.
- `src/store`: Includes the Redux store configuration and the individual reducer files.
- `src/App.jsx`: The entry point of the application where the components are rendered.

## Technologies Used

The storefront app utilizes the following technologies:

- React
- Redux
- Material-UI
- HTML
- CSS
- JavaScript

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[Your Name] - Lead Developer

## Acknowledgments

Thanks to [ChatGPT](https://github.com/openai) for providing assistance with code and troubleshooting.