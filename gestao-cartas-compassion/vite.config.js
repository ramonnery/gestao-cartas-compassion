import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true, // Expor para todas as interfaces de rede (0.0.0.0)
    strictPort: true, // Obriga a usar a porta 5173 (se estiver ocupada, ele falha em vez de pular para 5174)
    port: 5173,
    // A configuração crítica para o Codespaces:
    hmr: {
      clientPort: 443 // Força o websocket a usar a porta HTTPS padrão do túnel do GitHub
    }
  }
})
