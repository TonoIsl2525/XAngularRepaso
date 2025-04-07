import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  students = [
    { name: 'Mark', course: 'MBA', marks: 259, DOB: new Date('2-03-2020'), gender: 'Male' },
    { name: 'Steve', course: 'BTECH', marks: 527, DOB: new Date('05-10-1994'), gender: 'Male' },
    { name: 'Marry', course: 'MBA', marks: 973, DOB: new Date('08-25-1986'), gender: 'Female' },
    { name: 'John', course: 'NHD', marks: 126, DOB: new Date('01-17-1997'), gender: 'Male' },
    { name: 'Sarah', course: 'JLR', marks: 461, DOB: new Date('03-19-2022'), gender: 'Female' }
  ]

  constructor(private http: HttpClient){ }
  onProductCreate(product: {name: string, description: string, price: string}){
    console.log(product);
    //const headers = new HttpHeaders({'myHeader': 'tstHdr'});
    const headers = new HttpHeaders({'content-type': 'application/json', 'myHeader': 'header1'});
    const body = JSON.stringify(product);
    this.http.post('http://localhost:5139/api/Products/PostProduct', body, {headers: headers})
    .subscribe((response) => {
      console.log(response);
    });
  }  

}
