import Image from "next/image";
import Header from "@/app/components/Header";
import BadgeContainer from "@/app/components/BadgeContainer";
import SearchBox from "@/app/components/SearchBox";

export default function Home() {
    return (
        <>
            <Header />
            <BadgeContainer />
            <SearchBox />
        </>
    );
}
