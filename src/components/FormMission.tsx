import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"

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
import { useDispatch } from "react-redux"
import { addMission } from "@/features/missions/missionsSlice"
import { mockMission } from "@/tests/store/missions/missionsMockData"
import { type Mission, missionSchema } from "@/schema"

export function FormMission() {
  const dispatch = useDispatch()

  const form = useForm<Mission>({
    resolver: zodResolver(missionSchema),
    defaultValues: {
      name: "",
      departure: "01/30/2024",
      destination: ""
    }
  })

  function onSubmit(values: Mission) {
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
        <button
          onClick={() => dispatch(addMission({ ...mockMission, id: uuidv4() }))}
        >
          add....
        </button>
      </form>
    </Form>
  )
}
