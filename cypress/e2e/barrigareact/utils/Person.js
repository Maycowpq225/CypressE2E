class Person {

    constructor(name, email, password, redirect) {
      this.name = this.generateName();
      this.email = this.generateEmail();
      this.password = this.generatePassword();
      this.redirect = false;

    }

    generateName() {
        const names = [
            "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack", "Katie", "Liam",
            "Mia", "Noah", "Olivia", "Penelope", "Quinn", "Ryan", "Sophia", "Thomas"
        ]

        return names[Math.floor(Math.random() * names.length)];
    }

    generateEmail() {

      const min = 100000000;
      const max = 999999999;

      const random9DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      return this.name + random9DigitNumber + "@hotmail.com";
    }

    generatePassword() {
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const numericChars = '0123456789';
      const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

      const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;

      let password = '';
      for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
      }
    
      return password;
    }

  }
  export default Person
