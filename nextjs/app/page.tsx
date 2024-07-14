import Image from "next/image"
import styles from "./page.module.css"
import { TopPage } from "./_TopPage/TopPage"

export default function Home() {
  return (
    <main className={styles.main}>
      <TopPage />
    </main>
  )
}
