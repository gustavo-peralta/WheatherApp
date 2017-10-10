import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import 'rxjs/add/observable/throw';
import {ConfigModule, ConfigLoader, ConfigHttpLoader, ConfigService, ConfigStaticLoader} from 'ngx-config';

export function configFactory(http: Http): ConfigLoader {
  return new ConfigHttpLoader(http, 'app/Config/config.json');
}
