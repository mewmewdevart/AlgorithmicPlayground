import { useState } from "react";

import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

// Define o estado inicial do tabuleiro de jogo como uma matriz 3x3 de valores nulos
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Função para determinar o jogador ativo com base no número de jogadas
function deriveActivePlayer(gameTurns) {
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; // Cria uma cópia do tabuleiro de jogo inicial

  // Preenche o tabuleiro com as jogadas realizadas
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

// Função para erifica se há um vencedor
function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquaresSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquaresSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquaresSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquaresSymbol &&
      firstSquaresSymbol === secondSquaresSymbol &&
      firstSquaresSymbol === thirdSquaresSymbol
    ) {
      winner = players[firstSquaresSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]); // Declaração do estado para armazenar as jogadas do jogo

  const activePlayer = deriveActivePlayer(gameTurns); // Determina o jogador ativo

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  // Verifica se houve empate (9 jogadas e nenhum vencedor)
  const hasDraw = gameTurns.length === 9 && !winner;

  // Função para lidar com a seleção de uma casa no tabuleiro
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  // Função para reiniciar o jogo
  function handleStart() {
    setGameTurns([]);
  }

  // Funçao que checa quando o nome do jogador foi alterado
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <div className="centralizar">
      <div className="attention">
        <p>Please play only in desktop browsers.</p>
      </div>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleStart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </div>
  );
}

export default App;
