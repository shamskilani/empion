/**
 * @jest-environment jsdom
 */
import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CompanyForm from "../components/CompanyForm";

describe("CompanyForm component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => [
          { id: 1, name: "Culture Type 1" },
          { id: 2, name: "Culture Type 2" },
        ],
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete global.fetch;
  });

  test("displays form fields correctly", async () => {
    await act(async () => {
      render(<CompanyForm onFormSubmit={() => {}} />);
    });
    const nameInput = screen.getByLabelText(/name:/i);
    const cultureTypeSelect = screen.getByLabelText(/culture type:/i);
    const submitButton = screen.getByRole("button", { name: /create/i });

    expect(nameInput).toBeInTheDocument();
    expect(cultureTypeSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("triggers form submission correctly", async () => {
    const onFormSubmitMock = jest.fn();
    await act(async () => {
      render(<CompanyForm onFormSubmit={onFormSubmitMock} />);
    });
    const nameInput = screen.getByLabelText(/name:/i);
    const cultureTypeSelect = screen.getByLabelText(/culture type:/i);
    const submitButton = screen.getByRole("button", { name: /create/i });

    // Fill in the form fields
    fireEvent.change(nameInput, { target: { value: "Test Company" } });
    fireEvent.change(cultureTypeSelect, { target: { value: "Culture Type 1" } });

    global.fetch.mockResolvedValueOnce({
      ok: true,
    });

    // Submit the form
    fireEvent.click(submitButton);
    // Wait for the form submission to complete
    await screen.findByText("Create Company");

    expect(onFormSubmitMock).toHaveBeenCalledTimes(1);
    expect(nameInput).toHaveValue("");
    expect(cultureTypeSelect).toHaveValue("");
  });
});
