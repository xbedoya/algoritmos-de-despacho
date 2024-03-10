// Ximena Bedoya Posada - 2024

// Calculo del tiempo de Espera
function calculate_waiting_time(execution_order) {
  let total_waiting_time = 0;
  let different_names = new Set();
  let average = 0;

  execution_order.forEach((process) => {
    let waiting_time = 0;
    waiting_time = process.start - process.arrival_time;
    total_waiting_time += waiting_time;
    different_names.add(process.name);
  });

  average = (total_waiting_time / different_names.size).toFixed(2);
  
  console.log(`Cantidad de procesos: ${different_names.size}`);
  console.log(`Tiempo de Espera total: ${total_waiting_time}`);

  document.write("<br><span style='padding-left: 85px;'><b>Tiempo de Espera:</b> " + average + "</span>");
  
  return average
}

// Calculo del tiempo de Sistema
function calculate_system_time(execution_order) {
  let total_system_time = 0;
  let different_names = new Set();
  let average = 0;

  execution_order.forEach((process) => {
    let system_time = 0;
    system_time = process.end - process.arrival_time;
    total_system_time += system_time;
    different_names.add(process.name);
  });

  average = (total_system_time / different_names.size).toFixed(2);
  
  console.log(`Tiempo de Sistema total: ${total_system_time}`);

  document.write("<span style='padding-left: 120px;'><b>Tiempo de Sistema:</b> " + average + "</span><br>");
  
  return average
}

// Función para visualizar la ejecución de los procesos en consola
function show_execution_order(execution_order) {
  execution_order.forEach(process => {
    console.log(`${process.name}: Inicio ${process.start}, Fin ${process.end}, Llegada: ${process.arrival_time}`);
  });
}