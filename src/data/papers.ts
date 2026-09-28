import type { Paper } from "@/components/PaperCard";

// Ki Jun Kim(저자) + Seong Jung Kwon(교신저자, Konkuk University) 논문 — 최신순
// 출처: OpenAlex / Crossref (2026-09-26 조회). summary 는 초록(또는 제목)을 바탕으로 쓴 한 줄 요약.
export const papers: Paper[] = [
  {
    id: "electacta-2024",
    title:
      "Application of single-entity electrochemistry for ultraviolet detection using photoreduced silver nanoparticles",
    venue: "Electrochimica Acta",
    year: 2024,
    url: "https://doi.org/10.1016/j.electacta.2024.145600",
    summary:
      "광환원으로 만든 은 나노입자를 단일 입자 전기화학으로 관찰해 자외선을 검출한 연구",
  },
  {
    id: "bkcs-2024-snr",
    title:
      "Enhanced signal to noise ratio of single entity electrochemistry signal of platinum nanoparticles using passive silver ultramicroelectrode",
    venue: "Bulletin of the Korean Chemical Society",
    year: 2024,
    url: "https://doi.org/10.1002/bkcs.12905",
    summary:
      "산화막으로 안정화된 은 초미세전극을 써서 백금 나노입자 신호의 S/N비를 높인 연구",
  },
  {
    id: "nanoscale-2024",
    title:
      "Exploring single-entity electrochemistry beyond conventional potential windows: mechanistic insights into hydrazine/hydrazinium ion oxidation",
    venue: "Nanoscale",
    year: 2024,
    url: "https://doi.org/10.1039/d4nr02942a",
    summary:
      "기존 전위 범위를 넘어 하이드라진/하이드라지늄 이온 산화의 메커니즘을 단일 입자 수준에서 탐구",
  },
  {
    id: "nanomaterials-2024",
    title:
      "Superior Single-Entity Electrochemistry Performance of Capping Agent-Free Gold Nanoparticles Compared to Citrate-Capped Gold Nanoparticles",
    venue: "Nanomaterials",
    year: 2024,
    url: "https://doi.org/10.3390/nano14171399",
    summary:
      "캡핑제 없는 금 나노입자가 시트르산 캡핑 금 나노입자보다 우수한 단일 입자 신호를 보임",
  },
  {
    id: "bkcs-2023-pd",
    title:
      "Investigation of electrocatalytic activity of palladium nanoparticle for ammonia borane oxidation via single-entity electrochemistry",
    venue: "Bulletin of the Korean Chemical Society",
    year: 2023,
    url: "https://doi.org/10.1002/bkcs.12797",
    summary:
      "암모니아 보레인 산화에서 금·은 나노입자는 신호가 없고 팔라듐 나노입자만 계단형 신호를 보임",
  },
  {
    id: "small-2023",
    title:
      "Time-Resolved Electrochemical Impedance Spectroscopy of Stochastic Nanoparticle Collision: Short Time Fourier Transform versus Continuous Wavelet Transform",
    venue: "Small",
    year: 2023,
    url: "https://doi.org/10.1002/smll.202302158",
    summary:
      "백금 나노입자 충돌을 임피던스 분광으로 시간 분해 분석하고, CWT가 STFT보다 시간 분해능이 좋음을 보임",
  },
  {
    id: "bkcs-2022-ige",
    title:
      "Immunosensor for human IgE detection using electrochemical redox cycling with ferrocene-mixed self-assembled monolayers modified Au electrode",
    venue: "Bulletin of the Korean Chemical Society",
    year: 2022,
    url: "https://doi.org/10.1002/bkcs.12641",
    summary:
      "페로센 자기조립단분자막을 입힌 금 전극으로 사람 IgE를 검출하는 전기화학 면역센서 (검출한계 1 IU/mL)",
  },
  {
    id: "nanomaterials-2022",
    title:
      "Observation and Analysis of Staircase Response of Single Palladium Nanoparticle Collision on Gold Ultramicroelectrodes",
    venue: "Nanomaterials",
    year: 2022,
    url: "https://doi.org/10.3390/nano12183095",
    summary:
      "금 초미세전극에서 단일 팔라듐 나노입자 충돌이 계단형 신호를 보임을 전극·전위별로 분석",
  },
  {
    id: "ijms-2022",
    title:
      "Electrochemical Detection and Analysis of Various Current Responses of a Single Ag Nanoparticle Collision in an Alkaline Electrolyte Solution",
    venue: "International Journal of Molecular Sciences",
    year: 2022,
    url: "https://doi.org/10.3390/ijms23137472",
    summary:
      "알칼리 용액에서 단일 은 나노입자의 충돌 신호를 전기촉매 증폭법으로 관찰하고 분석",
  },
  {
    id: "biosensors-2020",
    title:
      "Electrochemical Immunosensor for Human IgE Using Ferrocene Self-Assembled Monolayers Modified ITO Electrode",
    venue: "Biosensors",
    year: 2020,
    url: "https://doi.org/10.3390/bios10040038",
    summary:
      "페로센 자기조립단분자막을 입힌 ITO 전극으로 사람 IgE를 검출하는 전기화학 면역센서 (검출한계 3 IU/mL)",
  },
  {
    id: "nanomaterials-2019",
    title:
      "Observation of Single Nanoparticle Collisions with Green Synthesized Pt, Au, and Ag Nanoparticles Using Electrocatalytic Signal Amplification Method",
    venue: "Nanomaterials",
    year: 2019,
    url: "https://doi.org/10.3390/nano9121695",
    summary:
      "과일 추출물로 친환경 합성한 백금·금·은 나노입자의 단일 입자 충돌 신호를 관찰",
  },
  {
    id: "nanomaterials-2018",
    title:
      "Chronoamperometric Observation and Analysis of Electrocatalytic Ability of Single Pd Nanoparticle for Hydrogen Peroxide Reduction Reaction",
    venue: "Nanomaterials",
    year: 2018,
    url: "https://doi.org/10.3390/nano8110879",
    summary:
      "과산화수소 환원 반응으로 금 전극 위 단일 팔라듐 나노입자의 전기촉매 활성을 분석",
  },
  {
    id: "chem-asian-j-2016",
    title:
      "Combined Blip and Staircase Response of Ascorbic Acid-Stabilized Copper Single Nanoparticle Collision by Electrocatalytic Glucose Oxidation",
    venue: "Chemistry - An Asian Journal",
    year: 2016,
    url: "https://doi.org/10.1002/asia.201600015",
    summary:
      "구리 나노입자 충돌에서 자체 산화(blip)와 포도당 산화 촉매(계단) 신호가 동시에 나타남",
  },
];
