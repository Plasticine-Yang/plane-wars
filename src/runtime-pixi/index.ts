import { Container, Sprite, Text, Texture } from 'pixi.js';
import { createRenderer } from 'vue';

const { createApp } = createRenderer<Container, Container>({
  createElement(type) {
    let element;

    switch (type) {
      case 'Container':
        element = new Container();
        break;
      case 'Sprite':
        element = new Sprite();
        break;
      default:
        throw new Error(
          `The type of ${type} does not exist or has not implemented its rendering logic`
        );
    }

    return element;
  },
  patchProp: function (
    el: Container,
    key: string,
    prevValue: any,
    nextValue: any
  ): void {
    switch (key) {
      case 'texture':
        // nextValue 是新传入的 prop 值
        (el as Sprite).texture = Texture.from(nextValue);
        break;
    }
  },
  insert: function (
    el: Container,
    parent: Container,
    anchor?: Container | null
  ): void {
    let index = -1;
    if (anchor) {
      index = parent.getChildIndex(anchor);
    }

    if (index !== -1) parent.addChildAt(el, index);
    else parent.addChild(el);
  },
  remove: function (el: Container): void {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el);
    }
  },
  createText: function (text: string): Container {
    return new Text(text);
  },
  createComment: function (text: string): Container {
    return new Text(text);
  },
  setText: function (node: Container, text: string): void {
    throw new Error('Function not implemented.');
  },
  setElementText: function (node: Container, text: string): void {
    throw new Error('Function not implemented.');
  },
  parentNode: function (node: Container): Container | null {
    return node.parent;
  },
  nextSibling: function (node: Container): Container | null {
    throw new Error('Function not implemented.');
  },
});

export { createApp };
