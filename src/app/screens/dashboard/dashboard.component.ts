import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public stateVectors: State[] | any = [];
  displayedColumns: string[] = [
    'icao',
    'origin',
    'contact',
    'Longitude',
    'Latitude',
    'Category',
  ];

  public dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.stateVectors.paginator = this.paginator;
  }

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getStates();
    // this.getAllFlights()
  }

  createData = (
    icao: string,
    origin: string,
    contact: string,
    Longitude: string,
    Latitude: string,
    Category: string
  ) => {
    return { icao, origin, contact, Longitude, Latitude, Category };
  };
  public getStates() {
    this.http
      .get('https://opensky-network.org/api/states/all', {
        headers: {
          Authorization: 'Basic ' + window.btoa('tekenna:kada1234'),
        },
      })
      .subscribe((data: any) => {
        const newArr: any[] = [];
        data?.states?.map((state: any) => {
          newArr.push(
            this.createData(
              state[0],
              state[2],
              state[4],
              state[5],
              state[6],
              state[17]
            )
          );
        });
        this.stateVectors = new MatTableDataSource<State[]>(newArr);
        this.stateVectors.paginator = this.paginator;
        this.dataSource = new MatTableDataSource<Array<State>>(newArr);
      });
  }
}

export interface State {
  icao: string;
  origin: string;
  contact: string;
  Longitude: string;
  Latitude: string;
  Category: string;
}
