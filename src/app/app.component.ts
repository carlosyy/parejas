import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ancho: number = 4;
  largo: number = 5;

  itemsArray: itemPareja[] = [];
  itemActual: itemPareja = { idItem: 0, imgBase: "", imgUrl: "", nombreItem: "", abierto: false };
  imgBase: string = "assets/img/question.png";

  constructor(

  ) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar() {
    this.arreglo();
    this.shuffle(this.itemsArray);
  }

  clickItem(item: itemPareja) {
    item.imgBase = item.imgUrl;
    item.abierto = true;
    if (this.itemActual.idItem == 0) {
      this.itemActual = {
        idItem: item.idItem, imgBase: item.imgBase, imgUrl: item.imgUrl, nombreItem: item.nombreItem, abierto: false
      };
    } else {
      if (this.itemActual.idItem == item.idItem) {
        console.log('ok');
      } else {
        console.log('no');
        setTimeout(() => {
          this.itemsArray.forEach(function (element) {
            if (element.abierto) {
              element.imgBase = "assets/img/question.png";
              element.abierto = false;
            }
          });
        }, 1000);
      }
      this.itemActual = { idItem: 0, imgBase: "", imgUrl: "", nombreItem: "", abierto: false };
    }
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  arreglo() {
    this.itemsArray.push({ idItem: 1, imgBase: this.imgBase, imgUrl: "assets/img/abuelo.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 1, imgBase: this.imgBase, imgUrl: "assets/img/abuelo.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 2, imgBase: this.imgBase, imgUrl: "assets/img/apu.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 2, imgBase: this.imgBase, imgUrl: "assets/img/apu.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 3, imgBase: this.imgBase, imgUrl: "assets/img/bart.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 3, imgBase: this.imgBase, imgUrl: "assets/img/bart.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 4, imgBase: this.imgBase, imgUrl: "assets/img/flanders.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 4, imgBase: this.imgBase, imgUrl: "assets/img/flanders.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 5, imgBase: this.imgBase, imgUrl: "assets/img/homero.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 5, imgBase: this.imgBase, imgUrl: "assets/img/homero.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 6, imgBase: this.imgBase, imgUrl: "assets/img/liza.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 6, imgBase: this.imgBase, imgUrl: "assets/img/liza.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 7, imgBase: this.imgBase, imgUrl: "assets/img/maggie.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 7, imgBase: this.imgBase, imgUrl: "assets/img/maggie.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 8, imgBase: this.imgBase, imgUrl: "assets/img/marge.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 8, imgBase: this.imgBase, imgUrl: "assets/img/marge.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 9, imgBase: this.imgBase, imgUrl: "assets/img/milgouse.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 9, imgBase: this.imgBase, imgUrl: "assets/img/milgouse.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 10, imgBase: this.imgBase, imgUrl: "assets/img/skinner.png", nombreItem: "", abierto: false });
    this.itemsArray.push({ idItem: 10, imgBase: this.imgBase, imgUrl: "assets/img/skinner.png", nombreItem: "", abierto: false });
  }
}

interface itemPareja {
  idItem: number;
  imgUrl: string;
  imgBase: string;
  nombreItem: string;
  abierto: boolean;
}
