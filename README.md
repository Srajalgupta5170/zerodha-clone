# 📈 Zerodha Clone - Stock Trading Platform

A full-stack web application that replicates the core functionality of Zerodha, India's leading stock trading platform. This project includes a landing page, user authentication, and a trading dashboard with real-time stock data visualization.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## 🎯 Features

### Landing Page (Frontend)
- 🏠 **Homepage** with investment options
- 💰 **Pricing** information
- 📚 **Product** showcase
- 🎓 **About** company details
- 💬 **Support** & ticket creation
- 📝 **User Signup** functionality

### Trading Dashboard
- 📊 **Portfolio Summary** with interactive charts
- 💼 **Holdings** view with P&L tracking
- 📈 **Positions** management
- 📋 **Orders** history
- ⚡ **Watchlist** for quick access
- 🛒 **Buy/Sell** stocks functionality
- 💵 **Funds** management

### Backend API
- 🔐 **User Authentication** (JWT-based)
- 👤 **User Registration & Login**
- 🔒 **Protected Routes** with middleware
- 📦 **MongoDB** integration
- 🌐 **RESTful API** design

## 🏗️ Project Architecture

```mermaid
graph TB
    A[User Browser] -->|HTTP Requests| B{Frontend Routes}
    B -->|Landing Page| C[Frontend - React]
    B -->|Dashboard| D[Dashboard - React]
    
    C -->|Signup/Login| E[Backend API - Express.js]
    D -->|API Calls| E
    
    E -->|Authentication| F[JWT Auth Middleware]
    E -->|Database Operations| G[(MongoDB Atlas)]
    
    F -->|Valid Token| H[Protected Routes]
    F -->|Invalid Token| I[401 Unauthorized]
    
    H -->|CRUD Operations| G
    
    G -->|Collections| J[Users]
    G -->|Collections| K[Holdings]
    G -->|Collections| L[Positions]
    G -->|Collections| M[Orders]
    
    style A fill:#e1f5ff
    style C fill:#61dafb
    style D fill:#61dafb
    style E fill:#68a063
    style G fill:#4db33d
```

## 🛠️ Technology Stack

### Frontend (Landing Page)
- **React.js** - UI framework
- **React Router** - Client-side routing
- **Bootstrap** - CSS framework
- **Axios** - HTTP client

