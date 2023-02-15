# MERN MISFITS

# TO-DO LIST

1. Introductions

2. Install Tools

3. Create react app

4. Create Git Repository

5. List Products

   1. create Products array
   2. add products images
   3. render products
   4. style products

6. Add Routing

   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen

7. Create Node.JS Server

   1. run npm init in root folder
   2. Update package.json set type:module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move product.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

8. Fetch Products from Backend

   1. set proxy in package.json
   2. npm install axious
   3. use state hook
   4. use effect hook
   5. use reducer hook

9. Manage State by Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from useReducer

10. Add BootStrap UI Framework

    1. npm install react-bootstrap bootstrap
    2. update App.js

11. Create Product and Rating Component

    1. Create Rating Component
    2. Create Product Component
    3. Use Rating Component in Product Component

12. Create Product Detail Screen

    1. Fetch products from backend
    2. create 3 columns for image, info and action

13. Create Loading and Message Component

    1. Create Loading component
    2. Use Spinner Component
    3. create message component
    4. create utils.js to define getError Function

14. Implement Add to Cart

    1. Create React Context
    2. Define Reducer
    3. Create store Provider
    4. Implement add to cart button click handler

15. Complete Add to Cart

    1. Check if item exists in cart
    2. Check count in stock in backend

16. Create Cart Screen

    1. Create 2 Columns
    2. Display Items List
    3. Create Action Column

17. Complete Cart Screen

    1. Click Handler for inc/dec item
    2. Click Handler for Removing Item
    3. Click Handler for Checkout

18. Create Signin Screen

    1. Create Signin Form
    2. Add Email and Password
    3. Add Signin Button

19. Connect MongoDB

    1. Install local MongoDB database
    2. Connect to MongoDB

20. Seed Sample Data

    1. Create Product Model
    2. Create User Model
    3. Create Seed Route
    4. Use Route in Server.js
    5. Seed Sample Product

21. Seed Sample Users

    1. Create User Model
    2. Seed Sample User
    3. Create User Routes

22. Create SignIn Backend API

    1. Create Sign In API
    2. NPM Install jsonwebtoken
    3. Define GenerateToken

23. Complete Sign In Screen

    1. Handle Submit Action
    2. Save Token in Store and Local Storage
    3. Show User's Name in Header.

24. Create Shipping Screen

    1. Create Form Input
    2. Handle Save Shipping Address
    3. Add Checkout Wizard Bar

25. Create Sign Up Screen

    1. Create Input Forms
    2. Handle Submit
    3. Create Backend API

26. Implement Select Payment Method Screen

    1. Create Input Forms
    2. Handle Submit

27. Create Place Order Screen

    1. Show cart items, payment and address
    2. Handle Product Order Action
    3. Create Order create API

28. Implement Place Order Action

    1. Handle Place Order Action
    2. Create Order created API

29. Create Order Screen

    1. Create Backend API for order/:id
    2. Fetch Order API in frontend
    3. Show Order Information in 2 columns

30. Pay order by PayPal

    1. Generate PayPal Client ID
    2. Create API to return Client ID
    3. Install React-PayPal-JS
    4. Use PayPalScriptProvidor in index.js
    5. Use PayPalScriptReducer in Order Screen
    6. Implement loadPayPalScript function
    7. Render PayPal Button
    8. Implement onApprove Payment Function
    9. Create pay order API in backend

31. Display Order History

    1. Create Order History Screen
    2. Create Order History API
    3. Use API in the backend

32. Create Profile Screen
    1. Get User Info from Context
    2. Show User Information
    3. Create User Update API
    4. Update User Info
