import { MaskContainer } from "@/components/ui/SVGMaskEffect";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-neutral-800 text-center  text-4xl font-bold">
            Portfolio of Tamal Biswas.
          </p>
        }
        className="border rounded-md"
      >
        <h1 className="">
          Portfolio of <span className="text-primary-600">Tamal Biswas.</span>
        </h1>
      </MaskContainer>
    </main>
  );
}
