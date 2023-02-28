import { fireEvent, render, screen } from "@testing-library/react";
import NavMenu from "../components/nav/NavMenu";

it("Should open side menu when menu button clicked", () => {
  render(<NavMenu />);
  //Find the menu button and click on it
  const menuButton = screen.getByRole("button", { name: /side menu/i });
  fireEvent.click(menuButton);

  //Side menu should have translate-x-0 class to be visible in the viewport
  expect(screen.getByRole("navigation", { name: /sidemenu/i })).toHaveClass(
    "translate-x-0"
  );
});
