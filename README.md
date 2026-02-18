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
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srajal5170/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```
   
   Create a `.env` file:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=3002
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontened
   npm install
   ```

4. **Dashboard Setup**
   ```bash
   cd ../dashboard
   npm install
   ```

### Running the Application

1. **Start the Backend** (Terminal 1)
   ```bash
   cd Backend
   node index.js
   ```

2. **Start the Frontend** (Terminal 2)
   ```bash
   cd frontened
   npm start
   # Opens at http://localhost:3000
   ```

3. **Start the Dashboard** (Terminal 3)
   ```bash
   cd dashboard
   npm start
   # Opens at http://localhost:3001
   ```

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

### Issue: Login fails with correct credentials
**Fix:** Check if MongoDB is connected and backend is running

### Issue: Tests fail with react-router-dom error
**Fix:** Ensure react-router-dom@6 is installed (not v7)

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
