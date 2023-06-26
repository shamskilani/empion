/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import Applicant from "../components/Applicant";

describe("Applicant component", () => {
  test("renders navigation buttons correctly", async () => {
    const mockCultureTypes = [
      { id: 1, name: "Culture Type 1" },
      { id: 2, name: "Culture Type 2" },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockCultureTypes),
    });

    await act(async () => {
      render(
        <BrowserRouter>
          <Applicant />
        </BrowserRouter>
      );
    });

    const homeButton = screen.getByRole("link", { name: "Back to Home" });
    const adminButton = screen.getByRole("link", { name: "Back to Admin" });

    expect(homeButton).toBeInTheDocument();
    expect(adminButton).toBeInTheDocument();

    delete global.fetch;
  });
});
