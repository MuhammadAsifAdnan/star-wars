import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigService } from 'src/app/modules/core/services/app.config.service';

@Pipe({
  name: 'openingCrawlTrimEllipsis'
})
export class OpeningCrawlTrimEllipsisPipe implements PipeTransform {

  transform(openingCrawl: string | undefined): string {
    const symbolLimit = AppConfigService.appConfig.openingCrawlsSymbolLimit;
    let trimmedOpeningCrawl = openingCrawl?.length ? openingCrawl.trim() : '';

    if (trimmedOpeningCrawl.length > symbolLimit) {
      trimmedOpeningCrawl = trimmedOpeningCrawl.substr(0, symbolLimit) + '...';
    }
    return trimmedOpeningCrawl;
  }

}
