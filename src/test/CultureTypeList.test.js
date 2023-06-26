/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import CultureTypeList from "../components/CultureTypeList";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => [
      {
        id: 1,
        name: "Culture Type 1",
        created_at: "2023-01-01",
        updated_at: "2023-01-05",
      },
      {
        id: 2,
        name: "Culture Type 2",
        created_at: "2023-01-02",
        updated_at: "2023-01-03",
      },
    ],
  })
);

describe("CompanyList component", () => {
  test("displays culture list correctly", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CultureTypeList reloadList={false} />
        </BrowserRouter>
      );
    });
    expect(screen.getByText("Culture Types")).toBeInTheDocument();

    // Check if company data is rendered correctly
    expect(screen.getByText("Culture Type 1")).toBeInTheDocument();
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
    expect(screen.getByText("2023-01-05")).toBeInTheDocument();

    expect(screen.getByText("Culture Type 2")).toBeInTheDocument();
    expect(screen.getByText("2023-01-02")).toBeInTheDocument();
    expect(screen.getByText("2023-01-03")).toBeInTheDocument();
  });
});
