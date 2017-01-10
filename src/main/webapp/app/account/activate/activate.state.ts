import { Ng2StateDeclaration } from "ui-router-ng2";

import { ActivateComponent } from './activate.component';

export const activateState: Ng2StateDeclaration = {
    name: 'activate',
    parent: 'account',
    url: '/activate?key',
    data: {
        authorities: [],
        pageTitle: 'Activation'
    },
    views: {
        'content@': { component: ActivateComponent }
    }
};
