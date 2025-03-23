/*
 Copyright U.S. Federal Government (in countries where recognized). All Rights Reserved.
 SPDX-License-Identifier: Apache-2.0
*/
import { render, screen, fireEvent } from "@testing-library/react";
import Classification from "./Classification";

test("Render Top Classification bar with Level U", () => {
    render(<Classification position="top" level="U" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: UNCLASSIFIED").parentElement;
    expect(classificationBar?.classList).toContain("classify-top");
});

test("Render Top Classification bar with Level CUI", () => {
    render(<Classification position="top" level="CUI" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: CUI").parentElement;
    expect(classificationBar?.classList).toContain("classify-top");
});

test("Render Top Classification bar with Level C", () => {
    render(<Classification position="top" level="C" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: CONFIDENTIAL").parentElement;
    expect(classificationBar?.classList).toContain("classify-top");
});

test("Render Top Classification bar with Level S", () => {
    render(<Classification position="top" level="S" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: SECRET").parentElement;
    expect(classificationBar?.classList).toContain("classify-top");
});

test("Render Top Classification bar with Level TS", () => {
    render(<Classification position="top" level="TS" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: TOP SECRET").parentElement;
    expect(classificationBar?.classList).toContain("classify-top");
});

test("Render Top Classification bar with Level SCI", () => {
    render(<Classification position="top" level="SCI" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: TOP SECRET").parentElement;
    expect(classificationBar?.classList).toContain("classify-top");
});

test("Render bottom Classification bar with Level U", () => {
    render(<Classification position="bottom" level="U" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: UNCLASSIFIED").parentElement;
    expect(classificationBar?.classList).toContain("classify-bottom");
});

test("Render bottom Classification bar with Level CUI", () => {
    render(<Classification position="bottom" level="CUI" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: CUI").parentElement;
    expect(classificationBar?.classList).toContain("classify-bottom");
});

test("Render bottom Classification bar with Level C", () => {
    render(<Classification position="bottom" level="C" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: CONFIDENTIAL").parentElement;
    expect(classificationBar?.classList).toContain("classify-bottom");
});

test("Render bottom Classification bar with Level S", () => {
    render(<Classification position="bottom" level="S" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: SECRET").parentElement;
    expect(classificationBar?.classList).toContain("classify-bottom");
});

test("Render bottom Classification bar with Level TS", () => {
    render(<Classification position="bottom" level="TS" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: TOP SECRET").parentElement;
    expect(classificationBar?.classList).toContain("classify-bottom");
});

test("Render bottom Classification bar with Level SCI", () => {
    render(<Classification position="bottom" level="SCI" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: TOP SECRET").parentElement;
    expect(classificationBar?.classList).toContain("classify-bottom");
});


test("Render Bottom Classification bar with Caveats", () => {
    render(<Classification position="bottom" level="SCI" caveats="TEST/TEST2" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: TOP SECRET//TEST/TEST2").parentElement;
    expect(classificationBar?.classList).toContain("classify-bottom");
});

test("Render Top Classification bar with Caveats", () => {
    render(<Classification position="top" level="SCI" caveats="TEST/TEST2" />);
    const classificationBar = screen.getByText("HIGHEST POSSIBLE CLASSIFICATION: TOP SECRET//TEST/TEST2").parentElement;
    expect(classificationBar?.classList).toContain("classify-top");
});