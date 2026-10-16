import { Cabin, Source_Code_Pro, Fraunces } from "next/font/google";
const fraunces = Fraunces({
  weight: ["900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const cabin = Cabin({ weight: ["400", "700"], style: ["normal"], subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ weight: ["400"], subsets: ["latin"] });

export { cabin, sourceCodePro, fraunces };
