import { WeaponBehavior } from './WeaponBehavior.js';
export class Knife extends WeaponBehavior {
  attack() {
    return "Estoy atacando con un cuchillo!";
  }
}