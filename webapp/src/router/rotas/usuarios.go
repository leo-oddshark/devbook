package rotas

import (
	"net/http"
	"webapp/src/controllers"
)

var rotasUsuarios = []Rota{
	{
		URI:    "/criar-usuario",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarPaginaDeCadastroDeUsuario,
		RequerAutenticaco: false,
	},

	{
		URI:    "/usuarios",
		Metodo: http.MethodPost,
		Funcao: controllers.CriarUsuario,
		RequerAutenticaco: false,
	},

	{
		URI:    "/buscar-usuarios",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarPaginaDeUsuarios,
		RequerAutenticaco: true,
	},

	{
		URI:    "/usuarios/{usuarioId}",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarPerfilDoUsuario,
		RequerAutenticaco: true,
	},

	{
		URI:    "/usuarios/{usuarioId}/parar-de-seguir",
		Metodo: http.MethodPost,
		Funcao: controllers.PararDeSeguirUsuario,
		RequerAutenticaco: true,
	},

	{
		URI:    "/usuarios/{usuarioId}/seguir",
		Metodo: http.MethodPost,
		Funcao: controllers.SeguirUsuario,
		RequerAutenticaco: true,
	},

	{
		URI:    "/perfil",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarPerfilDoUsuarioLogado,
		RequerAutenticaco: true,
	},

	{
		URI:    "/editar-usuario",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarPaginaDeEdicaoDeUsuario,
		RequerAutenticaco: true,
	},

	{
		URI:    "/editar-usuario",
		Metodo: http.MethodPut,
		Funcao: controllers.EditarUsuario,
		RequerAutenticaco: true,
	},

	{
		URI:    "/atualizar-senha",
		Metodo: http.MethodGet,
		Funcao: controllers.CarregarPaginaDeAtualizacaoDeSenha,
		RequerAutenticaco: true,
	},

	{
		URI:    "/atualizar-senha",
		Metodo: http.MethodPost,
		Funcao: controllers.AtualizarSenha,
		RequerAutenticaco: true,
	},

	{
		URI:    "/deletar-usuario",
		Metodo: http.MethodDelete,
		Funcao: controllers.DeletarUsuario,
		RequerAutenticaco: true,
	},

}