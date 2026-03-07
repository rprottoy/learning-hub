import Articles from "@/components/home/Articles";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import DoNotMissOut from "@/components/home/DoNotMissOut";
import Recommended from "@/components/home/Recommended";
import UpcomingEvents from "@/components/home/UpcomingEvents";
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
      <section>
        <Articles></Articles>
      </section>
      <section>
        <UpcomingEvents></UpcomingEvents>
      </section>
      <section>
        <DoNotMissOut></DoNotMissOut>
      </section>
    </div>
  );
}