### Dashboard
- **React.js** - UI framework
- **Chart.js** - Data visualization
- **React Router** - Navigation
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt.js** - Password hashing
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Zerodha-clone/
│
├── Frontend/                    # Landing page
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── home/           # Homepage components
│   │   │   ├── about/          # About page
│   │   │   ├── pricing/        # Pricing page
│   │   │   ├── products/       # Products page
│   │   │   ├── signup/         # Signup page
│   │   │   └── support/        # Support page
│   │   └── test/               # Test files
│   └── public/
│
├── dashboard/                   # Trading dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js         # Dashboard home
│   │   │   ├── Holdings.js     # User holdings
│   │   │   ├── Positions.js    # Current positions
│   │   │   ├── Orders.js       # Order history
│   │   │   ├── WatchList.js    # Stock watchlist
│   │   │   ├── BuyActionWindow.js  # Buy/Sell modal
│   │   │   └── ...
│   │   ├── pages/
│   │   │   └── login.jsx       # Login page
│   │   └── api/
│   │       └── auth.js         # Auth API calls
│   └── public/
│
└── Backend/                     # Node.js API
    ├── controllers/
    │   └── authController.js   # Auth logic
    ├── middleware/
    │   └── authMiddleware.js   # JWT verification
    ├── model/
    │   ├── UserModel.js        # User schema
    │   ├── HoldingsModel.js    # Holdings schema
    │   ├── PositionModel.js    # Position schema
    │   └── OrderModel.js       # Order schema
    ├── routes/
    │   └── authRoutes.js       # Auth routes
    ├── .env                    # Environment variables
    └── index.js                # Server entry point
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Software | Version | Download Link |
|----------|---------|---------------|
| **Node.js** | v14.x or higher | [Download](https://nodejs.org/) |
| **npm** | v6.x or higher | Comes with Node.js |
| **Git** | Latest | [Download](https://git-scm.com/) |
| **MongoDB Atlas** | Free Tier | [Sign Up](https://www.mongodb.com/cloud/atlas) |

**Verify Installation:**
```bash
node --version    # Should show v14.x or higher
npm --version     # Should show v6.x or higher
git --version     # Should show git version
```

### 📦 Complete Installation Guide

#### Step 1: Clone the Repository

```bash
git clone https://github.com/srajal5170/zerodha-clone.git
cd zerodha-clone
```

#### Step 2: MongoDB Atlas Setup

1. **Create Account:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create Cluster:**
   - Click "Build a Database"
   - Choose "FREE" shared cluster
   - Select your preferred cloud provider and region
   - Click "Create Cluster"

3. **Setup Database Access:**
   - Go to "Database Access" → "Add New Database User"
   - Create username and password (save these!)
   - Set privileges to "Read and write to any database"

4. **Setup Network Access:**
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Add `0.0.0.0/0` → Confirm

5. **Get Connection String:**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/zerodha`

#### Step 3: Backend Setup

```bash
# Navigate to Backend folder
cd Backend

# Install dependencies
npm install
```

**Create `.env` file in Backend folder:**

```bash
# Windows
notepad .env

# Mac/Linux
nano .env
```

**Add the following content:**
```env
MONGO_URL=mongodb+srv://your_username:your_password@cluster.mongodb.net/zerodha?retryWrites=true&w=majority
JWT_SECRET=my_super_secret_jwt_key_12345
PORT=3002
```

**Replace:**
- `your_username` → Your MongoDB username
- `your_password` → Your MongoDB password
- `my_super_secret_jwt_key_12345` → Any random string (keep it secret!)

**Install Backend Dependencies:**
```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken body-parser
```

#### Step 4: Frontend Setup

```bash
# Navigate to frontend folder (from root)
cd ../frontened

# Install dependencies
npm install

# Install required packages
npm install react-router-dom@6 axios bootstrap
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

**Create `.env` file in frontened folder:**
```env
REACT_APP_API_URL=http://localhost:3002
```

#### Step 5: Dashboard Setup

```bash
# Navigate to dashboard folder (from root)
cd ../dashboard

# Install dependencies
npm install

# Install required packages
npm install react-router-dom@6 axios bootstrap chart.js react-chartjs-2
```

**Create `.env` file in dashboard folder:**
```env
REACT_APP_API_URL=http://localhost:3002
```

### ▶️ Running the Application

You need **THREE separate terminal windows**:

#### Terminal 1 - Backend Server

```bash
cd Backend
node index.js
```

**Expected Output:**
```
Backend server is running on http://localhost:3002
MongoDB connected
```

✅ **Backend is ready!**

#### Terminal 2 - Frontend (Landing Page)

```bash
cd frontened
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view frontened in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

✅ **Frontend is ready!** Opens automatically at http://localhost:3000

#### Terminal 3 - Dashboard

```bash
cd dashboard
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view dashboard in the browser.

  Local:            http://localhost:3001
  On Your Network:  http://192.168.x.x:3001
```

✅ **Dashboard is ready!** Opens automatically at http://localhost:3001

### 🎯 Accessing the Application

| Component | URL | Description |
|-----------|-----|-------------|
| **Landing Page** | http://localhost:3000 | Public homepage, signup |
| **Dashboard** | http://localhost:3001/login | Trading dashboard (requires login) |
| **Backend API** | http://localhost:3002 | REST API endpoints |

### 🔧 Configuration Details

#### Port Configuration

Default ports used:
- **Backend:** 3002
- **Frontend:** 3000
- **Dashboard:** 3001

To change ports, update:
1. Backend: `PORT` in `.env`
2. Frontend/Dashboard: Update `REACT_APP_API_URL` in `.env`

#### CORS Setup

Backend is configured to accept requests from:
- `http://localhost:3000` (Frontend)
- `http://localhost:3001` (Dashboard)

If you change ports, update `index.js` in Backend folder.

## 🔑 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| GET | `/api/auth/profile` | Get user profile | Yes |

### Request Examples

**Register User:**
```json
POST /api/auth/register
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}
```

**Login:**
```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "_id": "user_id",
  "email": "user@example.com",
  "username": "username",
  "token": "jwt_token_here"
}
```

## 🔄 Application Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant D as Dashboard
    participant B as Backend
    participant DB as MongoDB
    
    U->>F: Visit Landing Page
    U->>F: Click Signup
    F->>B: POST /api/auth/register
    B->>DB: Create User
    DB-->>B: User Created
    B-->>F: JWT Token
    
    U->>D: Login to Dashboard
    D->>B: POST /api/auth/login
    B->>DB: Verify Credentials
    DB-->>B: User Data
    B-->>D: JWT Token + User Info
    D->>D: Store Token in localStorage
    
    U->>D: View Holdings
    D->>B: GET /api/holdings (with Token)
    B->>B: Verify JWT
    B->>DB: Fetch Holdings
    DB-->>B: Holdings Data
    B-->>D: Holdings Response
    D-->>U: Display Holdings
```

## 🧪 Testing

### Frontend Tests

Run tests for the frontend:
```bash
cd frontened
npm test
```

**Test Coverage:**
- ✅ Hero component rendering
- ✅ Image loading
- ✅ Button functionality
- ✅ Navigation links

**Running Specific Tests:**
```bash
# Run tests in watch mode
npm test

# Run all tests once
npm test -- --watchAll=false

# Run tests with coverage
npm test -- --coverage --watchAll=false
```

**Test File Location:**
```
frontened/src/test/Hero.test.js
```

### API Testing with Postman/Thunder Client

#### 1. Register User
```http
POST http://localhost:3002/api/auth/register
Content-Type: application/json

{
  "email": "test@example.com",
  "username": "testuser",
  "password": "test123"
}
```

**Expected Response:**
```json
{
  "_id": "65abc123...",
  "email": "test@example.com",
  "username": "testuser",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### 2. Login User
```http
POST http://localhost:3002/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "test123"
}
```

#### 3. Get Profile (Protected Route)
```http
GET http://localhost:3002/api/auth/profile
Authorization: Bearer <your_token_here>
```

### Testing Workflow

1. **Start Backend:**
   ```bash
   cd Backend
   node index.js
   ```

2. **Register a User:**
   - Use Postman or browser
   - POST to `/api/auth/register`

3. **Login:**
   - POST to `/api/auth/login`
   - Copy the returned token

4. **Test Dashboard:**
   - Open http://localhost:3001/login
   - Login with registered credentials
   - Verify dashboard loads

## 📦 Package Dependencies

### Backend Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web framework |
| mongoose | ^7.0.0 | MongoDB ODM |
| dotenv | ^16.0.3 | Environment variables |
| cors | ^2.8.5 | Cross-origin requests |
| bcryptjs | ^2.4.3 | Password hashing |
| jsonwebtoken | ^9.0.0 | JWT auth tokens |
| body-parser | ^1.20.2 | Parse request bodies |

**Install all at once:**
```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken body-parser
```

### Frontend Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | React DOM renderer |
| react-router-dom | ^6.x | Client routing |
| axios | ^1.4.0 | HTTP client |
| bootstrap | ^5.3.0 | CSS framework |

**Install all at once:**
```bash
npm install react-router-dom@6 axios bootstrap
```

### Dashboard Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI library |
| react-router-dom | ^6.x | Client routing |
| axios | ^1.4.0 | HTTP client |
| chart.js | ^4.3.0 | Charts library |
| react-chartjs-2 | ^5.2.0 | React wrapper for Chart.js |

**Install all at once:**
```bash
npm install react-router-dom@6 axios chart.js react-chartjs-2
```

### Dev Dependencies
| Package | Purpose |
|---------|---------|
| @testing-library/react | Testing React components |
| @testing-library/jest-dom | Jest matchers |
| react-scripts | Create React App scripts |

**Install all at once:**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## 🚀 Deployment

### Recommended Deployment Setup

1. **Frontend & Dashboard** → [Vercel](https://vercel.com)
   - Connect your GitHub repository
   - Auto-deploys on push
   - Free SSL certificate

2. **Backend** → [Render](https://render.com)
   - Connect your GitHub repository
   - Add environment variables
   - Free tier available

3. **Database** → [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Already configured
   - 512MB free tier

### Environment Variables for Production

**Backend (.env):**
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/zerodha
JWT_SECRET=your_production_secret_key
PORT=3002
NODE_ENV=production
```

**Frontend & Dashboard (.env):**
```env
REACT_APP_API_URL=https://your-backend-url.com
```

## 📊 Database Schema

### User Schema
```javascript
{
  email: String (unique, required),
  username: String (required),
  password: String (hashed, required),
  createdAt: Date (default: Date.now)
}
```

### Holdings Schema
```javascript
{
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String
}
```

## 🔐 Security Features

- 🔒 **Password Hashing** using bcrypt (8 salt rounds)
- 🎫 **JWT Authentication** with 7-day expiration
- 🛡️ **Protected Routes** with middleware
- 🌐 **CORS** enabled for cross-origin requests
- 🔑 **Environment Variables** for sensitive data

## 🐛 Known Issues & Fixes

### Issue: MongoDB Connection Timeout
**Fix:** Whitelist your IP in MongoDB Atlas Network Access

## 🐛 Troubleshooting Guide

### Common Issues and Solutions

#### 1. MongoDB Connection Error

**Error:**
```
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined"
```

**Solutions:**
- ✅ Check if `.env` file exists in `Backend` folder
- ✅ Verify `MONGO_URL` in `.env` is correct
- ✅ Restart the backend server after creating `.env`
- ✅ Make sure you're running from the `Backend` directory

#### 2. MongoDB Connection Timeout

**Error:**
```
Operation `users.findOne()` buffering timed out after 10000ms
```

**Solutions:**
- ✅ Whitelist your IP in MongoDB Atlas:
  - Go to MongoDB Atlas → Network Access
  - Click "Add IP Address"
  - Select "Allow Access from Anywhere" (0.0.0.0/0)
  - Wait 2-3 minutes for changes to take effect
- ✅ Check your internet connection
- ✅ Verify MongoDB cluster is running

#### 3. Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::3002
```

**Solutions:**
```bash
# Windows - Kill process on port 3002
netstat -ano | findstr :3002
taskkill /PID <process_id> /F

# Or in PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3002).OwningProcess | Stop-Process

# Mac/Linux
lsof -ti:3002 | xargs kill -9
```

#### 4. Login Fails with Correct Credentials

**Error:**
```
Invalid email or password
```

**Solutions:**
- ✅ Make sure backend is running (`MongoDB connected` message shows)
- ✅ Register a new user first before logging in
- ✅ Check if user exists in MongoDB Atlas:
  - Go to Collections → zerodha → users
  - Verify email exists
- ✅ Verify email format (no extra spaces)

#### 5. CORS Error

**Error:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solutions:**
- ✅ Verify backend is running on port 3002
- ✅ Check `REACT_APP_API_URL` in frontend/dashboard `.env`
- ✅ Restart frontend/dashboard after changing `.env`

#### 6. React Router Error in Tests

**Error:**
```
Cannot find module 'react-router-dom'
```

**Solutions:**
```bash
# Install react-router-dom version 6 (NOT version 7)
npm uninstall react-router-dom
npm install react-router-dom@6

# Clear Jest cache
npx jest --clearCache

# Run tests again
npm test
```

#### 7. Module Not Found Errors

**Error:**
```
Cannot find module 'express' / 'mongoose' / etc.
```

**Solutions:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Or on Windows
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

#### 8. Frontend Won't Start

**Error:**
```
Something is already running on port 3000
```

**Solutions:**
- ✅ Kill the process on port 3000 (see solution #3)
- ✅ Or change the port:
  ```bash
  # Windows
  set PORT=3005 && npm start
  
  # Mac/Linux
  PORT=3005 npm start
  ```

#### 9. Backend Not Loading .env

**Error:**
Backend runs but can't find environment variables

**Solutions:**
- ✅ Make sure `.env` is in the same folder as `index.js`
- ✅ Check `.env` file has no spaces around `=`
  - ✅ Correct: `PORT=3002`
  - ❌ Wrong: `PORT = 3002`
- ✅ Restart terminal and run again
- ✅ Verify with:
  ```bash
  node -e "require('dotenv').config(); console.log(process.env.MONGO_URL)"
  ```

#### 10. Database User Authentication Failed

**Error:**
```
MongoServerError: bad auth : authentication failed
```

**Solutions:**
- ✅ Verify username and password in MongoDB Atlas
- ✅ Check special characters in password are URL-encoded:
  - `@` → `%40`
  - `#` → `%23`
  - `$` → `%24`
- ✅ Recreate database user with simpler password

### Getting Help

If you're still stuck:
1. Check if all three servers are running
2. Verify all `.env` files are created correctly
3. Check MongoDB Atlas cluster is active
4. Try clearing browser cache and cookies
5. Open browser console (F12) to see detailed errors
6. Check terminal for error messages

### Verification Checklist

Before reporting an issue, verify:
- [ ] Node.js v14+ installed
- [ ] MongoDB Atlas cluster created
- [ ] IP whitelisted in MongoDB Atlas
- [ ] `.env` files created in Backend, frontened, dashboard
- [ ] All dependencies installed (`npm install`)
- [ ] Backend shows "MongoDB connected"
- [ ] Frontend opens at http://localhost:3000
- [ ] Dashboard opens at http://localhost:3001

## 👨‍💻 Author

**Srajal Gupta**
- GitHub: [@srajal5170](https://github.com/srajal5170)
- Email: srajal5170@gmail.com

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Inspired by [Zerodha](https://zerodha.com/)
- Built for learning full-stack development
- Special thanks to the MERN stack community

## 📸 Screenshots

### Landing Page
- Clean and modern UI
- Easy navigation
- Responsive design

### Dashboard
- Real-time portfolio tracking
- Interactive charts
- Quick buy/sell actions

---

**⭐ If you found this project helpful, please give it a star!**
