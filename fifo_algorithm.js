// Ximena Bedoya Posada - 2024

// Algoritmo FIFO (First In, First Out)
function fifo(processes) {
  let execution_order = [];
  let current_time = 0;

  processes.sort((a, b) => a.arrival - b.arrival);

  processes.forEach(process => {
    let wait = Math.max(0, process.arrival - current_time);
    current_time += wait;
    execution_order.push({name: process.name, start: current_time, end: current_time + process.execution, arrival_time: process.arrival});
    current_time += process.execution;
  });

  return execution_order;
}