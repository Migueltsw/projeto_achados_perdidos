import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login(){
    return (
		<div className="card">
			<div className="card-body">
				<div className="form-group mt-3">
					<label for="exampleInputEmail1">Email</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
				</div>

				<div className="form-group mt-3">
					<label for="exampleInputPassword1">Senha </label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
				</div>

				<button type="submit" class="btn btn btn-success rounded-pill mt-4">Enviar</button>

				<div class="card-footer">
				<div className="links">
					Entrar usando o SUAP<br/><a id="botao-login-suap" href="ClienteSUAP.js">Clique aqui</a>
				</div>
				
			</div>
			</div>
		</div>
	);
};

{/* <div class="card-body">
<div class="form-group">
	<label for="exampleInputEmail1">Email</label>
	<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
</div>

<div className="form-group">
	<label for="exampleInputPassword1">Senha </label>
	<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
</div>

<button type="submit" class="btn btn-primary">Enviar</button>
</div> */}