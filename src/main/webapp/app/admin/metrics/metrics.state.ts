import { Ng2StateDeclaration } from "ui-router-ng2";

import { JhiMetricsMonitoringComponent } from './metrics.component';

export const metricsState: Ng2StateDeclaration = {
    name: 'jhi-metrics',
    parent: 'admin',
    url: '/metrics',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'Application Metrics'
    },
    views: {
        'content@': { component: JhiMetricsMonitoringComponent }
    }
};
