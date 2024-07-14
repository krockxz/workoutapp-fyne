```markdown
# MyApp - Workout Dashboard

MyApp is a workout dashboard application where users can add their workout details, including username, workout type, and duration in minutes. The app uses reactive forms to manage and display records and includes a workout service to store, fetch, and filter data. The user list is shown in a table format using Bootstrap, and users can search by name or filter by workout type. When a user clicks on any record, a bar chart is displayed using Chart.js.

![Test Coverage](https://github.com/krockxz/workoutapp-fyne/blob/604b912f639d36f800adf4c1359f1d2f664004e2/Screenshot%202024-07-14%20203831.png)

## Features

- Add Username, Workout Type, and Workout Minutes
- Store, Fetch, and Filter Data using a Workout Ser2vice
- Display User List in a Table Format with Bootstrap
- Search by Username
- Filter by Workout Type
- Display Bar Chart using Chart.js on Record Click

## Development server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Test Coverage

The application has comprehensive test coverage:

![Test Coverage](https://github.com/krockxz/workoutapp-fyne/blob/604b912f639d36f800adf4c1359f1d2f664004e2/Screenshot%202024-07-14%20203831.png)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/krockxz/workoutapp-fyne.git
   cd workoutapp-fyne
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200/`.

### Running Tests

To run the tests and view the test coverage, use the following command:

```bash
ng test
```

## Technologies Used

- Angular 16.2.3
- Bootstrap
- Chart.js
- ngx-bootstrap
- ag-grid

## Project Structure

- `src/app` - Main application source files
- `src/assets` - Static assets (images, styles, etc.)
- `src/environments` - Environment configuration files

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

