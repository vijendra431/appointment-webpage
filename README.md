# 📅 Appointments Web App

A simple and interactive **Appointments Management Application** built using React. This project allows users to add, search, and mark appointments as important (starred), helping them manage their daily schedule efficiently.

---

## 🚀 Live Demo

(👉 Add your deployed link here — https://appointments-webpage.netlify.app/)

---

## 📌 Project Purpose

The main goal of this project is to:

* Practice **React Class Components**
* Understand **state management**
* Work with **user inputs and events**
* Implement **dynamic UI rendering**
* Build a **real-world feature-based application**

This project simulates how a basic appointment or task manager works in real applications.

---

## 🛠️ Tech Stack Used

* **React.js (Class Components)**
* **JavaScript (ES6)**
* **CSS3**
* **UUID (for unique IDs)**
* **date-fns (for date formatting)**

---

## ✨ Features

### ✅ Add Appointment

* Users can add a title and select a date
* Each appointment is stored with a unique ID

### 🔍 Search Functionality

* Real-time filtering of appointments based on title
* Case-insensitive search

### ⭐ Star / Unstar Feature

* Toggle important appointments
* Helps prioritize tasks

### 📋 Dynamic Rendering

* Appointments list updates instantly without page reload

---

## 📂 Project Structure

```
src/
 ├── components/
 │   ├── Appointments/
 │   ├── AppointmentItem/
 ├── App.js
 ├── index.js
```

---

## 🧠 What I Learned

### 🔹 React Concepts

* How to use **Class Components**
* Managing **state** using `this.state`
* Updating state with `setState`
* Passing data using **props**
* Handling **events** (onChange, onClick)

---

### 🔹 Array Methods

* `map()` → Rendering list of appointments
* `filter()` → Implementing search functionality

---

### 🔹 Functional Logic

* Creating reusable components
* Handling user input dynamically
* Implementing toggle functionality (star feature)

---

### 🔹 Problem Solving

* Debugging issues related to:

  * Incorrect props passing
  * State updates
  * Event handling mistakes
* Understanding real-time UI updates

---

## 💡 Key Functionalities Explained

### ➤ Adding Appointment

* Captures title and date from input fields
* Generates unique ID using UUID
* Updates appointment list

### ➤ Search Logic

```javascript
appointmentList.filter(eachAppointment =>
  eachAppointment.title.toLowerCase().includes(searchInput.toLowerCase())
)
```

### ➤ Star Toggle Logic

```javascript
appointmentList.map(eachAppointment => {
  if (id === eachAppointment.id) {
    return {...eachAppointment, isLike: !eachAppointment.isLike}
  }
  return eachAppointment
})
```

---

## 📈 Why This Project is Important

* Demonstrates **core React skills**
* Shows ability to build **interactive UI**
* Covers **real-world use cases**
* Highlights **problem-solving ability**
* Useful for **frontend developer interviews**

---

## 🎯 Future Improvements

* Add **localStorage** to persist data
* Implement **edit & delete features**
* Add **responsive design (mobile-friendly)**
* Improve UI/UX with better styling
* Add **filter for starred appointments only**

---

## 🙌 Conclusion

This project helped me strengthen my understanding of React fundamentals and build confidence in creating real-world applications. It reflects my ability to write clean, functional, and scalable frontend code.

---

## 📬 Contact

* GitHub: https://github.com/vijendra431
* (Add LinkedIn if you have)

---

⭐ If you like this project, feel free to give it a star!
