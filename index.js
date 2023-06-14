
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >= 42) {
      return pickupLocation - 42;
    } else {
      return 42 - pickupLocation;
    }
  }
  function distanceFromHqInFeet(pickupLocation) {
      const blocks = distanceFromHqInBlocks(pickupLocation);
      return blocks * 264;
    }
    
    function distanceTravelledInFeet(start, destination) {
      let distanceInBlocks = destination - start;
      if (distanceInBlocks < 0) {
        distanceInBlocks *= -1;
      }
      const feetInABlock = 264;
      const distanceInFeet = distanceInBlocks * feetInABlock;
      return distanceInFeet;
    }     

      function calculatesFarePrice(start, destination) {
        const feetTraveled = Math.abs(destination - start) * 264; // assuming 1 block is 264 feet
        if (feetTraveled <= 400) {
          return 0;
        } else if (feetTraveled > 400 && feetTraveled <= 2000) {
          return (feetTraveled - 400) * 0.02;
        } else if (feetTraveled > 2000 && feetTraveled <= 2500) {
          return 25;
        } else {
          return 'cannot travel that far';
        }
      }