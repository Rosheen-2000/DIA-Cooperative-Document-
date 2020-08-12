import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.scss']
})
export class DocItemComponent implements OnInit {
  @Input() public fileName: string;
  @Input() public fileId: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['/docs/' + this.fileId]).then();
  }

}
