import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "./src/pages/Home"; 

describe("Home Component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("renders the homepage logo with correct src and alt", () => {
    const logo = screen.getByAltText(/lrnr website logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "lrnr-logo.png");
  });

  test("renders the correct tagline", () => {
    const tagline = screen.getByText(/Your guided path to programming enlightenment/i);
    expect(tagline).toBeInTheDocument();
  });

  test("renders the 'Begin Journey' button", () => {
    const button = screen.getByRole("button", { name: /Begin Journey/i });
    expect(button).toBeInTheDocument();
  });

  test("renders 3 Card components with correct headings", () => {
    expect(
      screen.getByRole("heading", { level: 3, name: /Personalized Quizzes/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /Rewarding/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /Personal SME/i })
    ).toBeInTheDocument();
  });
});
