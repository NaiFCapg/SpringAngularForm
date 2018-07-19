import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeViewed;
  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute 
    
  ) { }

  ngOnInit() {
    //route is used to get parameter from the browser url
    this.getBikeViewed(this.route.snapshot.params.id);
  }

  getBikeViewed(id: number){
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeViewed = data;
      },
      err => console.error(err),
      () => console.log('viewed bike loaded')
    )
  }

}
