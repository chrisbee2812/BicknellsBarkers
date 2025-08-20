import { config } from 'dotenv';
config();

import '@/ai/flows/is-care-info-applicable.ts';
import '@/ai/flows/get-breed-care-information.ts';
import '@/ai/flows/recommend-dog-breed.ts';