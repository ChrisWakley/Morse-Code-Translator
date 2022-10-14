describe("translateInput", () => {

    it("should translate hello", () => {
        const result = translateEnglish("hello");
        expect(result).toBe(".... . .-.. .-.. ---");
    });

    it("should translate hello world", () => {
        const result = translateEnglish("hello world");
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    });

    it("should translate valid inputs", () => {
        const result = translateEnglish("hello");
        expect(result).toBe(".... . .-.. .-.. ---");
    });

    it("should translate ' '", () => {
        const result = translateEnglish("' '");
        expect(result).toBe(" / ");
    });

    it("should translate ''", () => {
        const result = translateEnglish("''");
        expect(result).toBe("no input detected");
    });

    it("should translate hElLo WoRlD", () => {
        const result = translateEnglish("hElLo WoRlD");
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    });

    it("should translate @/!", () => {
        const result = translateEnglish("@/!");
        expect(result).toBe(".--.-. -..-. -.-.--");
    });

    it("should translate @/! hElLo WoRlD", () => {
        const result = translateEnglish("@/!");
        expect(result).toBe(".--.-. 	-..-. 	-.-.-- / .... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    });

    it("should translate 123", () => {
        const result = translateEnglish("123");
        expect(result).toBe(".---- ..--- ...--");
    });
});

describe("does not accept invalid characters", () => {
    it("should return invalid input", () => {
        const result = translateEnglish("#`¬*");
        expect(result).toBe("invalid input");
    });
});

//test for valid character//
//test for string(s) character
//test for spaces//
//test for case sensitivity//
//test for symbol characters//
//test for numerical characters//
//test for combination inputs//
//test for null input//
//test for invalid input//