## Cores por Plataforma

- Twitch: Roxo #9146ff
- YouTube: Vermelho #ff4444
- Kick: Verde #66d9a3
- Ko-fi: Rosa #ff6b9d
- Demais plataformas: #7aa3ff

---

## Variações de alertas

Especificações de cada variação de alerta para as plataformas Twitch, Youtube, Kick.
> TODO: Ko-fi, LivePix. Também alertas comentados.

### Quando alguém seguiu o conteúdo de graça

- som: ts-user-joined-your-channel.mp3

Texto "{username} seguiu a live" para:

- Follow (TwitchFollow),
<!-- - Subscriber (youTube), -->
<!-- - Follow (kick) -->

### Quando alguém paga uma inscrição

- som: skype-call-sound.mp3

#### Para si
Texto "{username} deu sub" para:
- Nova Inscrição de qualquer tier menos Prime (TwitchSub),
- Novo Subscriber (KickSubscription)

Texto "{username} deu sub com prime" para:
- Inscrição Prime (TwitchSub)

Texto "{username} deu resub / {sequência} meses" para:
- Reinscrição de qualquer tier (TwitchResub),
- Resubscriber (KickSubscription)

Texto "{username} deu resub com prime / {sequência} meses" para:
- Reinscrição Prime (TwitchResub)

#### Para outro
Texto "{username} deu {quantidade} sub pra galera / acumulando {cumlativeTotal} subs de presente" para:
- Exatamente 1 Inscrição de presente para a comunidade (TwitchGiftBomb),
- Community gift exatamente 1 (KickGiftedSubscriptions) sem "message"

Texto "{username} deu {quantidade} subs pra galera / acumulando {cumlativeTotal} subs de presente" para:
- Mais que 1 Inscrições de presente para a comunidade (TwitchGiftBomb),
- Community gift maior que 1 (KickGiftedSubscriptions) sem "message"

Texto "{username} deu um sub para {destinatario} / acumulando {cumlativeTotal} subs de presente" para:
- Inscrição de presente para usuário (TwitchGiftSub),
- Subscriber gift (KickGiftedSubscriptions) sem "message"

### Quando alguém envia dinheiro pela plataforma

- som: msn-message.mp3

Texto "{username} mandou x{quantidade} bits" para:
- Pelo menos 1 Bit enviado via Cheer (TwitchCheer)

<!-- Texto "{username} mandou {currency}{amount}" para:
- Pelo menos 1 Tip enviado (kick) -->

### Quando alguém envia outro viewer

- som: msn-nudge.mp3

Texto "{username} invadiu com {quantidade} viewers" para:
- Raid realizada com pelo menos 1 espectador (TwitchRaid)
- Host realizado com pelo menos 1 espectador (KickStreamHost)

## Multichat

TODO:
ajuste de estilo mínimo para manter coesão com os demais, como 
- border-radius de chatbubbles e cards para padrão de 4px
- para .timestamp, .pronouns border-radius: 8px;
- text shadows adequados
- o text color base para o #cccccc

especificamente para os cards:
- ajustar para modificar mais elementos de acordo com a classe da div
- background color, sem gradient
- especificamente o span#title dentro dela, cor do texto e text-shadow
- mudar APENAS nas seguintes plataformas:
twitch
	color: #9146ff
	text-shadow: 0 0 10px rgba(145, 70, 255, 0.8)
    background: #2a1a3a

youtube
	color: #ff4444
	text-shadow: 0 0 10px rgba(255, 68, 68, 0.8)
    background: #3a1a1a

kick
	color: #66d9a3
	text-shadow: 0 0 10px rgba(102, 217, 163, 0.8)
    background: #1a2e26

kofi
	color: #ff6b9d
	text-shadow: 0 0 10px rgba(255, 107, 157, 0.8)
    background: #3a1a2e

- além disso, para cards de anúncios, apenas background e box-shadow com seguintes valores: modificar texto do span#title
announcementBlue
    announce-blue-bg: #2a3a5a;
    announce-blue-glow:  0 0 10px rgba(90, 153, 255, 0.2);

announcementGreen
    announce-green-bg: #2a4a3a;
    announce-green-glow:  0 0 10px rgba(102, 217, 163, 0.2);

announcementOrange
    announce-orange-bg: #4a3a2a;
    announce-orange-glow:  0 0 10px rgba(255, 140, 66, 0.2);

announcementPurple
    announce-purple-bg: #3a2a4a;
    announce-purple-glow:  0 0 10px rgba(181, 102, 255, 0.2);


Existe o funcionamento de algumas configurações que podem ser modificadas de acordo com a seleção em settings, que monta as opções dos queryParams.
NÃO mude o funcionamento nem os valores padrões das seguintes:
- Show Platform
- Show Avatar
- Show Timestamps
- Show Badges
- Show Pronouns
- Show Username
- Show Message
- Chat Bubbles
- Background
- Background Opacity
- Todas as opções dentro de "General"
- Todas as opções dentro de "Which Twitch messages do you want to see?"
- Todas as opções dentro de "Which YouTube messages do you want to see?"
- Todas as opções dentro de "Which Kick messages do you want to see?"
- Todas as opções dentro de "Which TikTok messages do you want to see?"
- Todas as opções dentro de "Which donation messages do you want to see?"
- Todas as opções dentro de "Very Important Stuff"
- Todas as opções dentro de "Advanced"

Exceções:
Para "Font", mude a fonte default para a que usamos padrão, deixando customizável ainda pelo settings. O mesmo para "Font Size" e "Line Spacing".
Para "Bubble Color" deixar padrão como #1a1a2e, "Bubble Opacity" como 0.90, deixando customizável ainda pelo settings.



NAO ESQUECER
- AJUSTANDO ANNOUNCEMENTS, MUDAR COR SÓ DO TEXTO ANNOUNCEMENT E TALVEZ COLOCAR UM SHADOW INSET NA CAIXA. TALVEZ ESQUECER DOS BUBBLE CHAT