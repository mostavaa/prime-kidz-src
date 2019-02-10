import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogService } from '../services/dialog.service';
import { LanguageService } from '../services/language.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    form: FormGroup
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
    constructor(
        private userService: UserService,
        private dialogService: DialogService,
        private languageService: LanguageService
    ) { }

    ngOnInit() {
        this.oldPassword = this.languageService.translate('oldPassword');
        this.newPassword = this.languageService.translate('newPassword');
        this.confirmPassword = this.languageService.translate('confirmPassword');
        this.initForm();
    }
    initForm() {
        this.form = new FormGroup({
            'oldPassword': new FormControl(null, Validators.required),
            'newPassword': new FormControl(null, Validators.required),
            'confirmPassword': new FormControl(null, Validators.required)
        })
    }
    changePassowrd() {
        debugger;
        if (this.form.value.confirmPassword == this.form.value.newPassword) {
            this.userService.changePassword(this.form.value.oldPassword, this.form.value.newPassword).subscribe(res => {

            });
        } else {
            this.dialogService.showErrorAlert(this.languageService.translate('confirmPasswordNotMatch'))
        }
    }
}
