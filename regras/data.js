// regras/data.js
// Estrutura usada pela página regras/ver.html

export const REGRAS_CATEGORIAS = [
  // =======================
  // TERMOS / GERAL
  // =======================
  {
    id: "geral",
    label: "Termos & Informações Gerais",
    emoji: "📄",
    items: [
      {
        code: "0",
        title: "Aceitação das Regras",
        body: `Jogando no servidor Cidade dos Anjos, você concorda e aceita todos os termos e regras descritas neste documento, bem como quaisquer alterações futuras realizadas no mesmo.

É muito importante estar sempre atento às atualizações das regras.

Todas as regras estão sujeitas à análise e decisões da STAFF, podendo gerar advertências ou banimentos. Em caso de dúvida, utilize o ticket de dúvidas no Discord.`
      },
      {
        code: "0.1",
        title: "Responsabilidade por bens e empréstimos",
        body: `Emprestar itens, carros, casas ou qualquer outro bem é de total responsabilidade do jogador.

A staff não se responsabiliza por problemas, perdas ou danos decorrentes de empréstimos ou transações realizadas entre jogadores.`
      },
      {
        code: "0.2",
        title: "Uso de marcas do mundo real",
        body: `É estritamente proibido utilizar dentro do servidor marcas, logotipos, nomes ou qualquer material relacionado a marcas do mundo real, sem autorização da staff.

Caso queira utilizar referências de empresas/produtos reais, é necessário pedir autorização à staff.

Violação pode gerar advertência, remoção de conteúdo ou banimento, dependendo da gravidade.`
      },
      {
        code: "0.3",
        title: "Conduta e postura geral",
        body: `A equipe da Cidade dos Anjos é multicultural e não admite:
• Preconceito
• Comportamento tóxico
• Pornografia
• Pedofilia
• Linguagem extremamente chula ou ofensiva

Cada membro é responsável individualmente pelas suas atitudes, tanto diante das regras do servidor quanto da legislação brasileira.`
      },
      {
        code: "0.4",
        title: "Uso de mapas/props (mods)",
        body: `O direito de utilizar mapas/props (mods) é do servidor.

O líder de uma organização pode usar o mapa/prop do seu estabelecimento enquanto for líder daquela org.

Ao deixar o cargo de líder (por saída, transferência ou punição), o direito de uso é automaticamente revogado.

Transferência de liderança permite que o novo líder solicite direito de uso, sujeito a novo acordo com o servidor.

A aquisição de direito de uso não transfere propriedade nem autoria do mod.`
      }
    ]
  },

  // =======================
  // DISCORD
  // =======================
  {
    id: "discord",
    label: "Regras do Discord",
    emoji: "💬",
    items: [
      {
        code: "D1",
        title: "Convivência e respeito",
        body: `• Respeite e aceite as decisões de administradores e moderadores.
• Respeite todos os membros, independentemente de raça, etnia, sexo etc.
• Proibido qualquer tipo de preconceito (racismo, machismo, homofobia, xenofobia, etc).
• Proibido qualquer assunto ilegal de acordo com as leis brasileiras.
• Proibido qualquer tipo de comércio sem autorização da administração.`
      },
      {
        code: "D2",
        title: "Privacidade e segurança de dados",
        body: `• Proibido divulgar conteúdo com dados pessoais próprios ou de terceiros (fotos, localização, telefone, nome completo, documentos, redes sociais etc).
• NÃO divulgue dados de cartão, endereço, familiares ou amigos.
• Proibido conteúdo pornográfico ou semelhante.
• Proibido qualquer tipo de assédio.
• PROIBIDO conversa de cunho pessoal entre maiores e menores de idade.`
      },
      {
        code: "D3",
        title: "Uso do Discord com o servidor",
        body: `• Para jogar na cidade é obrigatório estar no Discord conectado nas salas civis (1, 2 ou 3).
• A staff pode adicionar jogadores em tickets a qualquer momento para colher explicações.
• Reports via tickets serão avaliados principalmente com vídeos e, em alguns casos, prints.
• Ao jogar no servidor, você concorda em receber mensagens do BOT.`
      }
    ]
  },

  // =======================
  // BANIMENTOS / ADVERTÊNCIAS
  // =======================
  {
    id: "banimentos",
    label: "Advertências & Banimentos",
    emoji: "🚫",
    items: [
      {
        code: "B1",
        title: "Advertências",
        body: `• Advertências têm duração de 30 dias.
• Após esse período, o jogador pode abrir ticket pedindo remoção.
• Dependendo da situação podem ser aplicadas duas ou mais advertências de uma vez.
• Em alguns casos será aplicada apenas advertência verbal.
• Ao completar 3 advertências, o jogador pode ser banido do servidor de forma temporária ou permanente.
• Caso não seja banido na terceira advertência, na próxima será.`
      },
      {
        code: "B2",
        title: "Banimento indeterminado (exemplos)",
        body: `• Divulgação de outros servidores.
• Uso de qualquer ajuda externa que dê vantagem (cheats, aimbot, etc.).
• Comércio de itens do servidor por dinheiro/itens do mundo real.
• Estar em discords de venda de cheats ou de ataques/anti-RP em massa.
• Preconceitos graves (avaliados pela equipe).
• Desrespeito pesado à staff.
• Ghost comprovado.
• Estornos em doações.
• Abuso de bugs/exploits.
• RP totalmente incompatível com o servidor.
• Assédios graves.
• RPs de suicídio.

Alguns casos de banimento indeterminado não têm direito de retorno; utilizar ticket de desban em outra conta de Discord para avaliar.`
      },
      {
        code: "B3",
        title: "Prova e gravação",
        body: `Recomenda-se que todos os jogadores gravem sua tela enquanto estiverem na Cidade dos Anjos, para poder provar acontecimentos e evitar advertências/banimentos injustos.`
      }
    ]
  },

  // =======================
  // REGRAS BÁSICAS / RP
  // =======================
  {
    id: "regras_basicas",
    label: "Regras Básicas de RP",
    emoji: "🎭",
    items: [
      {
        code: "1º",
        title: "Anti-RP (proibições gerais)",
        body: `É absolutamente proibido:
• RDM, VDM
• Powergaming
• Metagaming
• Falta de amor à vida
• Ghosting
• Cheats, aimbots ou similares
• Combat logging para fugir de consequências
• Uso de macros/keybinds que gerem vantagem injusta
• Exploração de bugs/exploits
• Qualquer mod gráfico/jogável que dê vantagem sobre outros

I – Ter conhecimento de bug/exploit e não reportar também é passível de punição.
II – Todos têm responsabilidade de zelar pelo RP e pelo bom andamento do servidor.
III – É proibido deixar transmissões ao vivo de outros jogadores abertas enquanto você estiver na cidade para usar info externa.
IV – Se receber voz de abordagem de dois ou mais jogadores, deve se render. Tentar usar rádio nesta situação garante grande risco de ser morto.
V – Caso apenas 1-2 pessoas estejam te rendendo e cometam falhas claras, é possível reagir se fizer sentido, mas sem forçar RP.`
      },
      {
        code: "2º",
        title: "Preconceito e temas sensíveis",
        body: `É absolutamente proibida qualquer forma de preconceito, direto ou indireto. Exemplo:
• Racismo
• Homofobia
• Machismo
• Xenofobia, etc.

Temas como abuso sexual e suicídio também são extremamente sensíveis e proibidos de serem usados de forma leviana.

Podem resultar em banimento permanente.`
      },
      {
        code: "3º",
        title: "Respeito entre jogadores",
        body: `Todos devem manter o respeito mútuo, independentemente do cargo ou função dentro do Discord ou da cidade.

Conflitos entre personagens não justificam ataques pessoais ao jogador.`
      },
      {
        code: "4º",
        title: "Discurso de ódio",
        body: `É proibido discurso de ódio, sua incitação, ou flaming (mensagens hostis e ofensivas fora do contexto de RP saudável).`
      },
      {
        code: "5º",
        title: "Idade mínima",
        body: `Menores de idade são proibidos de jogar na Cidade dos Anjos.`
      },
      {
        code: "6º",
        title: "Organizações ilegais",
        body: `Não é permitido ter mais de um personagem registrado em organizações ilegais.`
      }
    ]
  },

  // =======================
  // REGRAS DA CIDADE
  // =======================
  {
    id: "cidade",
    label: "Regras da Cidade",
    emoji: "🏙️",
    items: [
      {
        code: "1º",
        title: "Amor à vida",
        body: `Todos devem prezar pela vida do personagem, evitando situações de risco absurdo que não seriam tomadas na vida real.

Desrespeito a essa regra pode ser considerado Anti-RP e resultar em banimentos de 3, 7, 15 ou 30 dias, de acordo com avaliação da staff.`
      },
      {
        code: "2º",
        title: "Interpretação e ON/OFF",
        body: `Todos devem interpretar o personagem de forma coerente. É proibido falar “em off” ou fora do RP em situações de jogo.

• Toda ação tem reação; o RP é coletivo.
• Caso veja Anti-RP, continue o RP e reporte depois à staff com provas.`
      },
      {
        code: "3º",
        title: "Combat Logging",
        body: `É proibido deslogar do jogo para evitar prisão, assalto, abordagem ou qualquer consequência de ação em andamento.

Se cair/crashar, tente avisar. Caso não faça e pareça fuga, poderá ser banido por 3, 7, 15 ou 30 dias.`
      },
      {
        code: "4º",
        title: "Safe Zones & farms legais",
        body: `É proibido:
• Marcar, camperar, agredir ou assaltar em Safe Zones ou locais de farm legal.

Exceção:
• Se alguém se refugiar na Safe Zone para fugir de ação.
• Se estiver abusando da Safe Zone para evitar sequestro/cobrança, etc.

Ao quebrar a safe, é obrigatório estar gravando e assumir risco de punição caso a staff entenda que não havia justificativa.`
      },
      {
        code: "5º",
        title: "Roubo de viaturas",
        body: `É proibido roubar viaturas, salvo se vencerem uma ação e usarem a viatura APENAS para fuga até uma garagem.

Após chegar na garagem:
• Guardar o veículo imediatamente.
• Não é permitido ficar passeando ou realizando outras atividades com a viatura.`
      },
      {
        code: "6º",
        title: "Chamados de serviço",
        body: `É proibido abrir chamados de serviço (táxi, mecânico, etc.) com o objetivo de assaltar ou sequestrar.

Chamados devem sempre ter motivo coerente com o RP.`
      }
      // 👉 Completa 7º a 47º quando quiseres
    ]
  },

  // =======================
  // REGRAS PARA TODAS AÇÕES
  // =======================
  {
    id: "acoes_gerais",
    label: "Regras para Todas as Ações",
    emoji: "🎯",
    items: [
      {
        code: "R-A1",
        title: "Comunicação após morte/coma",
        body: `Após morrer ou entrar em coma, é obrigatório silenciar qualquer comunicação (chat, rádio, etc.) que possa influenciar a ação.`
      },
      {
        code: "R-A2",
        title: "SAMU durante ações",
        body: `É proibido chamar SAMU durante ações como assaltos, tiroteios, sequestros em andamento, salvo exceções específicas e avaliadas pela staff.`
      },
      {
        code: "R-A3",
        title: "Uso do /acao",
        body: `O comando /acao é exclusivo para:
• Congelar (freeze) ações fechadas.
• Finalizar ações.
• Comunicar informações importantes da ação.

É proibido usar /acao para conversa aleatória ou fora do contexto de ação.`
      },
      {
        code: "R-A4",
        title: "Saída e retorno em ações",
        body: `É proibido sair de uma ação e depois voltar para a mesma ação posteriormente, tanto para bandidos quanto para PM.`
      }
    ]
  },

  // =======================
  // AÇÕES DE RUA / FUGAS / CAIXAS
  // =======================
  {
    id: "acoes_rua",
    label: "Ações de Rua & Fugas",
    emoji: "🚓",
    items: [
      {
        code: "51º",
        title: "Ações de Rua (Resumo)",
        body: `I – Proibido chamar SAMU durante a ação (salvo casos muito específicos).
II – Todas as armas estão liberadas.
III – Máx. 30 bandidos.
IV – Máx. 35 policiais.
V – Reforço tem 5 min após a primeira troca de tiros para chegar. Depois disso, não entra mais na ação.
VI – Fuga dura no máximo 15 min; após isso a PM pode atirar nos pneus. Se houver motivos (risco a civis, tiros dos bandidos), o Código 5 pode ser ativado antes.`
      },
      {
        code: "CORRIDA",
        title: "Corrida Ilegal / Fuga",
        body: `I – Em fugas, prioridade é escapar, salvo situações de Código 5.
II – Máximo de 2 viaturas em acompanhamento (2 motos = 1 viatura).
III – Proibido transformar a fuga em ação de rua propositalmente.
IV – Fuga dura no máximo 15 min; após isso a PM pode usar PIT para bloquear o veículo.`
      },
      {
        code: "CAIXA-REG",
        title: "Caixa Registradora",
        body: `I – Priorizar fuga.
II – Bandidos só podem usar pistolas.
III – PM pode usar armamento que estiver carregando.
IV – Proibido transformar em ação de rua.
V – Participantes:
  • Bandidos: 1 a 2
  • PM: 2 a 4
VI – Proibido uso de águia (helicóptero).
VII – Fuga máxima de 15 min; após isso, PM pode atirar nos pneus.`
      },
      {
        code: "ATM",
        title: "Ação em Caixa Eletrônico (ATM)",
        body: `I – Priorizar fuga, evitar baits, disparos desnecessários e forçar ação de rua.
II – Se PM chegar enquanto bandidos estão pegando a grana, deve aguardar o saque; se eles ainda não estiverem pegando, devem fugir.
III – Armamento: o que estiverem carregando.
IV – Fuga máxima de 15 min; após isso PM pode atirar nos pneus.
V – Participantes:
  • Bandidos: 1 a 3
  • PM: 2 a 6
VI – Proibido transformar a ação em ação de rua.`
      }
    ]
  },

  // =======================
  // LOJAS / AMMU / ROUPA / TATTOO
  // =======================
  {
    id: "lojas",
    label: "Lojas & Estabelecimentos",
    emoji: "🏪",
    items: [
      {
        code: "55º",
        title: "Ammunation / Tatuagem / Loja de Roupas",
        body: `I – Apenas pistolas podem ser utilizadas.
II – Participantes:
  • Bandidos: 1 a 2
  • PM: 2 (fixo)
III – Proibido uso de águia.
IV – Negociação obrigatória antes do PVP.
V – Uso de refém apenas para negociar armamento.
VI – Armas negociáveis: mini-smgs (Tec-9, Skorpion, Koch V9).
VII – Todos devem permanecer dentro do local da ação.
VIII – Máx. 1 colete por participante (sem reserva).
IX – Civis podem participar.
X – Proibido transformar em ação de rua.`
      },
      {
        code: "56º",
        title: "Loja de Departamento",
        body: `I – PM rusha (pressão rápida).
II – Participantes:
  • Bandidos: 3 a 4
  • PM: 4 a 5
III – Proibido uso de águia.
IV – Máx. 1 colete por participante (sem reserva).
V – Todos usam pistolas.
VI – Negociação obrigatória antes do PVP (PM pode ter no máximo 1 PM a mais que número de bandidos).
VII – Uso de refém apenas para negociar armamento.
VIII – Proibido atirar ou render o negociador ou disparar antes do fim da negociação + 40 segundos.
IX – Com 4 bandidos, 2 podem ficar fora; com 3 bandidos, apenas 1 fora.
X – Armas negociáveis: mini-smgs (Tec-9, Skorpion, Koch V9).
XI – Civis podem participar.`
      },
      {
        code: "57º",
        title: "Barbearia",
        body: `I – Ação usando armas brancas/soco (sem facas).
II – Participantes:
  • Bandidos: 1 a 2
  • PM: 2
III – Proibido uso de águia.
IV – Proibido uso de facas.
V – Negociação obrigatória antes do PVP.
VI – Proibido uso de refém.
VII – Todos devem estar dentro do local da ação.
VIII – Civis podem participar.
IX – Bandidos devem sair e a troca ocorrer do lado de fora após negociação.`
      }
    ]
  },

  // =======================
  // DESMANCHE / BOOSTING
  // =======================
  {
    id: "desmanche",
    label: "Desmanche & Boosting",
    emoji: "🛠️",
    items: [
      {
        code: "58º",
        title: "Desmanche / Boosting",
        body: `I – Participantes:
  • Bandidos: 2 a 6
  • PM: 2 a 8
II – Uso de helicóptero é permitido.
III – Máx. 1 colete por participante (sem reserva).
IV – Apenas pistolas (sem pistola automática).
V – Civis podem participar.`
      }
    ]
  },

  // =======================
  // ASSALTOS / ROUBO PROPRIEDADE
  // =======================
  {
    id: "assaltos",
    label: "Assaltos & Roubos",
    emoji: "💰",
    items: [
      {
        code: "59º",
        title: "Regras de Assaltos",
        body: `I – Horário de assalto: entre 00:00 e 05:00 (horário da cidade).
II – Proibido assaltar:
  • Taxistas, lixeiros, lenhadores, pescadores em área de pesca,
  • Carro forte, mineradores, caçadores, agricultores em local de trabalho,
  desde que estejam uniformizados e exercendo a profissão.
III – Máximo 4 participantes por assalto.
IV – Se houver troca de tiros, pode virar ação de rua (leia regras da ação de rua).
V – Proibido:
  • Deixar pessoas "de alerta" só esperando para entrar na ação.
  • Uso de helicóptero em assaltos.
  • Mais de um grupo da mesma facção assaltando ao mesmo tempo.`
      },
      {
        code: "61º",
        title: "Roubo a Propriedade",
        body: `I – Bandidos: mínimo 1, máximo 8.
II – PM: mínimo 2, máximo 8.
III – Dono da residência: mínimo 1, máximo 8; se defender, será tratado como bandido.
IV – Proibido helicóptero.
V – Cada participante pode usar apenas 1 colete (sem reserva).
VI – Armamento: somente pistolas (munição de pistola).
VII – Civis podem participar.
VIII – Proibido marcar pixels no teleporte da casa (dentro ou fora);
  • Deve ser permitido o uso do TP e posicionamento em até 5 segundos.
IX – Exceção: se alguém tentar rushar contra você saindo do TP, a reação é liberada.`
      }
    ]
  },

  // =======================
  // AÇÕES GRANDES (JOALHERIA, BANCOS, BC, HUMANE...)
  // =======================
  {
    id: "acoes_grandes",
    label: "Ações Grandes (Joalheria, Bancos, Humane...)",
    emoji: "🏦",
    items: [
      {
        code: "62º",
        title: "Ações Grandes (Geral)",
        body: `I – Todas as ações grandes devem ser marcadas via ticket com a staff antes de acontecer.
II – A staff ajuda a organizar, tirar dúvidas e garantir que tudo esteja dentro das regras.`
      },
      {
        code: "63º",
        title: "Joalheria",
        body: `• Bandidos: 6 a 8
• PM: 9 a 11
• Bandidos ≤ número de PM.
• Uso de águia permitido para PM.
• Civis não podem participar.
• Negociação obrigatória antes de qualquer PVP.
• Maioria dos bandidos deve ficar dentro da joalheria até início da ação.
• Reféns: sem limite, mas com bom senso; se houver refém, todos os bandidos devem ficar dentro.
• Armamento pesado obrigatório; 1 colete por participante (sem reserva).`
      },
      {
        code: "64º",
        title: "Banco de Paleto e Bancos menores",
        body: `• Bandidos: 6 a 8
• PM: 9 a 11
• Bandidos ≤ número de PM.
• Maioria dos bandidos dentro do local.
• Águia permitida para PM.
• Civis não podem participar.
• Negociação obrigatória.
• Reféns: sem limite, com bom senso; se houver refém, todos dentro.
• Armamento pesado; 1 colete por participante (sem reserva).`
      },
      {
        code: "65º",
        title: "Banco Central",
        body: `• Bandidos: 10 a 14
• PM: 16 a 19
• Bandidos ≤ número de PM.
• Águia permitida para PM.
• Civis não podem participar.
• Negociação obrigatória.
• Reféns: sem limite, com bom senso.
• Armamento pesado; 1 colete por participante.
• Maioria dos bandidos deve ficar dentro até início da ação.
• Fuga com o dinheiro pode ser negociada previamente.
• Pneus dos carros (de ambos) não podem ser estourados durante a fuga (apenas em regras específicas depois).
• Entre o mínimo 4 e até no máximo 7 bandidos devem permanecer do lado de fora do banco, nas imediações e escondidos; o restante pode permanecer dentro do estabelecimento.`
      },
      {
        code: "70º",
        title: "Humane (Ação de Grande Escala)",
        body: `• Bandidos: 15 a 20
• PM: 18 a 25
• Águia permitida.
• Civis não podem participar.
• Negociação obrigatória.
• Armamento pesado; 1 colete por participante (sem reserva).
• Maioria dos bandidos deve ficar na área em disputa.
• Fuga com dinheiro pode ser negociada previamente.
• Pneus não podem ser estourados (apenas em fugas específicas).`
      }
    ]
  },

  // =======================
  // TRANSFERÊNCIA / INVASÕES
  // =======================
  {
    id: "invasoes",
    label: "Transferência & Invasões",
    emoji: "⚔️",
    items: [
      {
        code: "66º",
        title: "Transferência para Penitenciária",
        body: `• A PM avalia se há efetivo para resgate/ação.
• Bandidos: máx. 15
• PM: máx. 20
• Apenas BANCO CENTRAL pode gerar transferência para esta ação.
• PM deve ter pelo menos 2 PMs a mais que os bandidos.
• Facção com pouco efetivo pode chamar aliados para completar número.
• Armamento pesado; 1 colete por participante (sem reserva).`
      },
      {
        code: "67º",
        title: "Invasão de Facções/Organizações",
        body: `• Precisa abrir ticket com 16h de antecedência informando horário (entre 21:00 e 00:00).
• Um staff acompanha a ação.
• Invasores: 15 a 30 membros.
• Defensores: até 30 membros (pode completar com aliados se tiver menos que invasores).
• Toda informação usada deve ser obtida via RP; uso de info externa é passível de punição severa.
• Facção perdedora fica 48h desativada (não pode retornar ao território).
• Facção vencedora pode usar local para RP por até 12h.
• Se a facção invadida não defender, W.O. e punição de derrota.
• Baús não podem ser mexidos durante invasão (apenas loteamento de corpos).
• Defensores começam zona azul, invasores zona vermelha.
• Após 5 min da primeira troca de tiros, defensores podem rotacionar pela zona vermelha.`
      },
      {
        code: "68º",
        title: "Invasão de Zonas Vermelhas",
        body: `• Proibido invadir zonas vermelhas de gangues sem marcar invasão.
• Zonas vermelhas da cidade estão listadas no Discord na sala específica.
• Punições variam conforme o contexto da invasão não autorizada.`
      },
      {
        code: "69º",
        title: "Invasão / Pacificação da PM",
        body: `• PM deve anunciar no /acao com 60 min de antecedência, incluindo número de integrantes.
• Apenas facção/organização envolvida pode usar essa informação.
• PM: mínimo 20, máximo 33.
• Defensores (facção): até 30 membros (podem chamar aliados se tiverem menos que a PM, dentro dos limites).
• Informações devem ser obtidas via RP (ocorrências, etc.), não fora do jogo.
• Se a PM vencer e houver investigação aberta, baús, carros e casas podem ser apreendidos.
• Facção perdedora fica 48h desativada (não volta ao território).
• W.O. se não houver defesa.
• Proibido mexer no baú durante a invasão.
• PM pode usar 1 recurso especial (blindado OU helicóptero).
• Assim que invasão é anunciada, bandidos não podem mover itens do baú, apenas pegar equipamento para defesa.
• Defensores começam zona azul; PM desembarca zona vermelha.
• Após 5 min da primeira troca de tiros, defensores podem rotacionar na zona vermelha.`
      }
    ]
  },

  // =======================
  // AÇÕES MÉDIAS
  // =======================
  {
    id: "acoes_medias",
    label: "Ações Médias (Madeireira, Açougue...)",
    emoji: "📦",
    items: [
      {
        code: "72º",
        title: "Madeireira",
        body: `I – Bandidos: 8
II – PM: 10
III – Negociação obrigatória; refém apenas para negociar armamento.
IV – Molotovs e granadas de fumaça permitidas.
V – Armamento: Pistolas, Tec-9.
VI – Civis podem participar.
VII – Helicópteros proibidos.
VIII – 1 colete por participante (sem reserva).`
      },
      {
        code: "73º",
        title: "Açougue",
        body: `I – Bandidos: 7
II – PM: 10
III – Negociação obrigatória; refém apenas para negociar armamento.
IV – Todos os bandidos dentro do perímetro.
V – Molotovs e granadas de fumaça permitidas.
VI – Armamento: pistolas e calibre 12.
VII – Civis podem participar.
VIII – Bandidos não podem ficar fora do perímetro, apenas rotacionar entre entradas internas.
IX – 1 colete por participante (sem reserva).`
      },
      {
        code: "74º",
        title: "Galinheiro",
        body: `I – Bandidos: 8
II – PM: 10
III – Negociação obrigatória; refém apenas para negociar armamento.
IV – Bandidos dentro do perímetro.
V – Molotovs e granadas de fumaça permitidas.
VI – Armamento: Pistolas.
VII – Civis podem participar.
VIII – Não podem rotacionar pela parte de trás (trilhos).
IX – PM pode entrar pelos trilhos apenas no primeiro rush, depois não.`
      },
      {
        code: "75º",
        title: "Aeroporto do Norte",
        body: `I – Bandidos: 8
II – PM: 10
III – Negociação obrigatória; refém apenas para negociar armamento.
IV – Molotovs e granadas de fumaça permitidas.
V – Armamento: Pistolas.
VI – Civis podem participar.
VII – Helicópteros proibidos.
VIII – 1 colete por participante (sem reserva).
IX – PM começa na região azul; bandidos na vermelha.`
      },
      {
        code: "76º",
        title: "Doca",
        body: `I – Bandidos: 8
II – PM: 10
III – Negociação obrigatória; refém apenas para negociar armamento.
IV – Molotovs e granadas de fumaça permitidas.
V – Armamento: Pistolas.
VI – Civis podem participar.
VII – Helicóptero permitido.
VIII – 1 colete por participante (sem reserva).
IX – PM começa na região azul; bandidos na vermelha.`
      },
      {
        code: "77º",
        title: "Ferro-Velho",
        body: `I – Bandidos: 5
II – PM: 7
III – Negociação obrigatória; refém apenas para negociar armamento.
IV – Molotovs e granadas de fumaça permitidas.
V – Armamento: pistolas e SMG.
VI – Civis podem participar.
VII – Helicópteros proibidos.
VIII – 1 colete por participante (sem reserva).
IX – PM começa na região azul; bandidos na vermelha.`
      },
     {
        code: "78º",
        title: "Assalto à Ilha do Cartel",
        body: `
       • - Número de bandidos: 10 bandidos no total.
       • - Número de policiais: 10 policiais no total.
I - Sem uso de reféns.
II - Uso de Molotovs e Granadas: É permitido o uso de molotovs e granadas de fumaça durante a ação.
III - Armamento permitido (obrigatório): Somente SMG podem ser utilizadas durante a ação.
IV - Apenas gangues podem participar
V - Pode ser utilizado 2 helicópteros pela PM e bandidos. Pode ser utilizado barcos.
VI - Colete: Cada participante pode usar apenas 1 colete, sendo proibido o uso de colete reserva.
VII - Caso haja disparos a PM não precisa negociar.
IX - A PM terá até 10 minutos para chegar após o primeiro disparo.

Observação importante:
• Apenas 1 grupo por gangue poderá participar da ação, com o limite máximo de 10 membros únicos por organização criminosa.
• Ou seja, somente uma equipe de cada facção está autorizada a comparecer - não será permitido múltiplos times da mesma gangue.
• Organizações rivais poderão se encontrar no local da ação e disputar entre si pelo controle do loot. Preparem-se para o confronto!

O local é PVP liberado!
Não pode formar times!
As informações para o assalto ser concluido será passada em RP pela Máfia Caruso!`
      },
      {
        code: "79º",
        title: "Blackout na Cidade",
        body: `I - Número de bandidos: Até 8 bandidos no total.
II - Número de policiais: Até 8 policiais no total.
III - Sem uso de reféns.
IV - Armamento permitido (obrigatório): Somente pistolas podem ser utilizadas durante a ação.
V - Apenas gangues podem participar.
VI - Pode ser utilizado 1 helicóptero pela PM e bandidos.
VII - Colete: Cada participante pode usar apenas 1 colete, sendo proibido o uso de colete reserva.
VIII - Caso haja disparos a PM não precisa negociar.
IX - A PM pode intervir a qualquer momento para restabelecer a energia da cidade.`
      }
    ]
  },

  // =======================
// AÇÕES ARCANJOS (NOVAS)
// =======================
{
  id: "acoes_arcanjos",
  label: "Ações Arcanjos",
  emoji: "🪽",
  items: [
    {
      code: "80º",
      title: "Interceptação Carro-Forte",
      body: `I – Número de bandidos: 8 bandidos no total.
II – Número de seguranças: 10 seguranças no total.
III – Sem uso de reféns.
IV – Armamento permitido (obrigatório): SMG, Pistolas e Tec-9 podem ser utilizadas durante a ação.
V – Colete: cada participante pode usar apenas 1 colete, sendo proibido o uso de colete reserva.
VI – A PM não poderá participar. (inicialmente na fase de teste)
VII – Chegará uma notificação para as lideranças de cada gangue; quem aceitar primeiro será direcionado para a missão.
VIII – O looting está liberado. Caso os bandidos vençam, deverão acionar o hospital para atender os Arcanjos. Se os Arcanjos saírem vitoriosos, os bandidos poderão seguir para o necrotério.
IX – Proibido o uso de helicópteros.

Não haverá prisões em nenhum dos casos.`
    },
    {
      code: "80 - 2º",
      title: "Transporte Carro-Forte",
      body: `I – Número de bandidos: 6 bandidos no total.
II – Número de seguranças: 8 seguranças no total.
III – Sem uso de reféns.
IV – Armamento permitido (obrigatório): SMG, Pistolas e Tec-9 podem ser utilizadas durante a ação.
V – Colete: cada participante pode usar apenas 1 colete, sendo proibido o uso de colete reserva.
VI – A PM não poderá participar. (inicialmente na fase de teste)
VII – Uso de até 1 helicóptero permitido.
VIII – Chegará uma notificação para as lideranças de cada gangue; quem aceitar primeiro será direcionado para a missão.
IX – O looting está liberado. Caso os bandidos vençam, deverão acionar o hospital para atender os Arcanjos. Se os Arcanjos saírem vitoriosos, os bandidos poderão seguir para o necrotério.`
    },
    {
      code: "80 - 3º",
      title: "Coleta em lojas",
      body: `I – Limite de participantes:
• Bandidos: mínimo de 3 e máximo de 4.
• Arcanjos: mínimo de 4 e máximo de 5.

II – Proibido o uso de águia (helicóptero) durante a ação.
III – Máximo de 1 colete por participante da ação. Não é permitido colete reserva.
IV – Todos devem usar pistolas durante a ação.
V – Os bandidos já podem chegar atirando.
VI – A PM não poderá participar. (inicialmente na fase de teste)
VII – Chegará uma notificação para as lideranças de cada gangue; quem aceitar primeiro será direcionado para a missão.
VIII – O looting está liberado. Caso os bandidos vençam, deverão acionar o hospital para atender os Arcanjos. Se os Arcanjos saírem vitoriosos, os bandidos poderão seguir para o necrotério.`
    }
  ]
},
         
  // =======================
  // SEQUESTROS
  // =======================
  {
    id: "sequestros",
    label: "Sequestros",
    emoji: "🧷",
    items: [
      {
        code: "81º (Sequestro)",
        title: "Regra de Sequestro (Resumo)",
        body: `• Sequestros para pedir dinheiro/itens: entre 21:00 e 05:00.
• Sequestros por motivos pessoais, ações ou pendências de facção: qualquer horário (desde que RP faça sentido).
• É obrigatório fazer RP adequado e permitir libertação caso a vítima coopere.
• Proibido pedir quantias absurdas.
• Proibido sequestros repetidos das mesmas vítimas/facções sem motivo forte (salvo guerra declarada).
• Para valores acima de 100.000, deve haver negociação e abertura para aceitar menos.
• Máx. por civil sequestrado: 50.000.
• Para 2+ vítimas, máximo total de 100.000 no resgate.
• Ninguém é obrigado a revelar saldo exato.
• Carros só podem ser exigidos com motivo (ex: carro não pago).
• Sequestro de policiais/servidores públicos apenas com motivo plausível e preferencialmente com prova em vídeo.
• Sequestradores e vítimas devem participar ativamente do RP; recusa deve ser reportada à staff.`
      },
      {
        code: "78.1",
        title: "Sequestro para subtração de bens",
        body: `I – Limite de sequestradores: máximo 4 pessoas para este tipo de sequestro.`
      }
    ]
  },

  // =======================
  // AÇÃO DE REMOÇÃO DE PICHAÇÃO
  // =======================
  {
    id: "pichacao",
    label: "Remoção de Pichação",
    emoji: "🎨",
    items: [
      {
        code: "P1",
        title: "Remoção de Pichação",
        body: `• Gangues/PM podem remover pichações de outras gangues (sem invadir zona vermelha).
• A remoção pode ser feita por até 10 membros de cada lado (10x10).
• A gangue que tiver a pichação removida será notificada via sistema da cidade e terá até 10 minutos para comparecer.
• Durante o confronto, só armas brancas podem ser usadas (sem armas de fogo).
• Se a gangue que está tendo a pichação removida vencer, poderá restabelecê-la.
• Todos os envolvidos vão de /gg ao final.`
      }
    ]
  },

  // =======================
  // GANGUES E SETAGEM
  // =======================
  {
    id: "gangues",
    label: "Gangues & Setagens",
    emoji: "🩸",
    items: [
      {
        code: "G1",
        title: "Regras de Setagem",
        body: `• Não é possível associar múltiplas gangues a uma mesma pessoa.
• Para trocar de gangue, é necessário remover a associação anterior.
• Membros de gangues só podem ser atribuídos a fachadas pertencentes à sua própria gangue (não podem trabalhar em fachadas de outra facção).`
      }
    ]
  },

  // =======================
  // GRAVIDEZ
  // =======================
  {
    id: "gravidez",
    label: "RP de Gravidez",
    emoji: "🍼",
    items: [
      {
        code: "RPG",
        title: "Regras de RP de Gravidez",
        body: `• Pode ser feito por qualquer cidadã, MAS deve ter aprovação da staff.
• As pessoas envolvidas devem estar cientes da responsabilidade desse RP.
• Gestação mínima de 2 semanas, com 1 a 3 consultas semanais ao médico (pagas in-game).
• Após 1 semana, é obrigatório usar roupas condizentes com gravidez.
• Grávidas não podem participar de ações com armas de fogo (salvo exceções liberadas pela staff).
• Se o casal se separar, o RP de gravidez continua; ambos seguem responsáveis pelo acompanhamento.`
      }
    ]
  }
];
