const footballTeam ={
  team: "Dream FC",
  year: 2024,
  headCoach: "Elijah Jesugbemi",
  players: [
    { name: "Lionel Star", position: "forward", isCaptain: false },
    { name: "Diego Blaze", position: "midfielder", isCaptain: true },
    { name: "Carlos Stone", position: "defender", isCaptain: false },
    { name: "Peter Shield", position: "goalkeeper", isCaptain: false }
  ]
} 

const headCoachElement = document.getElementById("head-coach")
const teamElement = document.getElementById("team")
const yearElement = document.getElementById("year")

headCoachElement.textContent = footballTeam.headCoach
teamElement.textContent = footballTeam.team
yearElement.textContent = footballTeam.year

const playerCardsContainer = document.getElementById("player-cards")

function displayPlayers(players){
    playerCardsContainer.innerHTML = "";

  players.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerName = document.createElement("h2");

     if (player.isCaptain) {
      playerName.textContent = `(Captain) ${player.name}`;
    } else {
      playerName.textContent = player.name;
    }
     const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;

    playerCard.appendChild(playerName);
    playerCard.appendChild(playerPosition);

    playerCardsContainer.appendChild(playerCard);
  });
}
displayPlayers(footballTeam.players);

const positionFilter = document.getElementById("players")

positionFilter.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      player => player.position === selectedPosition
    );

    displayPlayers(filteredPlayers);
  }
});
