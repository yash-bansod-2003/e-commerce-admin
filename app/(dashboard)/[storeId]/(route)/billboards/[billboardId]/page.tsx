import prismaDb from "@/lib/prismadb"
import { BillboardForm } from "./components/billboard-form"

interface BillBoardPageProps {
    params: { billboardId: string }
}

const BillboardPage: React.FC<BillBoardPageProps> = async ({ params }) => {

    const billboard = await prismaDb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    });

    return (
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm billboard={billboard} />
            </div>
        </div>
    )
}

export default BillboardPage