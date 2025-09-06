import Modal from "@/components/modal";
import BookDeatilPage from "../../../book/[...id]/page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Modal>
      <BookDeatilPage params={params} />
    </Modal>
  );
} 