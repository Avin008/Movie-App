import React, { useState } from "react";
import "./styles.css";

const movies = {
  Action: [
    {
      name: "Captain America - The Winter Soldier",
      about:
        "As Steve Rogers adapts to the complexities of a contemporary world, he joins Natasha Romanoff and Sam Wilson in his mission to uncover the secret behind a deadly, mysterious assassin.",
      rating: 7.7
    },
    {
      name: "Edge Of Tomorrow",
      about:
        "With the help of warrior Rita Vrataski, Major William Cage has to save Earth and the human race from an alien species, after being caught in a time loop.",
      rating: 7.9
    },
    {
      name: "Man of Steel",
      about:
        "Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.",
      rating: 7.1
    }
  ],

  Comedy: [
    {
      name: "Shaun of the Dead",
      about:
        "Shaun is a salesman whose life has no direction. However, his uneventful life takes a sudden turn when he has to singlehandedly deal with an entire community of zombies.",
      rating: 7.9
    },
    {
      name: "Tucker & Dale vs. Evil",
      about:
        "Tucker and Dale decide to go on a vacation to their cabin in the mountains. Their vacation takes a nasty turn when they are mistaken for chainsaw killers by a group of college students.",
      rating: 7.5
    },
    {
      name: "Hot Fuzz",
      about:
        "Police officer Nicholas Angel is known to be the best across London. His seniors, who are jealous of his achievements, transfer him to a remote village where he encounters various challenges.",
      rating: 7.8
    }
  ],
  Scifi: [
    {
      name: "Ready Player One",
      about:
        "James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death. Wade, a teenager, sets out on a quest to find the keys and the fortune.",
      rating: 7.4
    },
    {
      name: "Arrival",
      about:
        "Louise Banks, a linguistics expert, along with her team, must interpret the language of aliens who have come to Earth in a mysterious spaceship.",
      rating: 7.9
    },
    {
      name: "Oblivion",
      about:
        "Jack Harper, a drone repairman stationed on Earth that has been ravaged by war with extraterrestrials, questions his identity after rescuing the woman who keeps appearing in his dreams.",
      rating: 7.1
    }
  ]
};

export default function App() {
  const [movie, setMovie] = useState(movies.Scifi);

  function showMovies(genre) {
    setMovie(movies[genre]);
    movies[genre].map((movie) => {
      return (
        <div>
          <h3>{movie.name}</h3>
          <h2>{movie.about}</h2>
          <h4>{movie.rating}</h4>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>
        {" "}
        <span role="img" aria-labelledby="poster">
          🎥
        </span>{" "}
        Movie Recommendation App
      </h1>
      <hr />
      {Object.keys(movies).map((genre) => {
        return (
          <li
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              border: "2px solid purple",
              backgroundColor: "purple",
              color: "white",
              margin: "0.5rem",
              borderRadius: "1rem",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={() => showMovies(genre)}
            key={genre}
          >
            {genre}
          </li>
        );
      })}
      {movie.map((movi) => {
        return (
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "1rem",

              width: "60%",
              margin: "1rem auto"
            }}
          >
            <p style={{ fontSize: "large", fontWeight: "bold" }}>{movi.name}</p>
            <p
              style={{
                fontSize: "large",
                fontWeight: "lighter",
                padding: "0 1.5rem"
              }}
            >
              {movi.about}
            </p>
            <p style={{ fontSize: "large" }}>Rating: {movi.rating}</p>
          </div>
        );
      })}
    </div>
  );
}

// VIEW - INTERACT - CHANGESTATE - RENDER
