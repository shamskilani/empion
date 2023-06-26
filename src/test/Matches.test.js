/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Company from "../components/Company";
import "@testing-library/jest-dom/extend-expect";
import Matches from "../components/Matches";

// Mock MatchList component
jest.mock("../components/MatchList", () => {
  return jest.fn(() => <div>Mocked Matchlist</div>);
});

describe("Matches component", () => {
  test("renders navigation buttons correctly", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Matches />
        </BrowserRouter>
      );
    });

    const homeButton = screen.getByRole("link", { name: /back to home/i });
    const adminButton = screen.getByRole("link", { name: /back to company/i });

    expect(homeButton).toBeInTheDocument();
    expect(adminButton).toBeInTheDocument();
  });

  test("renders MatchList component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Matches />
        </BrowserRouter>
      );
    });

    const matchList = screen.getByText(/Mocked Matchlist/i);

    expect(matchList).toBeInTheDocument();
  });
});
