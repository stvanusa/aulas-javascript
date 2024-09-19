document.addEventListener("DOMContentLoaded", function() {
    // Dados que serão inseridos na tabela
    const dados = [
        { time: "Botafogo", pontos: 53, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Palmeiras", pontos: 50, jogos: 26,vitorias: 15, empates:5,derrotas: 6 },
        { time: "Fortaleza", pontos: 49, jogos: 26,vitorias: 14,empates: 5,derrotas: 5  },
        { time: "Flamengo", pontos: 45, jogos: 25, vitorias: 13,empates: 5,derrotas: 5},
        { time: "São Paulo", pontos: 44, jogos: 26, vitorias: 13,empates: 5,derrotas: 5 },
        { time: "Bahia", pontos: 42, jogos: 26, vitorias: 12,empates: 5,derrotas: 5 },
        { time: "Cruzeiro", pontos: 41,jogos: 26, vitorias: 12,empates: 5,derrotas: 5 },
        { time: "Internacional", pontos: 38, jogos: 26,vitorias: 10,empates: 5,derrotas: 5 },
        { time: "Vasco da Gama", pontos: 35,jogos: 26, vitorias: 10,empates: 5,derrotas: 5 },
        { time: "Atletico MG", pontos: 33, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Juventude", pontos: 32, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Bragantino", pontos: 31, jogos: 26,vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Atlético PR", pontos: 30,jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Grêmio", pontos: 28, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Criciúma", pontos: 28, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Fluminense", pontos: 27, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Vitória", pontos: 25, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Corinthias", pontos: 25, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Cuiabá", pontos: 22, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 },
        { time: "Atlético GO", pontos: 18, jogos: 26, vitorias: 16,empates: 5,derrotas: 5 }
    ];

    // Seleciona o corpo da tabela
    const tabelaBody = document.querySelector("#brasileirao tbody");

    // Cria uma linha para cada item nos dados
    dados.forEach(dado => {
        const tr = document.createElement("tr");

        const tdTime = document.createElement("td");
        tdTime.textContent = dado.time;
        tr.appendChild(tdTime);

        const tdPontos = document.createElement("td");
        tdPontos.textContent = dado.pontos;
        tr.appendChild(tdPontos);

        const tdJogos = document.createElement("td");
        tdJogos.textContent = dado.jogos;
        tr.appendChild(tdJogos);

        const tdVitorias = document.createElement("td");
        tdVitorias.textContent = dado.vitorias;
        tr.appendChild(tdVitorias);

        const tdEmpates = document.createElement("td");
        tdEmpates.textContent = dado.empates;
        tr.appendChild(tdEmpates);

        const tdDerrotas = document.createElement("td");
        tdDerrotas.textContent = dado.derrotas;
        tr.appendChild(tdDerrotas);

        tabelaBody.appendChild(tr);
    });
});
    
