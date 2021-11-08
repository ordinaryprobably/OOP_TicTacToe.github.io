export default class Rule {
    constructor() {
        this.table = Array.from(Array(3), () =>  Array(3).fill(null));

        this._hor1 = 0;
        this._hor2 = 0;
        this._hor3 = 0;

        this._ver1 = 0;
        this._ver2 = 0;
        this._ver3 = 0;
        
        this._cross1 = 0;
        this._cross2 = 0;
        
        this.started = false;
        this.myTurn = true;
        this.draw = 0;

        this.gameSection = document.querySelector('.game-section');
        this.playBtn = document.querySelector('.playBtn');
        this.resetBtn = document.querySelector('.resetBtn');   
    }
    checkWinner() {
        this.checkHorizontal();
        this.checkVertical();
        this.checkCross();
    
        let horizontalArr = [this._hor1, this._hor2, this._hor3];
        let verticalArr = [this._ver1, this._ver2, this._ver3];
        let crossArr = [this._cross1, this._cross2];
    
        if(horizontalArr.some(score => score === 3 || score === 30)) {
            this.showWinner();
            for(let i = 0; i < this.innerDiv.length; i++) {
                this.innerDiv[i].removeEventListener('click', this.onClick)
            }
        } else if(verticalArr.some(score => score === 3 || score === 30)) {
            this.showWinner();
            for(let i = 0; i < this.innerDiv.length; i++) {
                this.innerDiv[i].removeEventListener('click', this.onClick)
            }
        } else if(crossArr.some(score => score === 3 || score === 30)) {
            this.showWinner();
            for(let i = 0; i < this.innerDiv.length; i++) {
                this.innerDiv[i].removeEventListener('click', this.onClick)
            }
        } else {
            this.decideDraw();
        }
    }

    onClick(event) {
        const className = event.target.className;
        this.switchTurn(className);
        this.checkWinner();
        this.paintOX(className);
        event.target.removeEventListener('click', this.onClick);
    }

    makeTable() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                this.table[i][j] = null
            }
        }
    }

    checkHorizontal() {
        this._hor1 = 0;
        this._hor2 = 0;
        this._hor3 = 0;
    
        for (let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(i === 0) {
                    this._hor1 += table[0][j]
                }
                if(i === 1) {
                    this._hor2 += table[1][j]
                }
                if(i === 2) {
                    this._hor3 += table[2][j]
                }
            }
        }
    }

    checkVertical() {
        this._ver1 = 0;
        this._ver2 = 0;
        this._ver3 = 0;
    
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(i === 0) {
                    this._ver1 += table[j][0]
                }
                if(i === 1) {
                    this._ver2 += table[j][1]
                }
                if(i === 2) {
                    this._ver3 += table[j][2]
                }
            }
        }
    }

    checkCross() {
        this._cross1 = 0;
        this._cross2 = 0;
    
        for(let i = 0; i < 2; i++) {
            for(let j = 0; j < 3; j++) {
                if(i === 0) {
                    this._cross1 += this.table[j][j]
                }
                if(i === 1) {
                    this._cross2 = this.table[0][2] + this.table[1][1] + this.table[2][0]
                }
            }
        }
    }


    switchTurn(className) {
        this.myTurn = !this.myTurn;
        if(this.myTurn) {
            switch (className) {
                case 'num-0': 
                    this.table[0][0] = 1
                    break;
                case 'num-1': 
                    this.table[0][1] = 1
                    break;
                case 'num-2': 
                    this.table[0][2] = 1
                    break;
                case 'num-3': 
                    this.table[1][0] = 1
                    break;
                case 'num-4': 
                    this.table[1][1] = 1
                    break;
                case 'num-5': 
                    this.table[1][2] = 1
                    break;
                case 'num-6': 
                    this.table[2][0] = 1
                    break;
                case 'num-7': 
                    this.table[2][1] = 1
                    break;
                case 'num-8': 
                    this.table[2][2] = 1
                    break;
            }
        } else if (!this.myTurn) {
            switch (className) {
                case 'num-0': 
                    this.table[0][0] = 10
                    break;
                case 'num-1': 
                    this.table[0][1] = 10
                    break;
                case 'num-2': 
                    this.table[0][2] = 10
                    break;
                case 'num-3': 
                    this.table[1][0] = 10
                    break;
                case 'num-4': 
                    this.table[1][1] = 10
                    break;
                case 'num-5': 
                    this.table[1][2] = 10
                    break;
                case 'num-6': 
                    this.table[2][0] = 10
                    break;
                case 'num-7': 
                    this.table[2][1] = 10
                    break;
                case 'num-8': 
                    this.table[2][2] = 10
                    break;
            }
        }
    }

    paintOX(className) {
        const selectedTile = document.querySelector(`.${className}`);
        const span = document.createElement('span');
        span.setAttribute('class', 'material-icons md-48');
        
        if(this.myTurn) { // X
            span.textContent = 'close';
            selectedTile.appendChild(span);
            
        } else if(!this.myTurn) { // O
            span.textContent = 'circle';
            selectedTile.appendChild(span);
        }
    }

    showWinner() {
        const result = document.createElement('p')
        result.setAttribute('class', 'result');
        result.textContent = 'win!'
        this.gameSection.appendChild(result)
    }
    
    showDraw() {
        const result = document.createElement('p')
        result.setAttribute('class', 'result');
        result.textContent = 'draw!'
        this.gameSection.appendChild(result)
    }
    
    decideDraw() {
        let mergeTable = [...this.table[0], ...this.table[1], ...this.table[2]];
    
        for(let i = 0; i < mergeTable.length; i++){
            if(mergeTable.every(score => score != null)){
                this.draw += 1;
            }
        }
    
        if(this.draw === 9) {
            this.showDraw();
        }
    }

    playGame() {
        const innerDiv = document.querySelectorAll('#inner-div');

        this.started = true;
        
        for(let i = 0; i < innerDiv.length; i++) {
            innerDiv[i].addEventListener('click', this.onClick)
        }
    
        this.playBtn.style.visibility = 'hidden';
        this.resetBtn.style.visibility = 'visible';
    }

    resetGame() {
        const innerDiv = document.querySelectorAll('#inner-div');

        this.draw = 0;
        if(this.started) {
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    this.table[i][j] = null
                }
            }
            for(let i = 0; i < innerDiv.length; i++) {
                innerDiv[i].innerHTML = '';
                innerDiv[i].removeEventListener('click', this.onClick)
            }
            if(document.querySelector('.result')) {
                const result = document.querySelector('.result');
                result.remove();
            }
        }
    
        this.playBtn.style.visibility = 'visible';
        this.resetBtn.style.visibility = 'hidden';
    }
}
