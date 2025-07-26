import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Play, CheckCircle, AlertCircle, Clock } from 'lucide-react'

const Hero = () => {
  const statusItems = [
    { label: 'Build Status', status: 'success', icon: CheckCircle, value: 'Passing' },
    { label: 'Deployment', status: 'success', icon: CheckCircle, value: 'Live' },
    { label: 'Tests', status: 'warning', icon: Clock, value: '98.5%' },
    { label: 'Uptime', status: 'success', icon: CheckCircle, value: '99.9%' }
  ]

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              All Systems Operational
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Modern DevOps
            <span className="block text-blue-600 dark:text-blue-400">Infrastructure</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive DevOps solution featuring automated CI/CD pipelines, 
            infrastructure as code, monitoring, and scalable deployment strategies. 
            Built for modern cloud-native applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="flex items-center space-x-2 px-8 py-3">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2 px-8 py-3">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </Button>
          </div>

          {/* Status Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {statusItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center mb-2">
                  <item.icon 
                    className={`w-5 h-5 ${
                      item.status === 'success' 
                        ? 'text-green-500' 
                        : item.status === 'warning' 
                        ? 'text-yellow-500' 
                        : 'text-red-500'
                    }`} 
                  />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {item.label}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

