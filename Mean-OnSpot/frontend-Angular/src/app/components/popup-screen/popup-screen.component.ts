import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PaymentServiceService } from 'src/app/services/payment-service.service';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popup-screen',
  templateUrl: './popup-screen.component.html',
  styleUrls: ['./popup-screen.component.css']
})
export class PopupScreenComponent implements OnInit {
  public zone;
  public saldo;

  ngOnInit() {
    this.zone = this.paymentService.getZone();
    this.saldo = Math.floor(this.paymentService.getAccumulated() * 100) / 100;
  }

  constructor(
    public dialogRef: MatDialogRef<PopupScreenComponent>,
    private paymentService: PaymentServiceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  close(): void {
    this.dialogRef.close();
  }
}
