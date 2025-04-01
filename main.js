import { King } from './King.js';
import { Sword } from './Sword.js';
import { Run } from './Run.js';
import { BowAndArrow } from './BowAndArrow.js';
import { Walk } from './Walk.js';

const king = new King(new Sword(), new Run());
console.log(king.display());
console.log(king.performAttack());
console.log(king.performMove());

king.setMoveBehavior(new Walk());
king.setWeaponBehavior(new BowAndArrow());

console.log("\nDespués de cambiar comportamientos:");
console.log(king.performAttack());
console.log(king.performMove());