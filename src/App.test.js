import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import content from "./data/content.json";

jest.mock("./lib/router", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{Array.isArray(children) ? children[0] : children}</div>,
  Route: ({ element }) => element,
  Link: ({ children, to, href, ...props }) => (
    <a href={href ?? to} {...props}>
      {children}
    </a>
  ),
  useParams: () => ({ slug: "" }),
}));
jest.mock("./lib/markdown", () => (props) => <div>{props.children}</div>);

test("shows maintenance notice with contact CTA", () => {
  render(<App />);

  expect(screen.getByText(/site upgrade in progress/i)).toBeInTheDocument();
  expect(screen.getByText(/refreshing this portfolio with new capabilities/i)).toBeInTheDocument();
  const emailCta = screen.getByRole("link", { name: new RegExp(`Email ${content.name}`, "i") });
  expect(emailCta).toHaveAttribute("href", `mailto:${content.email}`);
});

test("does not show portfolio navigation while maintenance page is active", () => {
  render(<App />);

  expect(screen.queryByText(/About Me/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Latest Blog Posts/i)).not.toBeInTheDocument();
});
