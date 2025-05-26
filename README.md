# Interactive Personal Blog Platform

This is a simple, single-page blogging platform built with HTML, CSS, and JavaScript. It allows users to create, edit, delete, and persist blog posts using the browser’s localStorage. The application is fully dynamic, responsive, and requires no backend server.

## Features

- Create new blog posts with title and content
- Edit or delete existing posts
- Form validation with user-friendly error messages
- All data is saved in localStorage (persists after refresh)
- Posts are displayed dynamically without page reload

## How to Run the Application

1. Download or clone the project
2. Open `index.html` in any modern browser (Chrome, Firefox, Safari, etc.)

No additional setup, server, or dependencies required.

Optional:
- You can use a code editor like VS Code with the Live Server extension for real-time updates while editing.

## Folder Structure
personal-blog/
├── index.html
├── styles.css
├── script.js
└── README.md

## Reflection

During development, the biggest challenge was structuring the JavaScript logic for clean editing and deleting of posts while ensuring the UI updates dynamically and localStorage remains in sync. To solve this:

- I implemented a global `posts` array to track post data in memory.
- I used a `renderPosts()` function to consistently update the UI after every change.
- Event delegation and DOM manipulation were used carefully to ensure buttons responded correctly and editing worked smoothly.

I also made use of utility functions to keep the code clean and organized (e.g., generating unique IDs, saving/loading to localStorage).

## Known Issues / Limitations

- Posts are not timestamp-sorted — they show in the order they were added (newest on top).
- No confirmation prompt before deleting a post.
- Editing is done using the same form; a modal or inline edit UI could improve user experience.
- No search, filtering, or tagging features yet.

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
