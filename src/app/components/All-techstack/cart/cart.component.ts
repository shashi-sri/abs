import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
 
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Azure (Cloud provider)',  symbol:'https://www.linkedin.com/learning/microsoft-sql-server-2019-essential-training?contextUrn=urn%3Ali%3AlearningCollection%3A6918079800515452928&u=2111049'},
  { name: 'Pivotal Cloud Foundry (PCF) - PaaS',  symbol: ''},
  { name: 'Java',  symbol: 'https://www.linkedin.com/learning/java-8-essential-training?contextUrn=urn%3Ali%3AlearningCollection%3A6918079800515452928&u=2111049'},
  { name: ' Spring Boot',  symbol: 'Be'},
  { name: 'CosmosDB (MongoDB API)',  symbol: 'B'},
  { name: 'Kafka Messaging Queue',  symbol: 'C'},
  { name: 'Node.js',  symbol: 'N'},
  { name: 'Angular',  symbol: 'O'},
  
 
];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = [ 'name',  'symbol'];
  dataSource = ELEMENT_DATA;
}
