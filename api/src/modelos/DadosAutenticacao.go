package modelos

//DadosAutenticacao contêm o token e o id do usuário
type DadosAutenticacao struct{
	ID string `json:"id"`
	Token string `json:"token"`
}