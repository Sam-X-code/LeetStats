# 🚀 LeetStats — LeetCode Analytics Dashboard

A modern and responsive dashboard that visualizes your LeetCode journey with animated progress circles, detailed submission analytics, and user profile insights.



\

---

# ✨ Features

## 📊 Problem Solving Analytics

* Total solved questions
* Easy / Medium / Hard breakdown
* Real-time progress tracking
* Animated circular progress indicators
* Difficulty-wise completion percentages

---

## 📈 Submission Statistics

* Total submissions
* Difficulty-wise submissions
* Accurate acceptance rate calculation
* Solved vs total comparison

---

## 👤 User Profile Insights

* Global ranking
* Reputation
* Star rating
* Dynamic profile cards

---

## 🎨 Modern UI/UX

* Fully responsive design
* Mobile-friendly layout
* Smooth hover animations
* Dark-themed dashboard
* Flexbox-powered responsive cards
* Animated conic-gradient progress circles

---

# 🛠️ Tech Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| HTML5             | Structure                |
| CSS3              | Styling & responsiveness |
| JavaScript        | Logic & DOM manipulation |
| GraphQL           | Fetching LeetCode data   |
| Netlify Functions | Backend serverless API   |
| Fetch API         | API requests             |

---

# ⚡ How It Works

```text
User enters username
        ↓
Username validation
        ↓
Frontend sends GraphQL request
        ↓
Netlify Function handles API call
        ↓
LeetCode data fetched
        ↓
Dashboard updates dynamically
```

---

# 📡 GraphQL Data Fetched

The app fetches:

* `allQuestionsCount`
* `acSubmissionNum`
* `totalSubmissionNum`
* `ranking`
* `reputation`
* `starRating`

using the LeetCode GraphQL endpoint.

---

# 📱 Responsive Design

## Desktop

✅ Two cards per row
✅ Large animated progress circles

## Mobile

✅ Stacked cards
✅ Adaptive layout
✅ Optimized typography

---

# 🧠 Concepts Used

* DOM Manipulation
* Event Listeners
* Async/Await
* Fetch API
* GraphQL Queries
* CSS Flexbox
* CSS Conic Gradients
* Responsive Web Design
* Netlify Serverless Functions

---

# 📂 Project Structure

```bash
LeetStats/
│
├── index.html
├── style.css
├── index.js
│
├── netlify/
│   └── functions/
│       └── leetcode.js
│
└── README.md
```

---

# 🚀 Live Demo

🔗https://serene-profiterole-3bb039.netlify.app/

---

# ⚠️ CORS Handling

Direct frontend requests to LeetCode are blocked due to CORS restrictions.

This project solves the issue using:

✅ Netlify Serverless Functions

Architecture:

```text
Frontend
   ↓
Netlify Function
   ↓
LeetCode GraphQL API
```

---

# 🌟 Future Improvements

* Contest rating graph
* Daily streak tracking
* Submission heatmap
* User avatar integration
* Dark/Light theme toggle
* Animated counters
* Search history
* Local storage support
* GitHub profile integration

---

# 🤝 Contributing

Contributions are welcome!

Feel free to:

* Improve UI/UX
* Add new analytics
* Optimize responsiveness
* Add animations/features
