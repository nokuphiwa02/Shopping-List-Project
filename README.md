<img src="https://socialify.git.ci/nokuphiwa02/Shopping-List-Project/image?
  language=1&owner=1&name=1&stargazers=1&theme=Light"
  alt="Shopping-List-Project" width="640" height="320" />

# 🛒 Shopping List Application

### A Personal Shopping List Management System

**Developed by: Nokuphiwa Shange**

## 📌 About the Project

The Shopping List Application is a web-based application designed to help users organise, manage, and keep track of their shopping needs in one convenient place.

The idea behind this project was to develop a practical application that allows users to create personalised shopping lists, organise items into different categories, manage quantities, and keep additional shopping notes.

Instead of relying on traditional handwritten shopping lists, users can use this application to digitally manage their shopping activities. Each user can create an account, sign in, access their personal dashboard, and manage their own shopping lists.

The application was developed using React, TypeScript, Redux Toolkit, and JSON Server. Throughout development, I focused on understanding how frontend components communicate, how application state is managed, how data is retrieved from an API, and how different pages work together to create a functional application.

This project also provided an opportunity to practise building reusable components, implementing CRUD operations, handling authentication flows, and organising a React application using a structured folder architecture.

## 🎯 Project Objectives

The main objectives of this project were to:

- Develop a functional shopping list management application.
- Implement user registration and login functionality.
- Allow users to create and manage personal shopping lists.
- Enable users to organise shopping items into different categories.
- Allow users to add item names, quantities, and additional notes.
- Implement Create, Read, Update, and Delete (CRUD) operations.
- Manage application state using Redux Toolkit.
- Connect the frontend application to a REST API.
- Implement protected routes for authenticated pages.
- Improve the user experience through reusable components, search functionality, and sorting.

## 🚀 Development Journey

This project started on **17 August 2026** as a React application. Rather than building everything at once, I developed it incrementally, introducing new features as I became more familiar with React, TypeScript, routing, state management, and API integration.

### Phase 1: Project Setup and Initial Components

The first stage involved setting up the React development environment using Vite and TypeScript.

I installed the necessary dependencies and began creating the application's foundational components.

Some of the first tasks included:

- Initialising the React project.
- Installing React Router for navigation.
- Installing JSON Server for the development API.
- Creating the navigation bar.
- Developing the initial login interface.
- Organising the project into reusable components.

At this stage, the main focus was establishing the application structure and understanding how different components could work together.

### Phase 2: User Registration and Authentication

After establishing the initial structure, I worked on the registration and login functionality.

I created separate registration and login components and introduced Redux Toolkit to manage authentication-related state.

The application allows users to:

- Register an account.
- Enter their login credentials.
- Sign in using their registered details.
- Navigate to the main application after successful authentication.

I also created separate Redux slices for registration and login operations.

### Phase 3: Profile Management and Navigation

The next stage involved developing the profile functionality and improving navigation between application pages.

I created a profile page and introduced a dedicated profile Redux slice.

React Router was used to navigate between the landing page, login page, registration page, homepage, profile page, and shopping item page.

### Phase 4: Shopping List Management

One of the main features of the application is the ability to create and manage multiple shopping lists.

I implemented a shopping list feature that allows users to:

- Create a shopping list using a category or list name.
- Display previously created shopping lists.
- View individual shopping list sections.
- Update existing shopping list names.
- Delete shopping lists.

I created a dedicated `ShoppingListSlice.ts` file to manage shopping list state and asynchronous API operations.

Reusable category card components were also introduced to display shopping lists and their available actions.

### Phase 5: Shopping Item Management

After implementing shopping lists, I introduced functionality for managing individual shopping items.

Users can add items containing:

- Item name.
- Quantity.
- Optional additional note, such as the preferred shop.

The application also supports viewing, updating, and deleting shopping items.

A separate Redux slice, `ShoppingItemSlices.ts`, handles the item-related operations.

### Phase 6: Search and Sorting Functionality

As the application developed, I introduced additional functionality to make managing multiple shopping lists easier.

The search feature allows users to find shopping lists by their names.

The sorting functionality allows users to arrange their lists alphabetically in ascending or descending order.

I also used URL query parameters to manage the search and sorting selections.

### Phase 7: Styling and Protected Routes

The final development stages involved improving the appearance of the application, refining component styling, and introducing protected routes.

CSS Modules were used to organise styles and avoid unnecessary conflicts between components.

I also implemented a `ProtectedRoute` component to restrict access to pages such as the homepage, profile page, and shopping item page.

The project continued to evolve through styling improvements and refinements to the existing components.


## ⚙️ How the Application Works

The application follows a component-based architecture where different pages and reusable components handle specific responsibilities.

### 1. Landing Page

The landing page serves as the entry point to the application.

Users can navigate to the registration or login pages.

### 2. Registration and Login

Users can create an account and subsequently sign in.

Authentication-related operations are managed using Redux Toolkit async thunks, which communicate with the JSON Server API.

### 3. Homepage

After successful login, users are directed to their homepage.

The homepage displays their shopping lists and provides access to the functionality for creating, searching, sorting, updating, and deleting lists.

### 4. Shopping Lists

Users can create different lists according to their shopping needs.

Examples include:

- Groceries
- Fruits
- Vegetables
- Household items
- Clothes
- Drinks

Each shopping list is associated with a user ID.

### 5. Shopping Items

Users can manage individual items within the application's shopping item interface.

Each item contains its name, quantity, and an optional note.

For example:

| Item | Quantity | Additional Note |
|---|---:|---|
| Apples | 4 | Shoprite |
| Drinks | 2 | Spar |
| Bread | 3 | Pick n Pay |

### 6. Profile Page

