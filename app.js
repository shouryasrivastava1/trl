/**
 * THE READING LOUNGE - APPLICATION CORE SCRIPT
 * Book Renting Service SPA Logic in Indian Rupees (₹)
 */

// 1. INVENTORY DATASET WITH SPECIFIC REQUESTED BOOKS
const BOOK_INVENTORY = [
  {
    id: "VOL-501",
    title: "The 5 AM Club",
    subtitle: "Own Your Morning. Elevate Your Life.",
    author: "Robin Sharma",
    genre: "selfhelp",
    genreLabel: "Self-Improvement",
    tier: "Bestseller Tier",
    tierKey: "scholar",
    dailyRate: 12,
    weeklyRate: 79,
    monthlyRate: 249,
    deposit: 499,
    condition: "Mint (A+)",
    year: 2018,
    rating: 4.95,
    coverStyle: "cover-5am-club",
    description: "Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize productivity and activate supreme health.",
    isFeatured: true
  },
  {
    id: "VOL-502",
    title: "Harry Potter & The Sorcerer's Stone",
    subtitle: "Illustrated Hardcover Collector Edition",
    author: "J.K. Rowling",
    genre: "fiction",
    genreLabel: "Fiction & Fantasy",
    tier: "Collector & Deluxe Tier",
    tierKey: "collector",
    dailyRate: 24,
    weeklyRate: 149,
    monthlyRate: 499,
    deposit: 899,
    condition: "Mint (A+)",
    year: 1997,
    rating: 5.0,
    coverStyle: "cover-harry-potter",
    description: "The timeless fantasy classic that turned millions into readers. Deluxe clothbound collector edition with gold foil crest detail and archival protection.",
    isFeatured: true
  },
  {
    id: "VOL-503",
    title: "The Silent Patient",
    subtitle: "The Mind-Bending Psychological Thriller",
    author: "Alex Michaelides",
    genre: "thriller",
    genreLabel: "Mystery & Thriller",
    tier: "Bestseller Tier",
    tierKey: "scholar",
    dailyRate: 12,
    weeklyRate: 79,
    monthlyRate: 249,
    deposit: 499,
    condition: "Fine (A)",
    year: 2019,
    rating: 4.9,
    coverStyle: "cover-silent-patient",
    description: "Alicia Berenson’s life is seemingly perfect. Then one evening, she shoots her husband five times in the face, and then never speaks another word. A shocking psychological thriller with an unforgettable twist.",
    isFeatured: true
  },
  {
    id: "VOL-504",
    title: "Before the Coffee Gets Cold",
    subtitle: "What Would You Change If You Could Travel in Time?",
    author: "Toshikazu Kawaguchi",
    genre: "fiction",
    genreLabel: "Fiction & Fantasy",
    tier: "Bestseller Tier",
    tierKey: "scholar",
    dailyRate: 12,
    weeklyRate: 79,
    monthlyRate: 249,
    deposit: 499,
    condition: "Mint (A+)",
    year: 2015,
    rating: 4.88,
    coverStyle: "cover-before-coffee",
    description: "In a small back alley in Tokyo, there is a cafe which has been serving carefully brewed coffee for more than a hundred years. But this coffee shop offers its customers a unique experience: the chance to travel back in time.",
    isFeatured: true
  },
  {
    id: "VOL-505",
    title: "Atomic Habits",
    subtitle: "An Easy & Proven Way to Build Good Habits",
    author: "James Clear",
    genre: "selfhelp",
    genreLabel: "Self-Improvement",
    tier: "Bestseller Tier",
    tierKey: "scholar",
    dailyRate: 12,
    weeklyRate: 79,
    monthlyRate: 249,
    deposit: 499,
    condition: "Mint (A+)",
    year: 2018,
    rating: 4.98,
    coverStyle: "cover-atomic-habits",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear reveals practical strategies that will teach you how to form good habits and break bad ones.",
    isFeatured: false
  },
  {
    id: "VOL-506",
    title: "The Psychology of Money",
    subtitle: "Timeless Lessons on Wealth & Greed",
    author: "Morgan Housel",
    genre: "bestsellers",
    genreLabel: "Popular Bestsellers",
    tier: "Standard Tier",
    tierKey: "standard",
    dailyRate: 8,
    weeklyRate: 49,
    monthlyRate: 149,
    deposit: 299,
    condition: "Fine (A)",
    year: 2020,
    rating: 4.92,
    coverStyle: "cover-psychology-money",
    description: "Doing well with money isn’t necessarily about what you know. It’s about how you behave. Morgan Housel shares 19 short stories exploring the strange ways people think about money.",
    isFeatured: false
  },
  {
    id: "VOL-507",
    title: "Meditations & Personal Ethics",
    subtitle: "Stoic Wisdom for Daily Resilience",
    author: "Marcus Aurelius",
    genre: "philosophy",
    genreLabel: "Philosophy & Thought",
    tier: "Bestseller Tier",
    tierKey: "scholar",
    dailyRate: 12,
    weeklyRate: 79,
    monthlyRate: 249,
    deposit: 499,
    condition: "Fine (A)",
    year: 1983,
    rating: 4.95,
    coverStyle: "cover-meditations",
    description: "A timeless masterpiece of Stoic philosophy. Preserved hardcover edition with gilt edge detail.",
    isFeatured: false
  },
  {
    id: "VOL-508",
    title: "The Great Gatsby",
    subtitle: "The Great American Novel",
    author: "F. Scott Fitzgerald",
    genre: "classics",
    genreLabel: "Classics & Literature",
    tier: "Standard Tier",
    tierKey: "standard",
    dailyRate: 8,
    weeklyRate: 49,
    monthlyRate: 149,
    deposit: 299,
    condition: "Fine (A)",
    year: 1925,
    rating: 4.85,
    coverStyle: "cover-gatsby",
    description: "The exemplary novel of the Jazz Age, Fitzgerald’s third book stands as the supreme achievement of his career.",
    isFeatured: false
  },
  {
    id: "VOL-509",
    title: "Sapiens: A Brief History of Humankind",
    subtitle: "From Stone Age to Silicon Age",
    author: "Yuval Noah Harari",
    genre: "philosophy",
    genreLabel: "Philosophy & Thought",
    tier: "Bestseller Tier",
    tierKey: "scholar",
    dailyRate: 12,
    weeklyRate: 79,
    monthlyRate: 249,
    deposit: 499,
    condition: "Mint (A+)",
    year: 2014,
    rating: 4.9,
    coverStyle: "cover-sapiens",
    description: "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance?",
    isFeatured: false
  },
  {
    id: "VOL-510",
    title: "To Kill a Mockingbird",
    subtitle: "Pulitzer Prize Winning Classic",
    author: "Harper Lee",
    genre: "classics",
    genreLabel: "Classics & Literature",
    tier: "Standard Tier",
    tierKey: "standard",
    dailyRate: 8,
    weeklyRate: 49,
    monthlyRate: 149,
    deposit: 299,
    condition: "Fine (A)",
    year: 1960,
    rating: 4.93,
    coverStyle: "cover-mockingbird",
    description: "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty.",
    isFeatured: false
  }
];

