import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"


export class HousesController {
  constructor() {
    console.log('🏡 🎮 loaded')
    housesService.loadHouse()
    this.drawHouses()
  }

  drawHouses() {
    console.log('Drawing the 🏡');
    const houses = AppState.houses
    let housesHTML = ''
    houses.forEach(house => housesHTML += house.houseCard)
    const houseListElm = document.getElementById('houses-list')
    houseListElm.innerHTML = housesHTML
  }

  createHouse() {
    event.preventDefault()

    let houseData = getFormData(event.target)
    console.log('Creating a new House listing', houseData);
    housesService.createHouse(houseData)
    event.target.reset()
    this.drawHouses()
  }

  deleteHouse(houseId) {
    console.log('Deleting', houseId)
    housesService.deleteHouse(houseId)
    this.drawHouses()
  }


}