# 📖 The Reading Lounge — Book Renting Service Web Application

A modern, high-end web application for a boutique book renting service with a **broker bookstore aesthetic** and **neutral parchment & warm ink color palette**. Features transparent tariffs in **Indian Rupees (₹)**, curated catalog browsing by genre, interactive price list estimator, renter registration form, digital voucher pass generation, and concierge support.

---

## 🌟 Key Features

- **Neutral Color Vibe & Aesthetic**: Styled with warm parchment, sandstone/linen cards, deep espresso ink typography, and bookbinder antique gold accents.
- **5 Interactive Navigation Tabs**:
  1. **Home**: Hero banner, search bar, highlights grid, featured bestsellers spotlight, and 4-step process guide.
  2. **Genre**: Real-time search and multi-genre filtering (*Popular Bestsellers*, *Fiction & Fantasy*, *Mystery & Thriller*, *Self-Improvement*, *Philosophy & Thought*, *Classics*), condition seals (*Mint A+*, *Fine A*, *Very Good B+*), and sorting.
  3. **Book Price List (₹ INR)**: Pricing tier cards (Standard ₹49/wk, Bestseller ₹79/wk, Collector ₹149/wk), interactive rental cost estimator with duration slider, and searchable master price table.
  4. **Rentor Details Form**: Comprehensive 3-section registration and dispatch form with live rupee breakdown calculation, security deposit acknowledgement, and printable Digital Rental Voucher Pass generator.
  5. **Contact**: Salon headquarters details (Connaught Place, New Delhi), concierge inquiry form, and interactive FAQ accordion.
- **Featured Titles Included**:
  - *The 5 AM Club* by Robin Sharma
  - *Harry Potter & The Sorcerer's Stone* by J.K. Rowling
  - *The Silent Patient* by Alex Michaelides
  - *Before the Coffee Gets Cold* by Toshikazu Kawaguchi
  - *Atomic Habits* by James Clear
  - *The Psychology of Money* by Morgan Housel
  - *Meditations* by Marcus Aurelius
  - *The Great Gatsby* by F. Scott Fitzgerald

---

## 📁 Repository Structure

```
.
├── index.html     # HTML5 application structure & dynamic tab panes
├── styles.css     # CSS3 design system & custom book cover artwork styling
├── app.js         # Single Page Application routing, catalog state, calculator & form logic
└── README.md      # Project documentation
```

---

## 🚀 How to Run Locally

Since this is a native static web application (**HTML5, CSS3, Vanilla JS**), no Node/npm build steps are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/justcrazyaf/The-Reading-Lounge.git
   cd The-Reading-Lounge
   ```
2. Open `index.html` directly in your browser or run a simple local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8080

   # Or using Ruby
   ruby -run -ehttpd . -p8080
   ```
3. Visit `http://localhost:8080` in your web browser.

---

## 📄 License

&copy; 2026 The Reading Lounge. All rights reserved.
