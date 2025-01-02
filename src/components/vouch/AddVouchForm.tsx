import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const vouchFormSchema = z.object({
  content: z.string().min(10, "Vouch must be at least 10 characters long"),
  rating: z.string().refine((val) => ["1", "2", "3", "4", "5"].includes(val), {
    message: "Please select a rating",
  }),
});

type VouchFormValues = z.infer<typeof vouchFormSchema>;

export const AddVouchForm = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const form = useForm<VouchFormValues>({
    resolver: zodResolver(vouchFormSchema),
    defaultValues: {
      content: "",
      rating: "",
    },
  });

  const onSubmit = async (values: VouchFormValues) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to add a vouch.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from("vouches").insert({
        content: values.content,
        rating: parseInt(values.rating),
        user_id: user.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your vouch has been added successfully!",
      });

      // Reset form and close dialog
      form.reset();
      setOpen(false);

      // Invalidate and refetch vouches
      queryClient.invalidateQueries({ queryKey: ["vouches"] });
    } catch (error) {
      console.error("Error adding vouch:", error);
      toast({
        title: "Error",
        description: "Failed to add your vouch. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          Add Vouch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle>Add Your Vouch</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Select a rating" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <SelectItem key={rating} value={rating.toString()}>
                          {rating} Star{rating !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Vouch</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your experience..."
                      className="bg-gray-800 border-gray-700 min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Submit Vouch
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};