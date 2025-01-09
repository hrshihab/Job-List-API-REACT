# Job Listing Application

### 🌐 Live Demo
[react-test-authentication.vercel.app](https://react-test-authentication.vercel.app)

### 👨‍💻 Developer
**Name**: Habibur Rahman Shihab  
**Email**: hrshihab10@gmail.com  

---

## 🗃️ Overview
This project is a front-end web application built with **React**, **Redux**, and **JWT-based authentication**. It is designed to handle user registration, login, session management, and job listing functionality. The application ensures secure session handling with Session Storage and Browser Cookies, while providing a responsive and user-friendly interface.

---

## 🌟 Features Implemented

### 1. **👤 User Registration**
- A form to register new users by submitting their username, email, and password.
- **API Endpoint**: `/api/auth/register/`
- After successful registration, users are redirected to the login page.

### 2. **🔑 User Login**
- A secure login form that validates user credentials.
- Upon successful login:
  - Access tokens are stored in Session Storage.
  - Refresh tokens are saved in Browser Cookies.
- **API Endpoint**: `/api/auth/login/`

### 3. **⏳ Token Management**
- **Token Refresh**: Automatically refreshes the access token before it expires using the refresh token.
  - **API Endpoint**: `/api/auth/refresh/`
- **Token Verification**: Ensures the validity of tokens as needed.
  - **API Endpoint**: `/api/auth/verify/`

### 4. **💼 Job Listing**
- Retrieves a list of available jobs using the access token.
- Jobs are displayed in a user-friendly card layout with the following details:
  - **Job Title**
  - **Job Description**
  - **Created By**
  - **Created At**
- **API Endpoint**: `/api/`

### 5. **🔒 Session Handling**
- **Session Persistence**:
  - Access tokens are retrieved from Session Storage across page reloads.
  - If the token expires, it is refreshed using the refresh token in cookies.
- **Logout**:
  - Clears the session and cookies.
  - Redirects the user to the login page.

### 6. **⚠️ Error Handling**
- Error messages are displayed for invalid login credentials or API request failures.
- Examples:
  - Invalid login credentials: `Invalid credentials or something went wrong.`
  - Job fetch failure: `Failed to fetch jobs.`

### 7. **🔒 Protected Routes**
- React Router is used to restrict access to the job listing page.
- Only authenticated users with a valid token can access protected pages.

### 8. **🌐 Modern UI Design**
- Built with Ant Design for a professional and responsive user experience.
- Features:
  - Styled forms with clear validation messages.
  - Responsive layout for all devices.
  - Clean and modern card-based job listing.

---

## 🛠️ Technologies Used
- **Frontend Framework**: React
- **State Management**: Redux Toolkit
- **Authentication**: JWT-based
- **UI Library**: Ant Design
- **Session Management**:
  - Access Token: Session Storage
  - Refresh Token: Browser Cookies
- **HTTP Requests**: Fetch API
- **Routing**: React Router DOM

---

## 🚀 How to Run the Project Locally

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/job-listing-app.git
   cd job-listing-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:5173](http://localhost:5173).

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The optimized production build will be in the `build` folder.

---

## 🔖 Folder Structure
```plaintext
src/
├── components/
│   ├── layout/                  # Layout components (Header, MainLayout, ProtectedRoute)
│   ├── JobList.tsx              # Job Listing page
│   └── ...                      # Other reusable components
├── pages/
│   ├── Login.tsx                # Login page
│   ├── Register.tsx             # Registration page
├── redux/
│   ├── features/
│   │   ├── auth/                # Authentication slice and API endpoints
│   │   └── admin/               # Job-related API endpoints
│   ├── hooks.ts                 # Custom Redux hooks
│   └── store.ts                 # Redux store configuration
├── utils/
│   ├── verifyToken.ts           # JWT token verification utility
│   └── ...                      # Other utility files
└── App.tsx                      # Main application entry point
```

---

## 🔖 API Endpoints

### 1. **Job List**
- **URL**: `/api/`
- **Method**: GET
- **Headers**:
  ```json
  {
    "Authorization": " <access_token>"
  }
  ```
- **Description**: Retrieves a list of available jobs.

### 2. **User Registration**
- **URL**: `/api/auth/register/`
- **Method**: POST
- **Payload**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

### 3. **User Login**
- **URL**: `/api/auth/login/`
- **Method**: POST
- **Payload**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "access": "string",
    "refresh": "string"
  }
  ```

### 4. **Token Refresh**
- **URL**: `/api/auth/refresh/`
- **Method**: POST
- **Payload**:
  ```json
  {
    "refresh": "string"
  }
  ```

### 5. **Token Verify**
- **URL**: `/api/auth/verify/`
- **Method**: POST
- **Payload**:
  ```json
  {
    "token": "string"
  }
  ```

---

## 🔧 Contribution
Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Submit a pull request with detailed descriptions of your changes.

---

## 🌐 Live Demo
Hosted on: [Vercel](https://react-test-authentication.vercel.app)

---

## 📧 Contact
**Developer**: Habibur Rahman Shihab  
**Email**: hrshihab10@gmail.com

