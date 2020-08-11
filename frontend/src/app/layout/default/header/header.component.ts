import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.value = params['id'];
        console.log(this.value);
      }
    );
  }

  onChanged(event: any): void {
    this.router.navigate(['/space/' + event]).then();
  }
}
