package rotas

import (
	"net/http"
	"webapp/src/controllers"
)

var rotasLogin = []Rota{
	{
		URI:    "/",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarTelaDeLogin,
		RequerAutenticaco: false,
	},

	{
		URI:    "/login",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarTelaDeLogin,
		RequerAutenticaco: false,
	},

	{
		URI:    "/login",
		Metodo: http.MethodPost,
		Funcao: controllers.FazerLogin,
		RequerAutenticaco: false,
	},
}