import { WeaponBehavior } from './WeaponBehavior.js';
export class Sword extends WeaponBehavior {
  attack() {
    return "Estoy atacando con una espada!";
  }
}