"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, LogIn, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login validation
    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.email === email && user.password === password) {
        localStorage.setItem("isLoggedIn", "true")
        router.push("/dashboard")
      } else {
        setError("Invalid email or password")
      }
    } else {
      setError("No account found. Please register first.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-[url('/images/cars.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto max-w-md">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-white mt-2">Sign in to your LTMS account</p>
        </div>

        <Card className="shadow-xl border-0 bg-white/30 backdrop-blur-md">
          <div className="w-full max-w-sm mx-auto">
            <img
             src="/images/last.png"
             alt="Sign In"
             className="w-1/2 md:w-1/3 lg:w-1/4 pt-5 pb-5 h-auto rounded-xl mx-auto"
            />
         </div>



          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="EMAIL OR LTO CLIENT NUMBER"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="PASSWORD"
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/forgot-password" className="text-sm text-danger hover:text-blue-700">
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-white">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
