<img src="https://socialify.git.ci/nokuphiwa02/Shopping-List-Project/image?
  language=1&owner=1&name=1&stargazers=1&theme=Light"
  alt="Shopping-List-Project" width="640" height="320" />

## 🛒 Smart Shopping List
A fast and responsive web application built to help users manage their grocery and shopping lists. This front-end application uses React and Redux Toolkit for efficient, predictable state management.

## 🚀 Quick Start
To run this project on your computer you need to follow these simple 
## steps:
1. Clone the repository 
bashgit clone https://github.com
2. Install dependenciesbashnpm install (npm install)
3. Start the development serverbashnpm start and run it in your terminal (npm run dev)
The app should automatically open in your browser at http://localhost:3000.

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

Here is a look at how the Redux files and components are organized:textsrc/
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
Use code with caution.

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
