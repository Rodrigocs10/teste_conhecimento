function generateRandomNumberRange(x: number, y: number): number {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

interface Util{
  generateRandomNumber(): number;
}

export class UtilImplementation implements Util{
  generateRandomNumber(): number {
    return generateRandomNumberRange(999, 9999) + generateRandomNumberRange(1, 100) / 100;
  }
}
