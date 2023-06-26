/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ApplicantForm from "../components/ApplicantForm";

describe("ApplicantForm component", () => {
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

  test("renders form fields correctly", async () => {
    await act(async () => {
      render(<ApplicantForm />);
    });

    const firstNameInput = screen.getByLabelText("First Name:");
    const lastNameInput = screen.getByLabelText("Last Name:");
    const cultureTypeSelect = screen.getByLabelText("Culture Type:");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(cultureTypeSelect).toBeInTheDocument();
  });

  test("submits form with correct data", async () => {
    const mockOnFormSubmit = jest.fn();
    await act(async () => {
      render(<ApplicantForm onFormSubmit={mockOnFormSubmit} />);
    });
    const firstNameInput = screen.getByLabelText("First Name:");
    const lastNameInput = screen.getByLabelText("Last Name:");
    const cultureTypeSelect = screen.getByLabelText("Culture Type:");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(cultureTypeSelect, {target: { value: "Culture Type 1" },});

    global.fetch.mockResolvedValueOnce({
      ok: true,
    });

    fireEvent.click(submitButton);

    await screen.findByText("Create Applicant");

    expect(mockOnFormSubmit).toHaveBeenCalledTimes(1);
    expect(firstNameInput.value).toBe("");
    expect(lastNameInput.value).toBe("");
    expect(cultureTypeSelect.value).toBe("");
  });
});
