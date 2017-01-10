import { Ng2StateDeclaration } from "ui-router-ng2";

import { AuditsComponent } from './audits.component';

export const auditState: Ng2StateDeclaration = {
    name: 'audits',
    parent: 'admin',
    url: '/audits',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Audits'
    },
    views: {
        'content@': { component: AuditsComponent }
    }
};
