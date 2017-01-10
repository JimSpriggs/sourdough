import { Ng2StateDeclaration } from "ui-router-ng2";

import { NavbarComponent } from './layouts';
import { AuthService } from './shared';

export const appState: Ng2StateDeclaration = {
    name: 'app',
    abstract: true,
    views: {
        'navbar@': { component: NavbarComponent }
    },
    resolve: [
        {
            token: 'authorize',
            deps: [AuthService],
            resolveFn: (auth) => auth.authorize()
        }
    ]
};
