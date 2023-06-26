/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MatchList from "../components/MatchList";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        culture_type: "Type A",
      },
      {
        id: 2,
        first_name: "Jane",
        last_name: "Smith",
        culture_type: "Type B",
      },
    ],
  })
);

describe("MatchList component", () => {
  test("fetches MatchList and renders them correctly", async () => {
    // Wait for the component to fetch MatchList and render them
    await act(async () => {
      render(<MatchList reloadList={false} />);
    });

    // Assertions
    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Type A/i)).toBeInTheDocument();
    

    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
    expect(screen.getByText(/Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Type B/i)).toBeInTheDocument();
    
  });
});
