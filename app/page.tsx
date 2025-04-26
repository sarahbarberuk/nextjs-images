import Image from "next/image";

export default function Component() {
  return (
    <div style={{ position: "relative", height: "auto", aspectRatio: "16/9" }}>
      <Image src="path/to/image.jpg" alt="image" priority />
    </div>
  );
}
