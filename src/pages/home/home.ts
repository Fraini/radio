import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia) {

  }

  playAudio(){
    let urlAudio : string = "http://89.163.231.60:8410/listen,pls?sid=1";

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape'
    };

    this.streamingMedia.playAudio(urlAudio, options);

  }

}
