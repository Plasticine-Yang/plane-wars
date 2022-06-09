import { createApp } from './runtime-pixi';
import { pixiApp } from './pixi-game';
import App from './App.vue';

createApp(App).mount(pixiApp.stage);
