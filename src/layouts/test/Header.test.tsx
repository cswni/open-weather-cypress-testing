import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header Component", () => {
  it("renders the header with correct text", () => {
    render(<Header />);
    
    // Verifica que el encabezado se renderiza correctamente
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("Predicción Meteorológica");
  });

  it("has the correct styling classes", () => {
    const { container } = render(<Header />);
    
    // Verifica que tiene la clase de fondo azul
    expect(container.firstChild).toHaveClass("p-2 border-2 bg-blue-500 rounded-xl border-slate-50");
  });
});
