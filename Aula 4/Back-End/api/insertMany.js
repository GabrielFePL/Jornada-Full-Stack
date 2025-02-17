// import { db } from "./connect.js";
// import { artistArray } from "../../../Aula 3/src/assets/database/artists.js";
// import { songsArray } from "../../../Aula 3/src/assets/database/songs.js";

// const newArtistArray = artistArray.map((artist) => {
//     const newArtist = { ...artist };
//     delete newArtist.id;
//     return newArtist;
// });

// const newSongArray = songsArray.map((song) => {
//     const newSong = { ...song };
//     delete newSong.id;
//     return newSong;
// });

// const songsResponse = await db.collection("songs").insertMany(newSongArray);
// const artistsResponse = await db.collection("artists").insertMany(newArtistArray);

// // async function deleteManyFromCollection(collectionName, filter = {}) {
// //     try {
// //         const response = await db.collection(collectionName).deleteMany(filter);
// //         console.log(`Deleted ${response.deletedCount} documents from the ${collectionName} collection`);
// //     } catch (error) {
// //         console.error(`Error deleting documents from the ${collectionName} collection:`, error);
// //     }
// // }

// // const deltedArtistsResponse = await deleteManyFromCollection("artists");
// // const deletedSongsResponse = await deleteManyFromCollection("songs");

// console.log(songsResponse);
// console.log(artistsResponse);