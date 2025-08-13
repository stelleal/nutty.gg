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
