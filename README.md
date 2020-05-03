# 第十一周作业

**2020.04.27 - 2020.05.03**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [第十一周作业](#第十一周作业)
  - [计算机英语](#计算机英语)
  - [计算机操作系统](#计算机操作系统)
  - [Web 技术开发与应用](#web-技术开发与应用)
  - [软件工程](#软件工程)
  - [计算机接口课程设计](#计算机接口课程设计)
  - [HTML5 技术与应用](#html5-技术与应用)
  - [单片机应用](#单片机应用)
  - [串行口概述作业](#串行口概述作业)
  - [串行口控制器作业](#串行口控制器作业)

<!-- /code_chunk_output -->


### 计算机英语

**5-6 学时**

```
CDBC
instructions
bug
operating
disk
needle
Personal
```

### 计算机操作系统

**作业：**

`AB`，`促使目标主机的硬件或软件发生瘫痪的情况，使正当的用户无法正常使用该主机提供的服务。`

### Web 技术开发与应用

**课后：**

**`BAA、AC、BC`**

**作业：**

`DABB`,`AD`

### 软件工程

**39-40 学时：**

```
DD、连锁型、简单、箭头、单个条件、错对错对
```

**41-42 学时：**

```
ABBC、直觉、判定表、确认测试、一次性、对错
```

**作业：**

一、

```
    C
    B
```

二、

```
    等于10个字符，英文字母，下划线，5，6，8
    单元测试
    系统测试
```

### 计算机接口课程设计

**7.1**

```
ABAAB
```

**6:**

```assembly
MOV DX,290H
MOV AL,0
OUT DX,AL
```

**7:**

```assembly
MOV DX,290H
IN AL,DX
```

**8:**

```assembly
L1:MOV DX,28AH
   IN AL,DX
   TEST AL,10H
   JZ L1
```

**9:**

`3FH`

**10:**

`06H`

### HTML5 技术与应用

**简单测试：**

```html
1、B 2、 none：默认。定义标准的文本 underline：定义文本下的一条线。
overline：定义文本上的一条线 line-through：定义穿过文本下的一条线。
blink：定义闪烁的文本。
```

**5.3：**

**1~3：CBD**

**4、**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      a {
        color: white;
      }
      a:link {
        background-color: orange;
      }
      a:hover {
        background-color: brown;
      }
      a:active {
        background-color: yellowgreen;
      }
      a:visited {
        color: while;
      }
    </style>
  </head>

  <body>
    <a href="2.html" target="_blank">点击跳转</a>
  </body>
</html>
```

**2.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <p>
      新闻1
    </p>
    <p>
      新闻2
    </p>
    <p>
      新闻3
    </p>
  </body>
</html>
```

**5.4：ACC**

**4、(图片 img.png 自己加)**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .father {
        position: relative;
      }
      .child {
        position: absolute;
        top: 200px;
        left: 100px;
        color: white;
      }
    </style>
  </head>

  <body>
    <div class="father">
      <img src="img.png" />
      <div class="child">定位</div>
    </div>
  </body>
</html>
```

**作业：css2**

**BDA**

**二、**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        animation: w 2s infinite alternate;
        /* infinite: 无限播放；alternate：反向播放*/
      }

      @keyframes w {
        0% {
          background-color: crimson;
          transform: translate(300px, 100px);
        }

        25% {
          background-color: cadetblue;
          transform: translate(400px, 100px);
        }
        50% {
          background-color: coral;
          transform: translate(500px, 100px);
        }
        75% {
          background-color: darkkhaki;
          transform: translate(600px, 100px);
        }
        to {
          background-color: blueviolet;
          transform: translate(700px, 100px);
        }
      }
    </style>
  </head>

  <body>
    <div></div>
  </body>
</html>
```

### 单片机应用

### 串行口概述作业

**1、**

```
C、方式2
```

**2、**

`单工、半双工、全双工`

**3、**

```
0023H
```

**4、**

```
并行通信
串行通信
并行通信
串行通信
```

**5、6**

`对、对`

**7、**

```
并行通信：是指数据的各位同时进行传送的通信方式。

串行通信：是指数据一位一位顺序传送的通信方式。

同步通信和异步通信；

异步通信所传输的数据帧格式是由1个起始位、1～9个数据位、1～2个停止位组成，依靠起始位和停止位保持同步；

同步所传输数据帧格式是由多个字节组成的一个帧，每个帧都有两个（或一个）同步字符作为起始位以触发同步时钟开始发送或接收数据。

波特率是指每秒钟传送二进制数码的位数（bit），单位bps，bit/s。
```

**8、**

```
单工方式:只允许数据向一个方向传送(A→B)。
半双工方式:允许数据向两个方向中得一个方向传送，但每次只能一个站发送
全双工方式: 允许数据同时双向传送
```

### 串行口控制器作业

```
CAADB;
1;
0;
同步移位寄存器;
地址/数据;
```
