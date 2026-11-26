# Customization Guide

This guide explains how to adapt the template to your brand, content, design preferences, and business requirements.

The folder names and file organisation below describe a general recommended structure. Your purchased edition may organise some components differently.

## 1. General Project Structure

A typical React-based template may use the following structure:

```text
project/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── feature/
│   │
│   ├── pages/
│   ├── routes/
│   ├── data/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── docs/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### Folder responsibilities

| Folder | Purpose |
|---|---|
| `public/` | Static files served directly |
| `assets/` | Images, fonts, and other imported assets |
| `components/` | Reusable interface components |
| `pages/` | Full application pages |
| `routes/` | Route definitions and navigation configuration |
| `data/` | Sample or static application data |
| `hooks/` | Reusable React hooks |
| `context/` | Shared application state |
| `services/` | API and external service integration |
| `utils/` | Helper functions and calculations |
| `styles/` | Global styles, themes, and design tokens |
| `docs/` | Project documentation |

Not every project needs every folder. Keep the structure appropriate to the size and complexity of your application.

## 2. Customizing Branding

You can adapt the template to your own brand by changing:

- Website or application name.
- Logo and favicon.
- Brand colours.
- Typography.
- Navigation labels.
- Footer content.
- Contact and social media links.

Keep branding values consistent across the navigation, buttons, cards, forms, and other interface components.

## 3. Customizing Colours and Theme

Choose a small, consistent colour palette.

A typical palette contains:

| Token | Purpose |
|---|---|
| Primary | Main brand colour and important actions |
| Secondary | Supporting interface elements |
| Accent | Highlights and selected states |
| Background | Page and section backgrounds |
| Surface | Cards, panels, and forms |
| Text | Primary and secondary text |
| Border | Dividers and component boundaries |
| Success | Successful actions |
| Warning | Warnings and caution states |
| Error | Validation and error messages |

Where possible, define theme values centrally using CSS variables or your project's styling configuration.

Avoid hardcoding slightly different versions of the same colour throughout the application.

## 4. Customizing Typography

You can change the appearance of the website by updating:

- Font family.
- Heading sizes.
- Body text sizes.
- Font weights.
- Line heights.
- Letter spacing.

Use fonts that permit commercial use. If you use an external font service, review its licence and loading requirements.

Maintain readable contrast and consistent typography across screen sizes.

## 5. Managing Images and Icons

To replace images:

1. Select an image you have the right to use.
2. Add it to the appropriate asset directory or update its image reference.
3. Update the component or data entry that uses it.
4. Check that the image loads correctly.
5. Test its appearance on mobile and desktop.

Recommended practices:

- Use appropriately sized images.
- Prefer modern formats such as WebP or AVIF where supported.
- Provide meaningful alternative text for informative images.
- Use consistent image aspect ratios within repeated components.
- Avoid stretching images.
- Provide fallback behaviour for missing images.

Use only assets with suitable commercial usage rights.

## 6. Customizing Application Data

If the template uses static data files, you can modify them to suit your business.

For a travel website, a package data model might look like this:

```json
{
  "id": "sample-destination",
  "title": "Sample Destination",
  "location": "Example Location",
  "category": "Adventure",
  "duration": "3 Days",
  "pricePerPerson": 7500,
  "rating": 4.8,
  "image": "/images/sample-destination.webp",
  "summary": "A short description of the package.",
  "highlights": [
    "Scenic sightseeing",
    "Guided activities"
  ],
  "inclusions": [
    "Accommodation",
    "Breakfast"
  ],
  "exclusions": [
    "Personal expenses"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival",
      "description": "Arrival and local sightseeing."
    }
  ]
}
```

This is an illustrative data structure. The actual field names and required properties depend on the template edition.

When modifying data:

- Preserve unique identifiers.
- Keep data types consistent.
- Follow the existing structure.
- Ensure required fields are present.
- Check that components handle optional fields appropriately.

## 7. Customizing Components

Reusable components allow you to change the interface without duplicating the same markup across multiple pages.

Common examples include:

- Navigation bars.
- Footers.
- Buttons.
- Cards.
- Search fields.
- Dropdowns.
- Modals.
- Forms.
- Notifications.

Before creating a new component, check whether an existing component can be extended through props or shared styles.

Keep components focused on a clear responsibility.

## 8. Customizing Pages and Navigation

To modify an existing page:

1. Locate the relevant page component.
2. Identify the components and data it depends on.
3. Make the required changes.
4. Check navigation and interactions.
5. Test the page at mobile, tablet, and desktop widths.

When adding a new page, also update the routing configuration and provide a clear navigation path where appropriate.

## 9. Customizing Functionality

For changes involving application behaviour:

- Keep calculations in reusable utility functions where appropriate.
- Keep shared state in a suitable context or state-management layer.
- Validate user input.
- Provide feedback for successful and unsuccessful actions.
- Handle missing or invalid data.
- Test persistence behaviour if browser storage is used.

If you introduce an external API or backend, review authentication, error handling, data validation, and security requirements before deployment.

## 10. Customization Checklist

Before publishing your customized website, verify:

- [ ] Branding and logo have been updated.
- [ ] Colours and typography are consistent.
- [ ] Images and icons have appropriate usage rights.
- [ ] Sample data has been replaced with accurate content.
- [ ] Navigation links work.
- [ ] Forms and interactive elements behave correctly.
- [ ] Empty, loading, and error states are handled.
- [ ] Mobile, tablet, and desktop layouts have been tested.
- [ ] Production build completes successfully.
- [ ] No demonstration content or placeholder links remain unintentionally.

---

**Important:** Customization changes can affect existing functionality. Keep a backup or version-control checkpoint before making significant changes.