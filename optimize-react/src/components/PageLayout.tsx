import Grid from '@mui/material/Grid2'
import { PropsWithChildren } from 'react'
import { Link } from '@mui/material'
import SideNav from './sideNav/SideNav'
import TopBar from './sideNav/TopBar'

type PageLayoutProps = PropsWithChildren

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <Grid
            container
            sx={{
                '& > div:first-of-type': {
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                },
                '& > div:nth-of-type(2)': {
                    borderRight: '1px solid',
                    borderColor: 'divider',
                },
            }}
        >
            <Grid size={12} p={2} display="flex" justifyContent="center" height={'5rem'} maxHeight={'5rem'}>
                <TopBar />
            </Grid>
            <Grid size={3} p={2} minWidth={'10em'} maxWidth={'15rem'} className="h-screen">
                <SideNav />
            </Grid>
            <Grid size={9} p={2} display="flex" justifyContent="center" className="h-screen">
                {children}
            </Grid>
        </Grid>
    )
}
