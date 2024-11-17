import PageLayout from "../components/PageLayout";
import { Button, Typography } from "@mui/material";

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  return (
    <PageLayout>
      <div className="p-4 bg-slate-50 dark:bg-slate-800">
        {/* Use MUI components with your theme */}
        <Button
          variant="contained"
          color="primary"
          className="mb-4" // Tailwind utilities
        >
          Click Me
        </Button>

        {/* Use Tailwind classes for custom elements */}
        <div className="rounded-lg bg-white dark:bg-slate-700 p-6 shadow-lg">
          <Typography variant="h4">$jump into</Typography>
        </div>
      </div>
    </PageLayout>
  );
}