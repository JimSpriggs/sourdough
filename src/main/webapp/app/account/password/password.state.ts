import { Ng2StateDeclaration } from "ui-router-ng2";

import { PasswordComponent } from './password.component';

export const passwordState: Ng2StateDeclaration = {
    name: 'password',
    parent: 'account',
    url: '/password',
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Password'
    },
    views: {
        'content@': { component: PasswordComponent }
    }
};
