/** 1 → '01'. Everything numbered on the page (nav, callouts, sheets, specs) uses two digits. */
export const twoDigits = (n: number) => String(n).padStart(2, '0');

/** Drawing-sheet numbers from a zero-based index: 0 → 'W-01'. Shared by Work and the Skills schedule. */
export const sheetNumber = (index: number) => `W-${twoDigits(index + 1)}`;
