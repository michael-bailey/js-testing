
const Person = function(name, age) {
    return {
        name: name,
        age: age,
        parents: [],
        children: [],

        addParent: function(parent) {
            if (this.parents.length > 1) {
                return 1
            }
            this.parents.push(parent)
            return 0
        },

        addChild: function(child) {
            if (child.addParent(this) != 0) {
                return 1
            }
            this.children.push(child)
            return 0
        },

        getGen: function(level) {
            if (level < 1) {
                return []
            }
            
            if (level > 1) {
                final = []
                for (i in this.parents) {
                    let results = this.parents[i].getGen(level-1)
                    for (j in results) {
                        final.push(results[j])	
                    } 
                }
                return final
            }
            return this.parents
        }

    }
}

module.exports = {Person}