import { generateRandomColor, getRandomNumber, getRandomNumbersFromArray } from '../utils/function';
import { GAMESTATUS } from '@/constants/labels';

export default class Horse {
  color: string | null;
  number: number | null;
  condition: number | null;
  name: string | null;
  numbers: number[];

  constructor(
    color: string | null = null,
    number: number | null = null,
    condition: number | null = null,
    name: string | null = null,
    numbers: number[] = [...Array(21).keys()].slice(1)
  ) {
    this.color = color;
    this.number = number;
    this.condition = condition;
    this.name = name;
    this.numbers = numbers;
  }

  generate(): { color: string; number: number; condition: number; status: string; name: string; speed: number }[] {
    const horses: { color: string; number: number; condition: number; status: string; name: string; speed: number }[] = [];
    for (let i = 1; i <= 20; i++) {
      horses.push({
        color: this.getRandomColor(),
        number: this.getUniqueNumber(),
        condition: this.getCondition(),
        status: GAMESTATUS.NOTSTARTED,
        name: this.getRandomNames(),
        speed: this.getSpeed()
      });
    }
    return horses;
  }

  getRandomColor(): string {
    const color = generateRandomColor();
    return color;
  }

  getUniqueNumber(): number {
    const number = getRandomNumbersFromArray(this.numbers);
    this.numbers.splice(this.numbers.indexOf(number), 1);
    return number;
  }

  getCondition(): number {
    return getRandomNumber(100, 3);
  }

  getSpeed(): number {
    return getRandomNumber(50, 5);
  }

  getRandomNames(): string {
    const names = ['BRÜTÜS', 'GÜMBÜRGÜMBÜR', 'YALI GÜZELİ', 'BATMANASLANI', 'ULUKIZ', 'KARAMUSTAFA', 'COCO LOCO', 'BEYAZ SARAY', 'SARI BERRAN', 'SELAHATTIN', 'INCEPTION', 'INTERSTELLAR', 'GLADIATOR', 'ARAP ATI', 'İNGİLİZ ATI', 'HİNT ATI'];
    return names[Math.floor(Math.random() * names.length)];
  }
}
