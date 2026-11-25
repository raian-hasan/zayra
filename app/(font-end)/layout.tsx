import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </>
    )
}
