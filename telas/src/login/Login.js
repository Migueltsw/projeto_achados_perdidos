
export default function Login(){
    return(
        <div class="container">
	        <div class="d-flex justify-content-center h-100">
		        <div class="card">
			        <div class="card-header">
				<br />
				<h3 align="center">Login</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>

			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="usuario" />
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="senha" />
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox" />Lembrar Login
					</div>
					<div class="form-group">
						<input type="submit" value="Entrar" class="btn float-right login_btn" />
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Entrar usando o SUAP <br /> <a id="botao-login-suap" href="index.html">Clique aqui</a>
				</div>
				
				<div class="d-flex justify-content-center">
					<a href="#">Esqueceu sua senha?</a>
				</div>
			</div>
			
			
		</div>
	</div>
</div>

    );
}