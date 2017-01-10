import { Ng2StateDeclaration } from 'ui-router-ng2';

import { ErrorComponent } from './error.component';

export const errorState: Ng2StateDeclaration = {
    name: 'error',
    parent: 'app',
    url: '/error',
    data: {
        authorities: [],
        pageTitle: 'Error page!'
    },
    views: {
        'content@': { component: ErrorComponent }
    }
};

export const accessdeniedState: Ng2StateDeclaration = {
    name: 'accessdenied',
    parent: 'app',
    url: '/accessdenied',
    data: {
        authorities: []
    },
    views: {
        'content@': { component: ErrorComponent }
    }
};
