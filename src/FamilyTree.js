class Person {
    name = ''
    age = ''
    parents = []
    children = []

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // TODO: - add checks to see if the acctual child exists already
    addParent(parent) {
        if (this.parents.length > 1) {
            return 1
        }
        this.parents.push(parent)
        return 0
    }

    addChild(child) {
        if (child.addParent(this) != 0) {
            return 1
        }
        this.children.push(child)
        return 0
    }
}

module.exports = {Person}