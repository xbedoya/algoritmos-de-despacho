// Ximena Bedoya Posada - 2024

const processes = [
  {name: "P1", arrival: 0, execution: 2, priority: 3},
  {name: "P2", arrival: 1, execution: 4, priority: 1},
  {name: "P3", arrival: 2, execution: 6, priority: 0},
  {name: "P4", arrival: 2, execution: 10, priority: 7},
  {name: "P5", arrival: 3, execution: 8, priority: 0},
  {name: "P6", arrival: 4, execution: 4, priority: 0}
];

const fifo_order = fifo(processes);
const sjf_order = sjf(processes);
const priority_order = priority(processes);
const round_robin_order = roundRobin(processes,2);

// Algoritmo FIFO
graph(fifo_order, "FIFO");
console.log("\nFIFO:");
show_execution_order(fifo_order);
console.log("Tiempo de espera promedio FIFO: ", calculate_waiting_time(fifo_order));
console.log("Tiempo de sistema promedio FIFO: ", calculate_system_time(fifo_order));

// Algoritmo SJF
graph(sjf_order, "SJF");
console.log("\nSJF:");
show_execution_order(sjf_order);
console.log("Tiempo de espera promedio SJF: ", calculate_waiting_time(sjf_order));
console.log("Tiempo de sistema promedio SJF: ", calculate_system_time(sjf_order));

// Algoritmo de Prioridad
graph(priority_order, "Prioridad");
console.log("\nPrioridad:");
show_execution_order(priority_order);
console.log("Tiempo de espera promedio Prioridad: ", calculate_waiting_time(priority_order));
console.log("Tiempo de sistema promedio Prioridad: ", calculate_system_time(priority_order));

// Algoritmo Round Robin
graph(round_robin_order, "Round Robin");
console.log("\nRound Robin:");
show_execution_order(round_robin_order);
console.log("Tiempo de espera promedio Round Robin: ", calculate_waiting_time(round_robin_order));
console.log("Tiempo de sistema promedio Round Robin: ", calculate_system_time(round_robin_order));