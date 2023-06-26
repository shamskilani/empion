# FrontEnd API Documentation

This is the documentation for the Frontend API solution for the Culture Matching application. The solution is implemented using React framework.The solution meets all the specified requirements and has been properly tested, documented, and linted.

## Getting Started

To run the FrontEnd Culture Matching application, follow the instructions below:

### Prerequisites

- React (version 18.2.0 or higher)
- react-router (version 6.14.0 or higher)

### Installation

1. Clone the GitHub repository for the solution:

   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```
   npm start
   ```

## Components

- `Admin`: This component renders navigation buttons for different management sections.

- `Applicant`: This component renders a form to create an applicant and a list of applicants.

- `ApplicantForm`: This component renders a form to create an applicant. It fetches culture types from the API and allows selecting a culture type for the applicant.

- `ApplicantList`: This component renders a table listing all the applicants.

- `Company`: This component renders a form to create a company and a list of companies.

- `CompanyForm`: This component renders a form to create a company. It also fetches culture types from the API and allows selecting a culture type for the company.

- `CompanyList`: This component renders a table listing all the companies. It includes a link to view matches for each company.

- `CultureType`: This component renders a form to create a culture type and a list of culture types.

- `CultureTypeForm`: This component renders a form to create a culture type.

- `CultureTypeList`: This component renders a table listing all the culture types.

- `Home`: This component renders a button to enter as an admin.

