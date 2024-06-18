import { COLORS } from '@/constants/horseSpecs';

export function generateRandomColor(): string {
  const colors = COLORS;
  return Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)];
}

export function getRandomNumber(randomMaxNumber: number, minLength = 1): number {
  return Math.floor(Math.random() * randomMaxNumber) + minLength;
}

export function getRandomNumbersFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomNameGenerator(length: number): string {
  let name = '';
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * 27);
    name += String.fromCharCode(97 + random);
  }
  return name;
}
