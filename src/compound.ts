export function compound(principal: number, rate: number, periods: number): number {
  if (principal < 0 || rate < -1 || periods < 0) {
    throw new Error("Invalid inputs");
  }
  return principal * Math.pow(1 + rate, periods);
}

// quick manual run
if (require.main === module) {
  const p = 1000, r = 0.05, n = 5;
  console.log();
}
// Added a note about compound interest
