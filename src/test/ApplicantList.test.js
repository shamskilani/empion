/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ApplicantList from "../components/ApplicantList";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        culture_type: "Type A",
        created_at: "2023-06-20",
        updated_at: "2023-06-22",
      },
      {
        id: 2,
        first_name: "Jane",
        last_name: "Smith",
        culture_type: "Type B",
        created_at: "2023-06-21",
        updated_at: "2023-06-23",
      },
    ],
  })
);

describe("ApplicantList component", () => {
  test("fetches applicants and renders them correctly", async () => {
    // Wait for the component to fetch applicants and render them
    await act(async () => {
      render(<ApplicantList reloadList={false} />);
    });

    // Assertions
    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Type A/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-06-20/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-06-22/i)).toBeInTheDocument();

    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
    expect(screen.getByText(/Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Type B/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-06-21/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-06-23/i)).toBeInTheDocument();
  });
});
