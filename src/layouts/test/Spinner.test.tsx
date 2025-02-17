import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "../Spinner"; // Asegúrate de que la ruta sea correcta
import "@testing-library/jest-dom";

describe("Spinner Component", () => {
  it("renders the spinner", () => {
    render(<Spinner />);

    // Verifica que el spinner está presente en el documento
    const spinner = screen.getByRole("status", { hidden: true });
    expect(spinner).toBeTruthy();
  });
});
