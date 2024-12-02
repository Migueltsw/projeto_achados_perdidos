import './js.cookie.js';
import { Cookies } from './js.cookie.js';
import './Cliente.js';
import './login.css';
import { SuapClient } from './Cliente.js';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './settings.js';
import $ from 'jquery';



export default function Login(){

	var CLIENT_ID = '7xyE7MSEcbUJkUGyjjOWT45zViyrzFZRDzBAzfkp';
	var HOME_URI = 'http://localhost:5000';
	var REDIRECT_URI = `${HOME_URI}/loggedin`;
	var SUAP_URL = 'https://suap.ifrn.edu.br';
	var SCOPE = 'identificacao email documentos_pessoais';

	console.log(SUAP_URL, CLIENT_ID, HOME_URI, REDIRECT_URI, SCOPE);

	useEffect(() => {
		var suap = new SuapClient(
			SUAP_URL, CLIENT_ID, HOME_URI, REDIRECT_URI, SCOPE
		);
	
		suap.init();
		$(document).ready(function () {
			$("#suap-botao-login").attr('href', suap.getLoginURL());
		});
	}, []); 
	
    return (
		<form class="container justify-content-center align-items-center w-25 h-50 mt-5">
			<div class="form-group mb-3">
        	<label class="form-label" for="Email">Email</label>
       	 	<input class="form-control shadow-lg" type="email" name="email" placeholder="Digite o Email" required />
    	</div>

    	<div class="form-group mb-5">
        	<label class="form-label" for="Password">Senha</label>
        	<input class="form-control shadow-lg" type="password" name="password" placeholder="Digite a Senha" required />
    	</div>

    	<center>
        	<button id='suap-botao-login' type="submit" class="btn btn-success w-50 shadow-lg mb-4"><b>Login</b></button>
        	<p>Não tem uma conta? <a href='/cadastro' class="text-decoration-none link-success"><b>Cadastra-se</b></a></p>
    	</center>
		</form>
	
	);
}