import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  BookOpen, 
  Code, 
  Settings, 
  Wrench, 
  ExternalLink,
  Copy,
  Terminal
} from 'lucide-react'

const Documentation = () => {
  const docSections = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Quick setup guide and initial configuration',
      items: [
        'Prerequisites and requirements',
        'Installation instructions',
        'Initial configuration',
        'First deployment'
      ]
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      items: [
        'Authentication methods',
        'Endpoint documentation',
        'Request/response examples',
        'SDK and client libraries'
      ]
    },
    {
      icon: Settings,
      title: 'Configuration',
      description: 'Environment setup and customization',
      items: [
        'Environment variables',
        'Configuration files',
        'Security settings',
        'Performance tuning'
      ]
    },
    {
      icon: Wrench,
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      items: [
        'Common error messages',
        'Debugging techniques',
        'Log analysis',
        'Performance issues'
      ]
    }
  ]

  const codeExamples = [
    {
      title: 'Docker Deployment',
      language: 'bash',
      code: `# Build and run the application
docker build -t devops-app .
docker run -p 3000:3000 devops-app

# Using docker-compose
docker-compose up -d`
    },
    {
      title: 'Kubernetes Deployment',
      language: 'yaml',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: devops-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: devops-app
  template:
    metadata:
      labels:
        app: devops-app
    spec:
      containers:
      - name: app
        image: devops-app:latest
        ports:
        - containerPort: 3000`
    },
    {
      title: 'CI/CD Pipeline',
      language: 'yaml',
      code: `name: CI/CD Pipeline
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build and test
      run: |
        npm install
        npm test
        npm run build`
    }
  ]

  return (
    <section id="documentation" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive guides and technical documentation
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {docSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <section.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </div>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Examples */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Code Examples
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {codeExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{example.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {example.language}
                      </Badge>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
              <Terminal className="w-5 h-5" />
              <span>CLI Reference</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
              <Code className="w-5 h-5" />
              <span>API Playground</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
              <BookOpen className="w-5 h-5" />
              <span>Tutorials</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentation

