# Book Management System

A simple Book Management System built using Node.js, Express, EJS, and Sequelize. This application allows users to manage their book collections, including functionalities for adding, updating, and deleting books.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Books**: Easily add new books to your collection.
- **Update Books**: Modify existing book details.
- **Delete Books**: Remove books from your collection.
- **View Books**: Display a list of all books in the system.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Fast and minimalist web framework for Node.js.
- **EJS**: Templating engine for rendering HTML pages.
- **Sequelize**: Promise-based Node.js ORM for database management.
- **SQLite**: Lightweight database for development.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ayush-developer/Book-Management-System-.git
   cd Book-Management-System-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a `.env` file in the root directory and configure your database connection settings.

4. **Run migrations** (if applicable):
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the application**:
   ```bash
   npm start
   ```

6. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

Once the application is running, you can:

- Navigate to the home page to view all books.
- Use the provided forms to add, edit, or delete books.

## API Endpoints

| Method | Endpoint          | Description                   |
|--------|-------------------|-------------------------------|
| GET    | `/books`          | Retrieve all books            |
| POST   | `/books`          | Add a new book                |
| PUT    | `/books/:id`      | Update an existing book       |
| DELETE | `/books/:id`      | Delete a book                 |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

