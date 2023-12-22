import Image from "next/image";
import styles from "./page.module.css";
import TestClient from "@/src/components/TestClient";

export default function Home() {
   return (
      <div>
         <TestClient />
      </div>
   );
}
