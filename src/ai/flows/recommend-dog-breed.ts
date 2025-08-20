'use server';

/**
 * @fileOverview Recommends a dog breed based on user-provided care preferences.
 *
 * - recommendDogBreed - A function that handles the dog breed recommendation process.
 * - RecommendDogBreedInput - The input type for the recommendDogBreed function.
 * - RecommendDogBreedOutput - The return type for the recommendDogBreed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendDogBreedInputSchema = z.object({
  size: z
    .string()
    .describe('The desired size of the dog (e.g., small, medium, large).'),
  energyLevel: z
    .string()
    .describe('The desired energy level of the dog (e.g., low, medium, high).'),
  temperament: z
    .string()
    .describe(
      'The desired temperament of the dog (e.g., calm, friendly, playful).'
    ),
});
export type RecommendDogBreedInput = z.infer<typeof RecommendDogBreedInputSchema>;

const RecommendedBreedSchema = z.object({
  breed: z.string().describe('The recommended dog breed.'),
  reason: z
    .string()
    .describe(
      'The reason why this breed is recommended based on the user input.'
    ),
});

const RecommendDogBreedOutputSchema = z.object({
  recommendations: z.array(RecommendedBreedSchema).describe('A list of up to two recommended dog breeds.'),
});
export type RecommendDogBreedOutput = z.infer<typeof RecommendDogBreedOutputSchema>;

export async function recommendDogBreed(
  input: RecommendDogBreedInput
): Promise<RecommendDogBreedOutput> {
  return recommendDogBreedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendDogBreedPrompt',
  input: {schema: RecommendDogBreedInputSchema},
  output: {schema: RecommendDogBreedOutputSchema},
  prompt: `You are a dog breed expert. Based on the user's preferences for size, energy level, and temperament, recommend one or two dog breeds that would be a good fit for them. For each recommendation, explain why you are recommending that breed based on the preferences.

Preferences:
Size: {{{size}}}
Energy Level: {{{energyLevel}}}
Temperament: {{{temperament}}}`,
});

const recommendDogBreedFlow = ai.defineFlow(
  {
    name: 'recommendDogBreedFlow',
    inputSchema: RecommendDogBreedInputSchema,
    outputSchema: RecommendDogBreedOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
