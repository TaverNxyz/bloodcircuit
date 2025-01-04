import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/components/auth/AuthProvider";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VouchRatingSelect } from "./VouchRatingSelect";
import { VouchContentTextarea } from "./VouchContentTextarea";

const vouchFormSchema = z.object({
  content: z.string().min(10, "Vouch must be at least 10 characters long"),
  rating: z.string().refine((val) => ["1", "2", "3", "4", "5"].includes(val), {
    message: "Please select a rating",
  }),
});

export type VouchFormValues = z.infer<typeof vouchFormSchema>;

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
      console.log("Submitting vouch with values:", values);
      console.log("User ID:", user.id);
      
      const { data, error } = await supabase.from("vouches").insert({
        content: values.content,
        rating: parseInt(values.rating),
        user_id: user.id,
      }).select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Vouch submitted successfully:", data);

      toast({
        title: "Success",
        description: "Your vouch has been added successfully!",
      });

      form.reset();
      setOpen(false);

      // Invalidate and refetch vouches
      queryClient.invalidateQueries({ queryKey: ["vouches"] });
    } catch (error: any) {
      console.error("Error adding vouch:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to add your vouch. Please try again.",
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
            <VouchRatingSelect form={form} />
            <VouchContentTextarea form={form} />
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