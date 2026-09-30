import Input from "../ui/Input"

function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex justify-center item-center grow bg-compassion-background">
        <section className="bg-compassion-white self-center p-8">
          <img />
          <h1>Compassison</h1>
          <h2>Gestão de Cartas</h2>
          <p>Acesso Restrito • Projetos Parceiros e Equipe Compassion</p>
          <form>
            <Input
              type="e-mail"
              id="login-email"
              label="E-mail"
              placeholder="exemplo@gmail.com"
            />
            <Input
              type="password"
              id="login-password"
              label="Senha"
              placeholder="Digite sua credencial"
            />
            <a href="/recuperar" id="link-forgot">Esqueceu sua senha?</a>
            <Input
              type="checkbox"
              id="login-remember"
              label="Lembrar neste navegador"
            />
            <button>Acessar Sistema</button>
          </form>
        </section>
      </main>
      <footer>
        <p>Compassion do Brasil • Plataforma Restrita</p>
      </footer>
    </div>
  )
}

export default Login