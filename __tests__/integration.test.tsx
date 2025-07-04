import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "../src/app/layout";
import Home from "../src/app/page";

// Mock Next.js dependencies
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: { alt: string; [key: string]: unknown }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

jest.mock("next/font/google", () => ({
  Geist: () => ({
    variable: "--font-geist-sans",
  }),
  Geist_Mono: () => ({
    variable: "--font-geist-mono",
  }),
}));

describe("Full App Integration", () => {
  it("renders the complete app structure", () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>,
    );

    // Check that the layout structure is present
    const html = document.documentElement;
    expect(html).toHaveAttribute("lang", "en");

    // Check that the home page content is rendered
    const nextLogo = screen.getByAltText("Next.js logo");
    expect(nextLogo).toBeInTheDocument();

    const getStartedText = screen.getByText(/Get started by editing/i);
    expect(getStartedText).toBeInTheDocument();

    // Check that interactive elements are present
    const deployButton = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployButton).toBeInTheDocument();

    const docsButton = screen.getByRole("link", { name: /Read our docs/i });
    expect(docsButton).toBeInTheDocument();
  });

  it("has proper semantic HTML structure", () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>,
    );

    // Check for proper semantic elements
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();

    const contentinfo = screen.getByRole("contentinfo");
    expect(contentinfo).toBeInTheDocument();

    // Check for proper heading structure
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });
});
