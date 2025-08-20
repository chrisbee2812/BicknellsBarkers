'use client';

import { useState, useTransition, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  recommendDogBreed,
  type RecommendDogBreedOutput,
} from '@/ai/flows/recommend-dog-breed';
import {
  getBreedCareInformation,
  type GetBreedCareInformationOutput,
} from '@/ai/flows/get-breed-care-information';
import {
  isCareInfoApplicable,
  type IsCareInfoApplicableOutput,
} from '@/ai/flows/is-care-info-applicable';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Wand2, Search, CheckCircle, XCircle, BookHeart } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

const recommendationSchema = z.object({
  size: z.string().min(1, 'Please select a size.'),
  energyLevel: z.string().min(1, 'Please select an energy level.'),
  temperament: z.string().min(1, 'Please select a temperament.'),
});

function LoadingSpinner() {
  return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
}

function AiResultCard({ title, icon: Icon, children }: {title: string, icon: React.ElementType, children: React.ReactNode}) {
    return (
        <Card className="mt-6 bg-secondary/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-primary"/>
                <CardTitle className="font-headline text-2xl">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
                <div className="prose prose-stone dark:prose-invert max-w-none text-foreground">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

export function BreedRecommenderClient() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState('recommend');

  // State for Recommendation
  const [recommendationResult, setRecommendationResult] = useState<RecommendDogBreedOutput | null>(null);

  // State for Care Info
  const [careInfoResult, setCareInfoResult] = useState<GetBreedCareInformationOutput | null>(null);
  const careBreedRef = useRef<HTMLInputElement>(null);

  // State for Applicability
  const [applicabilityResult, setApplicabilityResult] = useState<IsCareInfoApplicableOutput | null>(null);
  const applicableBreedRef = useRef<HTMLInputElement>(null);
  const applicableInfoRef = useRef<HTMLTextAreaElement>(null);


  const form = useForm<z.infer<typeof recommendationSchema>>({
    resolver: zodResolver(recommendationSchema),
    defaultValues: { size: '', energyLevel: '', temperament: '' },
  });

  const handleRecommendation = form.handleSubmit(async (data) => {
    setRecommendationResult(null);
    startTransition(async () => {
      const result = await recommendDogBreed(data);
      if (result) {
        setRecommendationResult(result);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not get a recommendation. Please try again.',
        });
      }
    });
  });

  const fetchCareInfo = (breed: string) => {
    setCareInfoResult(null);
    startTransition(async () => {
      const result = await getBreedCareInformation({ breed });
      if (result) {
        setCareInfoResult(result);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not retrieve care information. Please check the breed name and try again.',
        });
      }
    });
  }

  const handleCareInfo = () => {
    const breed = careBreedRef.current?.value;
    if (!breed) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please enter a breed name.' });
      return;
    }
    fetchCareInfo(breed);
  };
  
  const handleGetCareInfoForBreed = (breed: string) => {
    if (careBreedRef.current) {
      careBreedRef.current.value = breed;
    }
    setActiveTab('care-info');
    fetchCareInfo(breed);
  };

  const handleApplicabilityCheck = () => {
    const breed = applicableBreedRef.current?.value;
    const careInformation = applicableInfoRef.current?.value;
    if (!breed || !careInformation) {
        toast({ variant: 'destructive', title: 'Error', description: 'Please enter both a breed and care information.' });
        return;
    }
    setApplicabilityResult(null);
    startTransition(async () => {
        const result = await isCareInfoApplicable({ breed, careInformation });
        if(result) {
            setApplicabilityResult(result);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not check applicability. Please try again.',
            });
        }
    });
  };

  return (
    <Card className="shadow-xl">
      <CardContent className="p-2 md:p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommend"><Wand2 className="w-4 h-4 mr-2"/>Recommend a Breed</TabsTrigger>
            <TabsTrigger value="care-info"><Search className="w-4 h-4 mr-2"/>Care Information</TabsTrigger>
            <TabsTrigger value="applicability"><Sparkles className="w-4 h-4 mr-2"/>Check Care Info</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommend" className="p-4">
            <CardHeader className="text-center px-0">
              <CardTitle className="font-headline text-2xl">Breed Recommender</CardTitle>
              <CardDescription>Tell us what you're looking for in a dog, and our AI will suggest a breed.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={handleRecommendation} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <FormField control={form.control} name="size" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select a size" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium-small">Medium-Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="medium-large">Medium-Large</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="energyLevel" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Energy Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                         <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select an energy level" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium-low">Medium-Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="medium-high">Medium-High</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="temperament" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Temperament</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select a temperament" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="calm">Calm</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="playful">Playful</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? <LoadingSpinner /> : <Wand2 className="mr-2 h-4 w-4" />}
                  Recommend Breed
                </Button>
              </form>
            </Form>
            {isPending && form.formState.isSubmitting && <div className="text-center p-8"><LoadingSpinner /> Finding the perfect pup...</div>}
            {recommendationResult && (
               <AiResultCard title="AI Recommendation" icon={Wand2}>
                <div className="space-y-4">
                  {recommendationResult.recommendations.map((rec: { breed: string; reason: string }, index: number) => (
                    <div key={index} className={index > 0 ? "pt-4 border-t border-border" : ""}>
                        <div className="flex justify-between items-start">
                           <div>
                            <h3 className="text-2xl font-bold font-headline text-accent">{rec.breed}</h3>
                            <p>{rec.reason}</p>
                           </div>
                           <Button 
                             variant="outline" 
                             size="sm" 
                             onClick={() => handleGetCareInfoForBreed(rec.breed)}
                             className="ml-4 flex-shrink-0"
                           >
                             <BookHeart className="mr-2 h-4 w-4"/>
                             Care Info
                           </Button>
                        </div>
                    </div>
                  ))}
                  </div>
                </AiResultCard>
            )}
          </TabsContent>
          
          <TabsContent value="care-info" className="p-4">
             <CardHeader className="text-center px-0">
              <CardTitle className="font-headline text-2xl">Breed Care Information</CardTitle>
              <CardDescription>Enter a dog breed to get detailed care information from our AI expert.</CardDescription>
            </CardHeader>
            <div className="space-y-4">
              <Label htmlFor="care-breed">Dog Breed</Label>
              <div className="flex gap-2">
                <Input id="care-breed" ref={careBreedRef} placeholder="e.g., Golden Retriever" />
                <Button onClick={handleCareInfo} disabled={isPending}>
                    {isPending && activeTab === 'care-info' ? <LoadingSpinner /> : <Search className="mr-2 h-4 w-4" />}
                    Get Info
                </Button>
              </div>
            </div>
            {isPending && activeTab === 'care-info' && <div className="text-center p-8"><LoadingSpinner /> Fetching care guide...</div>}
            {careInfoResult && (
                <AiResultCard title={`Care Guide for ${careBreedRef.current?.value}`} icon={Search}>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{careInfoResult.careInformation}</p>
                </AiResultCard>
            )}
          </TabsContent>

          <TabsContent value="applicability" className="p-4">
            <CardHeader className="text-center px-0">
                <CardTitle className="font-headline text-2xl">Care Information Applicability</CardTitle>
                <CardDescription>Is a piece of advice right for your dog? Our AI can check.</CardDescription>
            </CardHeader>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="applicability-breed">Dog Breed</Label>
                    <Input id="applicability-breed" ref={applicableBreedRef} placeholder="e.g., Beagle"/>
                </div>
                <div>
                    <Label htmlFor="applicability-info">Care Information</Label>
                    <Textarea id="applicability-info" ref={applicableInfoRef} placeholder="e.g., Needs at least 2 hours of exercise daily."/>
                </div>
                <Button onClick={handleApplicabilityCheck} disabled={isPending} className="w-full">
                    {isPending && activeTab === 'applicability' ? <LoadingSpinner /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Check Applicability
                </Button>
            </div>
            {isPending && activeTab === 'applicability' && <div className="text-center p-8"><LoadingSpinner /> Analyzing information...</div>}
            {applicabilityResult && (
                 <AiResultCard title="AI Analysis" icon={Sparkles}>
                    {applicabilityResult.isApplicable ? (
                        <div className="flex items-center gap-3 p-4 bg-green-100 dark:bg-green-900/50 rounded-lg">
                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                            <div>
                                <h3 className="font-bold text-lg text-green-800 dark:text-green-300">Applicable</h3>
                                <p className="text-green-700 dark:text-green-300/80">{applicabilityResult.reason}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg">
                            <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                            <div>
                                <h3 className="font-bold text-lg text-red-800 dark:text-red-300">Not Applicable</h3>
                                <p className="text-red-700 dark:text-red-300/80">{applicabilityResult.reason}</p>
                            </div>
                        </div>
                    )}
                </AiResultCard>
            )}
          </TabsContent>

        </Tabs>
      </CardContent>
    </Card>
  );
}
