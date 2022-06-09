import { Application } from 'pixi.js';
import { APP_BACKGROUND_COLOR } from '../constants';

export const pixiApp = new Application({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  backgroundColor: APP_BACKGROUND_COLOR,
});

document.body.appendChild(pixiApp.view);
