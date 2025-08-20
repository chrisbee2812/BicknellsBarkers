'use server';
/**
 * @fileOverview Retrieves care information for a specified dog breed.
 *
 * - getBreedCareInformation - A function that retrieves care information for a dog breed.
 * - GetBreedCareInformationInput - The input type for the getBreedCareInformation function.
 * - GetBreedCareInformationOutput - The return type for the getBreedCareInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetBreedCareInformationInputSchema = z.object({
  breed: z.string().describe('The name of the dog breed.'),
});
export type GetBreedCareInformationInput = z.infer<typeof GetBreedCareInformationInputSchema>;

const GetBreedCareInformationOutputSchema = z.object({
  careInformation: z
    .string()
    .describe('Care information for the specified dog breed.'),
});
export type GetBreedCareInformationOutput = z.infer<typeof GetBreedCareInformationOutputSchema>;

export async function getBreedCareInformation(
  input: GetBreedCareInformationInput
): Promise<GetBreedCareInformationOutput> {
  return getBreedCareInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getBreedCareInformationPrompt',
  input: {schema: GetBreedCareInformationInputSchema},
  output: {schema: GetBreedCareInformationOutputSchema},
  prompt: `You are a dog care expert. Provide detailed care information for the following dog breed:

Breed: {{{breed}}}

Care Information:`,
});

const getBreedCareInformationFlow = ai.defineFlow(
  {
    name: 'getBreedCareInformationFlow',
    inputSchema: GetBreedCareInformationInputSchema,
    outputSchema: GetBreedCareInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
