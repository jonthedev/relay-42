import { MissionSchemaType, missionSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { useDispatch } from "react-redux"

export function FormMission() {
  //   const dispatch = useDispatch()

  const form = useForm<MissionSchemaType>({
    resolver: zodResolver(missionSchema),
    defaultValues: {
      name: "",
      departure: "01/30/2024",
      destination: ""
    }
  })

  function onSubmit(values: MissionSchemaType) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Mission Name</FormLabel>
                <FormControl>
                  <Input placeholder="Expedition 2021" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
