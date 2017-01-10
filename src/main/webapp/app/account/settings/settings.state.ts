import { Ng2StateDeclaration } from "ui-router-ng2";

import { SettingsComponent } from './settings.component';

export const settingsState: Ng2StateDeclaration = {
    name: 'settings',
    parent: 'account',
    url: '/settings',
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Settings'
    },
    views: {
        'content@': {
            component: SettingsComponent
        }
    }
};
