import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./lib/router", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children, to, href, ...props }) => (
    <a href={href ?? to} {...props}>
      {children}
    </a>
  ),
  useParams: () => ({ slug: "" }),
}));

jest.mock("./lib/markdown", () => (props) => <div>{props.children}</div>);

test("renders profile and navigation", () => {
  render(<App />);

  expect(screen.getByText(/Cloud Solutions Architect/i)).toBeInTheDocument();
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  expect(screen.getByText(/Latest Blog Posts/i)).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /admin/i })).not.toBeInTheDocument();
});

test("shows resume sections and hides CMS links", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "#about");
  expect(screen.getByRole("link", { name: /experience/i })).

