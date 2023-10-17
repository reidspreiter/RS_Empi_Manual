let empi_modules = [
  {
    name: 'Tempinator_Dependence',
    description: 'Metric modulation sequencer',
  },
  {
    name: 'WaitGate',
    description: 'Pulse Gate',
  },
  {
    name: 'WaitGate_Zero',
    description: 'Inverted WaitGate',
  },
  {
    name: 'WaitGate_Reset',
    description: 'WaitGate with resets',
  },
  {
    name: 'FlipFlop',
    description: 'Multi-trigger flip-flop',
  },
];

function addToGrid(mod) {
  let button = document.createElement('a');
  console.log('1');
  button.className = 'moduleButton';
  button.href = 'modules.html#' + mod.name;

  let name = document.createElement('div');
  name.innerHTML = mod.name;
  name.className = 'buttonName';
  button.appendChild(name);

  let description = document.createElement('div');
  description.innerHTML = mod.description;
  description.className = 'buttonDescription';
  button.appendChild(description);

  let image = document.createElement('img');
  image.src = 'static/' + mod.name + '.png';
  button.appendChild(image);

  document.getElementById('modules').appendChild(button);
}

function setGrid() {
  let grid = document.createElement('div');
  grid.id = 'modules';

  document.getElementById('moduleGrid').appendChild(grid);

  for (i in empi_modules) {
    addToGrid(empi_modules[i]);
  }
}
