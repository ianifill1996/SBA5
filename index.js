// Global state
let posts = [];
let editingPostId = null;

// DOM elements
const form = document.getElementById('post-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const titleError = document.getElementById('title-error');
const contentError = document.getElementById('content-error');
const postsContainer = document.getElementById('posts-container');

// Utility Functions
function savePostsToLocalStorage() {
  localStorage.setItem('blogPosts', JSON.stringify(posts));
}

function loadPostsFromLocalStorage() {
  const storedPosts = localStorage.getItem('blogPosts');
  if (storedPosts) {
    posts = JSON.parse(storedPosts);
    renderPosts();
  }
}

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Render Function
function renderPosts() {
  postsContainer.innerHTML = '';
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <div class="post-actions">
        <button onclick="editPost('${post.id}')">Edit</button>
        <button class="delete-btn" onclick="deletePost('${post.id}')">Delete</button>
      </div>
    `;

    postsContainer.appendChild(postElement);
  });
}

// Event Handlers
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  let valid = true;
  titleError.textContent = '';
  contentError.textContent = '';

  if (!title) {
    titleError.textContent = 'Title is required.';
    valid = false;
  }
  if (!content) {
    contentError.textContent = 'Content is required.';
    valid = false;
  }

  if (!valid) return;

  if (editingPostId) {
    // Editing an existing post
    const postIndex = posts.findIndex(p => p.id === editingPostId);
    posts[postIndex].title = title;
    posts[postIndex].content = content;
    editingPostId = null;
  } else {
    // Creating a new post
    const newPost = {
      id: generateId(),
      title,
      content,
      timestamp: new Date().toISOString()
    };
    posts.unshift(newPost);
  }

  savePostsToLocalStorage();
  renderPosts();
  form.reset();
});

function deletePost(id) {
  posts = posts.filter(post => post.id !== id);
  savePostsToLocalStorage();
  renderPosts();
}

function editPost(id) {
  const post = posts.find(p => p.id === id);
  titleInput.value = post.title;
  contentInput.value = post.content;
  editingPostId = id;
}

// Initialize
loadPostsFromLocalStorage();
window.editPost = editPost;
window.deletePost = deletePost;