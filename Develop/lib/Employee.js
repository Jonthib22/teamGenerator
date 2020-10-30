// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role = "Employee") {
        this.id = id,
            this.name = name,
            this.email = email,
            this.role = role;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Employee;