
# Plane Wars

基于TDD思想开发的飞机大战游戏，使用vitest测试框架完成单元测试的编写

使用vue的自定义渲染器实现canvas环境中的渲染逻辑

使用pixi.js提供的API完成自定义渲染器接口的实现

将ui逻辑和业务逻辑解耦，提高开发效率

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

[![author](https://img.shields.io/badge/author-Plasticine--Yang-blue)](https://github.com/Plasticine-Yang)

[![vite](https://img.shields.io/badge/build-vite-brightgreen)](https://vitejs.dev/)

[![pixi.js](https://img.shields.io/badge/engine-pixi.js-red)](https://pixijs.com/)
# Feature

- 使用vue的自定义渲染器接口createRenderer实现一个在非DOM环境下的渲染器，实现方式参考runtime-dome
- 学会pixi.js的基本使用
- vitest测试框架的基本使用，基本的API使用，以及如何测试有定时器场景的业务逻辑
- TDD测试驱动开发思想，每一个业务逻辑都会有相应的单元测试，并且是先编写单元测试，根据单元测试描述的场景去思考如何实现具体功能，单元测试的描述范围足够小，通过小步快走的方式逐步完善功能，由于步骤足够小，涉及的其他模块几乎没有，方便每个单元测试的调试
- 将ui逻辑和业务逻辑解耦，摆脱以往的实现一个功能就要打开浏览器检查视图的逻辑来验证自己的业务逻辑是否正确的痛苦开发体验，这样还能够在添加新功能时很方便地验证是否有影响到之前实现的功能

# How to run

```shell
pnpm i
pnpm dev
```

# 教程

掘金：[自定义vue渲染器，分离ui逻辑和业务逻辑，基于TDD思想实现一个飞机大战小游戏](https://juejin.cn/post/7107829079952326693/#heading-59)

