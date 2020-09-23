const FamilyTree = require('./FamilyTree')

console.log("env:", process.env.NODE_ENV)

describe('family-tree', () => {
    test('i am in my family tree', () => {
        const me = FamilyTree[0]
        expect(me.name).toEqual('michael')
    })

    test('sibling is in family tree', () => {
        const sibling = FamilyTree[1]
        expect(sibling.name).toEqual('flo')
    })

    test('parent is in family tree', () => {
        const parent = FamilyTree[2]
        expect(parent.name).toEqual('alice')
    })
})