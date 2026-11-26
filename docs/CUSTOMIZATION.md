# Customization Guide

This guide explains how to customize **Travel Package Selector** for your own travel business or demonstration project.

The template uses centralized configuration and structured package data to make common changes easier.

## 1. Project Structure

The main folders you'll work with are:

| Path | Purpose |
|---|---|
| `src/config/` | Central application configuration |
| `src/data/` | Sample travel package data |
| `src/components/` | Reusable interface components |
| `src/components/layout/` | Navigation and footer |
| `src/components/destination/` | Destination cards |
| `src/pages/` | Application pages |
| `src/utils/` | Shared utility functions |
| `public/` | Static assets, favicon and deployment files |
| `docs/` | Product documentation |

## 2. Central Configuration

The recommended starting point is:

`src/config/siteConfig.js`

This file contains the main settings used across the application.

### Branding

```js
brand: {
  publisher: "CRYCIOUS",
  productName: "Travel Package Selector",
  appName: "Travel Explorer",
  supportEmail: "crycious.official@gmail.com",
}
```

Change these values to match your own brand and application.

- `publisher`: Publisher or developer identity.
- `productName`: Product name.
- `appName`: Name displayed in the application.
- `supportEmail`: Customer support contact.

### Currency

```js
currency: {
  code: "INR",
  locale: "en-IN",
  symbol: "₹",
}
```

Change the currency code and locale to match your intended market.

Examples:

| Market | Currency code | Locale |
|---|---|---|
| India | INR | en-IN |
| United States | USD | en-US |
| United Kingdom | GBP | en-GB |
| Europe | EUR | de-DE |

The application formats prices using the configured currency code and locale.

### Tax Configuration

```js
tax: {
  name: "GST",
  rate: 0.05,
}
```

- `name`: Tax label displayed in the booking breakdown.
- `rate`: Tax rate expressed as a decimal.

For example, `0.05` represents 5%.

Check the applicable tax requirements for your business before using a rate in a real booking system.

### Traveller Limits

```js
booking: {
  minTravelers: 1,
  maxTravelers: 50,
}
```

These settings control the permitted traveller count in the booking form.

### Package Categories

```js
categories: [
  "Hill Station",
  "Beach",
  "Heritage",
  "Adventure",
]
```

You can add, remove or rename categories.

**Important:** Category names must match the corresponding `category` values in your package data. Otherwise, category filtering may not return the expected results.

## 3. Managing Travel Packages

Edit:

`src/data/packages.json`

This file contains the sample destination catalogue.

Each package includes information such as:

- Package name and destination.
- Category and duration.
- Price and rating.
- Image reference.
- Description and highlights.
- Inclusions and exclusions.
- Day-wise itinerary.

When adding or editing packages:

1. Give every package a unique ID.
2. Preserve the existing property names and data types.
3. Use valid category names.
4. Provide a valid image reference.
5. Ensure itinerary entries follow the existing structure.
6. Check the package details and booking pages after editing.

The included packages are illustrative sample content, not live travel offers.

## 4. Images and Asset Rights

The template includes sample destination images with documented licensing information.

Before replacing or adding images:

1. Confirm that you have the right to use the image commercially.
2. Check whether redistribution is permitted.
3. Record the creator, source and licence where attribution is required.
4. Update the relevant image reference.
5. Update `docs/ASSET_ATTRIBUTIONS.md` when changing bundled assets.

Do not assume that an image available online is automatically free to redistribute.

## 5. Branding and Interface

The main interface components are located in:

- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/destination/DestinationCard.jsx`

The main pages are located in `src/pages/`.

You can customize layouts, text, colours, typography and component appearance while preserving the existing functionality.

The browser tab title and meta description are maintained separately in the root `index.html` file.

The favicon is located at:

`public/favicon.svg`

## 6. Price Formatting

The shared price utility is:

`src/utils/formatPrice.js`

It uses the currency configuration to format prices consistently throughout the application.

If you change the currency settings, verify the price display on the package cards, package details, booking page, confirmation page and booking history.

## 7. Booking Behaviour

The included booking workflow is a frontend demonstration.

It supports:

- Traveller selection.
- Input validation.
- Price calculation.
- Configured tax calculation.
- Booking confirmation.
- Local browser storage for booking history.

It does not provide real reservations, payment processing, authentication, inventory management or refunds.

A production booking service would require an appropriate backend and integrations.

## 8. Running and Building the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Resolve build errors before deploying your customized application.

## 9. Customization Checklist

Before publishing:

- [ ] Update application branding.
- [ ] Update support contact details.
- [ ] Configure the intended currency and locale.
- [ ] Verify the tax configuration.
- [ ] Adjust traveller limits if required.
- [ ] Update package categories and package data together.
- [ ] Verify image usage rights.
- [ ] Update the favicon and browser metadata.
- [ ] Test all application routes.
- [ ] Test booking calculations and validation.
- [ ] Test saved trips and booking history.
- [ ] Test responsive layouts.
- [ ] Run a production build.

---

**Important:** Keep a backup or version-control checkpoint before making significant changes. Always test customized functionality before deploying.