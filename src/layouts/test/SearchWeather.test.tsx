import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchWeather from "../SearchWeather";
import { vi, } from "vitest";
import fs from "fs";
import path from "path";

describe("SearchWeather Component", () => {
  const mockNewLocation = vi.fn();
  const mockOnLogout = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  test("Debe contener la frase 'Buscar'", () => {
    const filePath = path.join(__dirname, "../SearchWeather.tsx");
    const fileContent = fs.readFileSync(filePath, "utf8");

    expect(fileContent).toMatch(/Buscar/);
  });
  

  it("sets city name based on geolocation", async () => {
    const mockGeolocation = {
      getCurrentPosition: vi.fn().mockImplementationOnce((success) =>
        success({
          coords: {
            latitude: 51.1,
            longitude: 45.3,
          },
        })
      ),
    };

    global.navigator.geolocation = mockGeolocation;

    render(<SearchWeather newLocation={mockNewLocation} onLogout={mockOnLogout} />);

    await waitFor(() => {
      expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    });
  });
});