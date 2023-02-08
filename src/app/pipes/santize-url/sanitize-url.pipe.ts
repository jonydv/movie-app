import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl',
})
export class SanitizeUrlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}
  transform(v: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(v);
  }
}
