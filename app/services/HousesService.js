import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {
  createHouse(houseData) {
    console.log('Service creating House', houseData);
    const createdHouse = new House(houseData)
    console.log('🏡', createdHouse);
    AppState.houses.push(createdHouse)
    this.saveHouses()
  }

  deleteHouse(houseId) {
    let indexToDelete = AppState.houses.findIndex(house => house.id == houseId)
    console.log('Deleting', indexToDelete);
    AppState.houses.splice(indexToDelete, 1)
    this.saveHouses()
  }

  saveHouses() {
    let dataString = JSON.stringify(AppState.houses)
    localStorage.setItem('house', dataString)
  }

  loadHouse() {
    let dataString = localStorage.getItem('houses')
    console.log('1010100101', dataString);
    const houseData = JSON.parse(dataString)
    console.log('Belief 🏡', houseData);
    if (houseData == null) return

    const houses = houseData.map(house => new House(house))
    console.log('🏡', houses);
    AppState.houses = houses
  }



}








export const housesService = new HousesService()