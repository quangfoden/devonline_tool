import { createStore } from 'vuex';
import myModule from './modules/my-store-module';
import Roles from './modules/roles';
import Permissions from './modules/permissions';
import Login from './modules/login';
import Card from './modules/card';

export const store = createStore({
    modules: {
        Roles,
        Permissions,
        Login,
        myModule,
        Card
    },
});
