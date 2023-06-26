/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Admin from '../components/Admin';

describe('Admin component', () => {
  test('renders navigation buttons correctly', () => {
    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );

    const homeButton = screen.getByRole('link', { name: 'Home' });
    const cultureTypesButton = screen.getByRole('link', { name: 'Manage Culture Types' });
    const companiesButton = screen.getByRole('link', { name: 'Manage Companies' });
    const applicantsButton = screen.getByRole('link', { name: 'Manage Applicants' });

    expect(homeButton).toBeInTheDocument();
    expect(cultureTypesButton).toBeInTheDocument();
    expect(companiesButton).toBeInTheDocument();
    expect(applicantsButton).toBeInTheDocument();
  });

  test('navigates to correct routes when buttons are clicked', () => {
    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );

    const homeButton = screen.getByRole('link', { name: 'Home' });
    const cultureTypesButton = screen.getByRole('link', { name: 'Manage Culture Types' });
    const companiesButton = screen.getByRole('link', { name: 'Manage Companies' });
    const applicantsButton = screen.getByRole('link', { name: 'Manage Applicants' });

    expect(homeButton.getAttribute('href')).toBe('/');
    expect(cultureTypesButton.getAttribute('href')).toBe('/CultureType');
    expect(companiesButton.getAttribute('href')).toBe('/Company');
    expect(applicantsButton.getAttribute('href')).toBe('/Applicant');
  });
});
