import { ParseClassification } from "./ClassificationParsing";

test("Return UNCLASSIFIED and the appropriate classes for the top class bar", () => {
    const ClassificationData = ParseClassification({level: "U", position: "top"});
    expect(ClassificationData).toEqual({
        classification: "UNCLASSIFIED",
        classes: "classify-top classify-u classify-text",
    });
});

test("Return CUI and the appropriate classes for the top class bar", () => {
    const ClassificationData = ParseClassification({level: "CUI", position: "top"});
    expect(ClassificationData).toEqual({
        classification: "CUI",
        classes: "classify-top classify-cui classify-text",
    });
});

test("Return CONFIDENTIAL and the appropriate classes for the top class bar", () => {
    const ClassificationData = ParseClassification({level: "C", position: "top"});
    expect(ClassificationData).toEqual({
        classification: "CONFIDENTIAL",
        classes: "classify-top classify-c classify-text",
    });
});

test("Return SECRET and the appropriate classes for the top class bar", () => {
    const ClassificationData = ParseClassification({level: "S", position: "top"});
    expect(ClassificationData).toEqual({
        classification: "SECRET",
        classes: "classify-top classify-s classify-text",
    });
});

test("Return TOP SECRET and the appropriate classes for the top class bar", () => {
    const ClassificationData = ParseClassification({level: "TS", position: "top"});
    expect(ClassificationData).toEqual({
        classification: "TOP SECRET",
        classes: "classify-top classify-ts classify-text-black",
    });
});

test("Return TOP SECRET and the appropriate classes for the top class bar", () => {
    const ClassificationData = ParseClassification({level: "SCI", position: "top"});
    expect(ClassificationData).toEqual({
        classification: "TOP SECRET",
        classes: "classify-top classify-sci classify-text-black",
    });
});

test("Return UNCLASSIFIED and the appropriate classes for the bottom class bar", () => {
    const ClassificationData = ParseClassification({level: "U", position: "bottom"});
    expect(ClassificationData).toEqual({
        classification: "UNCLASSIFIED",
        classes: "classify-bottom classify-u classify-text",
    });
});

test("Return CUI and the appropriate classes for the bottom class bar", () => {
    const ClassificationData = ParseClassification({level: "CUI", position: "bottom"});
    expect(ClassificationData).toEqual({
        classification: "CUI",
        classes: "classify-bottom classify-cui classify-text",
    });
});

test("Return CONFIDENTIAL and the appropriate classes for the bottom class bar", () => {
    const ClassificationData = ParseClassification({level: "C", position: "bottom"});
    expect(ClassificationData).toEqual({
        classification: "CONFIDENTIAL",
        classes: "classify-bottom classify-c classify-text",
    });
});

test("Return SECRET and the appropriate classes for the bottom class bar", () => {
    const ClassificationData = ParseClassification({level: "S", position: "bottom"});
    expect(ClassificationData).toEqual({
        classification: "SECRET",
        classes: "classify-bottom classify-s classify-text",
    });
});

test("Return TOP SECRET and the appropriate classes for the bottom class bar", () => {
    const ClassificationData = ParseClassification({level: "TS", position: "bottom"});
    expect(ClassificationData).toEqual({
        classification: "TOP SECRET",
        classes: "classify-bottom classify-ts classify-text-black",
    });
});

test("Return TOP SECRET and the appropriate classes for the bottom class bar", () => {
    const ClassificationData = ParseClassification({level: "SCI", position: "bottom"});
    expect(ClassificationData).toEqual({
        classification: "TOP SECRET",
        classes: "classify-bottom classify-sci classify-text-black",
    });
});

test("Return TOP SECRET and the appropriate classes for the bottom class bar", () => {
    const ClassificationData = ParseClassification({level: "SCI", position: "bottom", caveats: "TEST/TEST2"});
    expect(ClassificationData).toEqual({
        classification: "TOP SECRET",
        classes: "classify-bottom classify-sci classify-text-black",
        caveats: "TEST/TEST2",
    });
});

test("Return TOP SECRET and the appropriate classes for the top class bar", () => {
    const ClassificationData = ParseClassification({level: "SCI", position: "top", caveats: "TEST/TEST2"});
    expect(ClassificationData).toEqual({
        classification: "TOP SECRET",
        classes: "classify-top classify-sci classify-text-black",
        caveats: "TEST/TEST2",
    });
});