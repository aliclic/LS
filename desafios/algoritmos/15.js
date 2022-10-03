function calendar(beginWeek, endDay) {
  let result = 'DOM SEG TER QUA QUI SEX SAB\n';

  for (let times = 0; times < beginWeek; times++) {
    result += '    ';
  }

  for (let day = 1; day <= endDay; day++) {
    result += day < 10 ? ` 0${day}` : ` ${day}`;
    if (day == endDay) return result;
    result += (day + beginWeek) % 7 == 0 ? '\n' : ' ';
  }
}

console.log(calendar('Segunda', 31));
console.log(calendar('Terça', 30));
console.log(calendar('Quarta', 29));
console.log(calendar('Sábado', 31));