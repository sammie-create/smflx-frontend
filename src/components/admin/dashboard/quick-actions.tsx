import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UserRoundPlus,
  MessageSquareText,
  ChartLine,
  BuildingIcon,
} from "lucide-react";

function DashboardQuickActions() {
  return (
    <Card className="bg-slate-50 border-slate-300">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="h-20 bg-brand-yellow-50 border-yellow-200 text-yellow-500 hover:bg-yellow-100 hover:border-yellow-300 hover:text-yellow-900 flex flex-col gap-2"
        >
          <UserRoundPlus className="size-6" />
          Add Registration
        </Button>
        <Button
          variant="outline"
          className="h-20 bg-brand-blue-50 border-brand-blue-200 text-brand-blue-500 hover:bg-blue-100 hover:border-blue-600 hover:text-blue-900 flex flex-col gap-2"
        >
          <MessageSquareText className="size-6" />
          Send Email
        </Button>
        <Button
          variant="outline"
          className="h-20 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-600 hover:text-green-900 flex flex-col gap-2"
        >
          <ChartLine className="size-6" />
          Generate Report
        </Button>
        <Button
          variant="outline"
          className="h-20 bg-violet-50 border-violet-200 text-violet-500 hover:bg-violet-100 hover:border-violet-600 hover:text-violet-900 flex flex-col gap-2"
        >
          <BuildingIcon className="size-6" />
          Manage Rooms
        </Button>
      </CardContent>
    </Card>
  );
}

export { DashboardQuickActions };
