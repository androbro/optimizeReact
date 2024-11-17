import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      {/* Add sidebar here */}
      <div className="container mx-auto">{children}</div>
      {/* Add footer here */}
      <div>
        <p>Click here for the design system</p>
        <Link to="/docs/design-system">Design System</Link>
      </div>
    </>
  );
}