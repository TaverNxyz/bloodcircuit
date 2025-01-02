import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { VouchFormValues } from "./AddVouchForm";

interface VouchRatingSelectProps {
  form: UseFormReturn<VouchFormValues>;
}

export const VouchRatingSelect = ({ form }: VouchRatingSelectProps) => {
  return (
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
  );
};