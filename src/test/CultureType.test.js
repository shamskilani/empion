/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Company from "../components/Company";
import "@testing-library/jest-dom/extend-expect";
import CultureType from "../components/CultureType";

// Mock CultureTypeForm and CultureTypeList components
jest.mock("../components/CultureTypeForm", () => {
  return jest.fn(() => <div>Mocked Culture Type Form</div>);
});

jest.mock("../components/CultureTypeList", () => {
  return jest.fn(() => <div>Mocked Culture Type List</div>);
});

describe("CultureType component", () => {
  test("renders navigation buttons correctly", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CultureType />
        </BrowserRouter>
      );
    });

    const homeButton = screen.getByRole("link", { name: /back to home/i });
    const adminButton = screen.getByRole("link", { name: /back to admin/i });

    expect(homeButton).toBeInTheDocument();
    expect(adminButton).toBeInTheDocument();
  });

  test("renders CompanyForm and CompanyList components", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CultureType />
        </BrowserRouter>
      );
    });

    const cultureTypeForm = screen.getByText(/mocked culture type form/i);
    const cultureTypeList = screen.getByText(/mocked culture type list/i);

    expect(cultureTypeForm).toBeInTheDocument();
    expect(cultureTypeList).toBeInTheDocument();
  });
});
