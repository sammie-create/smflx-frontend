// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { Loader2 } from "lucide-react";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";

// import { createHotelRoom } from "@/features/admin/accommodation/server-actions";

// const schema = z.object({
//   hotelCode: z.string().min(1),
//   hotelIdentifier: z.string().min(1),
//   address: z.string().min(1),
//   description: z.string().min(1),
//   genderRestriction: z.enum(["MALE", "FEMALE", "MIXED"]),
//   adminReserved: z.boolean(),
//   price: z.number().min(0),
//   noOfRoomsAvailable: z.number().min(1),
// });

// type FormValues = z.infer<typeof schema>;

// export function HotelRoomForm({
//   facilityId,
//   onSuccess,
// }: {
//   facilityId: string;
//   onSuccess?: () => void;
// }) {
//   const form = useForm<FormValues>({
//     resolver: zodResolver(schema),
//     defaultValues: { adminReserved: false },
//   });

//   async function onSubmit(values: FormValues) {
//     try {
//       await createHotelRoom({
//         facilityId,
//         ...values,
//         available: true,
//       });

//       toast.success("Hotel room type created");
//       onSuccess?.();
//     } catch {
//       toast.error("Failed to create hotel room");
//     }
//   }

//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-4">Add Hotel Room Type</h2>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <FormField
//             control={form.control}
//             name="hotelCode"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Hotel Code</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="hotelIdentifier"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Hotel Identifier</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="price"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Price</FormLabel>
//                 <Input
//                   type="number"
//                   value={field.value ?? ""}
//                   onChange={e => field.onChange(Number(e.target.value))}
//                 />
//               </FormItem>
//             )}
//           />

//           <Button
//             type="submit"
//             className="w-full bg-brand-red"
//             disabled={form.formState.isSubmitting}
//           >
//             {form.formState.isSubmitting ? (
//               <Loader2 className="animate-spin w-4 h-4" />
//             ) : (
//               "Save Room Type"
//             )}
//           </Button>
//         </form>
//       </Form>
//     </>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createHotelRoom } from "@/features/admin/accommodation/server-actions";

const schema = z.object({
  hotelCode: z.string().min(1),
  roomType: z.string().min(1),
  hotelIdentifier: z.string().min(1),
  address: z.string().min(1),
  description: z.string().min(1),
  available: z.boolean(),
  genderRestriction: z.enum(["MALE", "FEMALE"]),
  adminReserved: z.boolean(),
  price: z.number().min(0),
  noOfRoomsAvailable: z.number().min(1),
});

type FormValues = z.infer<typeof schema>;

export function HotelRoomForm({
  facilityId,
  onSuccess,
}: {
  facilityId: string;
  onSuccess?: () => void;
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      hotelCode: "",
      roomType: "",
      hotelIdentifier: "",
      address: "",
      description: "",
      price: 0,
      noOfRoomsAvailable: 1,
      genderRestriction: "MALE",
      available: true,
      adminReserved: false,
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      await createHotelRoom({
        facilityId,
        ...values,
      });

      toast.success("Hotel room created");
      onSuccess?.();
    } catch {
      toast.error("Failed to create hotel room");
    }
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Add Hotel Room</h2>

      <div className="h-70vh overflow-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <InputField form={form} name="hotelCode" label="Hotel Code" />
            <InputField form={form} name="roomType" label="Room Type" />
            <InputField
              form={form}
              name="hotelIdentifier"
              label="Hotel Identifier"
            />
            <InputField form={form} name="address" label="Address" />
            <InputField form={form} name="description" label="Description" />

            <NumberField form={form} name="price" label="Price" />
            <NumberField
              form={form}
              name="noOfRoomsAvailable"
              label="Number of Rooms Available"
            />

            <GenderSelect form={form} />

            <BooleanSelect form={form} name="available" label="Available" />
            <BooleanSelect
              form={form}
              name="adminReserved"
              label="Admin Reserved"
            />

            <Button
              type="submit"
              className="w-full bg-brand-red"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

function InputField({ form, name, label }: any) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} value={field.value ?? ""} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

function NumberField({ form, name, label }: any) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Input
            type="number"
            value={field.value ?? ""}
            onChange={e => field.onChange(Number(e.target.value))}
          />
        </FormItem>
      )}
    />
  );
}

function GenderSelect({ form }: any) {
  return (
    <FormField
      control={form.control}
      name="genderRestriction"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Gender Restriction</FormLabel>
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}

function BooleanSelect({ form, name, label }: any) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            value={String(field.value)}
            onValueChange={val => field.onChange(val === "true")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">True</SelectItem>
              <SelectItem value="false">False</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
