import { Ng2StateDeclaration } from "ui-router-ng2";

import { LogsComponent } from './logs.component';

export const logsState: Ng2StateDeclaration = {
    name: 'logs',
    parent: 'admin',
    url: '/logs',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Logs'
    },
    views: {
        'content@': { component: LogsComponent }
    }
};
