import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactFormSchema = z.object({
  name: z.string().min(1, "Naam is verplicht"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  phone: z.string().optional(),
  package: z.string().optional(),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Store form data locally for demo purposes
    setSubmittedData(data);
    setIsSubmitted(true);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Bedankt voor je bericht!</h3>
          <p className="text-green-700 mb-4">
            We hebben je bericht ontvangen en nemen binnen één werkdag contact met je op.
          </p>
          <div className="bg-white rounded-lg p-4 text-left text-sm">
            <h4 className="font-semibold text-gray-800 mb-2">Ingediende gegevens:</h4>
            {submittedData && (
              <>
                <p><strong>Naam:</strong> {submittedData.name}</p>
                <p><strong>E-mail:</strong> {submittedData.email}</p>
                {submittedData.phone && <p><strong>Telefoon:</strong> {submittedData.phone}</p>}
                {submittedData.package && <p><strong>Pakket interesse:</strong> {submittedData.package}</p>}
                <p><strong>Bericht:</strong> {submittedData.message}</p>
              </>
            )}
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="mt-4 bg-purple-primary hover:bg-purple-light"
          >
            Nieuw bericht versturen
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold text-dark-gray mb-6">Stuur ons een bericht</h3>
        
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          className="w-full bg-purple-primary hover:bg-purple-light mt-6"
        >
          Verstuur bericht
        </Button>
        
        <p className="text-xs text-warm-gray mt-4 text-center">
          We respecteren je privacy en nemen binnen één werkdag contact met je op.
        </p>
      </form>
    </Form>
  );
}
