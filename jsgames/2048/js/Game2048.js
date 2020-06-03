(function (window, document, $) {
  function Game2048(opt) {
    var prefix = opt.prefix,
      len = opt.len,
      size = opt.size,
      margin = opt.margin;
    var score = 0; //分数
    var winNum = 2048; //出现2048获胜
    var isGameOver = true; //调用start()前，默认游戏为关闭
    var board = new Board(len);
    var view = new View(prefix, len, size, margin); //view对象用来处理游戏的页面效果
    view.init();
    board.onGenerate = function (e) {
      view.addNum(e.x, e.y, e.num);
    };
    board.onMove = function (e) {
      if (e.to.num >= winNum) {
        isGameOver = true;
        setTimeout(function () {
          view.win();
        }, 300);
      }
      if (e.to.num > e.from.num) {
        score += e.to.num; //累加分数
        view.updateScore(score); //更新页面中显示的分数
      }

      view.move(e.from, e.to);
    };
    board.onMoveComplete = function (e) {
      //判断是否失败
      if (!board.canMove()) {
        isGameOver = true;
        setTimeout(function () {
          view.over(score);
        }, 300);
      }
      //一次移动操作全部结束后，如果移动成功，在棋盘新增一个单元格
      if (e.moved) {
        setTimeout(function () {
          board.generate();
        }, 200);
      }
    };

    //键盘事件
    $(document).keydown(function (e) {
      if (isGameOver) {
        return false;
      }
      switch (e.which) {
        case 37:
          board.moveLeft();
          break;
        case 38:
          board.moveUp();
          break;
        case 39:
          board.moveRight();
          break;
        case 40:
          board.moveDown();
          break;
      }
    });

    var mo = function (e) {
      e.preventDefault();
    };

    function stop() {
      document.body.style.overflow = 'hidden';
      document.addEventListener("touchmove", mo, {
        passive: false
      }); //禁止页面滑动
    }
    //直接默认不让滑动
    stop();

    // 滑动
    $("body").on("touchstart", function (e) {
      e.preventDefault();
      startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $("body").on("touchmove", function (e) {
      e.preventDefault();
      moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
      if (Math.abs(X) > Math.abs(Y) && X > 0) {
        board.moveRight();
      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
        board.moveLeft();
      } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
        board.moveDown();
      } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
        board.moveUp();
      }
    });

    function start() {
      score = 0; //重置分数为0
      view.updateScore(0); //页面中分数重置0
      view.cleanNum(); //清空多余单元格
      board.init(); //初始化单元格数组
      board.generate(); //生成第一个数字
      board.generate(); //生成第二个数字
      isGameOver = false; //游戏开始
    }
    $('#' + prefix + '_restart').click(start);
    $('.restart').click(start);
    start();
  };
  // 数据处理
  function Board(len) {
    this.len = len;
    this.arr = [];
  }
  Board.prototype = {
    // 事件
    onGenerate: function () {},
    onMove: function () {},
    onMoveComplete: function () {},
    //创建二维数组
    init: function () {

      for (var arr = [], x = 0, len = this.len; x < len; ++x) {
        arr[x] = [];
        for (var y = 0; y < len; ++y) {
          arr[x][y] = 0;
        }
      }
      this.arr = arr;
    },
    // 在随机位置增加一个随机数
    generate: function () {
      var empty = [];
      //查找空单元格下标 保存到empty数组
      for (var x = 0, arr = this.arr, len = arr.length; x < len; ++x) {
        for (var y = 0; y < len; ++y) {
          if (arr[x][y] === 0) {

            empty.push({
              x: x,
              y: y
            });
          }
        }
      }
      if (empty.length < 1) {
        return false;
      }
      var pos = empty[Math.floor((Math.random() * empty.length))]; //随机选取一个空位
      this.arr[pos.x][pos.y] = Math.random() < 0.9 ? 2 : 4; //生成数字2与4 9:1概率
      this.onGenerate({
        x: pos.x,
        y: pos.y,
        num: this.arr[pos.x][pos.y]
      });
    },
    // 左移
    moveLeft: function () {
      var canMove = false;
      // 从上到下，从左到右
      for (var x = 0, len = this.arr.length; x < len; ++x) {
        for (var y = 0, arr = this.arr[x]; y < len; ++y) {
          // 从 y + 1 位置开始，向右查找
          for (var next = y + 1; next < len; ++next) {
            // 如果 next 单元格是 0，找下一个不是 0 的单元格
            if (arr[next] === 0) {
              continue;
            }
            // 如果 y 数字是 0，则将 next 移动到 y 位置，然后将 y 减 1 重新查找
            if (arr[y] === 0) {
              arr[y] = arr[next];
              this.onMove({
                from: {
                  x: x,
                  y: next,
                  num: arr[next]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[y]
                }
              });
              arr[next] = 0;
              canMove = true;
              --y;
              // 如果 y 与 next 单元格数字相等，则将 next 移动并合并给 y
            } else if (arr[y] === arr[next]) {
              arr[y] += arr[next];
              this.onMove({
                from: {
                  x: x,
                  y: next,
                  num: arr[next]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[y]
                }
              });
              arr[next] = 0;
              canMove = true;
            }
            break;
          }
        }
      }
      this.onMoveComplete({
        moved: canMove
      });
    },
    moveRight: function () {
      var moved = false;
      for (var x = 0, len = this.arr.length; x < len; ++x) {
        for (var y = len - 1, arr = this.arr[x]; y >= 0; --y) {
          for (var prev = y - 1; prev >= 0; --prev) {
            if (arr[prev] === 0) {
              continue;
            }
            if (arr[y] === 0) {
              arr[y] = arr[prev];
              this.onMove({
                from: {
                  x: x,
                  y: prev,
                  num: arr[prev]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[y]
                }
              });
              arr[prev] = 0;
              moved = true;
              ++y;
            } else if (arr[y] === arr[prev]) {
              arr[y] += arr[prev];
              this.onMove({
                from: {
                  x: x,
                  y: prev,
                  num: arr[prev]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[y]
                }
              });
              arr[prev] = 0;
              moved = true;
            }
            break;
          }
        }
      }
      this.onMoveComplete({
        moved: moved
      });
    },
    moveUp: function () {
      var canMove = false;
      for (var arr = this.arr, len = arr.length, y = 0; y < len; ++y) {
        for (var x = 0; x < len; ++x) {
          for (var next = x + 1; next < len; ++next) {
            if (arr[next][y] === 0) {
              continue;
            }
            if (arr[x][y] === 0) {
              arr[x][y] = arr[next][y];
              this.onMove({
                from: {
                  x: next,
                  y: y,
                  num: arr[next][y]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[x][y]
                }
              });
              arr[next][y] = 0;
              canMove = true;
              --x;
            } else if (arr[x][y] === arr[next][y]) {
              arr[x][y] += arr[next][y];
              this.onMove({
                from: {
                  x: next,
                  y: y,
                  num: arr[next][y]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[x][y]
                }
              });
              arr[next][y] = 0;
              canMove = true;
            }
            break;
          }
        }
      }
      this.onMoveComplete({
        moved: canMove
      });
    },
    moveDown: function () {
      var canMove = false;
      for (var arr = this.arr, len = arr.length, y = 0; y < len; ++y) {
        for (var x = len - 1; x >= 0; --x) {
          for (var prev = x - 1; prev >= 0; --prev) {
            if (arr[prev][y] === 0) {
              continue;
            }
            if (arr[x][y] === 0) {
              arr[x][y] = arr[prev][y];
              this.onMove({
                from: {
                  x: prev,
                  y: y,
                  num: arr[prev][y]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[x][y]
                }
              });
              arr[prev][y] = 0;
              canMove = true;
              ++x;
            } else if (arr[x][y] === arr[prev][y]) {
              arr[x][y] += arr[prev][y];
              this.onMove({
                from: {
                  x: prev,
                  y: y,
                  num: arr[prev][y]
                },
                to: {
                  x: x,
                  y: y,
                  num: arr[x][y]
                }
              });
              arr[prev][y] = 0;
              canMove = true;
            }
            break;
          }
        }
      }
      this.onMoveComplete({
        moved: canMove
      });
    },
    canMove: function () {
      //判断是否可以继续移动
      for (var x = 0, arr = this.arr, len = arr.length; x < len; ++x) {
        for (var y = 0; y < len; ++y) {
          if (arr[x][y] === 0) {
            return true;
          }
          var curr = arr[x][y],
            right = arr[x][y + 1];
          var down = arr[x + 1] ? arr[x + 1][y] : null;
          if (right === curr || down === curr) {
            return true;
          }
        }
      }
      return false;
    }
  };
  // 视图处理
  function View(prefix, len, size, margin) {
    this.prefix = prefix; //id或class前缀
    this.len = len; // 单元格单边的数量（实际数量 len * len）
    this.size = size; // 每个单元格的边长
    this.margin = margin; // 每个单元格的间距
    //获取id为game_score和game_container元素
    this.score = $('#' + prefix + '_score');
    this.container = $('#' + prefix + '_container');
    var containerSize = len * size + margin * (len + 1); //计算边长
    this.container.css({
      width: containerSize,
      height: containerSize
    });
    this.nums = {};
  }
  View.prototype = {
    // 计算位置
    getPos: function (n) {
      return this.margin + n * (this.size + this.margin);
    },
    init: function () {
      //根据len自动生成空单元格 包含宽高，定位
      for (var x = 0, len = this.len; x < len; ++x) {
        for (var y = 0; y < len; ++y) {
          var $cell = $('<div class="' + this.prefix + '-cell"></div>');
          $cell.css({
            width: this.size + 'px',
            height: this.size + 'px',
            top: this.getPos(x),
            left: this.getPos(y)
          }).appendTo(this.container);
        }
      }
    },
    //显示数据单元格
    addNum: function (x, y, num) {
      //生成<div class="game-num game-num-*"></div> *分别对应2~2048 11种配色
      var $num = $('<div class="' + this.prefix + '-num ' + this.prefix + '-num-' + num + ' ">');
      $num.text(num).css({
        top: this.getPos(x) + parseInt(this.size / 2),
        left: this.getPos(y) + parseInt(this.size / 2)
      }).appendTo(this.container).animate({
        //"展开"效果动画
        width: this.size + 'px',
        height: this.size + 'px',
        lineHeight: this.size + 'px',
        top: this.getPos(x),
        left: this.getPos(y)
      }, 100);
      this.nums[x + '-' + y] = $num; //将新生成的数字单元格 存到this.num 属性名为board.arr的下标位置，移动操作时用到
    },
    //控制页面单元格移动
    move: function (from, to) {
      //x-y形式，从this.num中获取fromIndex(被移动对象下标)和toIndex(目标对象下标)元素
      var fromIndex = from.x + '-' + from.y,
        toIndex = to.x + '-' + to.y;
      var clean = this.nums[toIndex];
      this.nums[toIndex] = this.nums[fromIndex];
      delete this.nums[fromIndex];
      var prefix = this.prefix + '-num-';
      var pos = {
        top: this.getPos(to.x),
        left: this.getPos(to.y)
      };
      this.nums[toIndex].finish().animate(pos, 200, function () {
        if (to.num > from.num) {
          //判断数字是否合并
          clean.remove();
          $(this).text(to.num).removeClass(prefix + from.num).addClass(prefix + to.num);
        }
      });
    },
    updateScore: function (score) {
      this.score.text(score);
    },
    win: function () {
      $('#' + this.prefix + '_over_info').html('<p>您获胜了</p>');
      //显示重新开始
      $('#' + this.prefix + '_over').removeClass(this.prefix + '-hide');
    },
    over: function (score) {
      $('#' + this.prefix + '_over_info').html('<p>本次得分</p><p>' + score + '</p>');
      $('#' + this.prefix + '_over').removeClass(this.prefix + '-hide');
    },
    cleanNum: function () {
      this.nums = {};
      //重新开始
      $('#' + this.prefix + '_over').addClass(this.prefix + '-hide');
      $('.' + this.prefix + '-num').remove();
    }
  };
  window['Game2048'] = Game2048;
})(window, document, jQuery); //调用函数时传入三个参数