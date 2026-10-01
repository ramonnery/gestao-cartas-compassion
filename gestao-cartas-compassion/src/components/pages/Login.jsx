import Input from "../ui/Input"
import logo from "../../assets/logo.png"

function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex justify-center items-center grow bg-compassion-background">
        <section className="bg-compassion-white self-center p-8 flex flex-col min-w-lg">
          <div className="flex flex-col items-center">
            <img src={logo} width="52px" alt="Logo do sistema de gestão de cartas" />
            <h1 className="text-2xl font-semibold text-(--color-compassion-dark-blue)">Compassison</h1>
            <h2 className="text-(--color-compassion-blue) uppercase tracking-wider font-semibold font-secondary">Gestão de Cartas</h2>
            <p className="text-(--color-compassion-font-main) text-sm">Acesso Restrito • Projetos Parceiros e Equipe Compassion</p>
          </div>
          <form>
            <Input
              labelClass='uppercase'
              type="e-mail"
              id="login-email"
              label="E-mail"
              placeholder="exemplo@gmail.com"
            />
            <Input
              labelClass='uppercase'
              type="password"
              id="login-password"
              label="Senha"
              placeholder="Digite sua credencial"
            />
            <a href="/recuperar" id="link-forgot" className="text-sm">Esqueceu sua senha?</a>
            <Input 
              labelClass="text-sm"
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