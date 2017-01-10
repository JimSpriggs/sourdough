import { TransitionService, Transition } from 'ui-router-ng2';
import { Principal, StateStorageService, AuthService } from '../../shared';

export function registerTransitionHooks($transitions: TransitionService) {
    $transitions.onStart({}, (transition: Transition) => {
        let $storageService = transition.injector().get(StateStorageService);
        $storageService.storeDestinationState(transition.to(), transition.params(), transition.from());
        let principal = transition.injector().get(Principal);
        let auth = transition.injector().get(AuthService);
        if (principal.isIdentityResolved()) {
            auth.authorize();
        }

    });

    // Redirect to a state with an external URL (http://stackoverflow.com/a/30221248/1098564)
    $transitions.onStart({ to: state => state['external'] }, (transition: Transition) => {
        window.open(transition.to().url, '_self');
        return false;
    });

    $transitions.onSuccess({}, (transition: Transition) => {
        let toState = transition.to();
        let titleKey = 'sourdough' ;

        // Set the page title key to the one configured in state or use default one
        if (toState.data.pageTitle) {
            titleKey = toState.data.pageTitle;
        }
        window.document.title = titleKey;
    });
}
