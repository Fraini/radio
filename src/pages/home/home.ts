import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia) {

  }

  playAudio(){
    let urlAudio : string = "http://89.163.231.60:8410/listen,pls?sid=1";

    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };


    this.streamingMedia.playAudio(urlAudio, options);

  }

}
