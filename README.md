# Full-Stack Task Management Project - M3 - 27.03.2026!

## **Project Overview**

This is a **full-stack task management application** designed to help users create, view, update, and delete tasks. The project demonstrates modern web development practices by combining a **React frontend**, an **Express backend**, a **PostgreSQL database**, and **Cloud deployment using AWS**.

The main goals of this project are:

* Building a **responsive frontend** using React
* Creating a **RESTful API backend** with Node.js/Express
* Designing a **PostgreSQL database model** for tasks
* Implementing **containerized deployment** using Docker
* Deploying the application on **AWS**:

  * **ECR** for Docker images
  * **EC2** for running containers
  * **RDS** for PostgreSQL database

**Project Deadline:** March 27, 2026

---

## **Project Structure**

### **Frontend**

* Built with **React**
* Main pages: Task list, Add Task, Delete Task
* Connects to backend API via fetch or Axios
* Simple CSS styling for demonstration

Example folder structure:

```
frontend/
│-- public/
│   │-- index.html
│-- src/
│   │-- components/
│   │   │-- TaskList.jsx
│   │   │-- TaskForm.jsx
│   │-- App.jsx
│   │-- index.jsx
│   │-- api.js       # API calls
│-- package.json
```

### **Backend**

* Built with **Express**
* REST API endpoints: `GET /tasks`, `POST /tasks`, `PUT /tasks/:id`, `DELETE /tasks/:id`
* PostgreSQL database with task model
* Sample data for testing

Example folder structure:

```
backend/
│-- src/
│   │-- controllers/
│   │   │-- taskController.js
│   │-- routes/
│   │   │-- taskRoutes.js
│   │-- models/
│   │   │-- taskModel.js
│   │-- db.js          # Database connection
│   │-- server.js
│-- package.json
```

### **DevOps / Cloud**

* Docker setup for backend and optional frontend
* AWS infrastructure planning and deployment:

  * **ECR** for Docker image storage
  * **EC2** for running backend and frontend containers
  * **RDS** for PostgreSQL database
* Deployment flow:

  1. Build Docker images for backend and frontend
  2. Push images to AWS ECR
  3. Launch containers on EC2 instances
  4. Connect application to RDS database
  5. Verify full application functionality

Example folder structure:

```
docker/
│-- Dockerfile.backend
│-- Dockerfile.frontend
│-- docker-compose.yml
│-- README.md
```

---

## **Team & Responsibilities**

**Team Members (3):**

| # | Name   | Role / Responsibilities                                            |
| - | ------ | ------------------------------------------------------------------ |
| 1 | Baris  | Frontend Developer – UI design, React components, API integration  |
| 2 | Javier | Backend Developer – REST API, Database model, Sample data          |
| 3 | Marcel | DevOps / Cloud Engineer – Docker setup, AWS ECR/EC2/RDS deployment |

Tasks and dependencies are coordinated over a **3-week timeline** to ensure smooth development and deployment.

---

## **3-Week Task Timeline & Dependencies (AWS Deployment)**

| Week  | Frontend (Baris)                               | Backend (Javier)                              | DevOps / Cloud (Marcel)                                                                     |
| ----- | ---------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **1** | Mock UI design – independent                   | API & DB setup – independent                  | Infrastructure planning – AWS accounts, ECR, EC2, RDS                                       |
| **2** | API integration – depends on Backend API       | API ready – Frontend can connect              | Docker setup – prepare backend & frontend images, test locally                              |
| **3** | UI + API testing – depends on Backend + DevOps | Stabilize backend, bugfix – DevOps can deploy | Deploy flow – Push Docker images to AWS ECR, run containers on EC2, connect to RDS database |

**Legend / Color Concept:**

* **Green:** Independent – can work without waiting
* **Yellow:** Partial dependency – can work with mock data or setup
* **Red:** Dependent – cannot start until others finish

---

## **How to Run**

1. Clone the repository
2. Install dependencies in both frontend and backend
3. Configure the PostgreSQL database (RDS)
4. Start backend server locally (for development)
5. Start frontend development server
6. Optionally, build Docker images and deploy to AWS:

   * Build images → Push to ECR → Run containers on EC2 → Connect to RDS

---

