import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  GitBranch, 
  Server, 
  Shield, 
  Zap, 
  Cloud, 
  Database,
  Monitor,
  Settings
} from 'lucide-react'

const Overview = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline',
      description: 'Automated build, test, and deployment workflows with GitHub Actions and Jenkins integration.',
      technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure using Infrastructure as Code with Terraform and AWS.',
      technologies: ['AWS', 'Terraform', 'CloudFormation', 'EKS']
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring with Prometheus, Grafana, and centralized logging.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Security scanning, vulnerability assessment, and compliance automation.',
      technologies: ['SonarQube', 'Snyk', 'Vault', 'OWASP ZAP']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Database migrations, backups, and data pipeline automation.',
      technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Apache Kafka']
    },
    {
      icon: Settings,
      title: 'Configuration Management',
      description: 'Centralized configuration management and secrets handling.',
      technologies: ['Ansible', 'Consul', 'Vault', 'ConfigMaps']
    }
  ]

  const architectureHighlights = [
    'Microservices Architecture',
    'Container Orchestration',
    'Auto-scaling & Load Balancing',
    'Multi-environment Deployments',
    'Blue-Green Deployments',
    'Disaster Recovery'
  ]

  return (
    <section id="overview" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive DevOps platform that streamlines development workflows, 
            ensures reliable deployments, and maintains high system availability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Highlights */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Architecture Highlights
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Key architectural decisions and patterns implemented in this DevOps solution
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {architectureHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg"
              >
                <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'GitHub Actions',
              'Prometheus', 'Grafana', 'ELK Stack', 'PostgreSQL', 'Redis', 'Node.js',
              'Python', 'Go', 'React', 'Nginx', 'Ansible', 'Vault'
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview

