import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export function SignInForm({
  className,
  error,
  response,
  handleSignUp,
  ...props
}) 


{
  const [errorFields, setErrorFields] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    handleSignUp(data); 
  }

  useEffect(() => {
    if (!error) return;

    if (error.includes('fields')) {
      setErrorFields(error);
      setErrorEmail(''); 
    } else if (error.includes('valid')) {
      setErrorEmail(error);
      setErrorFields(''); 
    }
  }, [error]);
  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label className="text-red-500 font-light">{errorFields ? '*'+errorFields : ''}</Label>
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-red-500 font-light">{errorEmail ? '*'+errorEmail : ''}</Label>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                </div>
                <Input id="confirmPassword" name="confirmPassword" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
            <div className="my-7 text-center text-sm">
                Already have an account?{" "}
              <Link to='/login' className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}