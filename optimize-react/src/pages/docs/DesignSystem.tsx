import { Button, Typography } from "@mui/material";
import { useCustomTheme } from "../../theme/ThemeProvider";

export function DesignSystem() {
  const { toggleTheme, mode } = useCustomTheme();

  return (
    <div className="p-8">
      <Typography variant="h1">Design System</Typography>

      <section className="mt-8">
        <Typography variant="h2">Theme</Typography>
        <Button onClick={toggleTheme}>
          Toggle {mode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </section>

      <section className="mt-8">
        <Typography variant="h2">Colors</Typography>
        <div className="flex gap-4 mt-4">
          <div className="bg-primary-main p-4 text-white rounded">Primary</div>
          <div className="bg-secondary-main p-4 text-white rounded">
            Secondary
          </div>
        </div>
      </section>

      <section className="mt-8">
        <Typography variant="h2">Typography</Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="body1">Body 1 Text</Typography>
        <Typography variant="body2">Body 2 Text</Typography>
      </section>

      <section className="mt-8">
        <Typography variant="h2">Components</Typography>
        <div className="flex gap-4 mt-4">
          <Button variant="contained">Primary</Button>
          <Button variant="outlined">Secondary</Button>
        </div>
      </section>
    </div>
  );
}