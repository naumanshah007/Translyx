import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.companyName} and our mission to deliver innovative AI solutions across industries while maintaining the highest standards of privacy, security, and compliance.`,
  keywords: ["Privexa Limited", "about", "team", "co-founders", "mission", "AI solutions company", "privacy-first AI", "data sovereignty"],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Company Story Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">About {siteConfig.companyName}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {siteConfig.companyName} is a technology company delivering innovative AI solutions. Our flagship product, {siteConfig.product.name}, {siteConfig.description.toLowerCase()}
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-base leading-relaxed space-y-4 text-gray-500 dark:text-gray-400">
                <p>
                  {siteConfig.companyName} was founded to address a fundamental challenge in modern AI adoption: 
                  how organizations can leverage the power of Large Language Models while maintaining 
                  complete control over their sensitive data.
                </p>
                <p>
                  Inspired by Māori data sovereignty principles and the growing need for privacy-first 
                  AI solutions, our co-founders recognized that enterprises needed a way to protect 
                  personally identifiable information (PII) and other sensitive data without sacrificing 
                  the benefits of cutting-edge AI technology.
                </p>
                <p>
                  Today, {siteConfig.companyName} delivers innovative AI solutions across multiple industries. 
                  Our flagship product, {siteConfig.product.name}, enables organizations across healthcare, 
                  finance, legal, and government sectors to deploy AI solutions on-premise, ensuring that 
                  sensitive data never leaves their infrastructure while still benefiting from the latest 
                  advances in generative AI. We also develop specialized solutions for healthcare systems, 
                  accessibility, and other critical domains.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                We are committed to enabling organizations to leverage the power of artificial intelligence 
                while maintaining the highest standards of data privacy and security. Our mission is to 
                make AI accessible and safe for everyone, especially in regulated industries where data 
                sovereignty and compliance are non-negotiable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Co-Founders Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Co-Founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Ehsan Ullah */}
            <Card variant="gradient-border" className="p-8 group">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900 dark:to-cyan-900 p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/team/ehsan-ullah.png"
                      alt="Ehsan Ullah"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Ehsan Ullah</h3>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">Co-Founder & VP of Business Strategy</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">PhD | MPhil | MBBS</p>
              </div>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-justify">
                  Ehsan is a physician-scientist and healthcare systems leader with deep expertise in 
                  laboratory medicine, digital pathology, and applied AI. He brings a rare combination 
                  of clinical judgment, systems thinking, and translational research experience, shaped 
                  by more than a decade of leadership across large-scale public health services, national 
                  programs, and international standards bodies.
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mt-3 text-justify">
                  Working at the intersection of AI, data, and complex regulated operations, Ehsan focuses 
                  on translating advanced research into deployable, high-impact solutions for real-world 
                  environments. Inspired by Māori data sovereignty principles, he co-founded Privexa to 
                  solve a core challenge in modern AI adoption: protecting personally identifiable and 
                  sensitive data by keeping it on-premise, while still enabling organizations to benefit 
                  from the latest generative AI capabilities.
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mt-3 text-justify">
                  Ehsan has led nationally significant transformation initiatives, advised on global standards 
                  for AI and data systems, and overseen the deployment of automation and ML in highly complex 
                  operational settings. He maintains active collaborations with leading universities in New 
                  Zealand and the United States, contributes to international technical standards, and serves 
                  as an author and editor on emerging AI and digital systems frameworks.
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mt-3 text-justify">
                  He is a Director (Board of Directors) at the Digital Pathology Association (USA), a member 
                  of the International Organization for Standardization (ISO) technical committee on medical 
                  laboratories and in vitro diagnostic systems, a Visiting Assistant Professor at The Ohio 
                  State University and the University of Otago, and an author of 60+ publications.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Nauman Shah */}
            <Card variant="gradient-border" className="p-8 group">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900 dark:to-cyan-900 p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/team/nauman-shah.jpg"
                      alt="Nauman Shah"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Nauman Shah</h3>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">Co-Founder & VP of Technology</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">AI & Data Analytics | Agentic AI | Solution Architecture | Privacy & Security-First Platforms</p>
              </div>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-justify">
                  Nauman is a Data & AI specialist and solution architect focused on building secure, enterprise-grade 
                  AI systems—especially for regulated environments. His work spans financial crime analytics (AML/CFT, 
                  fraud detection, sanctions screening) and healthcare/clinical research, with deep experience in 
                  clinical trials and oncology datasets. He has delivered privacy-preserving AI and LLM solutions 
                  across modern model ecosystems, enabling organizations to adopt generative AI safely while meeting 
                  strict governance and compliance requirements.
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mt-3 text-justify">
                  Nauman has worked as a Business Intelligence Developer at Watercare Services Limited, where 
                  he led data integration and quality assurance initiatives and developed decision-ready analytics and 
                  reporting solutions. He has also worked in the banking sector, focusing on financial crime analytics 
                  and risk management. Previously, he was Lead Data Scientist at CancerClarity LLC, where he built 
                  AI-driven clinical trial matching capabilities using NLP and transformer-based models, improving 
                  trial relevance and patient-to-study alignment outcomes. He has engaged extensively with healthcare 
                  institutions and professionals, delivering AI solutions for clinical research and patient care.
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed mt-3 text-justify">
                  Across 30+ client engagements, Nauman has delivered production-grade AI and data solutions end to 
                  end—from data pipelines and APIs to dashboards and automation—maintaining a 100% delivery track record. 
                  His technical toolkit includes Python, SQL, Snowflake, dbt, Power BI, FastAPI, and modern ML 
                  frameworks (TensorFlow/PyTorch), with practical experience applying agentic workflows to automate 
                  complex analysis and research tasks. He is also an Oracle Cloud Infrastructure Generative AI 
                  Certified Professional.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Global Presence</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Worldwide Team & Strategic Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                {siteConfig.companyName} has a state-of-the-art team and strategic partners across key regions, 
                enabling us to deliver world-class AI solutions with local expertise and global reach.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {siteConfig.globalPresence.regions.map((region, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 rounded-lg border border-primary-200 dark:border-primary-800 text-center group hover:shadow-lg transition-all duration-300"
                  >
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{region}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Expertise Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="gradient-border" className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Talent & Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                  {siteConfig.expertise.talent}
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Specialties:</h3>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.expertise.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-br from-primary-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="gradient-border" className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Domain Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                  Our team brings deep domain expertise across critical industries, enabling us to build 
                  solutions that understand the unique challenges and requirements of each sector.
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.expertise.domains.map((domain, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8 p-8 bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 border-2 border-primary-200 dark:border-primary-800">
            <CardContent>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 text-center">
                <span className="font-semibold">Our Vision:</span> To automate everything in every sector via secure AI, 
                making advanced AI capabilities accessible while maintaining the highest standards of privacy, 
                security, and compliance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gradient">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="default" className="p-8 text-center group hover:shadow-colored transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-10 h-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl mb-3">Privacy-First</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Data sovereignty and privacy are not optional—they are fundamental rights. We build 
                every feature with privacy as the foundation, not an afterthought.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-8 text-center group hover:shadow-colored transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl mb-3">Enterprise-Grade</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Built for organizations that cannot compromise on security, reliability, or compliance. 
                Our solutions meet the highest standards for enterprise deployment.
              </CardDescription>
            </Card>

            <Card variant="default" className="p-8 text-center group hover:shadow-colored transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl mb-3">Compliance-Focused</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                We understand regulatory requirements and build compliance into every aspect of our 
                platform, from audit logging to data handling procedures.
              </CardDescription>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
