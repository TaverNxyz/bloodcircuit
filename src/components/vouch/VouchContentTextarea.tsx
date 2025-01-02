import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { VouchFormValues } from "./AddVouchForm";

interface VouchContentTextareaProps {
  form: UseFormReturn<VouchFormValues>;
}

export const VouchContentTextarea = ({ form }: VouchContentTextareaProps) => {
  return (
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
  );
};