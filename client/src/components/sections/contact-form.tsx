import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return response.json();
    },
    onSuccess: (response) => {
      setSubmittedData(form.getValues());
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Bericht verstuurd!",
        description: "We nemen binnen één werkdag contact met je op.",
      });
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      toast({
        variant: "destructive",
        title: "Er ging iets mis",
        description: "Je bericht kon niet worden verzonden. Probeer het later opnieuw.",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="bg-natural-white border-2 border-purple-soft rounded-3xl p-10 shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-soft rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-purple-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-dark-gray mb-4">Bedankt voor je bericht!</h3>
          <p className="text-lg text-warm-gray mb-8 leading-relaxed">
            We hebben je bericht ontvangen en nemen binnen één werkdag contact met je op.
          </p>
          <div className="bg-soft-beige rounded-2xl p-6 text-left">
            <h4 className="font-semibold text-dark-gray mb-4 text-lg">Ingediende gegevens:</h4>
            {submittedData && (
              <>
                <p className="text-warm-gray mb-2"><strong className="text-dark-gray">Naam:</strong> {submittedData.name}</p>
                <p className="text-warm-gray mb-2"><strong className="text-dark-gray">E-mail:</strong> {submittedData.email}</p>
                {submittedData.phone && <p className="text-warm-gray mb-2"><strong className="text-dark-gray">Telefoon:</strong> {submittedData.phone}</p>}
                {submittedData.package && <p className="text-warm-gray mb-2"><strong className="text-dark-gray">Pakket interesse:</strong> {submittedData.package}</p>}
                <p className="text-warm-gray"><strong className="text-dark-gray">Bericht:</strong> {submittedData.message}</p>
              </>
            )}
          </div>
          <Button 
            onClick={() => {
              setIsSubmitted(false)
              setSubmittedData(null)
            }}
            className="mt-8 bg-purple-primary hover:bg-purple-light text-white px-8 py-3 rounded-xl text-lg font-semibold"
          >
            Nieuw bericht versturen
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-natural-white rounded-3xl p-10 shadow-lg">
        <h3 className="text-3xl font-semibold text-dark-gray mb-8 text-center">Stuur ons een bericht</h3>
        
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark-gray">Naam</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Je naam of initialen" 
                    className="focus:ring-purple-primary focus:border-purple-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark-gray">E-mailadres</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="je@email.nl" 
                    className="focus:ring-purple-primary focus:border-purple-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark-gray">Telefoonnummer (optioneel)</FormLabel>
                <FormControl>
                  <Input 
                    type="tel"
                    placeholder="06 - 12345678" 
                    className="focus:ring-purple-primary focus:border-purple-primary"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark-gray">Interesse in pakket</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                  <FormControl>
                    <SelectTrigger className="focus:ring-purple-primary focus:border-purple-primary">
                      <SelectValue placeholder="Selecteer een pakket" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="basis">Basis Pakket - €79,99</SelectItem>
                    <SelectItem value="plus">Plus Pakket - €119,99</SelectItem>
                    <SelectItem value="intensief">Intensief Pakket - €169,99</SelectItem>
                    <SelectItem value="kinderen">Specialisatie Kinderen</SelectItem>
                    <SelectItem value="vraag">Ik heb een vraag</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark-gray">Bericht</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Vertel ons iets over je situatie of stel je vraag..." 
                    className="resize-none focus:ring-purple-primary focus:border-purple-primary"
                    rows={4}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={contactMutation.isPending}
          className="w-full bg-purple-primary hover:bg-purple-light mt-8 py-4 rounded-xl text-lg font-semibold text-white"
        >
          {contactMutation.isPending ? "Bezig met versturen..." : "Verstuur bericht"}
        </Button>
        
        <p className="text-sm text-warm-gray mt-6 text-center leading-relaxed">
          We respecteren je privacy en nemen binnen één werkdag contact met je op.
        </p>
      </form>
    </Form>
  );
}
