// Ximena Bedoya Posada - 2024

// Algoritmo de prioridad
function priority(processes) {
  let execution_order = [];
  let current_time = 0;

  processes.sort((a, b) => a.arrival - b.arrival);

  while (processes.length > 0) {
    let available_processes = processes.filter(process => process.arrival <= current_time);

    if (available_processes.length === 0) {
      current_time = processes[0].arrival;
      continue;
    }

    available_processes.sort((a, b) => a.priority - b.priority);

    let current_process = available_processes.shift();
    let wait = Math.max(0, current_process.arrival - current_time);
    current_time += wait;
    execution_order.push({name: current_process.name, start: current_time, end: current_time + current_process.execution, arrival_time: current_process.arrival});
    current_time += current_process.execution;

    processes = processes.filter(process => process.name !== current_process.name);
  }

  return execution_order;
}