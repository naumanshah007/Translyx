import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.companyName}`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About {siteConfig.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {siteConfig.description}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We are committed to enabling organizations to leverage the power of
                artificial intelligence while maintaining the highest standards of
                data privacy and security. Our mission is to make AI accessible and
                safe for everyone.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Who We Are</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {siteConfig.companyName} is a New Zealand-based company specializing
                in privacy-first AI solutions. We understand the critical importance
                of protecting sensitive information in today&apos;s digital landscape.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Do</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We provide enterprise-grade solutions that automatically detect,
                encrypt, and protect personally identifiable information (PII) before
                it reaches any large language model. Our technology ensures that your
                sensitive data never leaves your control.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

