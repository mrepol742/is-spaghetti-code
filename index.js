function isSpaghettiCode(code) {
    // Check for deep nesting
    const lines = code.split('\n');
    let nestingLevel = 0;
    let maxNestingLevel = 0;

    for (const line of lines) {
        if (line.includes('{')) nestingLevel++;
        if (line.includes('}')) nestingLevel--;
        maxNestingLevel = Math.max(maxNestingLevel, nestingLevel);
    }

    // Check for long functions
    const longFunctionThreshold = 20; // Example threshold for lines in a function
    const functionLines = lines.filter(line => line.includes('function'));
    const longFunctions = functionLines.filter(line => {
        const startIndex = lines.indexOf(line);
        let count = 0;

        for (let i = startIndex; i < lines.length; i++) {
            count++;
            if (lines[i].includes('}')) break;
        }

        return count > longFunctionThreshold;
    });

    return {
        isSpaghetti: maxNestingLevel > 3 || longFunctions.length > 0,
        maxNestingLevel,
        longFunctionCount: longFunctions.length,
    };
}

module.exports = isSpaghettiCode;
