import React, { useState } from 'react';
import { Upload, FileText, Download, AlertCircle, CheckCircle, Brain, Heart, Activity, User, Calendar, Clock } from 'lucide-react';

interface AnalysisResult {
  patientInfo: {
    name: string;
    age: number;
    gender: string;
    reportDate: string;
  };
  keyMetrics: {
    overallHealth: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    criticalFindings: number;
    normalFindings: number;
  };
  findings: Array<{
    category: string;
    status: 'Normal' | 'Abnormal' | 'Critical';
    value: string;
    reference: string;
    description: string;
  }>;
  recommendations: string[];
  aiInsights: string[];
}

function ReportAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const analyzeReport = async () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with realistic delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResult: AnalysisResult = {
      patientInfo: {
        name: "Patient Sample",
        age: 45,
        gender: "Female",
        reportDate: new Date().toLocaleDateString()
      },
      keyMetrics: {
        overallHealth: 82,
        riskLevel: 'Medium',
        criticalFindings: 1,
        normalFindings: 12
      },
      findings: [
        {
          category: "Cardiovascular",
          status: "Normal",
          value: "120/80 mmHg",
          reference: "120/80 mmHg",
          description: "Blood pressure within normal range"
        },
        {
          category: "Cholesterol",
          status: "Abnormal",
          value: "245 mg/dL",
          reference: "<200 mg/dL",
          description: "Total cholesterol elevated - recommend dietary changes"
        },
        {
          category: "Blood Sugar",
          status: "Normal",
          value: "95 mg/dL",
          reference: "70-100 mg/dL",
          description: "Fasting glucose within normal range"
        },
        {
          category: "Liver Function",
          status: "Critical",
          value: "ALT: 85 U/L",
          reference: "7-56 U/L",
          description: "Elevated liver enzymes - requires immediate attention"
        }
      ],
      recommendations: [
        "Follow up with cardiologist regarding elevated cholesterol levels",
        "Implement low-cholesterol diet and regular exercise routine",
        "Schedule hepatology consultation for liver enzyme elevation",
        "Repeat liver function tests in 2-4 weeks",
        "Consider statin therapy after cardiology consultation"
      ],
      aiInsights: [
        "Pattern analysis suggests metabolic syndrome risk - comprehensive lifestyle modification recommended",
        "Liver enzyme elevation may be related to medication or dietary factors - detailed history review needed",
        "Overall cardiovascular risk profile indicates preventive measures should be prioritized"
      ]
    };
    
    setResult(mockResult);
    setIsAnalyzing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': return 'text-green-600 bg-green-50';
      case 'Abnormal': return 'text-yellow-600 bg-yellow-50';
      case 'Critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Normal': return <CheckCircle className="h-4 w-4" />;
      case 'Abnormal': return <AlertCircle className="h-4 w-4" />;
      case 'Critical': return <AlertCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Report</h3>
            <p className="text-gray-600 mb-4">Our AI is processing your medical report...</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center justify-center">
                <Brain className="h-4 w-4 mr-2" />
                <span>Processing medical data</span>
              </div>
              <div className="flex items-center justify-center">
                <Activity className="h-4 w-4 mr-2" />
                <span>Analyzing biomarkers</span>
              </div>
              <div className="flex items-center justify-center">
                <Heart className="h-4 w-4 mr-2" />
                <span>Generating insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Analysis Results</h1>
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </button>
                <button 
                  onClick={() => {
                    setResult(null);
                    setFile(null);
                  }}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  New Analysis
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Patient</p>
                  <p className="font-medium">{result.patientInfo.name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Age/Gender</p>
                  <p className="font-medium">{result.patientInfo.age}Y, {result.patientInfo.gender}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Report Date</p>
                  <p className="font-medium">{result.patientInfo.reportDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">File</p>
                  <p className="font-medium">{file?.name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500">Overall Health Score</p>
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600">{result.keyMetrics.overallHealth}%</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500">Risk Level</p>
                <AlertCircle className={`h-5 w-5 ${
                  result.keyMetrics.riskLevel === 'Low' ? 'text-green-600' :
                  result.keyMetrics.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                }`} />
              </div>
              <p className={`text-2xl font-bold ${
                result.keyMetrics.riskLevel === 'Low' ? 'text-green-600' :
                result.keyMetrics.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {result.keyMetrics.riskLevel}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500">Critical Findings</p>
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <p className="text-3xl font-bold text-red-600">{result.keyMetrics.criticalFindings}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-500">Normal Findings</p>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600">{result.keyMetrics.normalFindings}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Findings */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Detailed Findings</h2>
              <div className="space-y-4">
                {result.findings.map((finding, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{finding.category}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(finding.status)}`}>
                        {getStatusIcon(finding.status)}
                        <span className="ml-1">{finding.status}</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                      <div>
                        <p className="text-gray-500">Value</p>
                        <p className="font-medium">{finding.value}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Reference</p>
                        <p className="font-medium">{finding.reference}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{finding.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations & AI Insights */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h2>
                <div className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">AI Insights</h2>
                </div>
                <div className="space-y-3">
                  {result.aiInsights.map((insight, index) => (
                    <div key={index} className="bg-white bg-opacity-70 rounded-lg p-3">
                      <p className="text-gray-700">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Patient Report Analyzer</h1>
          <p className="text-xl text-gray-600">
            Upload medical reports for AI-powered analysis and insights
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div 
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {file ? file.name : 'Upload Medical Report'}
            </h3>
            <p className="text-gray-600 mb-6">
              Drag and drop your file here, or click to browse
            </p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer inline-block"
            >
              Choose File
            </label>
            <p className="text-sm text-gray-500 mt-4">
              Supports PDF, images, and document files up to 10MB
            </p>
          </div>

          {file && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={analyzeReport}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Brain className="h-5 w-5 mr-2" />
                  Analyze Report
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Upload className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Upload Report</h4>
              <p className="text-sm text-gray-600">
                Securely upload your medical reports in various formats
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">AI Analysis</h4>
              <p className="text-sm text-gray-600">
                Advanced algorithms analyze and interpret your medical data
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Get Insights</h4>
              <p className="text-sm text-gray-600">
                Receive detailed analysis, recommendations, and actionable insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportAnalyzer;