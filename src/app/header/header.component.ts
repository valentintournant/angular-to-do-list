import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  salutationSub: Subscription | any;
  secondesSub: any;
  secondes: number | any;
  nombresPairesSub: Subscription | any;

  constructor() { }

  //Observable
  ngOnInit(): void {
    //attention cette abonnement est dangereux puisqu'il le fait à l'infini, le meiux créer une varibale pour l'abonnement

    const secondesObs = interval(1000);


    //méthode longue
    // const seoncdesObs = new Observable((observer) => {
    //   let value = 0;

    //   const interval = setInterval(() => {
    //     // if(value % 2 === 0){
    //       observer.next(value);
    //     // }
    //     value++;
    //   }, 1000);
    //   return ()=> clearInterval(interval);
    // });

  //   const salutation = new Observable((observer)=>{
  //     observer.next("hello");
  //     observer.next("world!");
  //     observer.complete();
  //   });

  //   //créer un abonnement et création de la variable
  // //   this.salutationSub = salutation.subscribe(
  // //     (value) => { console.log("Value : "+ value)},
  // //     (error) => { console.log("Erreur : "+error)},
  // //     () => { console.log("Observable completée ")},
  // //   );

    this.secondesSub = secondesObs.subscribe(
      (value: any) => {
        this.secondes = value;
        console.log(value);
      },
    );
  }

  // créer la méthode ngOnDestroy après l'avoir importer pou éviter les comportements infinis
  ngOnDestroy(){
    this.nombresPairesSub?.unsubscribe();
    // this.salutationSub?.unsubscribe();
  }
}

