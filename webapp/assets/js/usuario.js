jQuery.noConflict();


jQuery(document).ready(function($) {

$('#parar-de-seguir').on('click', pararDeSeguir);
$('#seguir').on('click', seguir);
$('#editar-usuario').on('submit', editar);
$('#atualizar-senha').on('submit', atualizarSenha);
$('#deletar-usuario').on('click', deletarUsuario);

});


function pararDeSeguir(){
	const usuarioId = jQuery(this).data('usuario-id');
	jQuery(this).prop('disabled', true);

	jQuery.ajax({
		url: `/usuarios/${usuarioId}/parar-de-seguir`,
		method: "POST"
	}).done(function(){
		window.location = `/usuarios/${usuarioId}`;
	}).fail(function(){
		Swal.fire("Ops...", "Erro ao parar de seguir o usuário!", "error");
		jQuery('#parar-de-seguir').prop('disabled', false);
	});
}

function seguir(){
	const usuarioId = jQuery(this).data('usuario-id');
	jQuery(this).prop('disabled', true);

	jQuery.ajax({
		url: `/usuarios/${usuarioId}/seguir`,
		method: "POST"
	}).done(function(){
		window.location = `/usuarios/${usuarioId}`;
	}).fail(function(){
		Swal.fire("Ops...", "Erro ao seguir o usuário!", "error");
		jQuery('#seguir').prop('disabled', false);
	});
}

function editar(evento) {
    evento.jQuery.preventDefault();

    jQuery.ajax({
        url: "/editar-usuario",
        method: "PUT",
        data: {
            nome: jQuery('#nome').val(),
            email: jQuery('#email').val(),
            nick: jQuery('#nick').val(),
        }
    }).done(function() {
        jQuery.Swal.fire("Sucesso!", "Usuário atualizado com sucesso!", "success")
            .then(function() {
                window.location = "/perfil";
            });
    }).fail(function() {
        jQuery.Swal.fire("Ops...", "Erro ao atualizar o usuário!", "error");
    });
}

function atualizarSenha(evento) {
    evento.jQuery.preventDefault();

    if (jQuery('#nova-senha').val() != jQuery('#confirmar-senha').val()) {
        Swal.fire("Ops...", "As senhas não coincidem!", "warning");
        return;
    }

    jQuery.ajax({
        url: "/atualizar-senha",
        method: "POST",
        data: {
            atual: jQuery('#senha-atual').val(),
            nova: jQuery('#nova-senha').val()
        }
    }).done(function() {
        jQuery.Swal.fire("Sucesso!", "A senha foi atualizada com sucesso!", "success")
            .then(function() {
                window.location = "/perfil";
            })
    }).fail(function() {
        jQuery.Swal.fire("Ops...", "Erro ao atualizar a senha!", "error");
    });
}

function deletarUsuario() {
    jQuery.Swal.fire({
        title: "Atenção!",
        text: "Tem certeza que deseja apagar a sua conta? Essa é uma ação irreversível!",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        icon: "warning"
    }).then(function(confirmacao) {
        if (confirmacao.value) {
            jQuery.ajax({
                url: "/deletar-usuario",
                method: "DELETE"
            }).done(function() {
                jQuery.Swal.fire("Sucesso!", "Seu usuário foi excluído com sucesso!", "success")
                    .then(function() {
                        window.location = "/logout";
                    })
            }).fail(function() {
                jQuery.Swal.fire("Ops...", "Ocorreu um erro ao excluir o seu usuário!", "error");
            });
        }
    })
}