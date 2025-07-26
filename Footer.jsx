import { Button } from '@/components/ui/button.jsx'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ExternalLink,
  Heart
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    'Product': [
      { name: 'Features', href: '#overview' },
      { name: 'Dashboard', href: '#dashboard' },
      { name: 'Documentation', href: '#documentation' },
      { name: 'API Reference', href: '#' }
    ],
    'Resources': [
      { name: 'Getting Started', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Best Practices', href: '#' },
      { name: 'Community', href: '#' }
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#team' },
      { name: 'Status Page', href: '#' },
      { name: 'Bug Reports', href: '#' }
    ],
    'Company': [
      { name: 'About Us', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DO</span>
              </div>
              <span className="font-bold text-xl">DevOps Project</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A comprehensive DevOps solution featuring automated CI/CD pipelines, 
              infrastructure as code, and scalable deployment strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest updates on new features and releases.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="flex items-center space-x-2">
                <span>Subscribe</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4 md:mb-0">
              <span>© 2024 DevOps Project. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by the DevOps Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

