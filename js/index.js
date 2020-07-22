let tabela = document.querySelector('#tabela-principal');

tr = document.createElement('tr');
td = document.createElement('td');
td.textContent = '1';

tr.appendChild(td);
tabela.appendChild(tr);

console.log(tabela);
