const imcStatus = {
  normalWeight: {
    label: 'Peso Normal',
    background: 'border border-sucess bg-success text-white',
  },
  underWeight: {
    label: 'Abaixo do Peso',
    background: 'border border-warning bg-warning text-white',
  },
  stritclyOverWeight: {
    label: 'Marginalmente Acima do Peso',
    background: 'border border-warning bg-warning text-white',
  },
  overWeight: {
    label: 'Acima do Peso Ideal',
    background: 'border border-warning bg-warning text-white',
  },
  obese: {
    label: 'Obeso',
    background: 'border border-danger bg-danger text-white'
  }
};

function handleSubmit(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(imcForm));

  const status = imc(data);

  const { label, background } = imcStatus[status];

  imcInput.value = label;

  imcInput.className = `form-control ${background}`;
}

function imc({ height, weight, sex }) {
  const imc = weight / (height ** 2);

  if (sex == 'female') {
    if (imc < 19.1) {
      return 'underWeight';
    } else if (imc < 25.8) {
      return 'normalWeight';
    } else if (imc < 27.3) {
      return 'stritclyOverWeight';
    } else if (imc < 32.3) {
      return 'overWeight';
    } 
      return 'obese';
  }

  if (sex == 'male') {
    if (imc < 20.7) {
      return 'underWeight';
    } else if (imc < 26.4) {
      return 'normalWeight';
    } else if (imc < 27.8) {
      return 'stritclyOverWeight';
    } else if (imc < 31.1) {
      return 'overWeight';
    } 
      return 'obese';
  }

}