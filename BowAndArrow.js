import { WeaponBehavior } from './WeaponBehavior.js';
export class BowAndArrow extends WeaponBehavior {
  attack() {
    return "Estoy atacando con un arco y flecha!";
  }
}