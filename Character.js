export class Character {
    constructor(weaponBehavior, moveBehavior) {
      this.weaponBehavior = weaponBehavior;
      this.moveBehavior = moveBehavior;
    }
  
    performMove() {
      return this.moveBehavior.move();
    }
  
    performAttack() {
      return this.weaponBehavior.attack();
    }
  
    setMoveBehavior(m) {
      this.moveBehavior = m;
    }
  
    setWeaponBehavior(w) {
      this.weaponBehavior = w;
    }
  
    showCharacter() {
      return "Todos los personajes se mueven y atacan.";
    }
  
    display() {
      return "Soy un personaje.";
    }
  }