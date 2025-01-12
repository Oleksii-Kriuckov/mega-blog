import Image from "next/image";
import myImage from './myImage.jpg'
import styles from './about.module.css'

export default function AboutPage() {
  return <article className={styles.root}>
    <Image src={myImage} alt="Alex photo" loading="eager" className={styles.image}/>

    <div>
      I am an enthusiastic person with an active life position. I like programming and I enjoy it. Every day I learn something new and improving my skills. I appreciate support and friendly vibe. I am ready to constantly develop, improve my skills and contribute to the work to help the team quickly and efficiently achieve their goals.
    </div>
  </article>;
}
