import Grid from "@mui/material/Grid2";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Paper, styled } from "@mui/material";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Grid
      container
      className="h-screen "
      sx={{
        "--Grid-borderWidth": "1px",
        borderTop: "var(--Grid-borderWidth) solid",
        borderLeft: "var(--Grid-borderWidth) solid",
        borderColor: "divider",
        "& > div": {
          borderRight: "var(--Grid-borderWidth) solid",
          borderBottom: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
        },
      }}
    >
      <Grid size={2} p={2}>
        <Link to="/docs/design-system" style={{ textDecoration: "none" }}>
          Design System
        </Link>
      </Grid>
      <Grid size={10} p={2} display="flex" justifyContent="center">
        size=8
      </Grid>
    </Grid>
  );
}