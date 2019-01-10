
/* Super Inheritance
** The key word super is user to access and call parents functions of an object
**
*/

/* Call the parents constructor object
** super([arguments])
*/

/* Call another method of the parent object
** super().functionOnParent([arguments])
*/

class Human{
    constructor(props = {}){
        console.log('Contructor parent')
        this.props = props;
    }
    getProps(){
        return this.props;
    }
}

class Mutant extends Human {
    constructor(props, level = 0){
        console.log('Contructor child')
        super(props)
        this.props.level = level;

    }
}

const myMutant = new Mutant({name:'Wolverine'}, 3)
console.log(myMutant.getProps())
