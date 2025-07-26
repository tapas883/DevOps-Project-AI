import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Activity, 
  Server, 
  Users, 
  GitCommit,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'

const Dashboard = () => {
  const metrics = [
    {
      title: 'System Uptime',
      value: '99.9%',
      change: '+0.1%',
      trend: 'up',
      icon: Activity,
      color: 'text-green-500'
    },
    {
      title: 'Active Services',
      value: '24',
      change: '+2',
      trend: 'up',
      icon: Server,
      color: 'text-blue-500'
    },
    {
      title: 'Daily Deployments',
      value: '12',
      change: '+4',
      trend: 'up',
      icon: GitCommit,
      color: 'text-purple-500'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+89',
      trend: 'up',
      icon: Users,
      color: 'text-orange-500'
    }
  ]

  const buildStatus = [
    { name: 'Frontend Build', status: 'success', duration: '2m 34s', branch: 'main' },
    { name: 'Backend API', status: 'success', duration: '4m 12s', branch: 'main' },
    { name: 'Database Migration', status: 'running', duration: '1m 45s', branch: 'develop' },
    { name: 'E2E Tests', status: 'success', duration: '8m 23s', branch: 'main' },
    { name: 'Security Scan', status: 'warning', duration: '3m 56s', branch: 'feature/auth' }
  ]

  const systemHealth = [
    { component: 'API Gateway', status: 'healthy', load: 45 },
    { component: 'Database', status: 'healthy', load: 67 },
    { component: 'Cache Layer', status: 'healthy', load: 23 },
    { component: 'Message Queue', status: 'warning', load: 89 },
    { component: 'File Storage', status: 'healthy', load: 34 }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'running':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      default:
        return <AlertTriangle className="w-4 h-4 text-red-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
      case 'healthy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'running':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default:
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    }
  }

  return (
    <section id="dashboard" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Live Dashboard
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real-time monitoring and system health overview
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className={`w-4 h-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-green-500">{metric.change}</span>
                  <span>from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Build Status */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Builds</CardTitle>
              <CardDescription>Latest CI/CD pipeline executions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {buildStatus.map((build, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(build.status)}
                      <div>
                        <div className="font-medium text-sm">{build.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {build.branch} • {build.duration}
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(build.status)}>
                      {build.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>Component status and resource utilization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemHealth.map((component, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(component.status)}
                        <span className="font-medium text-sm">{component.component}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {component.load}%
                        </span>
                        <Badge className={getStatusColor(component.status)}>
                          {component.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={component.load} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Charts Placeholder */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>System performance over the last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Interactive charts would be displayed here
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    CPU, Memory, Network, and Disk I/O metrics
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Dashboard

