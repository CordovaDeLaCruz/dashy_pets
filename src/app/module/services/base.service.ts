import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export abstract class BaseService {
  protected getUrlBase(): string {
    return environment.BASE_API;
  }
}
