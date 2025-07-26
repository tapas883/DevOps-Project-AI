import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Users,
  Award,
  Calendar
} from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'DevOps Lead',
      avatar: 'AC',
      location: 'San Francisco, CA',
      experience: '8+ years',
      specialties: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD'],
      description: 'Experienced DevOps engineer specializing in cloud infrastructure and automation.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'alex.chen@example.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Site Reliability Engineer',
      avatar: 'SJ',
      location: 'New York, NY',
      experience: '6+ years',
      specialties: ['Monitoring', 'Prometheus', 'Python', 'Docker'],
      description: 'SRE focused on system reliability, monitoring, and performance optimization.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sarah.johnson@example.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architect',
      avatar: 'MR',
      location: 'Austin, TX',
      experience: '10+ years',
      specialties: ['Azure', 'GCP', 'Microservices', 'Security'],
      description: 'Cloud architect with expertise in multi-cloud deployments and security.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'michael.rodriguez@example.com'
      }
    },
    {
      name: 'Emily Wang',
      role: 'Automation Engineer',
      avatar: 'EW',
      location: 'Seattle, WA',
      experience: '5+ years',
      specialties: ['Ansible', 'Jenkins', 'Go', 'GitOps'],
      description: 'Automation specialist focused on CI/CD pipelines and infrastructure as code.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'emily.wang@example.com'
      }
    }
  ]

  const teamStats = [
    { label: 'Team Members', value: '4', icon: Users },
    { label: 'Years Combined Experience', value: '29+', icon: Calendar },
    { label: 'Certifications', value: '12', icon: Award },
    { label: 'Projects Delivered', value: '50+', icon: Award }
  ]

  return (
    <section id="team" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The experts behind this DevOps solution
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {member.avatar}
                  </div>
                  
                  {/* Basic Info */}
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {member.role}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {member.description}
                </p>
                
                {/* Specialties */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Specialties:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Github className="w-4 h-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Linkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Work With Us?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always interested in collaborating on exciting DevOps projects. 
            Reach out to discuss how we can help with your infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>View Our Work</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

