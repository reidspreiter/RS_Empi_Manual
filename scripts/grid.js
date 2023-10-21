let empi_modules = [
  {
    name: 'Tempinator',
    description: 'Tempo sequencer',
  },
  {
    name: 'Tempinator_Dependence',
    description: 'Metric modulation',
  },
  {
    name: 'Tempinator_DepAcc',
    description: 'Tempinator + Accent',
  },
  {
    name: 'Accent',
    description: 'Accent beats',
  },
  {
    name: 'Accent_Separate',
    description: 'Accent + outputs',
  },
  {
    name: 'Balance',
    description: 'Balance events',
  },
  {
    name: 'WaitGate',
    description: 'Programmable gate',
  },
  {
    name: 'WaitGate_Zero',
    description: 'Inverted WaitGate',
  },
  {
    name: 'WaitGate_Reset',
    description: 'WaitGate + resets',
  },
  {
    name: 'WaitGate_Duo',
    description: '2-signal WaitGate',
  },
  {
    name: 'FlipFlop',
    description: 'flip-flop',
  },
  {
    name: 'FlippityFloppity',
    description: 'Adjusted FlipFlop',
  },
  {
    name: 'FlopFlip',
    description: 'Adjusted FlipFlop',
  },
  {
    name: 'FloppityFlippity',
    description: 'Adjusted FlipFlop',
  },
];

function addToGrid(mod) {
  let button = document.createElement('a');
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
  image.src = 'static/moduleImages/' + mod.name + '.png';
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
