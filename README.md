<img src="https://socialify.git.ci/nokuphiwa02/Shopping-List-Project/image?
  language=1&owner=1&name=1&stargazers=1&theme=Light"
  alt="Shopping-List-Project" width="640" height="320" />

## 🛒 Smart Shopping List
 is a modern and responsive web application designed to make everyday shopping easier and more organised. It allows users to create, manage, update, and remove shopping items while keeping track of everything they need to purchase. Built with React, TypeScript, and Redux Toolkit, the application provides efficient state management and a smooth user experience. Its clean interface and responsive design make it easy to use across different devices. The project demonstrates my skills in front-end development, reusable components, and modern React application development.


## 🚀 Quick Start
To run this project on your computer you need to follow these simple 

## steps:
1. Clone the repository 
git clone https://github.com
2. Install dependencies 
(npm install)
3. Start the development server npm start and run it in your terminal (npm run dev)
The app should automatically open in your browser at http://localhost:5173.

## steps of running server
1. Clone the repository 
git clone https://github.com
2. npm install json-server
3. Start the development server npm start and run it in your terminal 
(npx json-server --watch db.json )
4. The app should automatically open in your browser at http://localhost:3000/.

## 🛠️ Features
-Add Items: Quick input to add new items to your shopping list.
-Toggle Status: Mark items as "bought" or "pending" with a single click.
-Remove Items: Delete items instantly from the list.
-Clear All: Reset button to wipe the entire list clean.
-Filters: View all items, only bought items, or only pending items.
-Total Counter: Live tracking of total items and remaining items.

## 🏗️ Tech Stack
 -Redux Toolkit 
 -CSS  
 -Vite
 -Git
 -GitHub
 -TypeScript

## 📂 Project Structure

├── app/
│   └── store.ts         
├── redux/
│   └── features/
│       └── RegisterSlice.ts
        └── LoginSlice.ts
        └── ProfileSlice.ts
        └── ShoppingListSlice.ts
        └── ShoppingItemSlice.ts

├── src/
│   ├── components   
        └── Navbar
        └── SearchBar
        └── Pages
             └── registerpage
             └── ProfilePage
             └── loginPage
             └── HomePage
             └── LandingPage
             └── ShoppingItemPage
        └── ShoppingListForm
        └── ShoppingItemForm
        └── categoryCard
        └── ItemCard
        └── LoginForm
        └── types     
├── App.tsx               
└── index.html             


## 🧠 Redux State Architecture
-This app uses Redux Toolkit to handle data flow cleanly without messy boilerplate code.

## The Store
(src/app/store.js)Combines all slices and provides the global state to the React application.

## The Slice 
(src//redux/features/shoppingList/shoppingSlice.js)Manages the shopping list state using the following core actions:
-addItem: Pushes a new item object into the state array.
-toggleItem: Finds an item by ID and flips its completed boolean status.
-removeItem: Filters out an item by its ID.clearList: Resets the items array back to empty.

## Website
-https://github.com/nokuphiwa02/Shopping-List-Project
-https://shopping-list-project-ten.vercel.app/
https://www.figma.com/design/YGMcKRCqpgNHHwE3K5mgDV/Untitled?node-id=0-1&p=f&t=erJZYfWKMY0CjPyG-0
