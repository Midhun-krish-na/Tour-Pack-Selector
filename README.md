# Travel Explorer – Tour Package Selector

A responsive travel and tourism destination explorer built with **React** and **Tailwind CSS**. Users can explore curated travel packages, filter destinations, save trips to a wishlist, and simulate bookings with automatic cost calculations.

## Features

### Explore Destinations
- Browse six curated travel packages across South India.
- Search destinations by name or location.
- Filter packages by category:
  - Hill Station
  - Beach
  - Heritage
  - Adventure
- Sort packages by price and rating.
- Responsive destination cards.

### Package Details
- View destination information and descriptions.
- Explore trip highlights.
- View day-by-day itineraries.
- Check package inclusions and exclusions.
- View pricing per traveller.

### Wishlist
- Save and remove favourite travel packages.
- View saved packages on a dedicated page.
- Persist wishlist data using browser localStorage.
- Display the saved-trip count in the navigation bar.

### Booking Simulation
- Select a travel date.
- Adjust the number of travellers using increment/decrement controls or manual entry.
- Calculate booking subtotal automatically.
- Apply 5% GST.
- Generate a booking reference.
- View booking confirmation details.

> **Note:** This is a frontend assessment project. Bookings are simulated and stored locally in the browser. The application does not process real payments or make actual travel reservations.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| Vite | Development and build tooling |
| Tailwind CSS | Styling and responsive design |
| React Router DOM | Client-side routing |
| JavaScript | Application logic |
| JSON | Local travel package dataset |
| localStorage | Wishlist and booking persistence |

## Application Routes

| Route | Description |
|---|---|
| `/` | Explore destinations |
| `/package/:id` | Package details |
| `/book/:id` | Booking form |
| `/confirmation/:ref` | Booking confirmation |
| `/saved` | Saved trips |
| `/404` | Not found page |

## Project Structure

```text
Tour-Pack-Selector/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── destination/
│   │   └── booking/
│   ├── context/
│   ├── data/
│   │   └── packages.json
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Midhun-krish-na/Tour-Pack-Selector.git
```

Navigate into the project:

```bash
cd Tour-Pack-Selector
```

Install dependencies:

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The production-ready files are generated in the `dist/` directory.

## Data and Persistence

- Travel packages are maintained in `src/data/packages.json`.
- Saved trips are stored in browser localStorage.
- Booking records are stored in browser localStorage.
- Data is local to the browser and is not synchronized between devices.

## Responsive Design

The interface is designed for:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px

## Future Improvements

- Reusable notification and feedback system.
- Booking history dashboard.
- Improved navigation and visual consistency.
- Backend integration and persistent user accounts.
- Real booking and payment integration.

## Author

**Midhun Krishna M**

GitHub: [Midhun-krish-na](https://github.com/Midhun-krish-na)

---

*Developed as part of a frontend industry immersion assessment.*