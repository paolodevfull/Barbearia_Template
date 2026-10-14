# Estúdio Bravio

Landing page responsiva de uma barbearia fictícia, desenvolvida como projeto demonstrativo de portfólio com HTML5, CSS3 e JavaScript puro.

> Todos os nomes, profissionais, avaliações, endereço, telefone, preços, horários e imagens são fictícios. O projeto não representa um estabelecimento real e não possui finalidade comercial.

## Direção visual

O projeto aplica o sistema descrito em `DESING.MD`: canvas creme, tipografia arredondada, cartões saturados em uma paleta controlada, raios amplos, ilustrações 3D em claymation e espaçamento generoso. Os fragmentos de interface originalmente previstos pelo sistema foram reinterpretados como informações de serviços, agenda e atendimento.

O texto dos cartões rosa usa a cor de tinta escura em vez do branco indicado no documento original. A adaptação aumenta o contraste de parágrafos e preços sem alterar a paleta da identidade.

## Estrutura

- `index.html`: conteúdo semântico e metadados
- `css/`: variáveis, reset, componentes, seções e responsividade
- `js/main.js`: menu móvel, cabeçalho, animações progressivas e ano do rodapé
- `assets/images/`: ilustrações demonstrativas geradas para o projeto
- `assets/icons/`: favicon próprio

## Como executar

Abra `index.html` diretamente no navegador ou use um servidor estático local, por exemplo:

```powershell
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Acessibilidade e responsividade

- Conteúdo funcional desde 320 px
- Menu móvel com estado acessível e fechamento pela tecla Escape
- Link para pular ao conteúdo
- Hierarquia semântica de títulos
- Foco visível e áreas de toque de pelo menos 44 px
- Textos alternativos nas imagens
- Conteúdo disponível mesmo sem JavaScript
- Suporte a `prefers-reduced-motion`
- Breakpoints principais revisados para 360, 768 e 1440 px

## WhatsApp

Os CTAs abrem uma conversa com mensagem previamente preenchida para consultar horários. O número usado é fictício e nenhum atendimento ou reserva é confirmado pelo site.
