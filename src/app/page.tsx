"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Lock,
  UserPlus,
  Key,
  Mail,
  Settings,
  Users,
  FileText,
  Shield,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const authPages = [
    {
      id: "2fa-enforced-security-preferences",
      name: "2FA Security Preferences",
      icon: Shield,
      description: "Two-factor authentication settings",
    },
    {
      id: "2fa-enforced-terms-conditions",
      name: "2FA Terms & Conditions",
      icon: FileText,
      description: "Terms for 2FA usage",
    },
    {
      id: "2fa-optional-security-preferences",
      name: "2FA Optional Security",
      icon: Shield,
      description: "Optional 2FA settings",
    },
    {
      id: "create-new-password",
      name: "Create New Password",
      icon: Key,
      description: "Password creation form",
    },
    {
      id: "login",
      name: "Login",
      icon: Lock,
      description: "User login page",
    },
    {
      id: "on-boarding-create-new-password",
      name: "Onboarding Password",
      icon: Key,
      description: "Password setup during onboarding",
    },
    {
      id: "on-boarding-login-credentials",
      name: "Onboarding Login",
      icon: UserPlus,
      description: "Login setup during onboarding",
    },
    {
      id: "otp-verifications",
      name: "OTP Verification",
      icon: Mail,
      description: "One-time password verification",
    },
    {
      id: "password-reset-success",
      name: "Password Reset Success",
      icon: Key,
      description: "Password reset confirmation",
    },
    {
      id: "reset-password",
      name: "Reset Password",
      icon: Key,
      description: "Password reset form",
    },
    {
      id: "reset-password-email-sent",
      name: "Reset Email Sent",
      icon: Mail,
      description: "Password reset email confirmation",
    },
    {
      id: "set-up-organization-add-users",
      name: "Add Organization Users",
      icon: Users,
      description: "Add users to organization",
    },
    {
      id: "set-up-organization-contact-info",
      name: "Organization Contact",
      icon: Settings,
      description: "Organization contact information",
    },
    {
      id: "set-up-organization-credentials",
      name: "Organization Credentials",
      icon: Lock,
      description: "Organization authentication setup",
    },
    {
      id: "set-up-organization-terms-conditions",
      name: "Organization Terms",
      icon: FileText,
      description: "Organization terms and conditions",
    },
    {
      id: "user-redirection",
      name: "User Redirection",
      icon: UserPlus,
      description: "User redirection after auth",
    },
  ];

  const handlePageClick = (pageId: string) => {
    setActiveItem(pageId);
    router.push(`/authentication/${pageId}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Lock className="w-8 h-8" />
            Authentication System
          </h1>
          <p className="mt-2 opacity-90">
            Navigate through all authentication pages
          </p>
        </div>

        <div className="p-6">
          <div className="border border-gray-200 rounded-lg">
            <div
              className="flex items-center gap-2 p-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
              <Lock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-800">
                Authentication ({authPages.length} pages)
              </span>
            </div>

            {isExpanded && (
              <div className="divide-y divide-gray-100">
                {authPages.map((page) => {
                  const IconComponent = page.icon;
                  const isActive = activeItem === page.id;

                  return (
                    <div
                      key={page.id}
                      className={`p-4 cursor-pointer transition-all duration-200 hover:bg-blue-50 border-l-4 ${
                        isActive
                          ? "bg-blue-50 border-l-blue-500 shadow-sm"
                          : "border-l-transparent hover:border-l-blue-300"
                      }`}
                      onClick={() => handlePageClick(page.id)}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent
                          className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-500"}`}
                        />
                        <div className="flex-1">
                          <h3
                            className={`font-medium ${isActive ? "text-blue-900" : "text-gray-800"}`}
                          >
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {page.description}
                          </p>
                          <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                            /authentication/{page.id}
                          </code>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${isActive ? "text-blue-500" : "text-gray-400"}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {activeItem && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                Currently Selected:
              </h3>
              <p className="text-blue-800">
                Page:{" "}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  {activeItem}
                </code>
              </p>
              <p className="text-sm text-blue-600 mt-1">
                In a real application, this would navigate to:{" "}
                <code>/authentication/{activeItem}</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
