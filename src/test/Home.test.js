/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";

describe("Home component", () => {
  test("renders navigation button correctly", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });
    const navigationButton = screen.getByRole("link", {name: /enter as admin/i});

    expect(navigationButton).toBeInTheDocument();
    expect(navigationButton).toHaveAttribute("href", "/Admin");
  });
});
