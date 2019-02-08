import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { LanguageService } from "./language.service";

@Injectable()
export class DialogService {
    constructor(private alertCtrl: AlertController, private languageService: LanguageService) {

    }
    async showErrorAlert(msg) {
        let alert = await this.alertCtrl.create({
            buttons: [{ text: this.languageService.translate('ok'), role: "ok" }],
            message: msg
        });
        await alert.present();
    }

    async showSuccessAlert(msg) {
        let alert = await this.alertCtrl.create({
            buttons: [{ text: this.languageService.translate('ok'), role: "ok" }],
            message: msg
        });
        await alert.present();
    }
}