import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {
    SourdoughSharedLibsModule,
    SourdoughSharedCommonModule,
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAuthorityDirective,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent
} from './';

@NgModule({
    imports: [
        SourdoughSharedLibsModule,
        SourdoughSharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective
    ],
    providers: [
        CookieService,
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        AuthService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        SourdoughSharedCommonModule,
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SourdoughSharedModule {}
