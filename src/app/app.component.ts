import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ancho: number = 5;
  largo: number = 6;

  itemsArray: itemPareja[] = [];

  constructor(

  ) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar() {
    for (let _i = 0; _i < this.ancho; _i++) {
      for (let _j = 0; _j < this.largo; _j++) {
        let nvoItem: itemPareja = {
          idItem: 1,
          imgBase: "assets/img/bart.png",
          imgUrl: "assets/img/abuelo.png",
          nombreItem: `nombreSticker${_i}-${_j}`,
        }
        this.itemsArray.push(nvoItem);
      }
    }
    this.shuffle(this.itemsArray);
  }

  clickItem(item: itemPareja) {
    console.log(item.nombreItem);
    item.imgBase = item.imgUrl;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

interface itemPareja {
  idItem: number;
  imgUrl: string;
  imgBase: string;
  nombreItem: string;
}
