import Image from 'next/image'
import main_image from "../public/main_image.png";
import squiggle from "../public/squiggle.png";

export default function Home() {
  return (
    <main>
      <Image src={squiggle} width={50}/>
      <Image src={main_image} width={800}/>
      <h1>Come Build With Us</h1>
    </main>
  )
}
