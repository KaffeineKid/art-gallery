import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  const data = await fetch("https://example-apis.vercel.app/api/art");
  const res = await data.json();
  let randomPiece = Math.floor(Math.random() * res.length);
  let piece = res[randomPiece];

  return (
    <>
      <main className={styles.main}>
        <Image
          width={200}
          height={200}
          src={piece.imageSource}
          alt={piece.name}
          className={styles.randomImg}
        />
        <h4 className={styles.randomImgName}>{piece.name}</h4>
      </main>
    </>
  );
}
