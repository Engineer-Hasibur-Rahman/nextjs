import MainLayout from "@/layouts/MainLayout";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
    return (
        <MainLayout>
            <AuthForm type="register" />
        </MainLayout>
    );
}
