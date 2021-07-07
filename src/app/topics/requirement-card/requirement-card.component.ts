import { Component, Input, OnInit } from '@angular/core';
import { Requirement, Statuses } from "../../shared/types";

@Component({
  selector: 'app-requirement-card',
  templateUrl: './requirement-card.component.html',
  styleUrls: ['./requirement-card.component.scss']
})
export class RequirementCardComponent implements OnInit {
  @Input() requirement!: Requirement

  constructor() { }

  get isEditable() {
    return [Statuses.IN_VALIDATION, Statuses.IN_PROGRESS].includes(this.requirement.status.slug)
  }

  ngOnInit(): void {
  }

}
