import MainLayout from "@/layouts/MainLayout";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <MainLayout>
      <AuthForm type="login" />
    </MainLayout>
  );
}
