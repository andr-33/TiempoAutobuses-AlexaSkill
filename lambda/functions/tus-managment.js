/*Obtener el tiempo aporximado de llagada desde la API TUS*/

const getTimeArrive = async(stopNumber)=>{
    let dataTime = await fetch('http://datos.santander.es/api/rest/datasets/control_flotas_estimaciones.json');
    dataTime = await dataTime.json();
    const busArrivals = dataTime.resources.filter(Arrive => Arrive["ayto:paradaId"] == stopNumber);
    busArrivals.sort(compareTo);

    return new Promise((resolve, reject)=>{
        resolve(busArrivals);
    });
};

function compareTo(stopA,stopB) {
    return stopA["ayto:tiempo1"]-stopB["ayto:tiempo1"];
}

const getStopNumber = async(stopName)=>{
    let dataStops = await fetch('http://datos.santander.es/api/rest/datasets/paradas_bus.json');
    dataStops = await dataStops.json();
    const stopByName = dataStops.resources.find(Stop =>  Stop["ayto:parada"] == stopName);
    return new Promise((resolve, reject)=>{
        if(stopByName != undefined){
            resolve(stopByName);
        }
        else{
            reject("Parada no encontrada");
        }
    });
    
};
  
getStopNumber("San Fernando").then(stopNumber => console.log(stopNumber));