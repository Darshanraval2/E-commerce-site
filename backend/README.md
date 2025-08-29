# Hippocart Backend API

This is the backend API for the Hippocart e-commerce application built with Express.js.

## 🚀 Features

- **Product Management**: CRUD operations for products with filtering, searching, and pagination
- **User Authentication**: JWT-based authentication with registration and login
- **Order Management**: Create and manage orders
- **User Profiles**: User profile management
- **RESTful API**: Clean REST API design

## 📁 Project Structure

```
backend/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── routes/            # API route handlers
│   ├── products.js    # Product routes
│   ├── auth.js        # Authentication routes
│   ├── users.js       # User routes
│   └── orders.js      # Order routes
├── data/              # Data files (temporary)
│   └── products.js    # Product data
├── middleware/        # Custom middleware (future)
├── models/           # Database models (future)
└── config/           # Configuration files (future)
```

## 🛠️ Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration.

4. **Start the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-here
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/orders` - Get user orders

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/status` - Update order status

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Register/Login** to get a token
2. **Include token** in request headers:
   ```
   Authorization: Bearer <your-token>
   ```

## 🗄️ Database Integration (Future)

Currently using in-memory storage. To integrate with MongoDB:

1. Install MongoDB dependencies:
   ```bash
   npm install mongoose
   ```

2. Create database models in `models/` directory
3. Update routes to use database instead of in-memory arrays
4. Add database connection in `server.js`

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Environment Variables for Production
- Set `NODE_ENV=production`
- Use strong `JWT_SECRET`
- Configure database connection
- Set up proper CORS settings

## 🔗 Frontend Integration

The frontend can connect to this API using the provided `api.js` service file. Update the `API_BASE_URL` in the frontend to point to your backend server.

## 📝 API Examples

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Get Products
```bash
curl http://localhost:5000/api/products
```

### Get Products with Filters
```bash
curl "http://localhost:5000/api/products?category=electronics&search=phone&sort=price-low"
```

## 🔮 Next Steps

1. **Database Integration**: Replace in-memory storage with MongoDB
2. **File Upload**: Add image upload functionality
3. **Payment Integration**: Integrate Stripe or PayPal
4. **Email Notifications**: Add email service for order confirmations
5. **Admin Panel**: Create admin routes for product management
6. **Validation**: Add input validation middleware
7. **Rate Limiting**: Implement API rate limiting
8. **Logging**: Add comprehensive logging
