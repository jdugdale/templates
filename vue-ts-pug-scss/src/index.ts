import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { Vue, Component } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import routes from './routes';
import './style.scss';

declare var require: any;

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

const requireComponent = require.context('./components', false, /\.vue$/);
requireComponent.keys().forEach(filename => {
    const componentConfig = requireComponent(filename);
    const componentName = upperFirst(camelCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1')));
    Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({ router }).$mount('#app');
