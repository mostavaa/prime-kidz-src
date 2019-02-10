import { Constants } from "./constants.service";
export class LanguageService {

    resources = {
        ar: {
            appName: 'Overux',
            kids: 'أولادي',
            logout: 'تسجيل الخروج',
            settings: 'الاعدادات',
            contact: 'اتصل بنا',
            dailyReport: 'التقرير اليومي',
            login: 'تسجيل الدخول',
            changePassword: 'تغيير كلمة السر',
            confirmPassword: 'تأكيد كلمة السر',
            newPassword: 'كلمة السر الجديدة',
            oldPassword: 'كلمة السر القديمة',
            loading: 'جار التحميل',
            username: 'اسم المستخدم',
            password: 'كلمة السر',
            nursary: 'حضانتي',
            notifications: 'الاشعارات',
            monthlyReport: 'التقرير الشهري',
            dailyKidsActivity: 'الانشطة اليومية لأولادي',
            changeDateKid: 'يمكنك تغيير التاريخ او الطفل من القائمة الجانية.',
            dayOfActivity: 'يوم الأنشطة',
            kidName: 'اسم الطفل',
            absent: 'غائب',
            childAbsent: 'هذا الطفل غائب في هذا اليوم.',
            wishesHealth: 'ادارة الحضانة تتمني له الصحة والعافية.',
            noActivities: 'لا يوجد أنشطة متاحه لهذا اليوم.',
            about: 'من نحن',
            aboutUsTxt: 'مجموعة من المطورين المحترفين في مجال البرمجيات نقدم لكم بعض الحلول الجديدة في مجال الحضانات.',
            aboutUsProgram: 'نقدم في هذا البرنامج العديد من الحلول لمشكلة متابعة انشطة الاطفال اليومية بطريقة سهلة وبسيطة حيث توفر علي الحضانة الجهد والمال وتزود اولياء الاموار بكافة التفاصيل عن اولادهم بشكل يومي.',
            program:'برنامجنا',
            aboutUsParts: 'البرنامج سهل التعلم والاستخدام وينقسم الي جزئين:',
            website: 'موقع إلكتروني',
            websiteUsage: 'يستخدم من قبل الحضانة لإدخال بيانات وأنشطة الأطفال.',
            mobileApp: 'تطبيق للمحمول',
            mobileAppUsage: 'يستخدمه الآباء لمتابعة أطفالهم.',
            en: 'English',
            ar: 'عربي',
            error: 'حدث خطأ في الخادم , برجاء المحاولة لاحقا',
            ok: 'موافق',
            cancel: 'الغاء',
            confirmPasswordNotMatch: 'الكلمة السرية غير مطابقة',
            welcome: 'مرحبا بكم في',
        },
        en: {
            appName: 'Overux',
            kids: 'Kids',
            logout: 'Logout',
            settings: 'Settings',
            contact: 'Contact Us',
            dailyReport: 'Daily Report',
            login: 'Login',
            changePassword: 'Change Password',
            confirmPassword: 'Confirm Passowrd',
            newPassword: 'New Passowrd',
            oldPassword: 'Old Password',
            loading: 'Loading',
            username: 'User Name',
            password: 'Password',
            nursary: 'My Nursary',
            notifications: 'Notifications',
            monthlyReport: 'Monthly Report',
            dailyKidsActivity: 'Daily kids activities',
            changeDateKid: 'You can change date or kid from side menu.',
            dayOfActivity: 'Day of activities',
            kidName: 'Kid Name',
            absent: 'Absent',
            childAbsent: 'This child is absent in this day',
            wishesHealth: 'The nursery administration wishes him health and wellness.',
            noActivities: 'No activities available for this day.',
            about: 'About us',
            aboutUsTxt: 'We are a group of professional software developers offer you some new solutions in the field of nurseries.',
            aboutUsProgram: 'In this program we offer many solutions to the problem of follow-up activities of children daily in a simple and simple way, providing the nursery effort and money and provide parents of the Amwar all the details about their children on a daily basis.',
            program: 'Out Program',
            aboutUsParts: 'The program is easy to learn and use and is divided into two parts:',
            website: 'Web Site',
            websiteUsage: 'Used by the nursery to enter data and activities of children.',
            mobileApp: 'Mobile Application',
            mobileAppUsage: 'Used by parents to follow up his kids.',
            en: 'English',
            ar: 'عربي',
            error: 'Server Error , Please Try Again Later',
            ok: 'Ok',
            cancel: 'Cancel',
            confirmPasswordNotMatch: 'Passwords Arn\'t Identical',
            welcome: 'Welcome to',
            
        }
    };
    switchLanguage(): any {
        if (this.isEnglish()) {
            this.storeLanguage(Constants.arabic);
        } else {
            this.storeLanguage(Constants.english);
        }
    }
    private storeLanguage(lang: string = Constants.english) {
        localStorage.setItem("lang", lang);
    }

    private getLanguage(): string {
        let lang = localStorage.getItem("lang");
        if (lang && lang != '') {
            return lang;
        }
        return Constants.english;
    }

    isEnglish() {
        return (this.getLanguage() == Constants.english);
    }

    translate(word) {
        if (this.isEnglish())
            if (this.resources && this.resources.en && this.resources.en[word])
                return this.resources.en[word]
        if (this.resources && this.resources.ar && this.resources.ar[word])
            return this.resources.ar[word]
        return '';
    }
}