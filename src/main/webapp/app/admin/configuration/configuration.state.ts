import { Ng2StateDeclaration } from "ui-router-ng2";

import { JhiConfigurationComponent } from './configuration.component';

export const configState: Ng2StateDeclaration = {
    name: 'jhi-configuration',
    parent: 'admin',
    url: '/configuration',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Configuration'
    },
    views: {
        'content@': { component: JhiConfigurationComponent }
    }
};
