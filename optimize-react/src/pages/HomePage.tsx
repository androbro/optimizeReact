import OuterPageLayout from '../components/PageLayout'
import { Button, Typography } from '@mui/material'
import InnerPageLayout from '../pages/components/PageLayout'

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
    return (
        <OuterPageLayout>
            <InnerPageLayout>
                <div>
                    <Typography variant="h1">Home Page</Typography>
                </div>
            </InnerPageLayout>
        </OuterPageLayout>
    )
}