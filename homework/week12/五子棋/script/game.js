class Game {
    constructor(e1) {
        //对应class的初始化函数，就叫constructor,它会在对象被初始化时候自动被调用
        //正常构造一般用来完成初始化的操作
        //在一个类的函数，会提供一个指向自身的指针this
        //构造函数和一般函数一样，是可以传递参数的
        //这里的el就是一个被从外部传递进来的形式参数
        //我们默认约束它为一个HTMLCanvasElement类型d的对象
        //下面开始的代码全部都是进行初始化赋值的操作
        this.canvasOption = {
            //提供对画布的默认配置参数
            size: 400, //这是画布的长宽大小
            maxLine: 18, //这是棋盘最大横纵可以下的棋子数
        };
        this.canvas = e1;
        this.ctx = this.canvas.getContext('2d');
        this.gameVec2Arr = []; //一个二维数组，用来存储棋盘对应位置的状态，我们用0(未使用)/1(黑棋)/-1(白棋)来代表
        this.movePos = {
            //这里 是用来存储鼠标在棋盘上面转换的相对位置坐标
            x: 0,
            y: 0,
        };
        this.cursorStatu = false; //用来存储鼠标是否在棋盘上
        this.switchPlayer = false; //用来存储当前玩家false代表黑棋玩家，true代表白棋玩家;
        this.hisAction = []; //用来存储已经完成过的操作，后面帮助完成悔棋操作
    }
    get basicUnit() {
        const {
            size,
            maxLine
        } = this.canvasOption;
        return size / maxLine;
    }
    init() {
        //编写-个init函数，用来启动对游戏的各种操作
        const {
            canvas,
            gameVec2Arr,
            canvasOption: {
                size,
                maxLine
            },
        } = this;
        canvas.width = size;
        canvas.height = size; //设置canvas的大小
        for (let i = 0; i < maxLine; i++) {
            //将二 维数组填充0
            const tmp = [];
            for (let j = 0; j < maxLine; j++) {
                tmp[j] = 0;
            }
            gameVec2Arr[i] = tmp;
        }
        this.checkerBoard = new CheckerBoard(this, '#fff', '#777'); //在初始化游戏时候，创建一一个棋盘对象
        this.corsor = new Cursor(this, 'rgba(255,0,0,.2)'); //初始化游戏时，创建一个焦点对象
        const self = this; //为了防止this作用域错误，我们将当前对象的this用一个别名存储
        //焦点会根据我们鼠标的各种状态进行更新，所以我们针对canvas对象进行事件监听
        canvas.addEventListener('mouseover', () => {
            //鼠标进入canvas时候触发
            self.cursorStatu = true;
        });
        canvas.addEventListener('mouseout', () => {
            //鼠标离开canvas时候触发
            self.cursorStatu = false;
        });
        canvas.addEventListener('mousemove', (evt) => {
            // 鼠标移动时候触发
            evt = evt || window.event;
            const x = parseInt(evt.offsetX / self.basicUnit);
            const y = parseInt(evt.offsetY / self.basicUnit);
            self.movePos.x = x;
            self.movePos.y = y;
            self.update();
        });
        canvas.addEventListener('mouseup', () => {
            //这里 监听了鼠标在棋盘上点击并且鼠标抬起的动作， 也就是代表了在当前位置下了一个棋子
            const x = self.movePos.x;
            const y = self.movePos.y;
            //直接将下，入棋子的位置存入棋盘坐标数组内
            if (self.gameVec2Arr[x][y] === 0) {
                //判断当前是否已经有棋子 了
                if (!self.switchPlayer) {
                    //判断黑白棋
                    self.gameVec2Arr[x][y] = 1;
                } else {
                    self.gameVec2Arr[x][y] = -1;
                }
                self.hisAction.push({
                    type: 'CHEKCER_DOWN',
                    value: {
                        x: x,
                        y: y,
                    },
                });
                self.switchPlayer = !self.switchPlayer;
                self.update(); //更新游戏状态
                //显示操作记录
                let down = self.hisAction.length //落子次数
                let cx = self.hisAction[down - 1].value.x //x坐标
                let cy = self.hisAction[down - 1].value.y //y坐标
                let color;
                color = down % 2 == 1 ? color = '黑' : color = '白'
                let ul = document.querySelector('ul')
                let li;
                li = document.createElement('li');
                ul.insertBefore(li, ul.children[0]); //新发送的，永远在第一行
                li.innerHTML = '第' + down + '子,' + color + '子,坐标:' + cx + ',' + cy
            }
        });
        this.update();
    }
    update() {
        const {
            checkerBoard,
            corsor
        } = this;
        checkerBoard.draw();
        corsor.draw();
        if (this.isGameOver()) {
            alert(this.switchPlayer ? '黑方胜利' : '白方胜利');
            //刷新页面重新开始
            let res = confirm('重开一局？')
            res == true ? location = location : res
        }
    }
    isGameOver() {
        //编写判断游戏是否结束的函数
        const {
            movePos: {
                x,
                y
            },
            switchPlayer,
            gameVec2Arr,
        } = this;
        const target = switchPlayer ? 1 : -1;
        for (let i = 0; i < 5; i++) {
            //竖向
            const tmp = gameVec2Arr[x];
            const fork1 = tmp.slice(y, y + i + 1);
            const fork2 = tmp.slice(y - (5 - i) + 1, y);
            if (
                fork2
                .concat(fork1)
                .map((v) => {
                    if (v === target) {
                        return Math.abs(v);
                    } else if (v === 0) {
                        return 0;
                    } else {
                        return -Math.abs(v);
                    }
                })
                .join('') === '11111'
            ) {
                return true;
            }
        }
        for (let i = 0; i < 5; i++) {
            //这是横向的判断
            const tmp1 = gameVec2Arr.slice(x, x + i + 1);
            const tmp2 = gameVec2Arr.slice(x - (5 - i) + 1, x);
            const tmp = tmp2.concat(tmp1).map((t) => {
                var v = t[y];
                if (v === target) {
                    return Math.abs(v);
                } else if (v === 0) {
                    return 0;
                } else {
                    return -Math.abs(v);
                }
            });
            if (tmp.join('') === '11111') {
                return true;
            }
        }
        for (let i = 0; i < 5; i++) {
            //这是左斜向(反斜)
            let tmp = [];
            for (let j = 0; j < 5; j++) {
                if (!gameVec2Arr[x + (j - i)]) continue;
                tmp.push(gameVec2Arr[x + (j - i)][y + (j - i)]);
            }
            tmp = tmp.map((v) => {
                if (v === target) {
                    return Math.abs(v);
                } else if (v === 0) {
                    return 0;
                } else {
                    return -Math.abs(v);
                }
            });
            if (tmp.join('') === '11111') {
                return true;
            }
        }
        for (let i = 0; i < 5; i++) {
            //这是右斜向(正斜)
            let tmp = [];
            for (let j = 0; j < 5; j++) {
                if (!gameVec2Arr[x + (j - i)]) continue;
                tmp.push(gameVec2Arr[x + (j - i)][y - (j - i)]);
            }
            tmp = tmp.map((v) => {
                if (v === target) {
                    return Math.abs(v);
                } else if (v === 0) {
                    return 0;
                } else {
                    return -Math.abs(v);
                }
            });
            if (tmp.join('') === '11111') {
                return true;
            }
        }
        return false;
    }
}
class CheckerBoard {
    constructor(game, bgColor, lineColor) {
        //我们需要通过传递一个game对象将外部的数据传递进来
        this.gameTarget = game
        this.bgColor = bgColor //设置棋盘背景颜色
        this.lineColor = lineColor //设置棋盘线颜色
        this.checker = new Checker(this.gameTarget) //添加棋子对象
    }
    draw() { //绘制函数， 用来完成棋盘所有东西的hhuh绘制
        const {
            gameTarget,
            gameTarget: {
                ctx,
                canvasOption: {
                    size,
                    maxLine
                },
                gameVec2Arr
            },
            bgColor,
            lineColor
        } = this
        ctx.fillStyle = bgColor //设置绘图控制对象的填充颜色
        ctx.clearRect(0, 0, size, size) //将画布完全清空
        ctx.fillRect(0, 0, size, size) //填充画布
        ctx.strokestyle = lineColor //设置绘图控制对 象的线条颜色
        const basicUnit = gameTarget.basicUnit
        const halfUnit = basicUnit / 2
        for (let i = 0; i < maxLine; i++) { //绘制横向线条
            ctx.beginPath()
            ctx.moveTo(halfUnit, halfUnit + basicUnit * i)
            ctx.lineTo(size - halfUnit, halfUnit + basicUnit * i)
            ctx.stroke()
            ctx.closePath()
        }
        for (let i = 0; i < maxLine; i++) { //绘制竖向线条
            ctx.beginPath()
            ctx.moveTo(halfUnit + basicUnit * i, halfUnit)
            ctx.lineTo(halfUnit + basicUnit * i, size - halfUnit)
            ctx.stroke()
            ctx.closePath()
        }
        //-直到目前位置，我们绘制了一个空棋盘
        //每次重绘棋盘时候，会将棋子自动绘制
        const gameVec2ArrLne = gameVec2Arr.length
        const {
            checker
        } = this
        for (let i = 0; i < gameVec2ArrLne; i++) { //绘制已有的棋子
            const tmp = gameVec2Arr[i]
            const tmpLen = tmp.length
            for (let j = 0; j < tmpLen; j++) { //通过遍历整个棋盘的坐标状态来写入相对应的棋子
                const posStatu = tmp[j]
                checker.draw(posStatu, i, j)
            }
        }
    }
}
class Checker {
    constructor(game) {
        //同样，我们传递一个game对象来获取全局的属性
        this.gameTarget = game
    }
    draw(posStatu, x, y) {
        //绘制棋子的函数
        const {
            ctx
        } = this.gameTarget
        const basicUnit = this.gameTarget.basicUnit
        const halfUnit = basicUnit / 2
        x++
        y++
        x *= basicUnit
        y *= basicUnit //这一步是将传递进来的相对位置的坐标转化为真实坐标    
        if (posStatu === -1) { //白棋绘制
            ctx.fillStyle = '#fff'
            ctx.strokeStyle = '#555'
            ctx.beginPath()
            ctx.arc(x - halfUnit, y - halfUnit, halfUnit, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        }
        if (posStatu === 1) { //黑棋绘制
            ctx.fillStyle = '#555'
            ctx.beginPath()
            ctx.arc(x - halfUnit, y - halfUnit, halfUnit, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        }
    }
}
class Cursor {
    constructor(game, color) {
        //接受一个game对象和颜色对象
        this.gameTarget = game
        this.color = color
    }
    draw() {
        //绘制函数 
        //依然是将相对坐标做成真正的坐标然后进行绘制
        const {
            cursorStatu,
            gameVec2Arr,
            movePos,
            ctx
        } = this.gameTarget
        const {
            color
        } = this
        const basicUnit = this.gameTarget.basicUnit
        const halfUnit = basicUnit / 2
        if (cursorStatu && gameVec2Arr[movePos.x][movePos.y] === 0) {
            //这里添加了一个判断，是为了判断鼠标是否在棋盘上，并且当前位置是否有棋子
            const x = (movePos.x + 1) * basicUnit
            const y = (movePos.y + 1) * basicUnit
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.arc(x - halfUnit, y - halfUnit, halfUnit, 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        }
    }
}