/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Company from "../components/Company";
import "@testing-library/jest-dom/extend-expect";
import CompanyForm from "../components/CompanyForm";

// Mock CompanyForm and CompanyList components
jest.mock("../components/CompanyForm", () => {
  return jest.fn(() => <div>Mocked CompanyForm</div>);
});

jest.mock("../components/CompanyList", () => {
  return jest.fn(() => <div>Mocked CompanyList</div>);
});

describe("Company component", () => {
  test("renders navigation buttons correctly", async () => {
    await act(async () => {
    render(
      <BrowserRouter>
        <Company />
      </BrowserRouter>
    );
});
    const homeButton = screen.getByRole("link", { name: /back to home/i });
    const adminButton = screen.getByRole("link", { name: /back to admin/i });

    expect(homeButton).toBeInTheDocument();
    expect(adminButton).toBeInTheDocument();
  });

  test("renders CompanyForm and CompanyList components", () => {
    render(
      <BrowserRouter>
        <Company />
      </BrowserRouter>
    );

    const companyForm = screen.getByText(/mocked companyform/i);
    const companyList = screen.getByText(/mocked companylist/i);

    expect(companyForm).toBeInTheDocument();
    expect(companyList).toBeInTheDocument();
  });
});
