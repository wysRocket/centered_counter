/**
 * Factory function that returns a function for generating a sequence of numbers
 *
 * @param {number} [start=0] - The starting number for the sequence. Default is 0.
 * @param {number} [step=1] - The step to increment each number in the sequence. Default is 1.
 * @returns {Function} - A function that generates the number sequence every time it is called.
 */
export const factory = (start: number = 0, step: number = 1) => {
  let current = start;
  let isFirstCall = true;
  return () => {
    if (isFirstCall) {
      isFirstCall = false;
      return current;
    }
    current += step;
    return current;
  };
};
