declare function isSpaghettiCode(code: string): {
  isSpaghetti: boolean;
  maxNestingLevel: number;
  longFunctionCount: number;
};

export = isSpaghettiCode;
export default isSpaghettiCode;
