

jQuery.noConflict();


jQuery(document).ready(function($) {


$('#atualizar').on('click', atualizarPublicacao);
$('.deletar-publicacao').on('click', deletarPublicacao);
$('#nova-publicacao').on('submit', criarPublicacao);

$(document).on('click', '.curtir-publicacao', curtirPublicacao);
$(document).on('click', '.descurtir-publicacao', descurtirPublicacao);

});




function criarPublicacao(evento){
	evento.preventDefault();

	jQuery.ajax({
		url: "/publicacoes",
		method: "POST",
		data: {
			titulo: jQuery('#titulo').val(),
			conteudo: jQuery('#conteudo').val(),
		}
	}).done(function(){
		window.location = "/home";
	}).fail(function(){
		Swal.fire("Ops...", "Erro ao criar a Publicacão!", "error");
	})
}

function curtirPublicacao(evento){
	evento.preventDefault();

	const elementoClicado = jQuery(evento.target);
	const publicacaoID = elementoClicado.closest('div').data('publicacao-id');

	elementoClicado.prop('disabled', true);

	jQuery.ajax({
		url: `/publicacoes/${publicacaoID}/curtir`,
		method: "POST",
	}).done(function(){
		const contadorDeCurtidas = elementoClicado.next('span');
		const qtdDeCurtidas = parseInt(contadorDeCurtidas.text());
		contadorDeCurtidas.text(qtdDeCurtidas + 1);

		elementoClicado.addClass('descurtir-publicacao');
		elementoClicado.addClass('text-danger');
		elementoClicado.removeClass('curtir-publicacao');
	}).fail(function(){
		Swal.fire("Ops...", "Erro ao curtir a Publicacão!", "error");
	}).always(function(){
		elementoClicado.prop('disabled', false);
	});
}

function descurtirPublicacao(evento){
	evento.preventDefault();

	const elementoClicado = jQuery(evento.target);
	const publicacaoID = elementoClicado.closest('div').data('publicacao-id');

	elementoClicado.prop('disabled', true);

	jQuery.ajax({
		url: `/publicacoes/${publicacaoID}/descurtir`,
		method: "POST",
	}).done(function(){
		const contadorDeCurtidas = elementoClicado.next('span');
		const qtdDeCurtidas = parseInt(contadorDeCurtidas.text());
		contadorDeCurtidas.text(qtdDeCurtidas - 1);

		elementoClicado.removeClass('descurtir-publicacao');
		elementoClicado.removeClass('text-danger');
		elementoClicado.addClass('curtir-publicacao');
	}).fail(function(){
		Swal.fire("Ops...", "Erro ao descurtir a Publicacão!", "error");
	}).always(function(){
		elementoClicado.prop('disabled', false);
	});
}



function atualizarPublicacao(evento){
	// evento.preventDefault();

	// const elementoClicado = $(evento.target);
	// elementoClicado.prop('disabled', true);
	jQuery(this).prop('disabled', true);
	const publicacaoID = jQuery(this).data('publicacao-id');
	
	jQuery.ajax({
		url: `/publicacoes/${publicacaoID}`,
		method: "PUT",
		data: {
			titulo: jQuery('#titulo').val(),
			conteudo: jQuery('#conteudo').val()
		}

	}).done(function(){
		Swal.fire(
			'Sucesso!',
			'Publicacão atualizada com sucesso!',
			'sucess'
		).then(function(){
			window.location = "/home";
		})

	}).fail(function(){
		Swal.fire("Ops...", "Erro ao editar a publicacão!", "error");

	}).always(function(){
		jQuery('#atualizar').prop('disabled', false);
		// elementoClicado.prop('disabled', false);

	})
}

function deletarPublicacao(evento){
	evento.preventDefault();

	Swal.fire({
		title: "Atencão!",
		text: "Tem certeza que deseja excluir esta publicacão? Essa acão é irreversível!",
		showCancelButton: true,
		cancelButtonText: "Cancelar",
		icon: "warning"
	}).then(function(confirmacao){
		if(!confirmacao.value) return;
		const elementoClicado = jQuery(evento.target);
		const publicacao = elementoClicado.closest('div');
		const publicacaoID = elementoClicado.closest('div').data('publicacao-id');

		elementoClicado.prop('disabled', true);

		jQuery.ajax({
			url: `/publicacoes/${publicacaoID}`,
			method: "DELETE",
		}).done(function(){
			publicacao.fadeOut("slow", function(){
				jQuery(this).remove();

		});
		}).fail(function(){
			Swal.fire("Ops...", "Erro ao excluir a publicacão!", "error");
		})

	})

}