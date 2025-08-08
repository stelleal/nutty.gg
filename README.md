# Nutty.gg - Streaming Widgets

Uma coleção de widgets para streamers, projetados para uso como Browser Sources no OBS Studio. Os widgets são otimizados para diversas plataformas de streaming incluindo Twitch, YouTube, Kick e TikTok.

## Widgets Disponíveis

### YouTube Music Widget

Widget para exibir a música atualmente tocando no YouTube Music Desktop App.

**Configuração:**
1. Instale e execute o [YouTube Music Desktop App](https://github.com/ytmdesktop/ytmdesktop)
2. Acesse `/youtube-music-widget/configure/` para gerar sua URL personalizada
3. Adicione a URL gerada como Browser Source no OBS

**Query Parameters:**

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| `token` | Token de autenticação do YouTube Music Desktop App | `?token=abc123` |
| `duration` | Duração de visibilidade em segundos (0 = sempre visível) | `?duration=10` |
| `hideAlbumArt` | Oculta a arte do álbum | `?hideAlbumArt` |
| `compact` | Ativa o modo compacto (sem album art, layout condensado) | `?compact` |
| `crtEffect` | Ativa efeitos CRT (scanlines e flicker nostálgico) | `?crtEffect` |
| `test` | Modo de teste para desenvolvimento (mostra placeholder) | `?test` |

**Exemplos de URL:**
- Versão padrão: `/youtube-music-widget/?token=SEU_TOKEN`
- Versão compacta: `/youtube-music-widget/?token=SEU_TOKEN&compact`
- Com efeito CRT: `/youtube-music-widget/?token=SEU_TOKEN&crtEffect`
- Compacto + CRT: `/youtube-music-widget/?token=SEU_TOKEN&compact&crtEffect`
- Sem album art: `/youtube-music-widget/?token=SEU_TOKEN&hideAlbumArt`
- Teste local com CRT: `/youtube-music-widget/?test&compact&crtEffect`

## Desenvolvimento Local

Para testar os widgets localmente:

1. Use um servidor HTTP local (ex: Live Server no VS Code)
2. Adicione `?test` na URL para ver o widget com dados placeholder
3. Use `test-preview.html` para visualizar múltiplos widgets

## Tecnologias

- **Frontend:** HTML/CSS/JavaScript vanilla
- **Design:** Sistema Zinphes (estética nostálgica CRT)
- **APIs:** YouTube Music Desktop App, Streamer.bot WebSocket
- **Hosting:** GitHub Pages

---

*Para mais informações sobre desenvolvimento, consulte `CLAUDE.md`*