const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  })

  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  })

  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport
  })

  return result

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const checkLengths = this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })

  return checkLengths
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((runningTotal,journey) => {
    return runningTotal + journey.distance
  }, 0)

  return totalDistance 
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => {
    return journey.transport
  })

  const uniqueResult = [... new Set(result)]

  return uniqueResult
};


module.exports = Traveller;
