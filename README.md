# PerfDog API Test Automation Framework

This repository contains automated API tests for the PerfDog pet store application using Playwright and TypeScript.

The tests validate key functionality of the public Petstore API.

API documentation:
https://petstore.swagger.io

---

## Tech Stack

* Playwright
* TypeScript
* Node.js

---

## Project Structure

src

* **api** → HTTP client abstraction
* **services** → API domain logic
* **models** → TypeScript interfaces
* **utils** → test data generators
* **fixtures** → Playwright fixtures

tests

* API test scenarios

The framework follows a layered architecture separating the API client, service layer, and test scenarios to improve maintainability and scalability.

---

## Framework Design

The framework is structured to promote reusability and clear separation of responsibilities.

* **API Client** – Handles HTTP communication with the API.
* **Service Layer** – Encapsulates API endpoints and business operations.
* **Test Data Generators** – Centralized utilities used to generate dynamic test data.
* **Fixtures** – Playwright fixtures inject services into tests, reducing boilerplate code and improving readability.

The base API URL is configured globally using Playwright's `baseURL` setting, allowing test requests to reference endpoints using relative paths.

---

## Test Scenarios

### Part 1

Create pets with different statuses:

* 5 pets with status **available**
* 4 pets with status **pending**
* 1 pet with status **sold**

Retrieve the details of the pet with status **sold**.

---

### Part 2

List pets with status **available** and store five of them in a data structure.

Create an order for each of the selected pets.

---

## Running the Tests

Install dependencies:

```
npm install
```

Run tests:

```
npx playwright test
```

View the HTML report:

```
npx playwright show-report
```

---

## Notes

The Petstore API is a public shared service. Test results may occasionally be affected by external data created by other users.

---

## Author

Julia Costa,
QA Automation Engineer
