export interface DbMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genres: string[];
  runtime: number;
  year: string;
}

export const movieDatabase: DbMovie[] = [
  {
    "id": "tt0468569",
    "title": "The Dark Knight",
    "overview": "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "18 Jul 2008",
    "vote_average": 9.1,
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "runtime": 152,
    "year": "2008"
  },
  {
    "id": "tt1375666",
    "title": "Inception",
    "overview": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "16 Jul 2010",
    "vote_average": 8.8,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "runtime": 148,
    "year": "2010"
  },
  {
    "id": "tt0172495",
    "title": "Gladiator",
    "overview": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "05 May 2000",
    "vote_average": 8.5,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "runtime": 155,
    "year": "2000"
  },
  {
    "id": "tt4154796",
    "title": "Avengers: Endgame",
    "overview": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "26 Apr 2019",
    "vote_average": 8.4,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "runtime": 181,
    "year": "2019"
  },
  {
    "id": "tt0133093",
    "title": "The Matrix",
    "overview": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "31 Mar 1999",
    "vote_average": 8.7,
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "runtime": 136,
    "year": "1999"
  },
  {
    "id": "tt1392190",
    "title": "Mad Max: Fury Road",
    "overview": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "15 May 2015",
    "vote_average": 8.1,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "runtime": 120,
    "year": "2015"
  },
  {
    "id": "tt4633694",
    "title": "Spider-Man: Into the Spider-Verse",
    "overview": "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    "release_date": "14 Dec 2018",
    "vote_average": 8.4,
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "runtime": 117,
    "year": "2018"
  },
  {
    "id": "tt0095016",
    "title": "Die Hard",
    "overview": "A New York City cop, John McClane, tries to save his estranged wife and several others taken hostage by terrorists during a Christmas Eve party at the Nakatomi Plaza Skyscraper in Los Angeles, California.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "20 Jul 1988",
    "vote_average": 8.2,
    "genres": [
      "Action",
      "Thriller"
    ],
    "runtime": 132,
    "year": "1988"
  },
  {
    "id": "tt0103064",
    "title": "Terminator 2: Judgment Day",
    "overview": "A cyborg from the future, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from an even more advanced and powerful cyborg.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "release_date": "03 Jul 1991",
    "vote_average": 8.6,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "runtime": 137,
    "year": "1991"
  },
  {
    "id": "tt0090605",
    "title": "Aliens",
    "overview": "Decades after surviving the Nostromo incident, Ellen Ripley is sent out to re-establish contact with a terraforming colony but finds herself battling the Alien Queen and her offspring.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZjIyNGJhYzYtN2I1My00OTVhLWEyMzItZTVjNDMzOTVkYWViXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZjIyNGJhYzYtN2I1My00OTVhLWEyMzItZTVjNDMzOTVkYWViXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "release_date": "18 Jul 1986",
    "vote_average": 8.4,
    "genres": [
      "Action",
      "Adventure",
      "Horror"
    ],
    "runtime": 137,
    "year": "1986"
  },
  {
    "id": "tt0816692",
    "title": "Interstellar",
    "overview": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "07 Nov 2014",
    "vote_average": 8.7,
    "genres": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "runtime": 169,
    "year": "2014"
  },
  {
    "id": "tt15239678",
    "title": "Dune: Part Two",
    "overview": "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible fu...",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "01 Mar 2024",
    "vote_average": 8.4,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "runtime": 166,
    "year": "2024"
  },
  {
    "id": "tt1160419",
    "title": "Dune: Part One",
    "overview": "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "release_date": "22 Oct 2021",
    "vote_average": 8,
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "runtime": 155,
    "year": "2021"
  },
  {
    "id": "tt0499549",
    "title": "Avatar",
    "overview": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "18 Dec 2009",
    "vote_average": 7.9,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 162,
    "year": "2009"
  },
  {
    "id": "tt0080684",
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "overview": "After the Empire overpowers the Rebel Alliance, Luke Skywalker begins training with Jedi Master Yoda, while Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "18 Jun 1980",
    "vote_average": 8.7,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 124,
    "year": "1980"
  },
  {
    "id": "tt0076759",
    "title": "Star Wars: Episode IV - A New Hope",
    "overview": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "25 May 1977",
    "vote_average": 8.6,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 121,
    "year": "1977"
  },
  {
    "id": "tt0120737",
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "overview": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "release_date": "19 Dec 2001",
    "vote_average": 8.9,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "runtime": 178,
    "year": "2001"
  },
  {
    "id": "tt0167260",
    "title": "The Lord of the Rings: The Return of the King",
    "overview": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "17 Dec 2003",
    "vote_average": 9,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "runtime": 201,
    "year": "2003"
  },
  {
    "id": "tt1856101",
    "title": "Blade Runner 2049",
    "overview": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "06 Oct 2017",
    "vote_average": 8,
    "genres": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "runtime": 164,
    "year": "2017"
  },
  {
    "id": "tt0088763",
    "title": "Back to the Future",
    "overview": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "release_date": "03 Jul 1985",
    "vote_average": 8.5,
    "genres": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "runtime": 116,
    "year": "1985"
  },
  {
    "id": "tt15398776",
    "title": "Oppenheimer",
    "overview": "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "21 Jul 2023",
    "vote_average": 8.2,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "runtime": 180,
    "year": "2023"
  },
  {
    "id": "tt0111161",
    "title": "The Shawshank Redemption",
    "overview": "A wrongfully convicted banker forms a close friendship with a hardened convict over a quarter century while retaining his humanity through simple acts of compassion.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "14 Oct 1994",
    "vote_average": 9.3,
    "genres": [
      "Drama"
    ],
    "runtime": 142,
    "year": "1994"
  },
  {
    "id": "tt0068646",
    "title": "The Godfather",
    "overview": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "release_date": "24 Mar 1972",
    "vote_average": 9.2,
    "genres": [
      "Crime",
      "Drama"
    ],
    "runtime": 175,
    "year": "1972"
  },
  {
    "id": "tt0071562",
    "title": "The Godfather Part II",
    "overview": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "18 Dec 1974",
    "vote_average": 9,
    "genres": [
      "Crime",
      "Drama"
    ],
    "runtime": 202,
    "year": "1974"
  },
  {
    "id": "tt0109830",
    "title": "Forrest Gump",
    "overview": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "release_date": "06 Jul 1994",
    "vote_average": 8.8,
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 142,
    "year": "1994"
  },
  {
    "id": "tt0137523",
    "title": "Fight Club",
    "overview": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "15 Oct 1999",
    "vote_average": 8.8,
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "runtime": 139,
    "year": "1999"
  },
  {
    "id": "tt0110912",
    "title": "Pulp Fiction",
    "overview": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "release_date": "14 Oct 1994",
    "vote_average": 8.8,
    "genres": [
      "Crime",
      "Drama"
    ],
    "runtime": 154,
    "year": "1994"
  },
  {
    "id": "tt6751668",
    "title": "Parasite",
    "overview": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "08 Nov 2019",
    "vote_average": 8.5,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "runtime": 132,
    "year": "2019"
  },
  {
    "id": "tt2884206",
    "title": "I Origins",
    "overview": "A molecular biologist and his laboratory partner uncover evidence that may fundamentally change society as we know it.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTQ0MTAwMDI1OF5BMl5BanBnXkFtZTgwNjUwMTA2MTE@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTQ0MTAwMDI1OF5BMl5BanBnXkFtZTgwNjUwMTA2MTE@._V1_SX300.jpg",
    "release_date": "18 Jul 2014",
    "vote_average": 7.3,
    "genres": [
      "Drama",
      "Mystery",
      "Romance"
    ],
    "runtime": 106,
    "year": "2014"
  },
  {
    "id": "tt0108052",
    "title": "Schindler's List",
    "overview": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "04 Feb 1994",
    "vote_average": 9,
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "runtime": 195,
    "year": "1994"
  },
  {
    "id": "tt0099685",
    "title": "GoodFellas",
    "overview": "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "release_date": "21 Sep 1990",
    "vote_average": 8.7,
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "runtime": 145,
    "year": "1990"
  },
  {
    "id": "tt0073486",
    "title": "One Flew Over the Cuckoo's Nest",
    "overview": "A rebellious convict is sent to a psychiatric hospital for evaluation in 1963 Oregon, and encourages his docile companions to take more control of their lives and defy the tyrannical head nurse.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "release_date": "21 Nov 1975",
    "vote_average": 8.6,
    "genres": [
      "Drama"
    ],
    "runtime": 133,
    "year": "1975"
  },
  {
    "id": "tt0120689",
    "title": "The Green Mile",
    "overview": "A death row guard learns that a gentle giant in his charge possesses a mysterious gift.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "10 Dec 1999",
    "vote_average": 8.6,
    "genres": [
      "Crime",
      "Drama",
      "Fantasy"
    ],
    "runtime": 189,
    "year": "1999"
  },
  {
    "id": "tt1285016",
    "title": "The Social Network",
    "overview": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "01 Oct 2010",
    "vote_average": 7.8,
    "genres": [
      "Biography",
      "Drama"
    ],
    "runtime": 120,
    "year": "2010"
  },
  {
    "id": "tt1517268",
    "title": "Barbie",
    "overview": "Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "21 Jul 2023",
    "vote_average": 6.8,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "runtime": 114,
    "year": "2023"
  },
  {
    "id": "tt0829482",
    "title": "Superbad",
    "overview": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "17 Aug 2007",
    "vote_average": 7.6,
    "genres": [
      "Comedy"
    ],
    "runtime": 113,
    "year": "2007"
  },
  {
    "id": "tt2278340",
    "title": "Episode dated 7 October 2010",
    "overview": "",
    "poster_path": null,
    "backdrop_path": null,
    "release_date": "07 Oct 2010",
    "vote_average": 0,
    "genres": [
      "Crime"
    ],
    "runtime": 25,
    "year": "2010"
  },
  {
    "id": "tt0120382",
    "title": "The Truman Show",
    "overview": "An insurance salesman begins to suspect that his whole life is actually some sort of reality TV show.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "05 Jun 1998",
    "vote_average": 8.2,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "runtime": 103,
    "year": "1998"
  },
  {
    "id": "tt1119646",
    "title": "The Hangover",
    "overview": "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend in time for his wedding.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "05 Jun 2009",
    "vote_average": 7.7,
    "genres": [
      "Comedy"
    ],
    "runtime": 100,
    "year": "2009"
  },
  {
    "id": "tt0107048",
    "title": "Groundhog Day",
    "overview": "A narcissistic, self-centered weatherman finds himself in a time loop on Groundhog Day.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "12 Feb 1993",
    "vote_average": 8,
    "genres": [
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "runtime": 101,
    "year": "1993"
  },
  {
    "id": "tt0071853",
    "title": "Monty Python and the Holy Grail",
    "overview": "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYWY4YmUzZmUtMzQ0ZS00N2Y2LWJlODQtN2IwMDc1MWQwMmU3XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYWY4YmUzZmUtMzQ0ZS00N2Y2LWJlODQtN2IwMDc1MWQwMmU3XkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "18 Jul 1975",
    "vote_average": 8.2,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "runtime": 91,
    "year": "1975"
  },
  {
    "id": "tt0365748",
    "title": "Shaun of the Dead",
    "overview": "The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "24 Sep 2004",
    "vote_average": 7.8,
    "genres": [
      "Comedy",
      "Horror"
    ],
    "runtime": 99,
    "year": "2004"
  },
  {
    "id": "tt0353131",
    "title": "The 45th Annual Academy Awards",
    "overview": "The 45th Annual Academy Awards were held at the Dorothy Chandler Pavilion at the Los Angeles Music Center. The ceremony was held there from 1969 to 1987, 1990, 1992 to 1994, 1996, and 1999.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZGJmNGQzYWUtZGQyMi00NjM2LWFiYjMtNTdiNDk1OTVlYzE4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZGJmNGQzYWUtZGQyMi00NjM2LWFiYjMtNTdiNDk1OTVlYzE4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "release_date": "27 Mar 1973",
    "vote_average": 6.6,
    "genres": [
      "News"
    ],
    "runtime": 0,
    "year": "1973"
  },
  {
    "id": "tt1156398",
    "title": "Zombieland",
    "overview": "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg",
    "release_date": "02 Oct 2009",
    "vote_average": 7.5,
    "genres": [
      "Action",
      "Comedy",
      "Horror"
    ],
    "runtime": 88,
    "year": "2009"
  },
  {
    "id": "tt0114388",
    "title": "Sense and Sensibility",
    "overview": "In Georgian era England, wealthy Mr. Dashwood dies leaving his second wife and three daughters destitute. The ladies move to a modest cottage where the two older daughters vie for the attention of various suitors in search of true...",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BY2MyZWJhNjktMWQ2My00OTgwLWI1NjEtYjUzM2M2N2M4Mzc4XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BY2MyZWJhNjktMWQ2My00OTgwLWI1NjEtYjUzM2M2N2M4Mzc4XkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "26 Jan 1996",
    "vote_average": 7.7,
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 136,
    "year": "1995"
  },
  {
    "id": "tt0102926",
    "title": "The Silence of the Lambs",
    "overview": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "release_date": "14 Feb 1991",
    "vote_average": 8.6,
    "genres": [
      "Crime",
      "Drama",
      "Horror"
    ],
    "runtime": 118,
    "year": "1991"
  },
  {
    "id": "tt1130884",
    "title": "Shutter Island",
    "overview": "Two US marshals are sent to a mental institution on an inhospitable island in order to investigate the disappearance of a patient.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "19 Feb 2010",
    "vote_average": 8.2,
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "runtime": 138,
    "year": "2010"
  },
  {
    "id": "tt0482571",
    "title": "The Prestige",
    "overview": "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but, with terrible consequences.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTM3MzQ5MjQ5OF5BMl5BanBnXkFtZTcwMTQ3NzMzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTM3MzQ5MjQ5OF5BMl5BanBnXkFtZTcwMTQ3NzMzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "release_date": "20 Oct 2006",
    "vote_average": 8.5,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "runtime": 130,
    "year": "2006"
  },
  {
    "id": "tt0209144",
    "title": "Memento",
    "overview": "A former insurance investigator who now suffers from anterograde amnesia uses notes and tattoos to hunt down his wife's murderer.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "25 May 2001",
    "vote_average": 8.4,
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "runtime": 113,
    "year": "2001"
  },
  {
    "id": "tt0443706",
    "title": "Zodiac",
    "overview": "Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "release_date": "02 Mar 2007",
    "vote_average": 7.7,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "runtime": 157,
    "year": "2007"
  },
  {
    "id": "tt8108194",
    "title": "Salaam Zindagi",
    "overview": "Two brothers, Imran and Irfan who have suffered mostly failures, live a boring and monotonous life doing odd jobs for survival. Things change when the two set off to Chicago, USA with their old friend Usman Bhai.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZTYyYjlmMTYtNDVmZi00NDllLThiYjItOWZiMzJhZjk0MDU5XkEyXkFqcGdeQXVyNjgyNDc4Mjc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZTYyYjlmMTYtNDVmZi00NDllLThiYjItOWZiMzJhZjk0MDU5XkEyXkFqcGdeQXVyNjgyNDc4Mjc@._V1_SX300.jpg",
    "release_date": "2017",
    "vote_average": 6.4,
    "genres": [
      "Drama"
    ],
    "runtime": 120,
    "year": "2017"
  },
  {
    "id": "tt2267998",
    "title": "Gone Girl",
    "overview": "The husband of a missing woman becomes the main suspect in her disappearance.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "release_date": "03 Oct 2014",
    "vote_average": 8.1,
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "runtime": 149,
    "year": "2014"
  },
  {
    "id": "tt1392214",
    "title": "Prisoners",
    "overview": "A desperate father takes the law into his own hands after police fail to find two kidnapped girls.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
    "release_date": "20 Sep 2013",
    "vote_average": 8.2,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "runtime": 153,
    "year": "2013"
  },
  {
    "id": "tt0081505",
    "title": "The Shining",
    "overview": "A family heads to an isolated hotel for the winter, where a sinister presence influences the father into violence. At the same time, his psychic son sees horrifying forebodings from both the past and the future.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "13 Jun 1980",
    "vote_average": 8.4,
    "genres": [
      "Drama",
      "Horror"
    ],
    "runtime": 146,
    "year": "1980"
  },
  {
    "id": "tt0078748",
    "title": "Alien",
    "overview": "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "release_date": "22 Jun 1979",
    "vote_average": 8.5,
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "runtime": 117,
    "year": "1979"
  },
  {
    "id": "tt5052448",
    "title": "Get Out",
    "overview": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "24 Feb 2017",
    "vote_average": 7.8,
    "genres": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "runtime": 104,
    "year": "2017"
  },
  {
    "id": "tt0054215",
    "title": "Psycho",
    "overview": "A secretary on the run for embezzlement takes refuge at a secluded California motel owned by a repressed man and his overbearing mother.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "release_date": "08 Sep 1960",
    "vote_average": 8.5,
    "genres": [
      "Drama",
      "Horror",
      "Mystery"
    ],
    "runtime": 109,
    "year": "1960"
  },
  {
    "id": "tt7784604",
    "title": "Hereditary",
    "overview": "A grieving family is haunted by tragic and disturbing occurrences.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "08 Jun 2018",
    "vote_average": 7.3,
    "genres": [
      "Drama",
      "Horror",
      "Mystery"
    ],
    "runtime": 127,
    "year": "2018"
  },
  {
    "id": "tt6644282",
    "title": "The Vile Village: Part Two",
    "overview": "The orphans find themselves under. suspicion in the wake of a devastating murder. But time behind bars leads to an important realization.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYTllY2U5YzctZjg2Yy00MTUyLTk4MTMtMTk1MTg0YTFkOGM5XkEyXkFqcGdeQXVyODQzMjgwODk@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYTllY2U5YzctZjg2Yy00MTUyLTk4MTMtMTk1MTg0YTFkOGM5XkEyXkFqcGdeQXVyODQzMjgwODk@._V1_SX300.jpg",
    "release_date": "30 Mar 2018",
    "vote_average": 7.9,
    "genres": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "runtime": 41,
    "year": "2018"
  },
  {
    "id": "tt1457767",
    "title": "The Conjuring",
    "overview": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "19 Jul 2013",
    "vote_average": 7.5,
    "genres": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "runtime": 112,
    "year": "2013"
  },
  {
    "id": "tt1396484",
    "title": "It",
    "overview": "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "08 Sep 2017",
    "vote_average": 7.3,
    "genres": [
      "Horror"
    ],
    "runtime": 135,
    "year": "2017"
  },
  {
    "id": "tt0084787",
    "title": "The Thing",
    "overview": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "25 Jun 1982",
    "vote_average": 8.2,
    "genres": [
      "Horror",
      "Mystery",
      "Sci-Fi"
    ],
    "runtime": 109,
    "year": "1982"
  },
  {
    "id": "tt0077651",
    "title": "Halloween",
    "overview": "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois, to kill again.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMzZiNTdiYTgtYjNkMS00MmJmLWEwZGQtNmY0NGJkMGE0YmYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMzZiNTdiYTgtYjNkMS00MmJmLWEwZGQtNmY0NGJkMGE0YmYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "release_date": "27 Oct 1978",
    "vote_average": 7.7,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "runtime": 91,
    "year": "1978"
  },
  {
    "id": "tt0120338",
    "title": "Titanic",
    "overview": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "release_date": "19 Dec 1997",
    "vote_average": 8,
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 194,
    "year": "1997"
  },
  {
    "id": "tt4477584",
    "title": "Darkness and Light",
    "overview": "In this feature-length documentary, an artist interviews eleven wounded veterans, largely post-9/11 war veterans and Marines, through the lens of her photography series, 'You. Are. ...",
    "poster_path": null,
    "backdrop_path": null,
    "release_date": "2015",
    "vote_average": 0,
    "genres": [
      "Documentary",
      "War"
    ],
    "runtime": 101,
    "year": "2015"
  },
  {
    "id": "tt0338013",
    "title": "Eternal Sunshine of the Spotless Mind",
    "overview": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
    "release_date": "19 Mar 2004",
    "vote_average": 8.3,
    "genres": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "runtime": 108,
    "year": "2004"
  },
  {
    "id": "tt0332280",
    "title": "The Notebook",
    "overview": "An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by the difference in their respective social classes.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "release_date": "25 Jun 2004",
    "vote_average": 7.8,
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 123,
    "year": "2004"
  },
  {
    "id": "tt0414387",
    "title": "Pride & Prejudice",
    "overview": "When Elizabeth Bennet meets the handsome Mr. Darcy, she believes he is the last man she could ever marry, but as their lives become intertwined, she finds herself captivated by the man she has sworn to hate forever.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_SX300.jpg",
    "release_date": "23 Nov 2005",
    "vote_average": 7.8,
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 129,
    "year": "2005"
  },
  {
    "id": "tt2194499",
    "title": "About Time",
    "overview": "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_SX300.jpg",
    "release_date": "08 Nov 2013",
    "vote_average": 7.8,
    "genres": [
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "runtime": 123,
    "year": "2013"
  },
  {
    "id": "tt0112471",
    "title": "Before Sunrise",
    "overview": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "27 Jan 1995",
    "vote_average": 8.1,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "runtime": 101,
    "year": "1995"
  },
  {
    "id": "tt1022603",
    "title": "500 Days of Summer",
    "overview": "After being dumped by the girl he believes to be his soulmate, hopeless romantic Tom Hansen reflects on their relationship to try and figure out where things went wrong and how he can win her back.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_SX300.jpg",
    "release_date": "07 Aug 2009",
    "vote_average": 7.6,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "runtime": 95,
    "year": "2009"
  },
  {
    "id": "tt1798709",
    "title": "Her",
    "overview": "In the near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "10 Jan 2014",
    "vote_average": 8,
    "genres": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "runtime": 126,
    "year": "2014"
  },
  {
    "id": "tt0034583",
    "title": "Casablanca",
    "overview": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "release_date": "23 Jan 1943",
    "vote_average": 8.5,
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "runtime": 102,
    "year": "1943"
  },
  {
    "id": "tt0245429",
    "title": "Spirited Away",
    "overview": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "release_date": "28 Mar 2003",
    "vote_average": 8.6,
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "runtime": 124,
    "year": "2003"
  },
  {
    "id": "tt0110357",
    "title": "The Lion King",
    "overview": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "24 Jun 1994",
    "vote_average": 8.5,
    "genres": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "runtime": 88,
    "year": "1994"
  },
  {
    "id": "tt0114709",
    "title": "Toy Story",
    "overview": "A cowboy doll is profoundly jealous when a new spaceman action figure supplants him as the top toy in a boy's bedroom. When circumstances separate them from their owner, the duo have to put aside their differences to return to him.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "22 Nov 1995",
    "vote_average": 8.3,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "runtime": 81,
    "year": "1995"
  },
  {
    "id": "tt0910970",
    "title": "WALL·E",
    "overview": "A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    "release_date": "27 Jun 2008",
    "vote_average": 8.4,
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "runtime": 98,
    "year": "2008"
  },
  {
    "id": "tt2380307",
    "title": "Coco",
    "overview": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "release_date": "22 Nov 2017",
    "vote_average": 8.4,
    "genres": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "runtime": 105,
    "year": "2017"
  },
  {
    "id": "tt5311514",
    "title": "Your Name.",
    "overview": "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "07 Apr 2017",
    "vote_average": 8.4,
    "genres": [
      "Animation",
      "Drama",
      "Fantasy"
    ],
    "runtime": 106,
    "year": "2016"
  },
  {
    "id": "tt2096698",
    "title": "Zendeh Rood",
    "overview": "",
    "poster_path": null,
    "backdrop_path": null,
    "release_date": "2010",
    "vote_average": 0,
    "genres": [
      "Documentary",
      "Short",
      "History"
    ],
    "runtime": 15,
    "year": "2010"
  },
  {
    "id": "tt9362722",
    "title": "Spider-Man: Across the Spider-Verse",
    "overview": "Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions. But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg",
    "release_date": "02 Jun 2023",
    "vote_average": 8.5,
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "runtime": 140,
    "year": "2023"
  }
];
