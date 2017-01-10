import { Ng2StateDeclaration } from 'ui-router-ng2';

import { HomeComponent } from './home.component';

export const homeState: Ng2StateDeclaration = {
    name: 'home',
    parent: 'app',
    url: '/',
    data: {
        authorities: []
    },
    views: {
        'content@': { component: HomeComponent }
    }
};
