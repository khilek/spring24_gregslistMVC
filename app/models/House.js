import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = parseInt(data.year)
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = parseFloat(data.price)
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
  get houseCard() {
    return `
  <div class="col-6">
    <div class="card">
      <img class="card-img-top" src="${this.imgUrl}" alt=">
      <div class="card-body">
      <h3 class="card-title text-center">${this.price} ${this.sqft} ${this.year}</h3>
      <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  `
  }













}