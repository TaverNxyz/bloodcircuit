export const PAYMENT_METHODS = [
  { text: "PayPal: undetect.pay@gmail.com" },
  { text: "BTC: bc1qe7zzyk3264fwya3y0wj4x4wy6tvd86cf46e39u" },
  { text: "LTC: ltc1quu6df4vvum7640sfywjsxvvcsh5ax9pwq4dsu9" },
] as const;

export const PRODUCTS = [
  {
    id: "security-suite",
    name: "Security Suite",
    price: 299.99,
    description: "Enterprise-grade security solution",
    features: ["Firewall Protection", "Malware Detection", "Real-time Monitoring"]
  },
  {
    id: "cloud-platform",
    name: "Cloud Platform",
    price: 199.99,
    description: "Scalable cloud computing solution",
    features: ["Auto-scaling", "Load Balancing", "24/7 Support"]
  },
  {
    id: "database-manager",
    name: "Database Manager",
    price: 149.99,
    description: "Advanced database management system",
    features: ["Data Encryption", "Backup Solutions", "Performance Optimization"]
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    price: 99.99,
    description: "Essential development toolkit",
    features: ["Code Analysis", "Debug Tools", "Version Control"]
  },
  {
    id: "system-optimizer",
    name: "System Optimizer",
    price: 79.99,
    description: "System performance enhancement",
    features: ["Memory Management", "Process Optimization", "Disk Cleanup"]
  },
  {
    id: "encryption-pack",
    name: "Encryption Pack",
    price: 129.99,
    description: "Advanced data encryption tools",
    features: ["AES Encryption", "Key Management", "Secure File Transfer"]
  },
  {
    id: "performance-suite",
    name: "Performance Suite",
    price: 169.99,
    description: "Complete performance optimization",
    features: ["System Analysis", "Resource Management", "Performance Monitoring"]
  },
  {
    id: "analytics-platform",
    name: "Analytics Platform",
    price: 249.99,
    description: "Comprehensive data analytics",
    features: ["Data Visualization", "Predictive Analytics", "Custom Reports"]
  },
  {
    id: "team-collaboration",
    name: "Team Collaboration",
    price: 189.99,
    description: "Team productivity tools",
    features: ["Project Management", "Real-time Communication", "File Sharing"]
  }
] as const;