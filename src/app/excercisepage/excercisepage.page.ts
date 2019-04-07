import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excercisepage',
  templateUrl: './excercisepage.page.html',
  styleUrls: ['./excercisepage.page.scss'],
})
export class ExcercisepagePage implements OnInit {

  type: any;
  src: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.type = data['type'];
    });

    const neck_images = ['https://www.verywellfit.com/thmb/TslwnWq9x3IS4F7B2ubIWIW_QM4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-1-3567200-NeckRoll0-1379-5991bc7503f4020011a3d513.gif', 'https://www.verywellfit.com/thmb/D9oYPDzalVIrR4KnogJ0R5fC-UQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-2-3567200-ChairCatCow01-1340-5991bc85519de20010bed681.gif', 'https://www.verywellfit.com/thmb/p8G4_OdpHu32MTs9QTO4iKXC2c4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-3-3567200-SeatedForwardBend-1349-5991bc97c412440011b1c108.jpg']

    this.src = neck_images[Math.floor(Math.random() * neck_images.length)];
  }

}
