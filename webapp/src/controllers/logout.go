package controllers

import "net/http"
import "webapp/src/cookies"


//Fazer logout remove os dados de autenticacão salvos no browser do usuário
func FazerLogout(w http.ResponseWriter, r *http.Request){
	cookies.Deletar(w)
	http.Redirect(w, r, "/login", 302)

}