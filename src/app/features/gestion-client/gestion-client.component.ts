import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {
  items!: Compte[];

  constructor(private dataService: CompteService) { }

  ngOnInit(): void {
    this.dataService.getItemsByRole('client').subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}