import prismaDb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children, params }: { children: React.ReactNode, params: { storeId: string } }) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const store = await prismaDb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });

    console.log('[STORE_DASHBOARD_LAYOUT]', store);

    if (!store) {
        redirect('/');
    }

    return (
        <>
            <nav>Feature Navbar</nav>
            {children}
        </>
    )
}