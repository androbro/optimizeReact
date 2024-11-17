import { PropsWithChildren } from 'react'

type PageLayoutProps = PropsWithChildren

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        // add sidebar here
        <div className="container mx-auto">{children}</div>
        // add footer here
    )
}
