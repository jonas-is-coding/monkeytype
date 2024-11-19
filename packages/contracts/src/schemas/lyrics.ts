import { z } from "zod";
import { IdSchema } from "./util";

// Song ID schema - unique for each song
export const SongIdSchema = z
  .number()
  .int()
  .nonnegative()
  .or(z.string().regex(/^\d+$/).transform(Number));
export type SongId = z.infer<typeof SongIdSchema>;

// Song schema - Represents the basic structure of a song
export const SongSchema = z.object({
  _id: IdSchema, // Song id
  title: z.string(), // Song title
  artist: z.string(), // Artist name
  lyrics: z.string(), // Song lyrics
});
export type Song = z.infer<typeof SongSchema>;

// Schema for retrieving song lyrics based on a song name
export const SongSearchSchema = z.object({
  songName: z.string(), // Name of the requested song
  artist: z.string().optional(), // Artist
});
export type SongSearch = z.infer<typeof SongSearchSchema>;