The profile page provides a dedicated section for user profile information.

### 7. Protected Routes

The application uses a protected route component to control access to selected pages.

This helps ensure that pages intended for signed-in users are not freely accessible through direct navigation.


## 🛠️ Technologies and Tools Used

| Technology | Purpose |
|---|---|
| React 19 | Building the user interface using reusable components. |
| TypeScript | Providing static typing and improving code organisation. |
| Vite | Frontend development server and build tool. |
| Redux Toolkit | Managing application state and asynchronous operations. |
| React Redux | Connecting React components to the Redux store. |
| React Router | Managing application navigation and routing. |
| JSON Server | Providing a local REST API for storing and retrieving development data. |
| CSS Modules | Styling individual components with scoped CSS. |
| ESLint | Maintaining code quality and identifying potential issues. |
| Git | Tracking changes throughout development. |
| GitHub | Version control and source code hosting. |
| Visual Studio Code | Development environment. |

## 🏗️ Project Architecture

The application follows a modular structure that separates pages, reusable components, styling, and state management.


Shopping-List-Project/
│
├── src/
│   │
│   ├── assets/
│   │   └── Images and visual resources
│   │
│   ├── components/
│   │   ├── CategoryCard/
│   │   ├── ItemCard/
│   │   ├── LoginForm/
│   │   ├── Navbar/
│   │   ├── ProtectedRoute/
│   │   ├── Searchbar/
│   │   ├── ShoppingItems/
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── LandingPage.tsx
│   │       ├── Profile.tsx
│   │       ├── Register.tsx
│   │       └── ShoppingItemPage.tsx
│   │
│   ├── redux/
│   │   └── features/
│   │       ├── LoginSlices.ts
│   │       ├── ProfileSlices.ts
│   │       ├── RegisterSlice.ts
│   │       ├── ShoppingItemSlices.ts
│   │       └── ShoppingListSlice.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── store.ts
├── db.json
├── package.json
├── tsconfig.json
└── vite.config.ts


## 🗄️ Database and API Integration

The project uses JSON Server as a lightweight development backend.

The `db.json` file contains three main collections:

**1. Users**

Stores registered user records and account information.

**2. Lists**

Stores shopping list records, including:

- `id`
- `userId`
- `category`

**3. Items**

Stores individual shopping item records, including:

- `id`
- `userId`
- `name`
- `quantity`
- `optionalNote`

The application uses the `userId` field to associate shopping lists and items with their respective users.

The frontend communicates with JSON Server through HTTP requests.

The application implements the following CRUD operations:

- **POST:** Create new users, lists, and items.
- **GET:** Retrieve users, lists, and items.
- **PUT:** Update existing shopping lists and items.
- **DELETE:** Remove shopping lists and items.

## 🔄 State Management with Redux Toolkit

Redux Toolkit plays an important role in managing the application's shared state.

Instead of managing all application data independently inside individual components, I separated state management into dedicated Redux feature slices.

The main slices include:

- `RegisterSlice.ts` – Registration-related state and operations.
- `LoginSlices.ts` – Login state and current user information.
- `ProfileSlices.ts` – Profile-related state.
- `ShoppingListSlice.ts` – Shopping list state and API operations.
- `ShoppingItemSlices.ts` – Shopping item state and API operations.

I also configured a central Redux store in `store.ts`, which combines the different reducers.

This structure makes the application easier to maintain and allows different components to access shared application data.

## ▶️ Installation and Setup

To run the project locally, follow these steps.

### Prerequisites

- Node.js
- npm
- Visual Studio Code or another code editor

### Step 1: Clone the repository

git clone YOUR_REPOSITORY_URL

### Step 2: Navigate into the project

cd Shopping-List-Project

### Step 3: Install dependencies

npm install

### Step 4: Start JSON Server

Open a terminal and run:

npx json-server db.json 

The API will be available at:

http://localhost:3000


### Step 5: Start the React application

Open another terminal and run:

npm run dev

Vite will provide a local development URL in the terminal.

Open that URL in your browser to access the application.

**Important:** Both JSON Server and the Vite development server must be running for the application to work correctly.


## 📚 Skills and Concepts Demonstrated

Building this project allowed me to gain practical experience with:

- React component development.
- TypeScript interfaces and type definitions.
- React Hooks.
- Redux Toolkit and global state management.
- Asynchronous Redux operations using `createAsyncThunk`.
- REST API integration.
- CRUD functionality.
- React Router and protected routes.
- User-specific data management.
- Form handling and validation.
- Search and sorting functionality.
- CSS Modules and responsive interface styling.
- Git version control and incremental development.
- Organising a frontend application using reusable components.

## 🔮 Future Improvements

There are several opportunities to extend the application further:

- Replace JSON Server with a production-ready backend.
- Integrate a permanent database such as PostgreSQL or MongoDB.
- Implement secure server-side authentication and password hashing.
- Introduce password recovery functionality.
- Improve form validation and error handling.
- Add shopping list completion and item check-off functionality.
- Introduce shopping budgets and price tracking.
- Add a shopping history feature.
- Improve the application's mobile responsiveness.
- Deploy the application for public access.

## 👩‍💻 About the Developer

**Nokuphiwa Shange – Software Developer**

I developed this project as part of my journey in software development, focusing on improving my practical knowledge of frontend development, application architecture, state management, and API integration.

What started as a basic React application gradually developed into a multi-page shopping list management system with user accounts, protected pages, shopping list management, item management, and additional functionality.

Throughout the process, I gained experience in solving development challenges, debugging errors, integrating different technologies, and improving an application through continuous development.

This project represents my commitment to learning, experimenting with technologies, and building practical software solutions.


**Built with React, TypeScript, Redux Toolkit, and JSON Server.**