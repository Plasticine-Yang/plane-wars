import { createApp } from './runtime-pixi';
import { pixiApp } from './pixi-game';
import App from './App.vue';
import '@/style/index.scss';

createApp(App).mount(pixiApp.stage);
