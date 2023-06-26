/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen ,act} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import CompanyList from "../components/CompanyList";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => [
      {
        id: 1,
        name: "Company A",
        culture_type: "Type A",
        created_at: "2023-06-01",
        updated_at: "2023-06-05",
      },
      {
        id: 2,
        name: "Company B",
        culture_type: "Type B",
        created_at: "2023-06-02",
        updated_at: "2023-06-06",
      },
    ],
  })
);

describe("CompanyList component", () => {
  test("displays company list correctly", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CompanyList reloadList={false} />
        </BrowserRouter>
      );
    });
    expect(screen.getByText("Company List")).toBeInTheDocument();

    // Check if company data is rendered correctly
    expect(screen.getByText("Company A")).toBeInTheDocument();
    expect(screen.getByText("Type A")).toBeInTheDocument();
    expect(screen.getByText("2023-06-01")).toBeInTheDocument();
    expect(screen.getByText("2023-06-05")).toBeInTheDocument();

    expect(screen.getByText("Company B")).toBeInTheDocument();
    expect(screen.getByText("Type B")).toBeInTheDocument();
    expect(screen.getByText("2023-06-02")).toBeInTheDocument();
    expect(screen.getByText("2023-06-06")).toBeInTheDocument();
  });

});
