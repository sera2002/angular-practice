import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../products";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrl: "./product-alerts.component.css",
})
export class ProductAlertsComponent {
  /**
   * @Input() decorator
   * the property value (product) passes in from the parent component.
   */
  @Input() product: Product | undefined;
  /**
   * @Output() decorator
   * allows to emit an event when the value of notify property changes
   */
  @Output() notify = new EventEmitter();
}
