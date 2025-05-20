📦 Backend Setup (Express + MongoDB)

1.Navigate to backend directory:
cd backend

2.Install dependencies:
npm install

3.Create .env file:
MONGODB_URI=mongodb://localhost:27017/blogDB
PORT=8000

4.Run backend server:
✅ Server running at: http://localhost:5000

💻 Frontend Setup (Next.js)

1.Navigate to frontend directory:
cd frontend

2.Install dependencies:
npm install

3.Run frontend app:
npm run dev

✅ App running at: http://localhost:3000

🚀 API Endpoints
Method	Endpoint	Description
POST	/api/blogs/save-draft	Save or update a draft
POST	/api/blogs/publish	Publish a blog post
GET	/api/blogs	Get all blog posts
GET	/api/blogs/:id	Get a blog by ID
DELETE	/api/blogs/:id	Delete a blog by ID

🔧 Features
📝 Blog Editor (title, content, tags)

💾 Autosave every 5s or on pause

🗃 Draft/Published separation

🔁 Edit blog

🗑 Delete blog

🌐 Frontend (Next.js)

🧠 Backend (Express.js + MongoDB)

