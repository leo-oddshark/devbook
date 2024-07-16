package rotas

import (
	"net/http"
	"webapp/src/controllers"
)

var rotasPublicacoes = []Rota{
	{
		URI:               "/publicacoes",
		Metodo:            http.MethodPost,
		Funcao:            controllers.CriarPublicacao,
		RequerAutenticaco: true,
	},

	{
		URI:               "/publicacoes/{publicacaoId}/curtir",
		Metodo:            http.MethodPost,
		Funcao:            controllers.CurtirPublicacao,
		RequerAutenticaco: true,
	},

	{
		URI:               "/publicacoes/{publicacaoId}/descurtir",
		Metodo:            http.MethodPost,
		Funcao:            controllers.DescurtirPublicacao,
		RequerAutenticaco: true,
	},

	{
		URI:               "/publicacoes/{publicacaoId}/atualizar",
		Metodo:            http.MethodGet,
		Funcao:            controllers.CarregarPaginaDeEdicaoDePublicacao,
		RequerAutenticaco: true,
	},

	{
		URI:               "/publicacoes/{publicacaoId}",
		Metodo:            http.MethodPut,
		Funcao:            controllers.AtualizarPublicacao,
		RequerAutenticaco: true,
	},

	{
		URI:               "/publicacoes/{publicacaoId}",
		Metodo:            http.MethodDelete,
		Funcao:            controllers.DeletarPublicacao,
		RequerAutenticaco: true,
	},
}
