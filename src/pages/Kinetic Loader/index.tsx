import styles from "./index.module.css";

export default function Index() {
  return (
    <div className="bg-[#2c3e50] w-full h-screen flex items-center justify-center">
      <div className={`${styles.container} w-[80px] h-[80px] relative before:border-transparent
       before:absolute before:border-[40px] before:border-b-white before:left-0
       before:top-0 after:border-transparent after:absolute after:border-b-white
        after:left-0 after:top-0 after:border-[40px]`}>
      </div>
    </div>
  )
}
