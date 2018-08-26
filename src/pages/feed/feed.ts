import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo:"Kainã Almeida",
    data:"November 5, 2018",
    descricao:"Estou criando um app incrível...",
    qtd_likes:12,
    qtd_comments:4,
    time_comment:"11h ago"
  }


  public nome: string = "Kainã Fontoura Almeida";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(number1:number, number2:number): void {
      alert(number1+number2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(7,3);
  }

}
