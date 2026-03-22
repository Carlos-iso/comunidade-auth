const rightContent = document.querySelector(".container-right-content");
const sw = document.querySelector("#sw");
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const refreshPass = document.querySelector("#refresh-pass");
const form = document.querySelector("#right-form");
const formInputs = document.querySelector(".container-right-form-input");
const formSubmit = document.querySelector("#submit");
const title = document.querySelector("#title");
const leftImg = document.querySelector("#left-img");

function resetForm() {
	if (!formInputs.value) {
		alert("Preencha todos os campos!");
		return;
	} else {
		alert("Formulário enviado com sucesso!");
		form.reset();
	}
}

refreshPass.addEventListener("click", (e) => {
	e.preventDefault();
	rightContent.innerHTML = `
        <button id="back" style="display: flex;">
            <img class="back-icon" src="./src/assets/dp-down.svg" alt="Ícone de seta para voltar">
            <a id="back-link" href="/">Voltar</a>
        </button>
        <h1 class="container-right-title">Atualização de senha</h1>
        <p class="container-right-subtitle">Um link para recuperação de senha será enviado para seu endereço de e-mail.</p>
        <form class="container-right-form">
            <div class="conf-label">
                <label for="email">E-mail</label>
            </div>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
            <button id="submit" type="submit" class="container-right-form-button">Enviar</button>
        </form>
    `;
	leftImg.src = "./src/assets/3d-objects2.svg";
});

register.addEventListener("click", (e) => {
	e.preventDefault();
	rightContent.innerHTML = `
        <button id="back" style="display: flex;">
            <img class="back-icon" src="./src/assets/dp-down.svg" alt="Ícone de seta para voltar">
            <a id="back-link" href="/">Voltar</a>
        </button>
        <h1 class="container-right-title">Cadastre-se</h1>
        <p class="container-right-subtitle">Preencha o formulário abaixo para criar uma nova conta.</p>
        <form class="container-right-form">
            <div class="conf-label">
                <label for="name">Nome Completo</label>
            </div>
            <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required>
            <div class="conf-label">
							<label for="cpf">CPF</label>
						</div>
						<input
							class="container-right-form-input"
							type="text"
							id="cpf"
                            name="cpf"
							placeholder="Digite seu cpf"
						/>
            <div class="conf-label">
                <label for="email">E-mail</label>
            </div>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
            <div class="conf-label">
                <label for="password">Senha</label>
            </div>
            <div class="input-pass">
							<input
								class="container-right-form-input"
								type="password"
								id="password"
								name="password"
								placeholder="Digite sua senha"
								required
							/>
							<img id="eye" class="eye" src="src/assets/eye.svg" alt="Ícone de olho"/>
						</div>
            <button id="submit" type="submit" class="container-right-form-button">Cadastrar-se</button>
            <a id="login" style="display: block;" href="/">Conectar-se</a>
        </form>
    `;
	leftImg.src = "./src/assets/3d-objects2.svg";
	document.querySelector("#eye").addEventListener("click", () => {
		const input = document.querySelector("#password");
		input.type = input.type === "password" ? "text" : "password";
	});
});

login.addEventListener("click", (e) => {
	e.preventDefault();
	title.textContent = "Conecte-se";
});
