import Grid from "@mui/material/Grid2";
import { PropsWithChildren } from "react";
import { Link } from "@mui/material";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Grid
      container
      className="h-screen "
      sx={{
        "& > div:first-of-type": {
          borderRight: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      <Grid size={3} p={2} minWidth={"10em"} maxWidth={"15rem"}>
        <Link href="/docs/design-system" underline="hover" color="inherit">
          Design System
        </Link>
      </Grid>
      <Grid size={9} p={2} display="flex" justifyContent="center">
        {children}
      </Grid>
    </Grid>
  );
}