import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSwitcher from "../components/nav/LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("Should allow user to change the language and return the selected language value", async () => {
    //Setup userEvent before render
    const user = userEvent.setup();

    render(<LanguageSwitcher />);

    const languageBox = screen.getByRole("combobox");

    //Find and select the فارسی option
    const persianLanguage = screen.getByRole("option", { name: "فارسی" });
    await user.selectOptions(languageBox, persianLanguage);

    expect(languageBox).toHaveValue("fa");
  });
});
