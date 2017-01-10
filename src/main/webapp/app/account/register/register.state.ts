import { Ng2StateDeclaration } from "ui-router-ng2";

import { RegisterComponent } from './register.component';

export const registerState: Ng2StateDeclaration = {
    name: 'register',
    parent: 'account',
    url: '/register',
    data: {
        authorities: [],
        pageTitle: 'Registration'
    },
    views: {
        'content@': { component: RegisterComponent }
    }
};
