/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CultureTypeForm from "../components/CultureTypeForm";

describe("CultureTypeForm component", () => {
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
      render(<CultureTypeForm onFormSubmit={() => {}} />);
    });
    const nameInput = screen.getByLabelText(/name:/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("triggers form submission correctly", async () => {
    const onFormSubmitMock = jest.fn();
    await act(async () => {
      render(<CultureTypeForm onFormSubmit={onFormSubmitMock} />);
    });
    const nameInput = screen.getByLabelText(/name:/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Fill in the form fields
    fireEvent.change(nameInput, { target: { value: "Test Culture Type" } });

    global.fetch.mockResolvedValueOnce({
      ok: true,
    });

    // Submit the form
    fireEvent.click(submitButton);
    // Wait for the form submission to complete
    await screen.findByText("Create Culture Type");

    expect(onFormSubmitMock).toHaveBeenCalledTimes(1);
    expect(nameInput).toHaveValue("");
  });
});
