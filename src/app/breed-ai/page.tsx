import { BreedRecommenderClient } from "@/components/breed-recommender-client";

export default function BreedRecommenderPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Breed AI</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover your perfect canine companion with our AI-powered tools. Whether you're looking for a breed recommendation or need specific care information, we're here to help.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <BreedRecommenderClient />
      </div>
    </div>
  );
}
