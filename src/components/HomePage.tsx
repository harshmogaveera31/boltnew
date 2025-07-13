import React from 'react';
import { Activity, FileText, Users, Shield, Upload, Calendar, User, Heart, Brain, Stethoscope, CheckCircle, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigateToAnalyzer: () => void;
}

function HomePage({ onNavigateToAnalyzer }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Advanced Healthcare
                <span className="text-blue-200 block">Analytics Platform</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Revolutionize patient care with AI-powered report analysis, comprehensive health insights, 
                and intelligent diagnostic support for healthcare professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onNavigateToAnalyzer}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Analyze Reports Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <Heart className="h-8 w-8 mx-auto mb-2 text-red-300" />
                    <p className="text-sm font-medium">Cardiac Analysis</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <Brain className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                    <p className="text-sm font-medium">Neural Insights</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <Activity className="h-8 w-8 mx-auto mb-2 text-green-300" />
                    <p className="text-sm font-medium">Vital Monitoring</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <Stethoscope className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <p className="text-sm font-medium">Diagnostics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with medical expertise to provide 
              accurate, fast, and reliable healthcare analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Report Analysis</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms analyze medical reports with 99.2% accuracy, 
                identifying patterns and anomalies instantly.
              </p>
              <button 
                onClick={onNavigateToAnalyzer}
                className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
              >
                Try Analysis <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Monitor patient vitals and health metrics in real-time with intelligent alerts 
                and predictive health analytics.
              </p>
              <button className="text-teal-600 font-medium hover:text-teal-700 flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliant</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with end-to-end encryption, ensuring complete 
                patient data privacy and regulatory compliance.
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700 flex items-center">
                Security Details <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.2%</div>
              <p className="text-gray-600">Analysis Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">2.5M+</div>
              <p className="text-gray-600">Reports Analyzed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
              <p className="text-gray-600">Healthcare Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15s</div>
              <p className="text-gray-600">Average Analysis Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of healthcare professionals who trust MedAnalytica for 
            advanced patient care and diagnostic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onNavigateToAnalyzer}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Start Free Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;