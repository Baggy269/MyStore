# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Installation and launch

Run `npm install` to install the required dependencies then run `ng serve` to launch the application on `http://localhost:4200/`.

## App Structure

Components: Header Component and Router Outlet in the App Component. Router Outlet has the following routes: 'products' which displays a grid of Product Item Components, 'products/:id' which displays all the data of a specific product, 'checkout' which displays the cart and the chekout form and 'confirmation' which is displayed after and order is placed.

Models: Product model that has a name, id, description, image url and a price. CartItem model that has a product and a quantity.

Services: Products Service that fetches the products from the data.json file. Cart Service that is responsible for updating the cart contents in the components and storing it in local storage.

## App Overview

The app starts on the homepage (products-list) component where the products are fetched and presented as a series of (product-item) components. Each item can be added to the cart if not already in it or removed/updated if it is. On the top is a fixed header component that is used to navigate to the home component by clicking on 'My Store' or the checkout component by clicking on 'Cart'. The checkout component displays the items in the cart (stored in the local storage) and the total and has a form for entering the name, address and card no. If the input data is valid, the user can place the order which redirects to a confirmation page and clears the cart.
