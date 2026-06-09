# 🚀 LeetStats — Your Personal LeetCode Analytics Dashboard

A modern and responsive dashboard that visualizes your LeetCode journey with beautiful animated progress circles, detailed statistics, and profile insights.

![LeetStats Banner](https://img.shields.io/badge/LeetStats-Analytics%20Dashboard-green?style=for-the-badge)

---

# ✨ Features

## 📊 Problem Solving Analytics

* Total solved questions
* Easy / Medium / Hard breakdown
* Real-time progress percentages
* Animated circular progress indicators

---

## 📈 Submission Statistics

* Total submissions
* Difficulty-wise submissions
* Acceptance rate calculation
* Accurate solved-to-total comparison

---

## 👤 User Profile Insights

* Global ranking
* Reputation
* Star rating
* Dynamic stat cards

---

## 🎨 Modern UI/UX

* Responsive design
* Mobile-friendly layout
* Smooth hover animations
* Dark-themed dashboard
* Flexbox-powered responsive cards

---

# 🛠️ Tech Stack

| Technology | Purpose                  |
| ---------- | ------------------------ |
| HTML5      | Structure                |
| CSS3       | Styling & responsiveness |
| JavaScript | Logic & DOM manipulation |
| GraphQL    | Fetching LeetCode data   |
| Fetch API  | API requests             |

---

# ⚡ How It Works

```text
User enters username
        ↓
Username validation
        ↓
GraphQL API request
        ↓
LeetCode data fetched
        ↓
Dashboard updates dynamically
```

---

# 📡 GraphQL Query

The app fetches:

* allQuestionsCount
* acSubmissionNum
* totalSubmissionNum
* ranking
* reputation
* starRating

using the LeetCode GraphQL endpoint.

---

# 📱 Responsive Design

### Desktop

✅ 2 cards per row
✅ Large animated progress circles

### Mobile

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

---

# 📂 Project Structure

```bash
LeetStats/
│
├── index.html
├── style.css
├── index.js
└── README.md
```

---

# ⚠️ Note About CORS

Direct frontend requests to LeetCode may be blocked due to CORS restrictions.

This project currently uses:

```text
https://corsproxy.io/
```

for development/testing purposes.

---

# 🌟 Future Improvements

* Contest rating graph
* Daily streak tracking
* Submission heatmap
* User avatar integration
* Dark/Light theme toggle
* Animated counters
* Local storage support

---

# 📸 Preview

```text
⭕ Total Progress
⭕ Easy
⭕ Medium
⭕ Hard

📦 Dynamic Stat Cards
📈 Acceptance Rate
🏆 Ranking
⭐ Star Rating
```

---

# 🤝 Contributing

Contributions are welcome!

Feel free to:

* Fork the repository
* Improve UI/UX
* Add new analytics
* Optimize responsiveness

---

