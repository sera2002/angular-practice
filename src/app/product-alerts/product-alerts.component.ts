import { Component, Input } from "@angular/core";
import { Product } from "../products";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrl: "./product-alerts.component.css",
})
export class ProductAlertsComponent {
  /* @Input() decorator
   * the property value passes in from the parent component.
   **/
  @Input() product: Product | undefined;
}
