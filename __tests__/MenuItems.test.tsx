import { render, screen, within } from "@testing-library/react";
import MenuItems from "../components/nav/MenuItems";

it("Menu should contain 4 items", () => {
  render(<MenuItems />);
  const list = screen.getByRole("list");

  //Find items within the list
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  expect(items.length).toBe(4);
});
