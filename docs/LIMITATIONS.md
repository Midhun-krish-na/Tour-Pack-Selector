# Limitations and Scope

## 1. Overview

This product is a frontend website template intended to provide a starting point for building a customized web application.

The included functionality depends on the purchased edition. Refer to the corresponding edition's feature list before making a purchase or beginning customization.

## 2. Frontend-Only Architecture

The standard template operates on the client side.

Unless explicitly included in a particular edition, it does not provide:

- Backend application services.
- Database integration.
- Server-side business logic.
- User authentication or authorization.
- Cloud-based data storage.
- Administrative management services.

These capabilities require additional development and infrastructure.

## 3. Data Persistence

Where browser local storage is used:

- Data is stored locally in the user's browser.
- Data is not automatically synchronized across devices.
- Clearing browser data may permanently remove stored records.
- Different browsers and website origins maintain separate storage.
- Local storage should not be treated as secure storage for sensitive information.

For production applications requiring reliable persistent records, use an appropriate backend and database.

## 4. Demonstration Workflows

Some interface workflows may simulate real-world business operations.

For example, a booking demonstration may calculate prices, generate a reference number, and display a confirmation screen without communicating with a travel provider.

Such workflows must not be represented as completed external transactions.

Integrate the appropriate backend services before using the application for actual business operations.

## 5. Payments and Financial Transactions

A payment interface, price calculation, or confirmation screen does not constitute payment processing.

Unless explicitly stated in the purchased edition, the product does not include:

- Payment gateway integration.
- Payment verification.
- Refund processing.
- Transaction reconciliation.
- Financial reporting.

A suitable payment provider and secure backend integration are required for real transactions.

## 6. Security Considerations

A frontend template is not a complete security solution.

Before production deployment, review:

- Input validation and sanitization.
- Authentication and authorization.
- API access controls.
- Sensitive data handling.
- Dependency vulnerabilities.
- Secure configuration and deployment.
- Server-side validation of important business operations.

Never place private API keys, database credentials, or other secrets in frontend source code.

## 7. External Services and Dependencies

Some customizations may rely on external services, libraries, APIs, image providers, or font services.

Their availability, pricing, terms, and compatibility are controlled by their respective providers.

Additional accounts, subscriptions, configuration, or licences may be required.

## 8. Browser and Device Compatibility

The template is designed for modern browsers and responsive layouts.

However, appearance and behaviour may vary depending on:

- Browser version.
- Operating system.
- Screen dimensions.
- Device capabilities.
- Third-party service availability.

Test the customized application in the browsers and devices relevant to your audience.

## 9. Deployment and Maintenance

Purchasing the template does not automatically include:

- Website hosting.
- Domain registration.
- Server maintenance.
- Continuous updates.
- Custom feature development.
- Third-party service subscriptions.
- Ongoing technical support beyond the stated support policy.

These requirements must be arranged separately unless explicitly included in the purchase.

## 10. Customer Responsibility

The purchaser is responsible for:

- Reviewing the product's documented scope.
- Customizing the template for their intended use.
- Obtaining rights to content and media they add.
- Configuring third-party services.
- Testing the customized application.
- Meeting applicable legal, privacy, accessibility, and business requirements.

## 11. Before Production Use

Before deploying a customized application for real customers:

- [ ] Replace demonstration content.
- [ ] Configure production services.
- [ ] Implement required backend functionality.
- [ ] Review security and privacy requirements.
- [ ] Verify all calculations and business rules.
- [ ] Test critical user workflows.
- [ ] Review third-party licences.
- [ ] Complete production deployment testing.

**Important:** Features, integrations, and support commitments are limited to those explicitly listed in the purchased edition and its accompanying documentation.