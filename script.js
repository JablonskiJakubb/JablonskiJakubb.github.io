$(document).ready(function() {
    const players = [
        { name: "Robert Lewandowski", club: "FC Barcelona", value: 15, image: "Lewandowski.png" },
        { name: "Pedri", club: "FC Barcelona", value: 80, image: "Pedri.png" },
        { name: "Lamine Yamal", club: "FC Barcelona", value: 150, image: "Yamal.png" },
        { name: "Raphinha", club: "FC Barcelona", value: 60, image: "Raphinha.png" },
        { name: "Wojciech Szczęsny", club: "FC Barcelona", value: 3, image: "Szczesny.png" },
        { name: "Kylian Mbappé", club: "Real Madryt", value: 180, image: "Mbappé.png" },
        { name: "Vinícius Júnior", club: "Real Madryt", value: 200, image: "Vinicius.png" },
        { name: "Federico Valverde", club: "Real Madryt", value: 150, image: "Valverde.png" },
        { name: "Antonio Rüdiger", club: "Real Madryt", value: 25, image: "Rudiger.png" },
        { name: "Dani Carvajal", club: "Real Madryt", value: 12, image: "Carvajal.png" },
        { name: "Emre Can", club: "Borussia Dortmund", value: 10, image: "Can.png" },
        { name: "Gregor Kobel", club: "Borussia Dortmund", value: 40, image: "Kobel.png" },
        { name: "Karim Adeyemi", club: "Borussia Dortmund", value: 35, image: "Adeyemi.png" },
        { name: "Harry Kane", club: "Bayern Monachium", value: 100, image: "Kane.png" },
        { name: "Joshua Kimmich", club: "Bayern Monachium", value: 50, image: "Kimmich.png" },
        { name: "Jamal Musiala", club: "Bayern Monachium", value: 130, image: "Musiala.png" },
        { name: "Rodri", club: "Manchester City", value: 130, image: "Rodri.png" },
        { name: "Erling Haaland", club: "Manchester City", value: 200, image: "Haaland.png" },
        { name: "Phil Foden", club: "Manchester City", value: 150, image: "Foden.png" },
        { name: "Mohamed Salah", club: "Liverpool", value: 55, image: "Salah.png" },
        { name: "Darwin Núñez", club: "Liverpool", value: 65, image: "Núñez.png" },
        { name: "Virgil van Dijk", club: "Liverpool", value: 30, image: "vanDijk.png" },
        { name: "Martin Ødegaard", club: "Arsenal", value: 110, image: "Ødegaard.png" },
        { name: "William Saliba", club: "Arsenal", value: 80, image: "Saliba.png" },
        { name: "Bukayo Saka", club: "Arsenal", value: 140, image: "Saka.png" },
        { name: "Rafael Leão", club: "AC Milan", value: 75, image: "Leão.png" },
        { name: "Lautaro Martínez", club: "Inter Mediolan", value: 110, image: "Martinez.png" },
        { name: "Arkadiusz Milik", club: "Juventus", value: 4, image: "Milik.png" },
        { name: "Nicola Zalewski", club: "AS Roma", value: 12, image: "Zalewski.png" },
        { name: "Khvicha Kvaratskhelia", club: "Napoli", value: 80, image: "Kvaratskhelia.png" }
    ];

    let currentPlayer1;
    let currentPlayer2;
    let correctCount = 0;
    let lastResultMessage = '';

    function loadPlayers() {
        do {
            currentPlayer1 = players[Math.floor(Math.random() * players.length)];
            currentPlayer2 = players[Math.floor(Math.random() * players.length)];
        } while (currentPlayer1 === currentPlayer2);

        $('#player1-name').text(currentPlayer1.name);
        $('#player1-club').text(currentPlayer1.club);
        $('#player1-image').attr('src', currentPlayer1.image);
    
        $('#player2-name').text(currentPlayer2.name);
        $('#player2-club').text(currentPlayer2.club);
        $('#player2-image').attr('src', currentPlayer2.image);
    
        $('#opcja_1').text(currentPlayer1.name);
        $('#opcja_3').text(currentPlayer2.name);
    
        $('#correct-count').text(`Poprawne odpowiedzi: ${correctCount}`);
        $('#result').text(lastResultMessage);
    }

    function checkAnswer(answer) {
        const correctAnswer = currentPlayer1.value > currentPlayer2.value ? 'option_1' :
                              currentPlayer1.value < currentPlayer2.value ? 'option_3' : 'option_2';

        let resultMessage = '';

        if (currentPlayer1.value > currentPlayer2.value) {
            if (answer === 'option_1') {
                resultMessage = `Dobrze! Zgadłeś, ${currentPlayer1.name} kosztuje więcej. Kosztuje on: €${currentPlayer1.value}M, a ${currentPlayer2.name}: €${currentPlayer2.value}!`;
                correctCount++;
            } else {
                resultMessage = `Niestety zła odpowiedź, ${currentPlayer1.name} kosztuje więcej, ${currentPlayer1.name}: €${currentPlayer1.value}M, a ${currentPlayer2.name}: €${currentPlayer2.value}M!`, correctCount = 0;
            }
        } else if (currentPlayer1.value < currentPlayer2.value) {
            if (answer === 'option_3') {
                resultMessage = `Dobrze! Zgadłeś, ${currentPlayer2.name} kosztuje więcej. Kosztuje on: €${currentPlayer2.value}M a ${currentPlayer1.name}: €${currentPlayer1.value}M!`;
                correctCount++;
            } else {
                resultMessage = `Niestety zła odpowiedź, ${currentPlayer1.name} kosztuje więcej, ${currentPlayer2.name}: €${currentPlayer2.value}M, a ${currentPlayer1.name}: €${currentPlayer1.value}M!`, correctCount = 0;
            }
        } else if (currentPlayer1.value === currentPlayer2.value) {
            if (answer === 'option_2') {
                resultMessage = `Dobrze! Zgadłeś! ${currentPlayer1.name} i ${currentPlayer1.value} mają równą wartość. Kosztują oni: €${currentPlayer1.value}M`;
                correctCount++;
            } else {
                resultMessage = `Niestety zła odpowiedź, Obaj zawodnicy mają równą wartość. Kosztują oni: €${currentPlayer1.value}M`, correctCount = 0;
            }
        }

        lastResultMessage = resultMessage;
        $('#result').text(resultMessage);
        $('#correct-count').text(`Seria: ${correctCount}`);
        $('#next').show();
    }

    $('#opcja_1').click(function() {
        checkAnswer('option_1');
        loadPlayers();
    });

    $('#opcja_2').click(function() {
        checkAnswer('option_2');
        loadPlayers();
    });

    $('#opcja_3').click(function() {
        checkAnswer('option_3');
        loadPlayers();
    });

    loadPlayers();
});
