import Construction from "../components/construction";
import Preview from "./preview";

const showPreview = process.env.NEXT_PUBLIC_SHOW_PREVIEW === "true";

export default function Home() {
  return showPreview ? <Preview /> : <Construction />;
}