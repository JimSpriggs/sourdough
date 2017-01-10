import { Ng2StateDeclaration } from "ui-router-ng2";

import { PasswordResetFinishComponent } from './password-reset-finish.component';

export const finishResetState: Ng2StateDeclaration = {
    name: 'finishReset',
    parent: 'account',
    url: '/reset/finish?key',
    data: {
        authorities: []
    },
    views: {
        'content@': { component:  PasswordResetFinishComponent }
    }
};
