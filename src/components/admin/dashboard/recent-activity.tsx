import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  type: string;
  user: string;
  time: string;
}

const activities: Activity[] = [
  { type: "New Registration", user: "John Doe", time: "5 mins ago" },
  { type: "Payment Received", user: "Jane Smith", time: "10 mins ago" },
  { type: "Event Created", user: "Admin User", time: "1 hour ago" },
];

function RecentActivity() {
  return (
    <Card className="bg-slate-50 border-slate-300">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.length === 0 ? (
          <>
            <h6>No Notifications</h6>
            <p className="text-sm text-muted-foreground">
              You don’t have any notifications at the moment. Updates and alerts
              will appear here when available.
            </p>
          </>
        ) : (
          activities.map((activity, i) => (
            <div key={i} className="flex justify-between border-b p-3">
              <div>
                <p className="text-sm font-medium">{activity.type}</p>
                <p className="text-xs text-muted-foreground">{activity.user}</p>
              </div>
              <span className="text-xs text-muted-foreground">
                {activity.time}
              </span>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export { RecentActivity };
