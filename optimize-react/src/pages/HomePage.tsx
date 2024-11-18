import PageLayout from '../components/PageLayout'
import { Button, Typography } from '@mui/material'

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
    return (
        <PageLayout>
            <div>
                <Typography variant="h1">Home Page</Typography>
            </div>
        </PageLayout>
    )
}
