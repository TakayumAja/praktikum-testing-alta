import { render, screen, fireEvent } from "@testing-library/react";
import From from ".";

describe("Testing From Component Coding", () => {
  test("NameForm", () => {
    render(<From />);
    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
  });
  test("Input Nama Lengkap", () => {
    render(<From />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "M. Asraf Takayuma" },
    });
    expect(screen.getByRole("textbox", { name: /nama/i }).value).toBe(
      "M. Asraf Takayuma"
    );
  });
  test("input email", () => {
    render(<From />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "asrafyuma@gmail.com" },
    });
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe(
      "asrafyuma@gmail.com"
    );
  });
});
