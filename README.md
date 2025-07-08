# Jashva Hotel Management System

Welcome to the Hotel Management System project for **Jashva Hotel**. This application is designed to streamline hotel operations including room bookings, customer management, billing, and administrative tasks.

## 📌 Project Overview

The **Jashva Hotel Management System** is a comprehensive full-stack solution that allows hotel staff to manage customer check-ins/check-outs, room availability, payments, and reporting. This system improves efficiency, reduces manual errors, and enhances customer satisfaction through a modern web interface.

## 🛠️ Features

### 🔐 Authentication & User Management
- User registration and login with JWT authentication
- Role-based access control (Admin/User)
- User profile management and editing
- Secure password handling

### 🏨 Room Management
- Complete room CRUD operations
- Room type categorization
- Room availability tracking
- Image upload and management
- Room search and filtering

### 📅 Booking System
- Date-based room availability search
- Real-time booking confirmation
- Booking history and management
- Booking cancellation functionality
- Archive/unarchive booking records

### 💳 Payment Processing
- Stripe payment gateway integration
- Secure payment processing
- Booking confirmation codes
- Payment session management

### 👨‍💼 Admin Dashboard
- User management (view, edit, delete)
- Room management interface
- Booking oversight and management
- System analytics and reporting

### 📝 Additional Features
- Feedback system for customer reviews
- Newsletter subscription
- Contact and support pages
- FAQ and help documentation
- Gallery and image management
- Responsive design for all devices

## 🧑‍💻 Technologies Used

### Backend
- **Java 21** - Core programming language
- **Spring Boot 3.4.4** - Main framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database operations
- **MySQL** - Primary database
- **JWT** - Token-based authentication
- **Stripe Java SDK** - Payment processing
- **AWS S3** - File storage
- **Lombok** - Boilerplate reduction
- **Maven** - Dependency management

### Frontend
- **React 18** - UI framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API communication
- **Stripe.js** - Frontend payment processing
- **React DatePicker** - Date selection component
- **CSS3** - Styling and responsive design

### Development Tools
- **Vite** - Frontend build tool
- **ESLint** - Code linting
- **Git** - Version control

## ⚙️ Installation & Setup

### Prerequisites
- Java 21 or higher
- Node.js 16+ and npm
- MySQL 8.0+
- Maven 3.6+

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/jashvanth370/Hotel_Management.git
   cd Hotel_Management
   ```

2. Navigate to backend directory:
   ```bash
   cd "hotel backend"
   ```

3. Configure database:
   - Create MySQL database: `jashva_hotel_db`
   - Update `src/main/resources/application.properties` with your database credentials

4. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:4040`

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd hotel_frontend/hotel_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will start on `http://localhost:3000`

## 🗄️ Database Configuration

The application uses MySQL with the following configuration:
- Database: `jashva_hotel_db`
- Port: `3306`
- Hibernate DDL: `update` (auto-creates tables)

Update the database credentials in `hotel backend/src/main/resources/application.properties`:
```properties
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## 🔧 API Endpoints

The backend provides RESTful APIs for:
- **Authentication**: `/auth/login`, `/auth/register`
- **Users**: `/users/*` (CRUD operations)
- **Rooms**: `/rooms/*` (room management)
- **Bookings**: `/bookings/*` (booking operations)
- **Feedback**: `/feedback` (customer feedback)
- **Payments**: Stripe integration endpoints

## 🚀 Deployment

### Backend Deployment
- Build JAR: `mvn clean package`
- Run: `java -jar target/hotel-0.0.1-SNAPSHOT.jar`

### Frontend Deployment
- Build: `npm run build`
- Deploy the `build` folder to your web server

## 📁 Project Structure

```
Hotel-Management/
├── hotel backend/                 # Spring Boot backend
│   ├── src/main/java/com/jashva/hotel/
│   │   ├── controller/           # REST controllers
│   │   ├── service/              # Business logic
│   │   ├── entity/               # JPA entities
│   │   ├── dto/                  # Data transfer objects
│   │   ├── security/             # Security configuration
│   │   └── utils/                # Utility classes
│   └── src/main/resources/       # Configuration files
├── hotel_frontend/               # React frontend
│   └── hotel_frontend/
│       ├── src/component/
│       │   ├── admin/            # Admin components
│       │   ├── auth/             # Authentication
│       │   ├── booking_rooms/    # Booking functionality
│       │   ├── common/           # Shared components
│       │   ├── home/             # Home page
│       │   ├── pages/            # Static pages
│       │   └── profile/          # User profile
│       └── src/service/          # API services
└── images back/                  # Room images
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Jashvanth** - [GitHub Profile](https://github.com/jashvanth370)

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.
