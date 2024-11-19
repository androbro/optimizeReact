import OuterPageLayout from '../components/PageLayout'
import InnerPageLayout from '../pages/components/PageLayout'
import { Button, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
    const location = useLocation()
    return (
        <OuterPageLayout>
            <InnerPageLayout currentLocation={location}>
                <div>
                    <Typography variant="h1">Home Page</Typography>
                </div>
            </InnerPageLayout>
        </OuterPageLayout>
    )
}