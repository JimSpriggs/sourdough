import { Ng2StateDeclaration } from "ui-router-ng2";

import { JhiHealthCheckComponent } from './health.component';

export const healthState: Ng2StateDeclaration = {
    name: 'jhi-health',
    parent: 'admin',
    url: '/health',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Health Checks'
    },
    views: {
        'content@': { component: JhiHealthCheckComponent }
    }
};
