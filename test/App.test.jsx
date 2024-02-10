import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App";
import { FilterProvider } from "../src/context/filters";

describe("<App/>", () => {
  test("should work", () => {
    render(
      <FilterProvider>
        <App />
      </FilterProvider>
    );

    expect(screen.getAllByText('Unkai')).toBeDefined();
  });
});
