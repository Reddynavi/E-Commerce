E-Commerce Backend

A complete backend for an e-commerce application built using **Node.js**, **Express.js**, and **MongoDB**.  
It provides secure APIs for managing users, products, and orders with JWT-based authentication.

---
Features

- User Registration & Login (JWT Authentication)
- Admin Access for Managing Products
- CRUD Operations for Products
- Order Placement and Retrieval
- MongoDB Integration
- RESTful API Architecture

---

Tech Stack

| Layer | Technology |
|--------|-------------|
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JWT |
| Middleware | Express.json, CORS |
| Environment Config | dotenv |

---

Folder Structure

```
ecommerce-backend/
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── userModel.js
│   ├── productModel.js
│   └── orderModel.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
├── server.js
└── package.json
```

---
Setup Instructions

1 . Clone the repository  
```bash
git clone https://github.com/Reddynavi/E-Commerce.git
```

2️. Install dependencies  
```bash
npm install
```

3️. Create a `.env` file in the project root and add:
```bash
MONGO_URL=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=mysecretkey
PORT=5000
```

4 . Start the server  
```bash
npm start
```
If successful, you should see:
✅ MongoDB Connected
✅ Server running on port 5000

 Product APIs
 1. Create a Product
**POST** `/api/products/add`

**Access:** Admin  
**Body:**
```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic wireless mouse with 2.4GHz connection",
  "price": 799,
  "category": "Electronics",
  "image": "https://example.com/mouse.jpg",
  "stock": 20
}
```
**Response:**
```json
{
  "message": "Product added successfully",
  "product": { "_id": "...", "name": "Wireless Mouse", "price": 799 }
}
```

---

2. Get All Products
**GET** `/api/products`

**Access:** Public  
**Response:**
```json
[
  {
    "_id": "123",
    "name": "Wireless Mouse",
    "price": 799,
    "stock": 20
  },
  {
    "_id": "124",
    "name": "Gaming Keyboard",
    "price": 1499,
    "stock": 15
  }
]
```

---

3. Get Product by ID
**GET** `/api/products/:id`

**Access:** Public  
**Response:**
```json
{
  "_id": "123",
  "name": "Wireless Mouse",
  "price": 799,
  "description": "Ergonomic wireless mouse",
  "category": "Electronics"
}
```

---

4. Update a Product
**PUT** `/api/products/:id`

**Access:** Admin  
**Body:**
```json
{
  "price": 899,
  "stock": 25
}
```
**Response:**
```json
{
  "message": "Product updated successfully"
}
```

---

5. Delete a Product
**DELETE** `/api/products/:id`

**Access:** Admin  
**Response:**
```json
{
  "message": "Product deleted successfully"
}
```

---
Example Order API (optional)

**POST** `/api/orders/create`
```json
{
  "userId": "user123",
  "items": [
    {
      "productId": "123",
      "quantity": 2
    }
  ],
  "total": 1598
}
```