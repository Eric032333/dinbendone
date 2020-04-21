// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["icon"]

  initialize(){
    this.clicked = false
  }



  heart(e){
  e.preventDefault();
  console.log("You liked it !!") 
  if(this.clicked){
    this.iconTarget.classList.remove('fas')
    this.iconTarget.classList.add('far')
    this.clicked = false
  }else{
    this.iconTarget.classList.remove('far')
    this.iconTarget.classList.add('fas') 
    this.clicked = true
  }

  // this.iconTarget.classList.toggle('far')
  // this.iconTarget.classList.toggle('fas')

  }
//   connect() {
//   console.log("hi 123")

// }
}
