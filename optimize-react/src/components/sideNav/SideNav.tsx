import { Link } from '@mui/material'

interface SideNavProps {}

export default function SideNav({}: SideNavProps) {
    return (
        <>
            <Link href="/docs/design-system" underline="hover" color="inherit">
                Design System
            </Link>
        </>
    )
}
