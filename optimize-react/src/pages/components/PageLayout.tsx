import { ChevronRight, Code } from '@mui/icons-material'
import { PropsWithChildren, useState } from 'react'

type PageLayoutProps = PropsWithChildren

export default function PageLayout({ children }: PageLayoutProps) {
    const [currentSection, setCurrentSection] = useState('visualization')

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation */}
            <nav className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <a href="#" className="flex items-center text-gray-900">
                                <Code className="h-6 w-6 mr-2" />
                                <span className="font-semibold">React Optimization Lab</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-500 hover:text-gray-700">{/*<LayoutGrid className="h-5 w-5" />*/}</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                    <span>Labs</span>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span>useState Deep Dive</span>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow">
                    {/* Lab Header */}
                    <div className="border-b px-6 py-4">
                        <h1 className="text-xl font-semibold">useState Deep Dive</h1>
                        <p className="text-gray-500 mt-1">Understanding React's state management internals</p>
                    </div>

                    {/* Section Tabs */}
                    <div className="border-b px-6">
                        <nav className="flex -mb-px">
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