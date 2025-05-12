# ProShop Store

A full-featured eCommerce platform built with the MERN stack.

🔗 **Live Demo**: [https://proshopstore.onrender.com/](https://proshopstore.onrender.com/)

---

## Features

- Full-featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product search, filter, and pagination
- User profile with orders
- Admin product/user management
- Checkout process with PayPal integration

---

## Usage

### 1. Environment Variables

Rename the `.env.example` file to `.env` and add the following values:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_APP_SECRET=your_paypal_app_secret
PAYPAL_API_URL=your_paypal_api_url
PAGINATION_LIMIT=8
ADMIN_EMAIL=admin@email.com
ADMIN_PASSWORD=123abc
JO_EMAIL=jo@email.com
JOHN_PASSWORD=123abc
MAX_EMAIL=max@email.com
MAX_PASSWORD=123abc
