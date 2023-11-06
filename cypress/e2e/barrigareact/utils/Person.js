class Person {

    constructor(name, email, password, redirect) {
      this.name = this.generateName();
      this.email = email;
      this.password = password;
      this.redirect = redirect;

    }

    generateName() {
        const names = [
            "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack", "Katie", "Liam",
            "Mia", "Noah", "Olivia", "Penelope", "Quinn", "Ryan", "Sophia", "Thomas"
        ]

        return names[Math.floor(Math.random() * names.length)];
    }

  }
  export default BarrigaOnboardingServices
