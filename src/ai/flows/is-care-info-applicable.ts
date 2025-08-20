 'use server';
/**
 * @fileOverview Determines if a piece of care information is applicable to a given dog breed.
 *
 * - isCareInfoApplicable - A function that checks the relevance of care information for a breed.
 * - IsCareInfoApplicableInput - The input type for the isCareInfoApplicable function.
 * - IsCareInfoApplicableOutput - The return type for the isCareInfoApplicable function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IsCareInfoApplicableInputSchema = z.object({
  breed: z.string().describe('The dog breed to check against.'),
  careInformation: z.string().describe('A piece of care information.'),
});
export type IsCareInfoApplicableInput = z.infer<typeof IsCareInfoApplicableInputSchema>;

const IsCareInfoApplicableOutputSchema = z.object({
  isApplicable: z.boolean().describe('Whether the care information is applicable to the breed.'),
  reason: z.string().optional().describe('The reasoning behind the applicability decision.'),
});
export type IsCareInfoApplicableOutput = z.infer<typeof IsCareInfoApplicableOutputSchema>;

export async function isCareInfoApplicable(input: IsCareInfoApplicableInput): Promise<IsCareInfoApplicableOutput> {
  return isCareInfoApplicableFlow(input);
}

const prompt = ai.definePrompt({
  name: 'isCareInfoApplicablePrompt',
  input: {schema: IsCareInfoApplicableInputSchema},
  output: {schema: IsCareInfoApplicableOutputSchema},
  prompt: `You are an expert dog breed specialist. Your task is to determine if the provided care information is applicable to the given dog breed.

  Breed: {{{breed}}}
  Care Information: {{{careInformation}}}

  Respond with whether the care information is applicable to the breed, and briefly explain why or why not. Consider breed-specific traits, common health issues, and typical behaviors when making your determination.
`,
});

const isCareInfoApplicableFlow = ai.defineFlow(
  {
    name: 'isCareInfoApplicableFlow',
    inputSchema: IsCareInfoApplicableInputSchema,
    outputSchema: IsCareInfoApplicableOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
