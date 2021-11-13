function building(floors, buildingName) {
  this.name = buildingName;
  this.floors = floors;
}

building.prototype.getInfo = function() {
  return `Building Name: ${this.buildingName} and number of floors: ${this.floors}`;
}

const firstBuilding = new building(2, 'sunaada');