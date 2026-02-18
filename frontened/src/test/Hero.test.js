import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { BrowserRouter } from "react-router-dom";

// Test Suite
describe("Hero Component", () => {
    test("renders hero image", () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        const heroImage = screen.getByAltText("hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', '/media/Images/homeHero.png');
    });

    test("renders signup button", () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        const signupButton = screen.getByRole('link', { name: /signup now/i });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
        expect(signupButton).toHaveAttribute("href", "/signup");
    });
});

  
  