// APP STATE MANAGEMENT
class LoungeApp {
  constructor() {
    this.currentTab = 'home';
    this.currentGenre = 'all';
    this.basket = [];
    this.selectedBookForRent = null;
    
    this.init();
  }

  init() {
    // 1. Render Featured books on Home page
    this.renderHomeFeatured();

    // 2. Render Full Catalog on Genre page
    this.renderCatalog();

    // 3. Render Master Price List Table
    this.renderPriceTable();

    // 4. Populate Form Select Dropdown
    this.populateFormBookDropdown();

    // 5. Initialize Calculator & Form Summaries
    this.updateCalculator();
    this.setDefaultDates();
    this.updateFormPricePreview();

    // 6. Handle Hash Routing if present
    const hash = window.location.hash.replace('#', '');
    if (['home', 'genre', 'pricelist', 'renterform', 'contact'].includes(hash)) {
      this.navigateTo(hash);
    }
  }

  // TAB NAVIGATION SYSTEM
  navigateTo(tabId) {
    this.currentTab = tabId;

    // Update active tab buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update active tab pane
    document.querySelectorAll('.tab-pane').forEach(pane => {
      if (pane.id === `tab-${tabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Update URL hash without scroll jump
    window.history.replaceState(null, '', `#${tabId}`);

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileMenu() {
    const navTabs = document.getElementById('nav-tabs');
    navTabs.classList.toggle('mobile-open');
  }

  // RENDER HOME FEATURED BOOKS
  renderHomeFeatured() {
    const container = document.getElementById('home-featured-grid');
    if (!container) return;

    const featuredBooks = BOOK_INVENTORY.filter(b => b.isFeatured);
    container.innerHTML = featuredBooks.map(book => this.createBookCardHTML(book)).join('');
  }

  // CREATE BOOK CARD HTML
  createBookCardHTML(book) {
    return `
      <div class="book-card">
        <div class="book-cover-wrap ${book.coverStyle}">
          <div class="cover-header-tag">VOL. ${book.id}</div>
          <div class="cover-title-box">
            <div class="cover-book-title">${book.title}</div>
            <div class="cover-book-author">by ${book.author}</div>
          </div>
          <div class="cover-footer-seal">
            <span>${book.genreLabel}</span>
            <span>${book.year}</span>
          </div>
        </div>

        <div class="book-card-meta">
          <div class="book-meta-genre">${book.genreLabel}</div>
          <h3 class="book-meta-title">${book.title}</h3>
          <p class="book-meta-author">By ${book.author}</p>
          <div class="book-pricing-row">
            <span class="rate-amount">₹${book.weeklyRate}</span>
            <span class="rate-period">/ week</span>
            <span class="rate-deposit">Deposit: ₹${book.deposit}</span>
          </div>
        </div>

        <div class="book-card-actions">
          <button class="btn btn-secondary btn-full" onclick="app.quickViewBook('${book.id}')">
            Details
          </button>
          <button class="btn btn-primary btn-full" onclick="app.rentBookDirectly('${book.id}')">
            Rent Now
          </button>
        </div>
      </div>
    `;
  }

  // CATALOG & GENRE FILTERING
  filterGenre(genreKey) {
    this.currentGenre = genreKey;

    document.querySelectorAll('.genre-pill').forEach(pill => {
      if (pill.dataset.genre === genreKey) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    const badge = document.getElementById('active-filter-badge');
    if (badge) {
      const genreNames = {
        all: 'All Books',
        bestsellers: 'Popular Bestsellers',
        fiction: 'Fiction & Fantasy',
        thriller: 'Mystery & Thriller',
        selfhelp: 'Self-Improvement',
        philosophy: 'Philosophy & Thought',
        classics: 'Classics & Literature'
      };
      badge.textContent = `Filter: ${genreNames[genreKey] || genreKey}`;
    }

    this.renderCatalog();
  }

  filterGenreFromFooter(genreKey) {
    this.navigateTo('genre');
    this.filterGenre(genreKey);
  }

  searchFromHero() {
    const query = document.getElementById('hero-search-input').value.trim();
    this.navigateTo('genre');
    const genreSearchInput = document.getElementById('genre-search-input');
    if (genreSearchInput) {
      genreSearchInput.value = query;
    }
    this.renderCatalog();
  }

  resetCatalogFilters() {
    document.getElementById('genre-search-input').value = '';
    document.getElementById('condition-filter').value = 'all';
    document.getElementById('sort-by').value = 'featured';
    this.filterGenre('all');
  }

  renderCatalog() {
    const grid = document.getElementById('genre-catalog-grid');
    const emptyState = document.getElementById('catalog-empty-state');
    const countText = document.getElementById('catalog-count-text');
    if (!grid) return;

    const query = (document.getElementById('genre-search-input')?.value || '').toLowerCase().trim();
    const conditionFilter = document.getElementById('condition-filter')?.value || 'all';
    const sortBy = document.getElementById('sort-by')?.value || 'featured';

    let list = BOOK_INVENTORY.filter(book => {
      // Genre filter
      if (this.currentGenre !== 'all' && book.genre !== this.currentGenre && this.currentGenre !== 'bestsellers') {
        return false;
      }
      if (this.currentGenre === 'bestsellers' && !['VOL-501', 'VOL-502', 'VOL-503', 'VOL-504', 'VOL-505', 'VOL-506'].includes(book.id)) {
        return false;
      }
      // Condition filter
      if (conditionFilter !== 'all' && book.condition !== conditionFilter) {
        return false;
      }
      // Search query
      if (query) {
        const matchTitle = book.title.toLowerCase().includes(query);
        const matchAuthor = book.author.toLowerCase().includes(query);
        const matchGenre = book.genreLabel.toLowerCase().includes(query);
        const matchId = book.id.toLowerCase().includes(query);
        if (!matchTitle && !matchAuthor && !matchGenre && !matchId) return false;
      }
      return true;
    });

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.weeklyRate - b.weeklyRate);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.weeklyRate - a.weeklyRate);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    if (countText) {
      countText.textContent = `Showing ${list.length} volume${list.length === 1 ? '' : 's'}`;
    }

    if (list.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      grid.innerHTML = list.map(book => this.createBookCardHTML(book)).join('');
    }
  }

  // MASTER PRICE TABLE IN RUPEES
  renderPriceTable() {
    const tbody = document.getElementById('master-price-tbody');
    if (!tbody) return;

    const query = (document.getElementById('price-table-search')?.value || '').toLowerCase().trim();

    const filtered = BOOK_INVENTORY.filter(book => {
      if (!query) return true;
      return book.title.toLowerCase().includes(query) ||
             book.author.toLowerCase().includes(query) ||
             book.genreLabel.toLowerCase().includes(query) ||
             book.id.toLowerCase().includes(query);
    });

    tbody.innerHTML = filtered.map(b => `
      <tr>
        <td><code class="mono">${b.id}</code></td>
        <td>
          <strong>${b.title}</strong><br>
          <small class="text-muted">by ${b.author}</small>
        </td>
        <td>${b.genreLabel}</td>
        <td><span class="tier-badge">${b.tier}</span></td>
        <td>₹${b.dailyRate}</td>
        <td><strong>₹${b.weeklyRate}</strong></td>
        <td>₹${b.monthlyRate}</td>
        <td>₹${b.deposit}</td>
        <td>
          <button class="btn btn-outline" onclick="app.rentBookDirectly('${b.id}')">
            Reserve
          </button>
        </td>
      </tr>
    `).join('');
  }

  // CALCULATOR TOOL LOGIC IN RUPEES
  selectTierForCalc(tierKey) {
    const select = document.getElementById('calc-book-select');
    if (select) {
      select.value = `tier-${tierKey}`;
      this.updateCalculator();
    }
    const calcElement = document.querySelector('.calculator-card');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updateCalculator() {
    const bookSelectVal = document.getElementById('calc-book-select')?.value || 'tier-scholar';
    const durationDays = parseInt(document.getElementById('calc-duration')?.value || '14', 10);
    const deliveryMethod = document.getElementById('calc-delivery')?.value || 'standard';

    const durationValLabel = document.getElementById('calc-duration-val');
    const weeksCount = Math.ceil(durationDays / 7);
    if (durationValLabel) {
      durationValLabel.textContent = `${durationDays} Days (${weeksCount} Week${weeksCount > 1 ? 's' : ''})`;
    }

    let dailyRate = 12;
    let deposit = 499;

    if (bookSelectVal.startsWith('VOL-')) {
      const b = BOOK_INVENTORY.find(x => x.id === bookSelectVal);
      if (b) {
        dailyRate = b.dailyRate;
        deposit = b.deposit;
      }
    } else if (bookSelectVal === 'tier-standard') {
      dailyRate = 8;
      deposit = 299;
    } else if (bookSelectVal === 'tier-scholar') {
      dailyRate = 12;
      deposit = 499;
    } else if (bookSelectVal === 'tier-collector') {
      dailyRate = 24;
      deposit = 899;
    }

    let deliveryPrice = 49;
    if (deliveryMethod === 'salon') deliveryPrice = 0;
    if (deliveryMethod === 'express') deliveryPrice = 99;

    let baseRentalFee = Math.round(dailyRate * durationDays);

    // Apply long-term discounts
    if (durationDays >= 30 && durationDays < 60) {
      baseRentalFee = Math.round(baseRentalFee * 0.90);
    } else if (durationDays >= 60) {
      baseRentalFee = Math.round(baseRentalFee * 0.85);
    }

    const grandTotal = baseRentalFee + deliveryPrice + deposit;

    document.getElementById('summary-days-text').textContent = `${durationDays} days`;
    document.getElementById('summary-base-price').textContent = `₹${baseRentalFee}`;
    document.getElementById('summary-delivery-price').textContent = deliveryPrice === 0 ? 'Free' : `₹${deliveryPrice}`;
    document.getElementById('summary-deposit-price').textContent = `₹${deposit}`;
    document.getElementById('summary-deposit-note').textContent = `₹${deposit}`;
    document.getElementById('summary-total-price').textContent = `₹${grandTotal}`;
  }

  proceedFromCalcToForm() {
    const bookSelectVal = document.getElementById('calc-book-select')?.value;
    const durationDays = document.getElementById('calc-duration')?.value;
    const deliveryMethod = document.getElementById('calc-delivery')?.value;

    this.navigateTo('renterform');

    if (bookSelectVal && bookSelectVal.startsWith('VOL-')) {
      document.getElementById('form-book-select').value = bookSelectVal;
    }
    if (durationDays) {
      document.getElementById('renter-duration').value = durationDays;
    }
    if (deliveryMethod) {
      document.getElementById('renter-delivery-method').value = deliveryMethod;
    }

    this.updateFormPricePreview();
  }

  // RENTER FORM LOGIC IN RUPEES
  populateFormBookDropdown() {
    const select = document.getElementById('form-book-select');
    const calcSelect = document.getElementById('calc-book-select');

    if (select) {
      let html = `<option value="" disabled selected>-- Select a Book from Inventory --</option>`;
      BOOK_INVENTORY.forEach(b => {
        html += `<option value="${b.id}">${b.id}: ${b.title} (${b.genreLabel} — ₹${b.weeklyRate}/wk)</option>`;
      });
      select.innerHTML = html;
    }

    if (calcSelect) {
      let html = `
        <optgroup label="Standard Classification Tiers">
          <option value="tier-standard">Standard Tier (₹49/wk)</option>
          <option value="tier-scholar" selected>Bestseller Tier (₹79/wk)</option>
          <option value="tier-collector">Collector Tier (₹149/wk)</option>
        </optgroup>
        <optgroup label="Specific Catalog Titles">
      `;
      BOOK_INVENTORY.forEach(b => {
        html += `<option value="${b.id}">${b.title} (${b.id})</option>`;
      });
      html += `</optgroup>`;
      calcSelect.innerHTML = html;
    }
  }

  setDefaultDates() {
    const startDateInput = document.getElementById('renter-startdate');
    if (startDateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      startDateInput.value = `${yyyy}-${mm}-${dd}`;
    }
  }

  updateFormPricePreview() {
    const bookId = document.getElementById('form-book-select')?.value;
    const durationDays = parseInt(document.getElementById('renter-duration')?.value || '14', 10);
    const deliveryMethod = document.getElementById('renter-delivery-method')?.value || 'standard';
    const previewCard = document.getElementById('form-book-preview');

    const book = BOOK_INVENTORY.find(b => b.id === bookId);

    if (book && previewCard) {
      previewCard.style.display = 'flex';
      previewCard.innerHTML = `
        <div class="spine-item ${book.coverStyle}" style="padding: 10px 16px; border-radius: 4px; min-width: 140px;">
          <span style="font-size:0.65rem; color:var(--accent-gold);">${book.genreLabel}</span>
          <span style="font-family:var(--font-serif); font-weight:700;">${book.title}</span>
        </div>
        <div>
          <h4 style="font-family:var(--font-serif); font-size:1.15rem;">${book.title}</h4>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Author: ${book.author} &bull; Condition: <strong>${book.condition}</strong></p>
          <p style="font-size:0.85rem; color:var(--accent-gold); margin-top:2px;">Weekly Rate: ₹${book.weeklyRate} &bull; Refundable Deposit: ₹${book.deposit}</p>
        </div>
      `;
    } else if (previewCard) {
      previewCard.style.display = 'none';
    }

    const dailyRate = book ? book.dailyRate : 12;
    const deposit = book ? book.deposit : 499;
    
    let baseRentalFee = Math.round(dailyRate * durationDays);
    if (durationDays >= 30 && durationDays < 60) baseRentalFee = Math.round(baseRentalFee * 0.90);
    if (durationDays >= 60) baseRentalFee = Math.round(baseRentalFee * 0.85);

    let deliveryFee = 49;
    if (deliveryMethod === 'salon') deliveryFee = 0;
    if (deliveryMethod === 'express') deliveryFee = 99;

    const grandTotal = baseRentalFee + deliveryFee + deposit;

    document.getElementById('form-summary-rate').textContent = book ? `₹${book.weeklyRate} / week` : '₹79 / week';
    document.getElementById('form-summary-days').textContent = `${durationDays} days`;
    document.getElementById('form-summary-rental-cost').textContent = `₹${baseRentalFee}`;
    document.getElementById('form-summary-delivery').textContent = deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`;
    document.getElementById('form-summary-deposit').textContent = `₹${deposit}`;
    document.getElementById('form-summary-grandtotal').textContent = `₹${grandTotal}`;
    document.getElementById('agree-deposit-amount').textContent = `₹${deposit}`;
  }

  rentBookDirectly(bookId) {
    const book = BOOK_INVENTORY.find(b => b.id === bookId);
    if (!book) return;

    this.selectedBookForRent = book;
    this.navigateTo('renterform');

    const select = document.getElementById('form-book-select');
    if (select) {
      select.value = bookId;
      this.updateFormPricePreview();
    }
  }

  resetRenterForm() {
    document.getElementById('renter-registration-form').reset();
    this.setDefaultDates();
    this.updateFormPricePreview();
  }

  handleFormSubmission(event) {
    event.preventDefault();

    const firstName = document.getElementById('renter-firstname').value;
    const lastName = document.getElementById('renter-lastname').value;
    const email = document.getElementById('renter-email').value;
    const phone = document.getElementById('renter-phone').value;
    const idType = document.getElementById('renter-idtype').value;
    const idNum = document.getElementById('renter-idnum').value;
    const bookId = document.getElementById('form-book-select').value;
    const startDate = document.getElementById('renter-startdate').value;
    const durationDays = document.getElementById('renter-duration').value;
    const street = document.getElementById('renter-street').value;
    const city = document.getElementById('renter-city').value;
    const deliveryMethod = document.getElementById('renter-delivery-method').value;

    const book = BOOK_INVENTORY.find(b => b.id === bookId);
    if (!book) {
      alert("Please select a book to rent.");
      return;
    }

    const voucherRef = "RL-" + Math.floor(100000 + Math.random() * 900000);
    const returnDateObj = new Date(startDate);
    returnDateObj.setDate(returnDateObj.getDate() + parseInt(durationDays, 10));
    const returnDateStr = returnDateObj.toISOString().split('T')[0];

    const grandTotal = document.getElementById('form-summary-grandtotal').textContent;
    const deposit = document.getElementById('form-summary-deposit').textContent;

    const receiptBody = document.getElementById('receipt-modal-body');
    receiptBody.innerHTML = `
      <div style="text-align:center; margin-bottom:20px; background:#F2ECD9; padding:12px; border-radius:4px; border:1px dashed var(--accent-gold);">
        <span style="font-size:0.75rem; letter-spacing:0.15em; color:var(--accent-gold); font-weight:700;">RESERVATION CONFIRMED &amp; DISPATCH APPROVED</span>
        <h3 style="font-family:var(--font-serif); font-size:1.6rem; color:var(--text-primary); margin-top:2px;">Voucher Ref: ${voucherRef}</h3>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; font-size:0.9rem; margin-bottom:20px;">
        <div>
          <strong style="color:var(--accent-gold);">Renter Profile:</strong><br>
          ${firstName} ${lastName}<br>
          ${email}<br>
          ${phone}<br>
          <small class="text-muted">ID: ${idType} (${idNum})</small>
        </div>
        <div>
          <strong style="color:var(--accent-gold);">Delivery Address:</strong><br>
          ${street}<br>
          ${city}<br>
          Option: <strong>${deliveryMethod.toUpperCase()}</strong>
        </div>
      </div>

      <div style="background:var(--bg-card); border:1px solid var(--border-color); padding:16px; border-radius:6px; margin-bottom:20px;">
        <strong style="color:var(--accent-gold);">Reserved Book Summary:</strong>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <div>
            <h4 style="font-family:var(--font-serif); font-size:1.15rem;">${book.title}</h4>
            <p style="font-size:0.85rem; color:var(--text-secondary);">By ${book.author} &bull; Ref: ${book.id}</p>
          </div>
          <span class="condition-badge cond-mint">${book.condition}</span>
        </div>
        <hr style="border:none; border-top:1px dashed var(--border-color); margin:12px 0;">
        <div style="display:flex; justify-content:space-between; font-size:0.88rem;">
          <span>Start Date: <strong>${startDate}</strong></span>
          <span>Return Due Date: <strong>${returnDateStr}</strong></span>
        </div>
      </div>

      <div style="background:var(--bg-dark); color:#FFF; padding:16px; border-radius:6px; font-size:0.95rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span>Refundable Security Deposit:</span>
          <strong style="color:var(--accent-light);">${deposit}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:1.15rem; font-weight:700; border-top:1px solid #3D3731; padding-top:8px;">
          <span>Total Payable Initial Amount:</span>
          <span style="color:var(--accent-gold);">${grandTotal}</span>
        </div>
      </div>
    `;

    document.getElementById('receipt-modal-backdrop').style.display = 'flex';

    // LocalStorage recording
    const reservationRecord = {
      voucherRef,
      renterName: `${firstName} ${lastName}`,
      email,
      bookTitle: book.title,
      startDate,
      returnDateStr,
      grandTotal,
      createdAt: new Date().toISOString()
    };
    const existing = JSON.parse(localStorage.getItem('lounge_rentals') || '[]');
    existing.push(reservationRecord);
    localStorage.setItem('lounge_rentals', JSON.stringify(existing));
  }

  closeReceiptModal() {
    document.getElementById('receipt-modal-backdrop').style.display = 'none';
    this.resetRenterForm();
    this.navigateTo('home');
  }

  // QUICK VIEW BOOK MODAL
  quickViewBook(bookId) {
    const book = BOOK_INVENTORY.find(b => b.id === bookId);
    if (!book) return;

    const modalBody = document.getElementById('book-modal-body');
    modalBody.innerHTML = `
      <div style="display:grid; grid-template-columns:0.8fr 1.2fr; gap:24px; align-items:start; padding:24px;">
        <div class="book-cover-wrap ${book.coverStyle}" style="height:300px;">
          <div class="cover-header-tag">VOL. ${book.id}</div>
          <div class="cover-title-box">
            <div class="cover-book-title">${book.title}</div>
            <div class="cover-book-author">by ${book.author}</div>
          </div>
          <div class="cover-footer-seal">
            <span>${book.genreLabel}</span>
            <span>${book.year}</span>
          </div>
        </div>

        <div>
          <span class="section-tag">${book.genreLabel} &bull; ${book.tier}</span>
          <h2 style="font-family:var(--font-serif); font-size:2rem; margin:4px 0 2px;">${book.title}</h2>
          <p style="font-size:0.9rem; color:var(--accent-gold); font-style:italic; margin-bottom:12px;">${book.subtitle || ''}</p>
          <p style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:16px;">Author: <strong>${book.author}</strong></p>

          <p style="font-size:0.9rem; line-height:1.6; margin-bottom:20px; color:var(--text-secondary);">
            ${book.description}
          </p>

          <div style="background:var(--bg-secondary); padding:16px; border-radius:6px; border:1px solid var(--border-color); margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Weekly Rental Rate:</span>
              <strong style="font-size:1.1rem; color:var(--accent-gold);">₹${book.weeklyRate} / wk</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Monthly Rate:</span>
              <strong>₹${book.monthlyRate} / mo</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>Refundable Deposit:</span>
              <strong>₹${book.deposit}</strong>
            </div>
          </div>

          <div style="display:flex; gap:12px;">
            <button class="btn btn-secondary btn-full" onclick="app.addToBasket('${book.id}')">
              Add to Basket
            </button>
            <button class="btn btn-primary btn-full" onclick="app.closeBookModal(); app.rentBookDirectly('${book.id}');">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('book-modal-backdrop').style.display = 'flex';
  }

  closeBookModal(event) {
    if (!event || event.target.id === 'book-modal-backdrop' || !event.target.closest('#book-modal-card')) {
      document.getElementById('book-modal-backdrop').style.display = 'none';
    }
  }

  // RENTAL BASKET DRAWER LOGIC
  toggleBasketDrawer() {
    const drawer = document.getElementById('basket-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const isOpen = drawer.classList.contains('open');

    if (isOpen) {
      drawer.classList.remove('open');
      backdrop.style.display = 'none';
    } else {
      drawer.classList.add('open');
      backdrop.style.display = 'block';
      this.renderBasket();
    }
  }

  addToBasket(bookId) {
    const book = BOOK_INVENTORY.find(b => b.id === bookId);
    if (!book) return;

    if (!this.basket.find(b => b.id === bookId)) {
      this.basket.push(book);
    }
    this.updateBasketCount();
    this.closeBookModal();
    this.toggleBasketDrawer();
  }

  removeFromBasket(bookId) {
    this.basket = this.basket.filter(b => b.id !== bookId);
    this.updateBasketCount();
    this.renderBasket();
  }

  updateBasketCount() {
    const badge = document.getElementById('bag-count');
    if (badge) badge.textContent = this.basket.length;
  }

  renderBasket() {
    const body = document.getElementById('drawer-body');
    const totalVal = document.getElementById('drawer-total-val');
    if (!body) return;

    if (this.basket.length === 0) {
      body.innerHTML = `
        <div style="text-align:center; padding:40px 16px;">
          <span style="font-size:2.5rem;">📖</span>
          <h4 style="margin-top:12px;">Your Basket is Empty</h4>
          <p style="font-size:0.85rem; color:var(--text-muted);">Browse catalog to add books for rental.</p>
        </div>
      `;
      if (totalVal) totalVal.textContent = '₹0';
      return;
    }

    let subtotal = 0;
    body.innerHTML = this.basket.map(book => {
      const itemTotal = book.weeklyRate + book.deposit;
      subtotal += itemTotal;
      return `
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-secondary); padding:12px; border-radius:6px; border:1px solid var(--border-color);">
          <div>
            <h4 style="font-family:var(--font-serif); font-size:1rem;">${book.title}</h4>
            <p style="font-size:0.8rem; color:var(--text-secondary);">₹${book.weeklyRate}/wk + ₹${book.deposit} deposit</p>
          </div>
          <button style="background:none; border:none; color:#B93829; font-size:1.2rem; cursor:pointer;" onclick="app.removeFromBasket('${book.id}')">&times;</button>
        </div>
      `;
    }).join('');

    if (totalVal) totalVal.textContent = `₹${subtotal}`;
  }

  checkoutFromBasket() {
    if (this.basket.length === 0) {
      alert("Your basket is empty.");
      return;
    }
    const firstBook = this.basket[0];
    this.toggleBasketDrawer();
    this.rentBookDirectly(firstBook.id);
  }

  // CONTACT & FAQ ACCORDION LOGIC
  handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    alert(`Thank you, ${name}. Your concierge inquiry has been registered. Our salon concierge will contact you within 24 hours.`);
    document.getElementById('contact-form').reset();
  }

  toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    if (item) {
      item.classList.toggle('active');
    }
  }
}

// Global instance
const app = new LoungeApp();
