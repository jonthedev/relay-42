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
import { Container } from "@/components"

export function FormMission() {
  const dispatch = useDispatch()

  const form = useForm<Mission>({
    resolver: zodResolver(missionSchema),
    defaultValues: {
      id: uuidv4(),
      name: "",
      members: [],
      departure: "",
      destination: ""
    }
  })

  function onSubmit(values: Mission) {
    console.log(values)
  }

  interface FormFieldInputs {
    name: keyof Omit<Mission, "members" | "id">
    label: string
    placeholder: string
  }

  const formFieldInputs: FormFieldInputs[] = [
    {
      name: "name",
      label: "Mission Name",
      placeholder: "Expedition 2021"
    },
    {
      name: "destination",
      label: "Destination",
      placeholder: "Mars Alpha 116"
    },
    {
      name: "departure",
      label: "Departure",
      placeholder: "dd/mm/yyyy"
    }
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Container className="flex">
          {formFieldInputs.map((field, index) => (
            <FormField
              key={index}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => {
                return (
                  <FormItem className="grow">
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <Input {...formField} placeholder={field.placeholder} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          ))}
        </Container>

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
