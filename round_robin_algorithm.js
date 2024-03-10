// Ximena Bedoya Posada - 2024

// Algoritmo Round Robin
function roundRobin(processes, quantum) {
  let execution_order = [];
  let current_time = 0;
  let arrival_time = 0;

  processes.sort((a, b) => a.arrival - b.arrival);

  while (processes.length > 0) {
    let current_process = processes.shift();
    let wait = Math.max(0, current_process.arrival - current_time);
    current_time += wait;
    let current_execution = Math.min(quantum, current_process.execution);
    
    let previous_process = null;
    for (let i = execution_order.length - 1; i >= 0; i--) {
      if (execution_order[i].name === current_process.name) {
        previous_process = execution_order[i];
        break;
      }
    }

    if (previous_process) {
      arrival_time = previous_process.end;
    } else {
      arrival_time = current_process.arrival;
    }
    
    execution_order.push({name: current_process.name, start: current_time, end: current_time + current_execution, arrival_time: arrival_time});
    current_time += current_execution;
    current_process.execution -= current_execution;
    if (current_process.execution > 0) {
      processes.push(current_process);
    }
  }

  return execution_order;
}