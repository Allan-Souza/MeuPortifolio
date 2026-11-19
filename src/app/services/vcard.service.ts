import { Injectable, inject } from '@angular/core';
import { ProfileData } from '../data/profile.data';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class VcardService {
  private readonly toastService = inject(ToastService);

  /**
   * Gera dinamicamente um arquivo .vcf (vCard 3.0) no Client-Side via Blob
   * e dispara o download imediato para salvar na agenda do smartphone.
   */
  downloadVCard(profile: ProfileData): void {
    const { identity } = profile;

    const vcardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${identity.lastName};${identity.firstName};;;`,
      `FN:${identity.name}`,
      `ORG:${identity.organization}`,
      `TITLE:${identity.jobTitle}`,
      `TEL;TYPE=CELL,VOICE:${identity.phone}`,
      `EMAIL;TYPE=INTERNET,PREF:${identity.email}`,
      `URL:${identity.website}`,
      `X-SOCIALPROFILE;TYPE=linkedin:${identity.linkedinUrl}`,
      `X-SOCIALPROFILE;TYPE=github:${identity.githubUrl}`,
      `X-SOCIALPROFILE;TYPE=instagram:${identity.instagramUrl}`,
      `ADR;TYPE=WORK:;;${identity.location};;;;`,
      `NOTE:${identity.headline.replace(/\n/g, ' ')}`,
      'END:VCARD'
    ];

    const vcardContent = vcardLines.join('\r\n');
    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'allan-victor.vcf');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    this.toastService.show('Contato baixado!');
  }
}
