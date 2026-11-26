# CRYCIOUS — Travel Package Selector

A customizable, responsive travel package selection template built with React, Vite and Tailwind CSS.

Travel Package Selector provides a starting point for travel agencies, tour operators, developers and businesses looking to create their own travel package browsing and booking interface.

The template includes destination discovery, package details, traveller selection, booking calculations, saved trips and booking history.

## Features

### Explore Packages
- Browse sample travel packages.
- Search destinations by name or location.
- Filter packages by category.
- Sort packages by price and rating.
- Responsive destination cards.

### Package Details
- View destination descriptions.
- Explore package highlights.
- Browse day-by-day itineraries.
- Review inclusions and exclusions.
- View pricing per traveller.

### Saved Trips
- Save favourite packages.
- Remove saved packages.
- View saved trips on a dedicated page.
- Persistent browser storage.

### Booking System
- Select a travel date.
- Adjust traveller quantities using increment/decrement controls or manual entry.
- Calculate booking subtotals automatically.
- Calculate 5% GST.
- Generate unique booking references.
- View booking confirmation details.

### Booking Management
- View booking history.
- Review booking details and totals.
- Cancel demo bookings.
- Remove bookings from local history.
- Retain booking status after refreshing the browser.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| Vite | Development and production build |
| Tailwind CSS | Styling |
| React Router DOM | Client-side navigation |
| JavaScript | Application logic |
| JSON | Sample package data |
| localStorage | Local persistence |

## Application Routes

| Route | Description |
|---|---|
| `/` | Explore packages |
| `/package/:id` | Package details |
| `/book/:id` | Booking form |
| `/confirmation/:ref` | Booking confirmation |
| `/saved` | Saved trips |
| `/my-bookings` | Booking history and management |
| `/404` | Not found page |

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

Clone or download the project source.

```bash
git clone https://github.com/Midhun-krish-na/Tour-Pack-Selector.git
cd Tour-Pack-Selector
```

Install dependencies:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

## Customization

The project is designed to be customized and adapted to different travel businesses.

You can modify:
- Product branding and business identity.
- Destinations and package information.
- Pricing and package descriptions.
- Categories and available features.
- Visual styling and layout.
- Application content and navigation.

For detailed instructions, refer to:

- `docs/INSTALLATION.md`
- `docs/CUSTOMIZATION.md`
- `docs/FEATURES.md`

## Sample Images and Asset Licences

The sample package data references six externally hosted travel photographs.

The selected photographs have individual CC0 1.0 or Public Domain records. Their creators, source pages and licence information are documented in:

- `docs/ASSET_ATTRIBUTIONS.md`
- `docs/THIRD_PARTY_LICENSES.md`

Images are referenced through `src/data/packages.json` and are not currently bundled as local image files.

You may replace the sample image URLs with images you have the rights to use. Review the relevant image licences and usage terms before redistributing or deploying customized content.

## Data and Limitations

This template currently uses sample travel data.

- Package information is maintained in `src/data/packages.json`.
- Saved trips are stored in browser localStorage.
- Booking records are stored in browser localStorage.
- Booking cancellation and removal only affect local browser records.
- Data is not synchronized across devices or users.

**Important:** This is a frontend template, not a complete travel reservation platform.

It does not include a backend, database, user authentication, live availability, real reservation processing, payment gateway or refund processing.

Additional infrastructure and integrations must be implemented separately if required.

See `docs/LIMITATIONS.md` for further details.

## Licensing

This is a commercial product published by **CRYCIOUS**.

Purchases are governed by the included End User Licence Agreement.

Before using or distributing the template, review:

- `docs/END_USER_LICENSE.md`
- `docs/LICENSING.md`
- `docs/THIRD_PARTY_LICENSES.md`

Third-party dependencies and assets remain subject to their respective licences.

The source code and original product materials must not be redistributed or resold outside the permissions granted by the applicable licence.

## Support

For product-related questions and support:

**Email:** crycious.official@gmail.com

Please include:
- Product name.
- Relevant issue or question.
- Steps to reproduce technical problems.
- Error messages or screenshots, when applicable.

Refer to `docs/SUPPORT.md` for support terms.

## Publisher

**CRYCIOUS**

Copyright © 2026 Midhun Krishna M. All rights reserved.

---

Built with React, Vite and Tailwind CSS.
