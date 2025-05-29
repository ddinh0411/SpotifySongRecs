import Construction from "../components/construction";
import Preview from "./preview";

const isDev = process.env.NODE_ENV === "development";

export default function Home() {
  return isDev ? <Preview /> : <Construction />;
}
