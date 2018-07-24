import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url:string;
	stream:any;
  promise:any;
  volumen:number;
  saturation : any;
  stopPause:boolean;
  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia) {
    this.url = "http://89.163.231.60:8410/listen,pls?sid=1";
    this.stream = new Audio(this.url);
    this.volumen = 30;//Esto va de 0 a 100 en el range, pero la propiedad volumen del objeto
    //va de 0 a 1. ==> Ej Un 30 será 0.3.
    this.stopPause = true;
  }

  play() {
    this.stream.play();
		this.promise = new Promise((resolve,reject) => {
			this.stream.addEventListener('playing', () => {
        resolve(true);
        this.stopPause = false;
			});

			this.stream.addEventListener('error', () => {
				reject(false);
			});
		});
		return this.promise;
	};

	pause() {
    this.stopPause = true;
		this.stream.pause();
  };
  
  vol(vol:number){
    
    this.stream.volume = vol;
  }
 
  actualizar(){
    let vol = Math.round((this.volumen * 100) / 100)
    this.vol(vol / 100); 
  }

}
