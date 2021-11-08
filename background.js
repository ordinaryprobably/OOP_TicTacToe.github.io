export default class Background {
    constructor() {
        this.gameSection = document.querySelector('.game-section');
        this.divHor1 = document.querySelector('.hor-1');
        this.divHor2 = document.querySelector('.hor-2');
        this.divHor3 = document.querySelector('.hor-3');
    }
    makeDivHor() {
        for(let i = 0; i < 3; i++) {
            const createDivHor = document.createElement('div');
            createDivHor.setAttribute('class', `hor-${i+1}`)
            this.gameSection.appendChild(createDivHor)
        }
    }

    makeNineBoxes() {
        for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(i === 0) {
                    const createInnerDiv = document.createElement('div')
                    createInnerDiv.setAttribute('class', `num-${j}`)
                    createInnerDiv.setAttribute('id', 'inner-div')
                    this.divHor1.appendChild(createInnerDiv)
                }
                if(i === 1) {
                    const createInnerDiv = document.createElement('div')
                    createInnerDiv.setAttribute('class', `num-${3+j}`)
                    createInnerDiv.setAttribute('id', 'inner-div')
                    this.divHor2.appendChild(createInnerDiv)
                }
                if(i === 2) {
                    const createInnerDiv = document.createElement('div')
                    createInnerDiv.setAttribute('class', `num-${6+j}`)
                    createInnerDiv.setAttribute('id', 'inner-div')
                    this.divHor3.appendChild(createInnerDiv)
                }
            }
        }
    }

}
