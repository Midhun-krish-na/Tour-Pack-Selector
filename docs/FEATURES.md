# Features

Travel Explorer is a responsive, frontend-only travel package discovery and booking demonstration built with React.

## 1. Explore Destinations

The home page provides a destination discovery interface.

- Browse curated travel packages.
- Search packages by destination and location.
- Filter packages by category.
- Sort packages by recommended order, price, or rating.
- View package summaries, ratings, durations, and prices.
- Responsive destination card layout.

## 2. Package Details

Each package has a dedicated details page.

- Destination overview and description.
- Package highlights.
- Day-wise travel itinerary.
- Inclusions and exclusions.
- Duration and price per person.
- Navigation to the booking page.

## 3. Saved Trips

Users can save packages to a personal wishlist.

- Add or remove destinations from saved trips.
- View saved destinations on a dedicated page.
- See the saved-trip count in the navigation bar.
- Retain saved trips across browser refreshes using local storage.

## 4. Booking Demonstration

The booking page provides a client-side booking workflow.

- Select a travel date.
- Set the number of travellers.
- Enter the traveller count manually or use the increment and decrement controls.
- Calculate the subtotal based on the number of travellers.
- Calculate an example 5% GST amount.
- Display the resulting total.
- Generate a booking reference.
- Save the booking record in browser local storage.

## 5. Booking Confirmation

After submitting a valid booking, users are redirected to a confirmation page.

- Display the generated booking reference.
- Show the selected package and booking details.
- Display the traveller count and travel date.
- Show the booking cost breakdown.
- Retrieve the saved confirmation after a page refresh.

## 6. Navigation and Routing

The application uses client-side routing.

| Route | Purpose |
|---|---|
| `/` | Explore destinations |
| `/package/:id` | View package details |
| `/book/:id` | Booking demonstration |
| `/confirmation/:ref` | View booking confirmation |
| `/saved` | View saved trips |
| `/404` | Not-found page |

Unknown routes are handled by the application's fallback route.

## 7. Responsive Layout

The interface is designed to adapt to different screen sizes.

Tested viewport widths:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px

## 8. Data and Persistence

### Package data

Travel package information is maintained in:

`src/data/packages.json`

This allows developers to customise the sample destinations without introducing a backend.

### Browser storage

The application uses `localStorage` for:

- Saved trips.
- Booking records.

Stored information remains available across refreshes in the same browser and website origin, provided the browser data is not cleared.

## 9. Technology

- React
- React Router
- Vite
- Tailwind CSS
- JavaScript
- Browser local storage

## 10. Current Scope and Limitations

This edition is a frontend demonstration template.

It does not include:

- Backend services or database integration.
- User registration or authentication.
- Real-time travel inventory or availability.
- Real reservation processing.
- Payment gateway integration.
- Email or SMS notifications.
- Cloud synchronisation of saved trips or bookings.
- An administration dashboard.

The booking flow is simulated. A generated booking reference does not represent a confirmed reservation with a travel provider.

The displayed 5% GST is an example calculation and should be reviewed and configured for the actual business and applicable tax rules before commercial deployment.