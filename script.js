// Script para abrir e fechar os cards de cada integrante;

  const cabecalhos = document.querySelectorAll('.cabecalho');

  cabecalhos.forEach((botao) => {
    botao.addEventListener('click', () => {
      const item = botao.closest('.item'); 

      document.querySelectorAll('.item.aberto').forEach((outro) => {
        if (outro !== item) outro.classList.remove('aberto');
      });


      item.classList.toggle('aberto');
    });
  });

  // Script para os albuns da página de discografia;
  const ALBUNS = [
    {
      imagem: "./image/bullets.png",
      ano: "2002",
      selo: "EYEBALL RECORDS",
      titulo: "I Brought You My Bullets, You Brought Me Your Love",
      descricao: "O debut cru, punk e visceral da banda. Gravado com um orçamento mínimo, é o álbum mais bruto e hardcore do MCR — uma declaração de intenções que mistura horror, romance e urgência punk. A estética de vampiros e amor proibido já está toda aqui.",
      curiosidades: [
        'O título é uma referência a uma fala do filme "Dancer in the Dark" de Lars von Trier',
        'Gravado quase inteiramente no porão do baterista Matt Pellissier.',
        'Gerard Way concebeu o álbum como um "romance de horror" com narrativa contínua.',
        '"Vampires Will Never Hurt You" foi escrita em uma noite de insônia após assistir a um filme de terror.'
      ],
      faixas: [
        "Romance",
        "Honey, This Mirror Isn't Big Enough for the Two of Us",
        "Vampires Will Never Hurt You",
        "Drowning Lessons",
        "Our Lady of Sorrows",
        "Headfirst for Halos",
        "Skylines and Turnstiles"
      ],
    },
    {
      imagem: "./image/revenge.png",
      ano: "2004",
      selo: "REPRISE RECORDS",
      titulo: "Three Cheers for Sweet Revenge",
      descricao: "O álbum que colocou o MCR no mapa global. Um conceito sobre um homem que mata 1000 almas para se reunir com sua amada no além. 'Helena' e 'I'm Not Okay' viraram hinos de uma geração, tocados em rádios do mundo inteiro.",
      curiosidades: [
        '"Helena" foi escrita em homenagem à avó de Gerard e Mikey Way, Elena Lee Rush.',
        "O álbum vendeu mais de 3 milhões de cópias nos EUA, disco de platina triplo.",
        "O clipe de 'The Ghost of You' foi filmado como um curta-metragem de guerra no estilo do Dia D.",
        "Frank Iero se juntou à banda durante as gravações deste álbum."
      ],
      faixas: [
        "Helena",
        "Give 'Em Hell, Kid",
        "To the End",
        "You Know What They Do to Guys Like Us in Prison",
        "I'm Not Okay (I Promise)",
        "The Ghost of You",
        "The Jetset Life Is Gonna Kill You"
      ]
    },
    {
      imagem: "./image/black-parede.png",
      ano: "2006",
      selo: "REPRISE RECORDS",
      titulo: "The Black Parade",
      descricao: 'A obra-prima absoluta. Um álbum conceitual sobre um paciente chamado "The Patient" que morre de câncer e sua morte vira um desfile épico. Influenciado por Pink Floyd, Queen e David Bowie, é amplamente considerado um dos maiores álbuns de rock dos anos 2000.',
      curiosidades: [
        'A banda gravou o álbum vestida de uniforme de hospital psiquiátrico — "The Black Parade is Dead!"',
        "'Welcome to the Black Parade' chegou ao #1 na UK e é um dos singles mais streamed do MCR.",
        "Rob Cavallo, produtor do Green Day, produziu o álbum.",
        "A nota de piano de abertura de 'Welcome...' se tornou um dos riffs mais reconhecíveis do rock moderno.",
        "Gerard Way declarou que quase destruiu sua saúde mental ao escrever o álbum."
      ],
      faixas: [
        "Welcome to the Black Parade",
        "Famous Last Words",
        "Cancer",
        "I Don't Love You",
        "House of Wolves",
        "Mama",
        "Sleep"
      ]
    },
    {
      imagem: "./image/danger-days.png",
      ano: "2010",
      selo: "REPRISE RECORDS",
      titulo: "Danger Days: The True Lives of the Fabulous Killjoys",
      descricao: "A virada radical que dividiu a fanbase. A banda trocou o preto pelo néon colorido em um álbum de ficção científica punk sobre rebeldes em um mundo distópico da Califórnia de 2019. Corajoso, controverso e muito mais alegre que tudo que vieram antes.",
      curiosidades: [
        'Cada membro adotou um alter-ego: Gerard virou "Party Poison".',
        "O álbum foi acompanhado de uma narrativa completa de banda desenhada.",
        "'Na Na Na' foi gravada e mixada em apenas três dias.",
        "A estética é inspirada em filmes de road movie dos anos 70 e 80."
      ],
      faixas: [
        "Na Na Na",
        "Sing",
        "Planetary (GO!)",
        "The Only Hope for Me Is You",
        "Party Poison",
        "Bulletproof Heart",
        "Summertime"
      ]
    }
  ];

  let ativo = 0;

  const tabsEl = document.getElementById("tabs");
  const indicadorEl = document.getElementById("indicador");
  const conteudoEl = document.getElementById("conteudo");

  // Cria os botões de aba dinamicamente
  function montarTabs() {
    ALBUNS.forEach((album, i) => {
      const btn = document.createElement("button");
      btn.className = "tab" + (i === ativo ? " ativo" : "");
      btn.textContent = album.ano;
      btn.dataset.index = i;
      btn.addEventListener("click", () => selecionarAba(i));
      tabsEl.insertBefore(btn, indicadorEl);
    });
  }

  function selecionarAba(i) {
    if (i === ativo) return;
    ativo = i;

    document.querySelectorAll(".tab").forEach((btn, idx) => {
      btn.classList.toggle("ativo", idx === ativo);
    });

    moverIndicador();
    renderizarConteudo();
  }

  // Posiciona o indicador sob a aba ativa
  function moverIndicador() {
    const btnAtivo = document.querySelector(`.tab[data-index="${ativo}"]`);
    indicadorEl.style.left = btnAtivo.offsetLeft + "px";
    indicadorEl.style.width = btnAtivo.offsetWidth + "px";
  }

  // Renderiza o conteúdo do álbum ativo, reiniciando a animação de fade
  function renderizarConteudo() {
    const album = ALBUNS[ativo];

    conteudoEl.innerHTML = `
      <div class="coluna-capa">
        <div class="capa" style="background-image: url('${album.imagem}')">
          <p class="selo">${album.selo}</p>
          <p class="ano-grande">${album.ano}</p>
        </div>
        <div class="tracklist">
          <p class="eyebrow">FAIXAS EM DESTAQUE</p>
          <ol>
            ${album.faixas.map((f, idx) => `<li><span class="num">${String(idx + 1).padStart(2, "0")}</span><span class="faixa">${f}</span></li>`).join("")}
          </ol>
        </div>
      </div>
      <div class="album-info">
        <p class="eyebrow">${album.ano} · ${album.selo}</p>
        <h2>${album.titulo}</h2>
        <p class="desc">${album.descricao}</p>
        <p class="eyebrow">CURIOSIDADES</p>
        <ul>
          ${album.curiosidades.map(c => `<li>${c}</li>`).join("")}
        </ul>
      </div>
    `;

    // Reinicia a animação removendo e reaplicando a classe
    conteudoEl.classList.remove("anim");
    void conteudoEl.offsetWidth; // força o navegador a "esquecer" o estado anterior (reflow)
    conteudoEl.classList.add("anim");
  }

  // Inicialização
  montarTabs();
  renderizarConteudo();
  // Espera o layout calcular as posições antes de medir o indicador
  requestAnimationFrame(moverIndicador);

  // Reposiciona o indicador se a janela for redimensionada
  window.addEventListener("resize", moverIndicador);