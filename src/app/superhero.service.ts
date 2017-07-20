import { Injectable } from '@angular/core';

import { Superhero } from './superhero';
import { SUPERHERO } from './mock-superhero';

@Injectable()
export class SuperHeroService {
  getSuperheroes(): Promise<Superhero[]> {
    return Promise.resolve(SUPERHERO);
  }
}