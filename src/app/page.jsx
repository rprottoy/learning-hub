import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Recommended from "@/components/home/Recommended";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:space-y-30 space-y-15">
      <section className="">
        <Banner></Banner>
      </section>
      <section>
        <Categories></Categories>
      </section>
      <section>
        <Recommended></Recommended>
      </section>
    </div>
  );
}
