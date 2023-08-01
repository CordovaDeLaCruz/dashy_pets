import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/app/module/models/customer/list/listCustomerModelResponse';
import { BaseService } from 'src/app/module/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {

  private apiUrl = "/cliente/listarCliente"

  constructor(private _httpClient: HttpClient) {
    super();
  }

  getListCustomer(): Observable<CustomerModel[]> {
    const url = this.getUrlBase() + this.apiUrl;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this._httpClient.get<CustomerModel[]>(url, { headers });
  }
}
