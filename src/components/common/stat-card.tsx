import { Card, CardContent, Typography } from "@mui/material";

type StatCardProps = {
  label: string;
  value: string;
  helper: string;
};

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <Card className="h-full border border-slate-200">
      <CardContent className="space-y-3">
        <Typography color="text.secondary" variant="body2">
          {label}
        </Typography>
        <Typography component="p" variant="h4">
          {value}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {helper}
        </Typography>
      </CardContent>
    </Card>
  );
}