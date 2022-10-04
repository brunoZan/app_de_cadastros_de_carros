{
	hello: "Hello, obj",
	init: function() {
		this.initEvent();
	},
	initEvent: function() {
		return this.hello;
	}
}
lembrar que o escopodo do this em objetos tambem vale 
pra objetros literais, o this referece ou proprio objeto



!!IMPORTANTE
lembrar que o this quando chamar um avento dentro de um objeto o this dentro
da function no evento vai ser o objeto que esta receenddo o evento