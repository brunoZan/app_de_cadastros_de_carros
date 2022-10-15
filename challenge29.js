(function (DOM){
	'use strict';
	 
const app =	(function appControler() {
	 	return {
	 		init: function() {
	 			this.companyInfo();
	 			this.initEvents();	 		
	 		},

	 		initEvents: function initEvents() {
	 			DOM('[data-js="form-register"]').on('submit', this.handleSubmit);
	 			DOM('[inp]')
	 		},

	 		handleSubmit: function handleSubmit(e) {
	 			e.preventDefault();
	 			console.log("enviada")
	 			const $tableCar = DOM('[data-js="tableCar"]').get();
	 			$tableCar.appendChild(app.createNewCar());
	 		},

	 		createNewCar: function createNewCar() {
	 			var $fragment = document.createDocumentFragment();
	 			let $tr = document.createElement('tr');
	 			let $tdMarca = document.createElement('td');
	 			let $tdAno = document.createElement('td');
	 			let $tdPlaca = document.createElement('td');
	 			let $tdCor = document.createElement('td');
	 			let $tdImg = document.createElement('img');
	 			let $button = document.createElement('button');

	 			$tdMarca.textContent = DOM('[data-js="marca"]').get().value;
	 			$tdAno.textContent = DOM('[data-js="ano"]').get().value;
	 			$tdPlaca.textContent = DOM('[data-js="placa"]').get().value;
	 			$tdCor.textContent = DOM('[data-js="cor"]').get().value;
	 			$tdImg.setAttribute('src', DOM('[data-js="imgCar"]').get().value);
	 			$button.textContent = 'DELETAR';

	 			$button.addEventListener('click', this.deleteCar, false);

	 			$tr.appendChild($tdImg);
	 			$tr.appendChild($tdMarca);
	 			$tr.appendChild($tdAno);
	 			$tr.appendChild($tdPlaca);
	 			$tr.appendChild($tdCor);
	 			$tr.appendChild($button);


	 			return $fragment.appendChild($tr);
	 		},

	 		deleteCar: function deleteCar() {
	 			let $tableCar = DOM('[data-js="tableCar"]').get();
	 			console.log(this)
	 			$tableCar.removeChild(this.parentNode);
	 		},

	 		companyInfo: function companyInfo() {
	 			const ajax = new XMLHttpRequest();
	 			ajax.open("GET", "/company.json", true);
	 			ajax.send();
	 			ajax.addEventListener("readystatechange", this.getCompanyInfo, false);
	 		},

	 		getCompanyInfo: function getCompanyInfo() {
	 			if(!app.isReady.call(this))
	 				return "bundao";
	 			const data = JSON.parse(this.responseText);
	 			const $companyName =  DOM('[data-js="company_name"]').get();
	 			const $companyPhone = DOM('[data-js="company_phone"]').get();

	 			$companyName.textContent = data.name;
	 			$companyPhone.textContent = data.phone;

	 		},

	 		isReady: function isReady() {
	 			return this.readyState === 4 && this.status === 200;
	 		}	
	 	}
	})();

app.init();


})(window.DOM);

// const $myPhone = new DOM('[data-js="company_phone"]');
// const $imgCar = new DOM('[data-js="company_name"]');
// const $marca = new DOM('[data-js="marca"]');
// const $ano = new DOM('[data-js="ano"]');
// const $placa = new DOM('[data-js="placa"]');
// const $cor = new DOM('[data-js="cor"]');
// const $submit = new DOM('[data-js="submit"]');
// const ajax = new XMLHttpRequest();
// ajax.addEventListener("readystatechange", handleSubmitForm);
// addPhoneNumber()

// function isRequestOk() {
// 	return (ajax.status === 200 && ajax.readyState === 4)
// }
// function handleSubmitForm() {
// 	ajax.open("GET", "./company.json");
// }

// $submit.on('click', function (event) {
// 	event.preventDefault();
// })

// function addPhoneNumber() {
// 	$myPhone.get()[0].textContent = "bunda";
// }
