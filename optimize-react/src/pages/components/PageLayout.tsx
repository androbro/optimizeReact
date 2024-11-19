import { ChevronRight, Code } from '@mui/icons-material'
import { PropsWithChildren, useState } from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { Path } from '@remix-run/router/history'

interface PageLayoutProps extends PropsWithChildren {
    currentLocation: Path
}

export default function PageLayout({ children, currentLocation }: PageLayoutProps) {
    const [currentSection, setCurrentSection] = useState('visualization')
    const pathnames = currentLocation.pathname.split('/').filter((x) => x)

    return (
        <div>
            <div>
                {/* Breadcrumb */}
                <div>
                    <Breadcrumbs aria-label="breadcrumb">
                        {pathnames.map((value, index) => {
                            const last = index === pathnames.length - 1
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`

                            return last ? (
                                <Typography key={to} sx={{ color: 'text.primary' }}>
                                    {pathnames[pathnames.length - 1]}
                                </Typography>
                            ) : (
                                <Link underline="hover" color="inherit" href={to} key={to}>
                                    {to.slice(1, to.length)}
                                </Link>
                            )
                        })}
                    </Breadcrumbs>
                </div>

                {/* Main Content */}
                <div>
                    {/* Lab Header */}
                    <div>
                        <h1>useState Deep Dive</h1>
                        <p>Understanding React's state management internals</p>
                    </div>

                    {/* Section Tabs */}
                    <div>
                        <nav>
                            {['theory', 'visualization', 'practice', 'testing'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => setCurrentSection(section)}
                                    className={`mr-8 py-4 border-b-2 font-medium text-sm ${
                                        currentSection === section
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                        {/* Lab Content (Your existing component goes here) */}
                        {children}
                    </div>

                    {/* Navigation Footer */}
                    <div className="border-t px-6 py-4 bg-gray-50 rounded-b-lg">
                        <div className="flex justify-between items-center">
                            <button className="text-gray-500 hover:text-gray-700">Previous: Introduction</button>
                            <button className="flex items-center text-blue-600 hover:text-blue-700">
                                Next: useEffect Deep Dive
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}