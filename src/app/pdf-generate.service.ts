import { Injectable } from '@angular/core';
import { host, folder } from 'classes/global';
import { Observable } from 'rxjs/Rx';
import { HttpClientService } from 'app/http-client.service';
import { Prospect } from "classes/Prospect";

declare var require: any;

@Injectable()
export class PdfGenerateService {

  url = host + folder;

  constructor(private http: HttpClientService) { }

  generate(prospect: Prospect) {
    return Observable
      .from(this.http.post(this.url + 'prospect/generateProposal', prospect, true)
        .map(res => res.blob()));
  }
}
