const {Person} = require('./FamilyTree')

describe('person tests', () => {
    test('create person', () => {

        let person1 = new Person('michael', 19)

        expect(person1 instanceof Person).toEqual(true)
        expect(person1.name).toEqual("michael")
        expect(person1.age).toEqual(19)
    })

    test('add a parent to a child', () => {
        let parent1 = new Person("michael", 19)
        let child1 = new Person("alice", 45)

        let result = child1.addParent(parent1)
        expect(result).toEqual(0)

        expect(child1.parents[0]).toEqual(parent1)
    })

    test('add a parent to a child', () => {
        let parent1 = new Person("michael", 19)
        let child1 = new Person("alice", 45)

        let result = parent1.addChild(child1)
        expect(result).toEqual(0)

        expect(child1.parents[0]).toEqual(parent1)
        expect(parent1.children[0]).toEqual(child1)
    })
})