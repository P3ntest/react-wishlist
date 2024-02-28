import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient";
import { EvervaultCard } from "./components/ui/evervault";
import { LampContainer } from "./components/ui/lamp";
import { MaskContainer } from "./components/ui/text-mask";
import { TracingBeam } from "./components/ui/tracing-beam";
import { SparklesCore } from "./components/ui/sparkles";
import {
  MovingBorder,
  MovingBorderContainer,
} from "./components/ui/moving-border";
import { CountDownText } from "./components/ui/countdown";

export function App() {
  return (
    <div className="relative">
      {/* <div className="absolute">
        <TracingBeam />
      </div> */}
      <div className="flex flex-col items-stretch">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Willkommen
            </p>
          </div>
        </BackgroundGradientAnimation>

        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
              Es ist wieder so weit, ich habe bald Geburtstag. Ich freue mich
              schon seit langem darauf. Endlich 19 Jahre alt. Ich kann es kaum
              noch erwarten.
            </p>
          }
          className="h-[40rem]"
        >
          Hilfe, ich werde schon 19 Jahre alt. Die Zeit vergeht so schnell. Ich
          bin noch nicht bereit, erwachsen zu werden. Ich will noch so viel
          erleben.
        </MaskContainer>
        <div className="bg-slate-900 h-screen flex items-center justify-center">
          <div className="w-[600px] border border-slate-600 rounded-xl">
            <EvervaultCard text="Ich habe natürlich meine Geburtstagswünsche wieder in eine Webseite verwandelt." />
          </div>
        </div>

        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl md:text-8xl font-medium tracking-tight text-transparent"
          >
            {/* Und habe für maximale Effizienz gesorgt, indem ich die Links zu
            meisten den Geschenken direkt in die Webseite eingebaut habe. */}
            <CountDownText />
          </motion.h1>
        </LampContainer>

        <div>
          <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <h1 className="md:text-3xl text-xl lg:text-5xl font-bold text-center text-white relative z-20">
              Meine Wünsche
            </h1>
            <div className=" h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
        <div className="bg-black">
          {wishes.map((wish, index) => (
            <Wish key={index} wish={wish} />
          ))}
        </div>
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Danke
            </p>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}

