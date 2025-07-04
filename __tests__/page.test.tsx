import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/app/page";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: { alt: string; [key: string]: unknown }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    const nextLogo = screen.getByAltText("Next.js logo");
    expect(nextLogo).toBeInTheDocument();
  });

  it("renders the getting started instructions", () => {
    render(<Home />);

    const getStartedText = screen.getByText(/Get started by editing/i);
    expect(getStartedText).toBeInTheDocument();

    const codeElement = screen.getByText("src/app/page.tsx");
    expect(codeElement).toBeInTheDocument();
  });

  it("renders the save changes instruction", () => {
    render(<Home />);

    const saveChangesText = screen.getByText(
      /Save and see your changes instantly/i,
    );
    expect(saveChangesText).toBeInTheDocument();
  });

  it("renders the Deploy now button", () => {
    render(<Home />);

    const deployButton = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployButton).toBeInTheDocument();
    expect(deployButton).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com"),
    );
  });

  it("renders the Read our docs button", () => {
    render(<Home />);

    const docsButton = screen.getByRole("link", { name: /Read our docs/i });
    expect(docsButton).toBeInTheDocument();
    expect(docsButton).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs"),
    );
  });

  it("renders footer navigation links", () => {
    render(<Home />);

    const learnLink = screen.getByRole("link", { name: /Learn/i });
    expect(learnLink).toBeInTheDocument();

    const examplesLink = screen.getByRole("link", { name: /Examples/i });
    expect(examplesLink).toBeInTheDocument();

    const nextjsLink = screen.getByRole("link", { name: /Go to nextjs.org/i });
    expect(nextjsLink).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<Home />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();

    const contentinfo = screen.getByRole("contentinfo");
    expect(contentinfo).toBeInTheDocument();
  });
});
