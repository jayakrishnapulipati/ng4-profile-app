
import { NgModule } from '@angular/core';
import { ProfileComponent } from "./profile.component";
import {NamesComponent} from "./names/names.component";
import {PrimaryNamesComponent} from "./names/primary/primary-names.component";
import {PreferredNamesComponent} from "./names/preferred/preferred-names.component";
import {AddressComponent} from "./address/address.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {PhoneContactComponent} from "./contacts/phone/phone-contact.component";
import {EmailContactComponent} from "./contacts/email/email-contact.component";
import {EmergencyContactComponent} from "./emergency-contact/emergency-contact.component";


@NgModule({
  declarations: [
    ProfileComponent,
    NamesComponent,
    PreferredNamesComponent,
    PrimaryNamesComponent,
    ContactsComponent,
    PhoneContactComponent,
    EmailContactComponent,
    AddressComponent,
    EmergencyContactComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
  ],
  providers: []
})
export class ProfileModule { }
