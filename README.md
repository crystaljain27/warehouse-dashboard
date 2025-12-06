# 🚀 Warehouse Robot Dashboard
A responsive and interactive dashboard built as part of the Frontend Internship Assignment. This project implements UI/UX design, component-based architecture, global state management, real-time bot simulation, task queue automation, and analytics visualization.

## 📦 Tech Stack
React.js, Vite, Tailwind CSS, React Router, Zustand (global state), Mock REST API with randomized simulation logic, Recharts/Chart.js for analytics.

## 🛠️ How to Run the Project
Install dependencies and start the dev server:
npm install
npm run dev
Project runs on http://localhost:5173

## 🧱 Folder Structure & Architecture
src/
 ├── components/
 │    ├── BotCard.jsx
 │    ├── Navbar.jsx
 │    ├── TaskForm.jsx
 │    └── charts/
 │         └── StatusChart.jsx
 ├── pages/
 │    ├── Login.jsx
 │    ├── Signup.jsx
 │    ├── Dashboard.jsx
 │    ├── BotStatus.jsx
 │    ├── TaskAllocation.jsx
 │    ├── TaskQueue.jsx
 │    ├── Analytics.jsx
 │    └── Map.jsx
 ├── store/
 │    ├── authStore.js
 │    ├── botStore.js
 │    └── taskStore.js
 ├── utils/
 │    ├── mockBots.js
 │    └── randomUpdate.js
 ├── App.jsx
 └── main.jsx

## 🔄 Data Flow Overview
### Authentication
Handled entirely through Zustand global state. No localStorage is used as required. Login state persists only for the active session.

### Bot Status Auto-Update (Every 10 Seconds)
Initial bot data is provided through mockBots.js. The dashboard updates automatically by generating simulated values including battery percentage, speed, task, and last updated timestamp. The Bot Status page displays 10 bot cards that refresh in real time.

### Task Allocation
User creates a new task via TaskForm.jsx. Submitted tasks are stored in taskStore and immediately visible in the Task Queue.

### Task Queue Simulation
Every 3 seconds, one pending task is automatically removed to simulate task assignment. This validates timer logic, queue processing, and real-time UI updates.

## 📊 Analytics Design Decisions

The Analytics page provides visual insights into key warehouse performance indicators. These charts help operators quickly interpret system health, bot efficiency, and workload distribution.

### 📈 Chosen Metrics

#### 1. Bot Battery Levels — Bar Chart
- Displays the current battery percentage of each bot.
- Helps identify bots approaching low battery.
- Bar chart format allows easy comparison across all bots.
- Useful for scheduling charging cycles proactively.

#### 2. Bot Status Distribution — Pie Chart
- Shows the number of bots in each state:
  - Idle
  - Busy
  - Charging
  - Error
- Helps monitor system load and operational stability.
- A pie chart gives an immediate overview of workload balance.

### 📊 Chart Library Used: Recharts
Recharts was chosen because:
- It is lightweight and highly compatible with React.
- Simple API with minimal configuration.
- Offers responsive and clean visual output.
- Ideal for a dashboard requiring frequent real-time updates.

### 🎯 Why These Charts?
- They represent real operational KPIs relevant to warehouse automation.
- They update automatically as bot states change.
- Provide instant insights without manually analyzing raw data.
- Improve operator decision-making and situational awareness.

---

## 🏗️ State Management Reasoning
Zustand is used because:
- Lightweight and easier compared to Redux
- No boilerplate
- Ideal for rapidly updating states like bots and timers
- Simple subscription-based updates improve performance

Global stores:
- authStore → authentication state
- botStore → bots, refresh timers, status logic
- taskStore → task creation, removal, queue management

Component-level state is used only for form inputs and temporary UI interactions.

## 🎯 Features Implemented
- Login/Signup with validation
- Dashboard overview metrics
- Real-time bot status auto-refresh
- Task creation page
- Task queue with auto-removal logic
- Analytics with charts
- Bonus: Map page with SVG upload & moving bot simulation

## 📌 Improvements Possible
- Integrate real backend API
- Add role-based access control
- Add WebSocket-based real-time updates
- Replace random updates with actual warehouse data
- Add pagination on Bot Status page
- Add animations for bot movement

## 📁 Repository Structure Guarantee
The code follows:
- Clean, predictable file structure
- Meaningful commit messages
- Fully functional components
- Separation of UI, logic, and store layers
- Scalable architecture for future backend integration

## 🙌 Conclusion
This project delivers all required features of the internship assignment including UI/UX clarity, responsiveness, state management, timers, mock API usage, analytics, and optional bonus SVG map simulation. It is production-ready, well-structured, and easy to scale.
