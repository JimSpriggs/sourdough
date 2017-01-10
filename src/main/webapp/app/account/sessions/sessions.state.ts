import { Ng2StateDeclaration } from "ui-router-ng2";

import { SessionsComponent } from './sessions.component';

export const sessionsState: Ng2StateDeclaration = {
    name: 'sessions',
    parent: 'account',
    url: '/sessions',
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Sessions'
    },
    views: {
        'content@': { component: SessionsComponent }
    }
};