const wishes = [
  {
    name: "Paperlike iPad Folie",
    description:
      "Mit der Paperlike Folie wird das Schreiben auf dem iPad zum Erlebnis.",
    image:
      "https://www.lizkohlerbrown.com/wp-content/uploads/2020/05/plant-and-hand-1-1.jpg",
    link: "https://www.amazon.de/-/en/Paper-Feel-Protectors-11-Anti-Glare-Drawing/dp/B09BMVQPVM/ref=sr_1_4?crid=3C67QB49Z97HR&dib=eyJ2IjoiMSJ9.7Z4nbTOCe6jR4d23sx4UyckxtAvuXqx5txAYP9IYzM7cEqsJyRI2glZFOlyN2D2sgRdLJq-EmXUl5QopvDIyHGXaGZ6s9ArwFGSRGPr8VMvv0-0nOiItu4sIUXV7PvBIjab_HSzNN6WiYb6ns2sqb2VX0albFAE_SU5TP0GiRRMCf2NbPh6ZzzQ_m_JD5dnz1jEgcIbXPdOEd0V2ZqlsD8tpme_unnBXQo18ft8yd3U.LugREc3dd96Cg7PXgnWQfFfHBOuwYN5kFCrP-QRaN6s&dib_tag=se&keywords=paperlike+ipad+air&qid=1709113628&sprefix=paperlike+ipad+air%2Caps%2C297&sr=8-4",
  },
  {
    name: "Athletic Greens",
    description:
      "Athletic Greens ist ein Nahrungsergänzungsmittel, um mich super human zu machen.",
    image:
      "https://www.elisazunder.de/wp-content/uploads/2021/11/AthleticGreens_AG1-im-Test-ElisaZunder-Blogazine-02-small.jpg",
    link: "https://drinkag1.com/en-eu",
  },
  {
    name: "Powerlifting Kniebandagen",
    description:
      "Kniebandagen für das Powerlifting, um meine Knie zu schützen und stärken.",
    image: "https://m.media-amazon.com/images/I/81mW035oeHL._AC_SL1500_.jpg",
    link: "https://www.amazon.de/-/en/Fastening-Deadlifts-Bodybuilding-Weightlifting-Powerlifting/dp/B0CMJ81NLS/ref=sr_1_5?crid=KQJAJAP0YXU7&dib=eyJ2IjoiMSJ9.vLiVfxLxkqyfm1PKzEhmN_QBPOgMmVdynAUnoIXMw26TwPX-R79xjWZehcPHT-drx36Q8qy7008IwzgAQqfSxZuX_Or568j0axiAo9jVnHS6Z77wFhahBytXjH5m6F6PCQThVbUPZExHVnR5kdXE35__TKQqA4h_csHpwcfguglgGufN-kGyGeWu1xCeJZDSFpxUvMq7rw-Xr-5FE4MAP7bKq4woya4Xz1Eou8KvIb3dtCtgBgn1U2BsrE2flL_KBCdTR_HufvE1RUFfXx76eiMG3SE-ZvTa1lXD1AiTms8.rVNtHGDS4DqiWA2UPR8fEeVBqHpmYBtzZkQ9HM2Wnes&dib_tag=se&keywords=powerlifting%2Bknee%2Bsleeves&qid=1709114163&sprefix=powerlifting%2Bknee%2Bsleeves%2Caps%2C355&sr=8-5&th=1&psc=1",
  },
  {
    name: "Magsafe Powerbank",
    description:
      "Eine Powerbank, um mein Handy und andere Geräte unterwegs aufzuladen.",
    image: "https://m.media-amazon.com/images/I/6199SlTu1jL._AC_SL1500_.jpg",
    link: "https://www.amazon.de/-/en/YAGOPAL-PowerBank-Wireless-Magnetic-Charging/dp/B09T9TM6S9/ref=sr_1_9?dib=eyJ2IjoiMSJ9.L-faG8PaJC_Y3g_Y-FFYqNAHB7DRG_vsAeBKLi3_vTDIhJOVdNDKuKXp77MAbqSLNGE44q0dWMI6fjIBqg1z2gCMmjCY0WPs8wWI7DF9khNhcXqi-X6Ed7hK3TGxVAidIe8lvS5inFLau1eoMHoyTe134sHcILyIP9aWPNyHKhIDm7PhP6GOmGjnhFXYWMFs0HI-jAEXT0Y2S1qsnMc7IzBS_ZMyIzRAyVb3Q_JwFEY.OokyvsW3ot_UXroh_LaUi-vbK8zvbbwRk7zaFkqBvG0&dib_tag=se&keywords=magsafe%2Bpowerbank&qid=1709114688&sr=8-9&th=1",
  },
  {
    name: "Clear Whey Protein",
    description:
      "Clear Whey Protein ist ein Proteinshake, der nicht so dickflüssig ist.",
    image: "https://m.media-amazon.com/images/I/614yuQUZbWL._AC_SL1500_.jpg",
    link: "https://www.amazon.de/-/en/Isoclear-Isolate-Green-Apple-Clear/dp/B0BYZSTCT4/ref=sr_1_6?crid=RJNT7R4CWHXH&dib=eyJ2IjoiMSJ9.Wdz-Hmj4sOJU-BgWNyPO5hMB_jz8IqZXyFBYps4pjw0DaOfjXc5-yzEVN7d-IfI904SYwQb28FMr9CwBI62bVaNWs2WbQn0W2Mg1ZAGyHlfUxujIMM4ToW2NaFjWArRTuGrrIEKq1_BMdszZaH3rOrUmzqMG5mvNaB8HWc_cek4ijbvoXyTMqAnOSaSMuh5tjKPgPG7q8w69kwfgjh-jUrGuKH5gh9PVDLUXy0KpMks36AeXd_0DDtO0vgrR3_8fQZ9SkMGTvmavZWlqeym3AyvBkbxnfnz3P3md8VdsjhY.xF7rN4we9AAabCNPGlBaWchE9HoWQDso34tkT5Vp81U&dib_tag=se&keywords=clear%2Bwhey&qid=1709114977&rdc=1&sprefix=clear%2Bwhey%2B%2Caps%2C287&sr=8-6&th=1",
  },
  {
    name: "Apple Watch Armband",
    description:
      "Ein neues Armband für meine Apple Watch, um sie zu personalisieren.",
    image: "https://m.media-amazon.com/images/I/71UFDAIa2aL._AC_SL1500_.jpg",
    link: "https://www.amazon.de/-/en/Replacement-Compatible-Adjustable-Bracelets-Stainless-Polar-star/dp/B0CL6LJDWD/ref=sr_1_3?crid=3HTDGJEHSFO8H&dib=eyJ2IjoiMSJ9.RNxqMPqqU-NdNCK_bME6JZcFJgyfZ-HYj1Rio5HFTowoFGivktZVsx4eX3edJCTsJVkWZyjxD8yMq6EqG1a9wyLSCQjcgcoo0yocIawO7CNadjAQ34Gkwh1l36086DFsaEw87HM5wNkeMxOBFsg_6pBt-P3SLx-pkoafG4-ccqiGLywKVtxcmE4ALR4qzd6lFvT6uX1qMCPIRTrzk333JDmeb6dMOH6nECdsUEFAod8.v8pR-w4NX00RRI9x6Si5hxvyr9wMRN6bFvypjiAOuWc&dib_tag=se&keywords=apple%2Bwatch%2Bband&qid=1709115269&sprefix=apple%2Bwatch%2Bb%2Caps%2C273&sr=8-3&th=1",
  },
  {
    name: "iPad Case",
    description:
      "Ein neues Case für mein iPad, um es zu schützen und zu personalisieren.",
    image: "https://m.media-amazon.com/images/I/71h4rI1vYNL._AC_SL1500_.jpg",
    link: "https://www.amazon.de/-/en/iPad-Air-2020-Trifold-Magnetic/dp/B08L6N3M4L/ref=sr_1_5?crid=3O2O7RO5FQCPT&dib=eyJ2IjoiMSJ9.w6ci-n11sCXy_7hzyuGBHk1QIC6sDDOxwU0jc-CzxHW0TXhYxxUBwXNFPV2XVfuVPGC-tEhRD3GS_t3ISnzmH5ckefiJWvD1_AuWbAy-aa_6gCTbJliS_z-7EUpsj2BA4_5eYcMwFtizvB0WBwAuWf5iO2hQX6Kqm4UzlSFhoJNsDx6ZyEt-VfLZqE1FQKZcJ2EhCDWH_bcl-bbElOglL-paqZ9gWxvDIBFXs3tPEQE.kWxs0MOV-JrdDfVgr2QDET3XIoWN5WE8MInI7LFZuVA&dib_tag=se&keywords=ipad+air+5+case+pencil+esr&qid=1709115407&sprefix=ipad+air+5+case+pencil+e%2Caps%2C280&sr=8-5",
  },
];

function Wish({ wish }: { wish: (typeof wishes)[0] }) {
  return (
    <div>
      <CardContainer className="">
        <a href={wish.link}>
          <MovingBorderContainer className="cursor-pointer max-w-lg">
            <CardBody>
              <CardItem
                translateX={-25}
                translateY={-25}
                rotateY={5}
                rotateX={5}
              >
                <h1 className="text-white text-xl font-bold px-10 pt-10 pb-2">
                  {wish.name}
                </h1>
              </CardItem>
              <CardItem
                translateX={-25}
                translateY={-25}
                rotateY={5}
                rotateX={5}
              >
                <p className="text-slate-200 px-10">{wish.description}</p>
              </CardItem>
              <CardItem
                translateX={15}
                translateY={15}
                rotateY={-5}
                rotateX={-5}
                className="overflow-hidden"
              >
                <div className="px-10 pb-10">
                  <img
                    src={wish.image}
                    alt={wish.name}
                    className="w-full pt-10"
                  />
                </div>
              </CardItem>
            </CardBody>
          </MovingBorderContainer>
        </a>
      </CardContainer>
    </div>
  );
}
