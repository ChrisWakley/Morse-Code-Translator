describe("translateInput", () => {

    it("should translate hello", () => {
        const result = translateEnglish("hello");
        expect(result).toBe(".... . .-.. .-.. ---");
    });

    it("should translate hello world", () => {
        const result = translateEnglish("hello world");
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    });

    
});


it("should translate A = *-", () => {
    const result = translate('a');
    expect(result).toBe("*-");
});

//test for valid character
//test for string(s) character
//test for spaces
//test for case sensitivity
//test for symbol characters
//test for comination inputs
//test for null input
//test for invalid input