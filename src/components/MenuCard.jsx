import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Code, Cloud, Users, Zap, Shield, BarChart3, Settings, Wrench,  Layers, Puzzle, BadgeCheck, CloudUpload, Server, ShieldCheck, 
         Brain, Briefcase, Presentation, Rocket, Workflow, 
         AlertTriangle, CheckSquare, BarChart, GaugeCircle  } from 'lucide-react';

const MenuCard = ({ currentView, selectedService, selectedSubService, onNavigateToSubmenu, onNavigateToSubmenu2 }) => {
  const mainServices = [
    {
      id: 'software',
      icon: <Code className="w-5 h-5" strokeWidth={3}/>,
      title: 'Software Solutions',
      description: 'Custom software development and deployment'
    },
    {
      id: 'cloud',
      icon: <Cloud className="w-5 h-5" strokeWidth={3} />,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and infrastructure'
    },
    {
      id: 'consulting',
      icon: <Users className="w-5 h-5" strokeWidth={3} />,
      title: 'Consulting Services',
      description: 'Expert guidance and strategic support'
    },
    {
      id: 'digital',
      icon: <Zap className="w-5 h-5" strokeWidth={3} />,
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies'
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-5 h-5" strokeWidth={3} />,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive cybersecurity services and solutions'
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="w-5 h-5" strokeWidth={3} />,
      title: 'Data & Analytics Consulting',
      description: 'Data strategy, analytics, and business intelligence'
    },
    {
      id: 'devops',
      icon: <Settings className="w-5 h-5" strokeWidth={3} />,
      title: 'DevOps & Platform Engineering',
      description: 'DevOps transformation and platform engineering'
    },
    {
      id: 'support',
      icon: <Wrench className="w-5 h-5" strokeWidth={3} />,
      title: 'Support & Maintenance',
      description: 'Ongoing maintenance and support services'
    }
  ];

  const subMenus = {
    software: [
      {
        id: "custom-dev",
        icon: <Layers className="w-5 h-5" strokeWidth={2.5} />,
        title: "Custom Development",
        description: "Tailored software solutions for your needs"
      },
      {
        id: "api-integration",
        icon: <Puzzle className="w-5 h-5" strokeWidth={2.5} />,
        title: "API Integration",
        description: "Seamless third-party integrations"
      },
      {
        id: "quality-assurance",
        icon: <BadgeCheck className="w-5 h-5" strokeWidth={2.5} />,
        title: "Quality Assurance",
        description: "Comprehensive testing services"
      }
    ],
    cloud: [
      {
        id: "cloud-migration",
        icon: <CloudUpload className="w-5 h-5" strokeWidth={2.5} />,
        title: "Cloud Migration",
        description: "Seamless transition to cloud infrastructure"
      },
      {
        id: "infra-management",
        icon: <Server className="w-5 h-5" strokeWidth={2.5} />,
        title: "Infrastructure Management",
        description: "Scalable and reliable infrastructure"
      },
      {
        id: "cloud-security",
        icon: <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />,
        title: "Cloud Security",
        description: "Secure cloud environment setup"
      }
    ],
    consulting: [
      {
        id: "tech-consulting",
        icon: <Brain className="w-5 h-5" strokeWidth={2.5} />,
        title: "Technical Consulting",
        description: "Architecture and implementation guidance"
      },
      {
        id: "business-strategy",
        icon: <Briefcase className="w-5 h-5" strokeWidth={2.5} />,
        title: "Business Strategy",
        description: "Digital transformation and business planning"
      },
      {
        id: "training-workshops",
        icon: <Presentation className="w-5 h-5" strokeWidth={2.5} />,
        title: "Training & Workshops",
        description: "Team skill development and knowledge transfer"
      }
    ],
    digital: [
      {
        id: "digital-strategy",
        icon: <Rocket className="w-5 h-5" strokeWidth={2.5} />,
        title: "Digital Strategy",
        description: "Comprehensive digital roadmap planning"
      },
      {
        id: "process-automation",
        icon: <Workflow className="w-5 h-5" strokeWidth={2.5} />,
        title: "Process Automation",
        description: "Streamline operations with automation"
      },
      {
        id: "change-management",
        icon: <Users className="w-5 h-5" strokeWidth={2.5} />,
        title: "Change Management",
        description: "Smooth organizational transformation"
      }
    ],
    cybersecurity: [
      {
        id: "security-assessment",
        icon: <AlertTriangle className="w-5 h-5" strokeWidth={2.5} />,
        title: "Security Assessment",
        description: "Comprehensive security audits"
      },
      {
        id: "threat-protection",
        icon: <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />,
        title: "Threat Protection",
        description: "Advanced threat detection and prevention"
      },
      {
        id: "compliance-management",
        icon: <CheckSquare className="w-5 h-5" strokeWidth={2.5} />,
        title: "Compliance Management",
        description: "Regulatory compliance solutions"
      }
    ],
    analytics: [
      {
        id: "data-strategy",
        icon: <BarChart className="w-5 h-5" strokeWidth={2.5} />,
        title: "Data Strategy",
        description: "Strategic data planning and governance"
      },
      {
        id: "business-intelligence",
        icon: <Brain className="w-5 h-5" strokeWidth={2.5} />,
        title: "Business Intelligence",
        description: "Advanced analytics and reporting"
      },
      {
        id: "predictive-analytics",
        icon: <GaugeCircle className="w-5 h-5" strokeWidth={2.5} />,
        title: "Predictive Analytics",
        description: "AI-powered insights and forecasting"
      }
    ],
    devops: [
      {
        id: "cicd-pipeline",
        icon: <Workflow className="w-5 h-5" strokeWidth={2.5} />,
        title: "CI/CD Pipeline",
        description: "Automated deployment workflows"
      },
      {
        id: "infra-as-code",
        icon: <Server className="w-5 h-5" strokeWidth={2.5} />,
        title: "Infrastructure as Code",
        description: "Modern infrastructure management"
      },
      {
        id: "monitoring-logging",
        icon: <GaugeCircle className="w-5 h-5" strokeWidth={2.5} />,
        title: "Monitoring & Logging",
        description: "Real-time system observability"
      }
    ],
    support: [
      {
        id: "support-24-7",
        icon: <Wrench className="w-5 h-5" strokeWidth={2.5} />,
        title: "24/7 Support",
        description: "Round-the-clock technical assistance"
      },
      {
        id: "system-maintenance",
        icon: <Settings className="w-5 h-5" strokeWidth={2.5} />,
        title: "System Maintenance",
        description: "Regular updates and optimization"
      },
      {
        id: "performance-tuning",
        icon: <GaugeCircle className="w-5 h-5" strokeWidth={2.5} />,
        title: "Performance Tuning",
        description: "Continuous performance improvements"
      }
    ]
  };

  const subMenus2 = {
    "custom-dev": [
      {
        icon: <Code className="w-5 h-5" strokeWidth={2.5} />,
        title: "Web Applications",
        description: "Modern web app development"
      },
      {
        icon: <Cloud className="w-5 h-5" strokeWidth={2.5} />,
        title: "Mobile Applications",
        description: "iOS and Android development"
      },
      {
        icon: <Server className="w-5 h-5" strokeWidth={2.5} />,
        title: "Backend Systems",
        description: "Scalable server infrastructure"
      }
    ],
    "api-integration": [
      {
        icon: <Puzzle className="w-5 h-5" strokeWidth={2.5} />,
        title: "REST API",
        description: "RESTful API integration"
      },
      {
        icon: <Workflow className="w-5 h-5" strokeWidth={2.5} />,
        title: "GraphQL",
        description: "GraphQL API development"
      },
      {
        icon: <Server className="w-5 h-5" strokeWidth={2.5} />,
        title: "Webhooks",
        description: "Real-time event integration"
      }
    ],
    "quality-assurance": [
      {
        icon: <CheckSquare className="w-5 h-5" strokeWidth={2.5} />,
        title: "Automated Testing",
        description: "Comprehensive test automation"
      },
      {
        icon: <AlertTriangle className="w-5 h-5" strokeWidth={2.5} />,
        title: "Performance Testing",
        description: "Load and stress testing"
      },
      {
        icon: <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />,
        title: "Security Testing",
        description: "Vulnerability assessments"
      }
    ]
  };

  const slide = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  };

  const listStagger = {
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {/* Main Menu */}
        {currentView === 'main' && (
          <motion.div
            key="main"
            variants={slide}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={listStagger}
              initial="hidden"
              animate="show"
              className="px-5 py-4"
            >
              {mainServices.map((service) => (
                <motion.button
                  key={service.id}
                  variants={itemFade}
                  onClick={() => onNavigateToSubmenu(service.id)}
                  className="w-full group"
                >
                  <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-b-0">
                    <div className="text-gray-500 mt-0.5">
                      {service.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900 text-[15px] mb-0.5">
                        {service.title}
                      </h3>
                      <p className="text-[13px] text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-black mt-1 shrink-0" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Submenu */}
        {currentView === 'submenu' && (
          <motion.div
            key="submenu"
            variants={slide}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={listStagger}
              initial="hidden"
              animate="show"
              className="px-5 py-4"
            >
              {selectedService && subMenus[selectedService]?.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemFade}
                  onClick={() => onNavigateToSubmenu2(item.id)}
                  className="w-full group"
                >
                  <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-b-0">
                    <div className="text-gray-500 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900 text-[15px] mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-black mt-1 shrink-0" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Submenu 2 */}
        {currentView === 'submenu2' && (
          <motion.div
            key="submenu2"
            variants={slide}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={listStagger}
              initial="hidden"
              animate="show"
              className="px-5 py-4"
            >
              {selectedSubService && subMenus2[selectedSubService]?.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemFade}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-b-0">
                    <div className="text-gray-500 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900 text-[15px] mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuCard;