import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/admin">
      <Button>Chakra admin Dashboard Click to visit</Button>
    </Link>
  );
}
