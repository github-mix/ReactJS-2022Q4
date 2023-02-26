const movies = {
    1: {
        title: "Zack Snyder's Justice League",
        year: 2021,
        genres: {
            action: true, adventure: true, fantasy: true, science_fiction: true,
        },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
    },
    2: {
        title: 'Cherry',
        year: 2021,
        genres: { crime: true, drama: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg',
    },
    3: {
        title: "Mortal Kombat Legends: Scorpion's Revenge",
        year: 2020,
        genres: { animation: true, action: true, fantasy: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4VlXER3FImHeFuUjBShFamhIp9M.jpg',
    },
    4: {
        title: 'Bad Boys for Life',
        year: 2020,
        genres: { thriller: true, action: true, crime: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg',
    },
    5: {
        title: 'After We Collided',
        year: 2020,
        genres: { romance: true, drama: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg',
    },
    6: {
        title: 'Joker',
        year: 2019,
        genres: { crime: true, thriller: true, drama: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    },
    7: {
        title: 'Extraction',
        year: 2020,
        genres: { drama: true, action: true, thriller: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg',
    },
    8: {
        title: 'Demon Slayer the Movie: Mugen Train',
        year: 2020,
        genres: {
            animation: true, action: true, adventure: true, fantasy: true, drama: true,
        },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
    },
    9: {
        title: 'John Wick: Chapter 3 - Parabellum',
        year: 2019,
        genres: { action: true, thriller: true, crime: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
    },
    10: {
        title: 'Nomadland',
        year: 2020,
        genres: { drama: true, western: true },
        pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Vc5EOUEIF1EUXuX9eLFf7BvN3P.jpg',
    },
};

export default movies;

// const movies = [
//     {
//         id: 1,
//         title: "Zack Snyder's Justice League",
//         year: 2021,
//         genres: {
//             action: true, adventure: true, fantasy: true, science_fiction: true,
//         },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
//     },
//     {
//         id: 2,
//         title: 'Cherry',
//         year: 2021,
//         genres: { crime: true, drama: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg',
//     },
//     {
//         id: 3,
//         title: "Mortal Kombat Legends: Scorpion's Revenge",
//         year: 2020,
//         genres: { animation: true, action: true, fantasy: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4VlXER3FImHeFuUjBShFamhIp9M.jpg',
//     },
//     {
//         id: 4,
//         title: 'Bad Boys for Life',
//         year: 2020,
//         genres: { thriller: true, action: true, crime: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg',
//     },
//     {
//         id: 5,
//         title: 'After We Collided',
//         year: 2020,
//         genres: { romance: true, drama: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg',
//     },
//     {
//         id: 6,
//         title: 'Joker',
//         year: 2019,
//         genres: { crime: true, thriller: true, drama: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
//     },
//     {
//         id: 7,
//         title: 'Extraction',
//         year: 2020,
//         genres: { drama: true, action: true, thriller: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg',
//     },
//     {
//         id: 8,
//         title: 'Demon Slayer the Movie: Mugen Train',
//         year: 2020,
//         genres: {
//             animation: true, action: true, adventure: true, fantasy: true, drama: true,
//         },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
//     },
//     {
//         id: 9,
//         title: 'John Wick: Chapter 3 - Parabellum',
//         year: 2019,
//         genres: { action: true, thriller: true, crime: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
//     },
//     {
//         id: 10,
//         title: 'Nomadland',
//         year: 2020,
//         genres: { drama: true, western: true },
//         pictUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Vc5EOUEIF1EUXuX9eLFf7BvN3P.jpg',
//     },
//
// ];
