/*Obtener el tiempo aporximado de llagada desde la API TUS*/

const getTimeArrive = (stopNumber)=>{
    const dataTime = fetch("http://datos.santander.es/api/rest/datasets/control_flotas_estimaciones.json");

};

const getStopNumber = async(stopName)=>{
    let dataStops = await fetch('http://datos.santander.es/api/rest/datasets/paradas_bus.json');
    dataStops = dataStops.json();
    const stopByname = dataStops.find(Stop =>  Stop.ayto["parada"] == stopName);
    return stopByname.ayto["numero"];
};

getStopNumber();