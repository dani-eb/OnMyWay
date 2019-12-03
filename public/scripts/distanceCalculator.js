

const earthRadius = 6371000 // radius of the earth
const calculateDistanceBetweenCoordinates = (startLat, startLon, endLat, endLon) => {
    var startLatRadians = startLat.toRadians(); // start lat
    var endLatRadians = endLat.toRadians(); // end
    var differenceLatRadians = (endLat-startLat).toRadians();
    var differenceLonRadians = (endLon-startLon).toRadians();
    
    var a = Math.pow(Math.sin(differenceLatRadians/2),2)+Math.cos(startLatRadians)*Math.cos(endLatRadians) * Math.pow(Math.sin(differenceLonRadians/2),2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var distance = earthRadius * c;
    return distance;
}