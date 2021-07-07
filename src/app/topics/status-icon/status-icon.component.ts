import { Component, Input, OnInit } from '@angular/core';
import { Status, Statuses } from "../../shared/types";

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.scss']
})
export class StatusIconComponent {
  @Input() status!: Status
  STATUSES = Statuses
}
