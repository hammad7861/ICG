import React from "react";
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";
import mockAxios from "./axios";

jest.mock("axios", () => mockAxios);

test("renders learn react link", async () => {
  mockAxios.get.mockResolvedValueOnce({ data: { message: "learn react" } });

  render(<MyComponent />);

  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
