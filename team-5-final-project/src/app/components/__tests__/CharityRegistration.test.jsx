test("example test", function () {
  expect(true).toBe(true);
});

// import React from "react";
import { render, screen } from "@testing-library/react";
import CharityRegistration from "../CharityRegistration";
// import { expect, jest, test } from "@jest/globals";

describe("CharityRegistration component", () => {
  render(<CharityRegistration />);

  const componentEl = screen.getByText("");
  expect(componentEl).toBeInTheDocument();
});
