const {Person} = require('./FamilyTree')
const util = require('util')

describe('person tests', () => {
    test('create person', () => {

        let person1 = new Person('michael', 19)

        expect(person1 instanceof Person).toEqual(true)
        expect(person1.name).toEqual("michael")
        expect(person1.age).toEqual(19)
    })

    test('add a parent to a child', () => {
        let parent1 = new Person("alice", 19)
        let child1 = new Person("michael", 45)

        let result = child1.addParent(parent1)
        expect(result).toEqual(0)

        expect(child1.parents[0]).toEqual(parent1)
    })

    test('add too many parents to a child', () => {
        let parent1 = new Person("alice", 19)
        let child1 = new Person("michael", 45)

        child1.addParent(parent1)
        child1.addParent(parent1)
        let result = child1.addParent(parent1)
        expect(result).toEqual(1)
    })

    test('add a parent to a child', () => {
        let parent1 = new Person("alice", 19)
        let child1 = new Person("michael", 45)

        let result = parent1.addChild(child1)
        expect(result).toEqual(0)

        expect(child1.parents[0]).toEqual(parent1)
        expect(parent1.children[0]).toEqual(child1)

        console.log(util.inspect(parent1))
    })

    test('large tree', () => {

        // create many people
        Aliahna = new Person("Aliahna", 2)
        Carols = new Person("Carols", 3)

        Trinise = new Person("Trinise", 30)
        Shakur = new Person("Shakur", 33)

        Mahlah = new Person("Mahlah", 67)
        Dametris = new Person("Dametris", 64)
        Shontrell = new Person("Shontrell", 66)
        Naor = new Person("Naor", 65)

        Mahlah.addChild(Trinise)
        Dametris.addChild(Trinise)

        Shontrell.addChild(Shakur)
        Naor.addChild(Shakur)

        Trinise.addChild(Aliahna)
        Trinise.addChild(Carols)

        Shakur.addChild(Aliahna)
        Shakur.addChild(Carols)

        console.log(util.inspect(Aliahna, {depth: 5}))
    })
})