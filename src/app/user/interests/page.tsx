"use client";

import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fetchUser, updateUserInterest } from "@/actions/user.actions";
import { useEffect } from "react";
import useInterestStore from "@/store/useInterestStore";
import { useToast } from "@/components/ui/use-toast";

const items = [
  "🎨 Graphic Design",
  "🤖 Artificial Intelligence",
  "🎮 Game Development",
  "📊 Data Analytics",
  "💬 Telecommunications",
  "🧑‍🎨 UI/UX Design",
  "❓ Testing",
  "⛓️ Blockchain",
  "Product Management",
  "⚙️ Robotics",
  "☁️ Cloud Architecture",
  "🔐 Cybersecurity",
  "💻 Software Development",
  "🔥 NwHacks",
];

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

function InterestPage() {
  const { toast } = useToast();
  const { user } = useUser();
  const [interests, updateInterests] = useInterestStore((state) => [
    state.interests,
    state.updateInterests,
  ]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const userDB = await fetchUser(user!.id);
          updateInterests(userDB.techField);
        } else {
          console.log("no user");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: interests,
    },
  });

  console.log(interests);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newUser = updateUserInterest(user!.id, data.items);
    updateInterests(data.items);
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-6">
                <FormLabel className="text-base">Your Interest</FormLabel>
              </div>

              <div className="flex flex-wrap gap-6">
                {items.map((item, index) => (
                  <FormField
                    key={`${item}-${index}`}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item}
                          className="space-y-0 h-12 rounded-xl bg-white text-center py-2 px-4 border border-slate flex gap-2 items-center"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item)}
                              onCheckedChange={(checked: any) => {
                                return checked
                                  ? field.onChange([...field.value, item])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default InterestPage;
