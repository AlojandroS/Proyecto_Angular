import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'ProyectoRickYMorty';

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {

  }

  public ngOnDestroy(): void{

  }
}
