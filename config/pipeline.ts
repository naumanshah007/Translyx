/**
 * Product Pipeline category data
 * Edit content, excerpts, images, and slugs here.
 */

export interface PipelineCategory {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  images: string[];
}

export const pipelineCategories: PipelineCategory[] = [
  {
    slug: "antibacterial-resistance",
    title: "Antibacterial Resistance",
    excerpt:
      "Antibacterial resistance remains an urgent public health concern even in New Zealand. While overall resistance rates here are lower than in some neighbouring regions, resistant strains are increasingly detected.",
    content: `Antibacterial resistance remains an urgent public health concern even in New Zealand. While overall resistance rates here are lower than in some neighbouring regions, resistant strains of bacteria such as methicillin-resistant Staphylococcus aureus (MRSA) and carbapenemase-producing organisms are increasingly detected in both hospital and community settings, and the proportion of resistant infections continues to rise despite historical low prevalence. Up to 14 percent of isolates in a national point prevalence survey demonstrated antimicrobial resistance, including methicillin-resistant S. aureus and cephalosporin- or carbapenem-resistant Gram-negative bacilli.

Translyx is working to bring diagnostic technologies that enable faster, more precise identification of resistant pathogens and key resistance markers. These tools support better antimicrobial stewardship by helping clinicians refine therapy choices earlier in the care pathway, reduce unnecessary antibiotic use, and strengthen surveillance capability across primary and hospital care. By improving diagnostic intelligence on resistance patterns, Translyx contributes to slowing the spread of resistant infections and protecting the effectiveness of existing therapies locally and regionally.`,
    images: [
      "https://publichealthnotes.com/wp-content/uploads/2020/09/antibiotic-project-image2-346x381.png",
      "https://as2.ftcdn.net/v2/jpg/17/52/95/91/1000_F_1752959170___k0oLW55boMpTXjHx79EhnintjT0DM5gP.jpg",
    ],
  },
  {
    slug: "sepsis",
    title: "Sepsis",
    excerpt:
      "Sepsis is a leading cause of serious illness and death, and it places a heavy burden on healthcare systems in New Zealand and internationally. In Aotearoa, sepsis is responsible for tens of thousands of infections annually.",
    content: `Sepsis is a leading cause of serious illness and death, and it places a heavy burden on healthcare systems in New Zealand and internationally. In Aotearoa, sepsis is responsible for tens of thousands of infections annually, with a high proportion arising in the community and often requiring intensive care admission. Around 80 percent of sepsis cases originate outside hospital settings, and the cost of a typical hospital admission with sepsis in New Zealand can exceed NZD 11,000.

Translyx is introducing advanced sepsis diagnostics designed to assist clinicians in recognising sepsis earlier and assessing disease severity with greater confidence. Rapid, actionable diagnostic data can help guide treatment decisions well before traditional laboratory results are available, shortening time to intervention and potentially saving lives. These solutions are intended for use in emergency departments, acute care wards and point-of-care settings, helping standardise sepsis care and reduce variation in outcomes across the health system.`,
    images: [
      "https://as1.ftcdn.net/v2/jpg/06/22/79/82/1000_F_622798268___G7kN6gPHHN9VeJLZhnH7rWB3WYs8lWID.jpg",
      "https://as2.ftcdn.net/v2/jpg/02/34/30/47/1000_F_234304797___N5MYkWRZmGXwdQ9rGpSddn6nnTY2Okkb.jpg",
    ],
  },
  {
    slug: "oncology-biomarkers",
    title: "Oncology Biomarkers",
    excerpt:
      "Cancer remains a significant health challenge in New Zealand, with more than 30,000 people expected to be diagnosed each year in 2025. Accurate and timely biomarker testing is a cornerstone of modern oncology.",
    content: `Cancer remains a significant health challenge in New Zealand, with more than 30,000 people expected to be diagnosed each year in 2025 and projections suggesting this could rise to over 45,000 by 2044 as the population ages and risk factors persist. Accurate and timely biomarker testing is a cornerstone of modern oncology, informing diagnosis, prognosis, treatment selection and ongoing monitoring.

Translyx is bringing emerging molecular and protein-based biomarker technologies into the New Zealand market that align with international advances in precision oncology. These solutions help clinicians understand tumour biology more deeply, match patients to the most appropriate therapies, and adapt treatment plans based on response. By improving access to validated biomarkers and next generation molecular assays, Translyx aims to support earlier detection, personalised treatment pathways, and better long-term outcomes for people affected by cancer in Aotearoa and beyond.`,
    images: [
      "https://as1.ftcdn.net/v2/jpg/18/45/26/42/1000_F_1845264264___oplqxG9CvoAEzBcbvkT5TNqwEdIm2hZo.jpg",
      "https://t3.ftcdn.net/jpg/10/97/38/22/240_F_1097382233___SF8Wtkb59AMPnUqpKSwbbu12fYrUJ9xO.jpg",
      "https://t4.ftcdn.net/jpg/17/84/90/01/240_F_1784900147___g8TJvkpbcPinb2MFwq2a9ock5mtn32pi.jpg",
    ],
  },
  {
    slug: "cardiac-biomarkers",
    title: "Cardiac Biomarkers",
    excerpt:
      "Cardiovascular disease remains one of the leading causes of death and health burden in New Zealand. Cardiac biomarkers play a central role in diagnosing acute coronary syndromes and stratifying risk.",
    content: `Cardiovascular disease remains one of the leading causes of death and health burden in New Zealand. Recent data show there are nearly 11,000 deaths per year from cardiovascular disease, with ischaemic heart disease accounting for a large proportion of these and incidence and mortality rates higher among Māori and Pacific peoples. Heart disease affects an estimated 180,000 people in New Zealand and contributes significantly to hospital admissions, long-term disability and health system costs.

Cardiac biomarkers such as high sensitivity troponins, N-terminal pro-B-type natriuretic peptide (NT-proBNP) and others play a central role in diagnosing acute coronary syndromes, stratifying risk for heart failure, and guiding therapy for chronic cardiovascular disease. Evidence from New Zealand research shows that including cardiac biomarker data in clinical assessment can significantly improve cardiovascular risk prediction in community populations beyond traditional risk factors.

Translyx is working to bring advanced cardiac biomarker diagnostics into clinical practice in New Zealand and Oceania that offer higher analytical sensitivity and faster turnaround times. These tools help emergency clinicians identify acute myocardial injury sooner, assist cardiology teams in risk stratification, and support primary care clinicians in early detection of heart failure or evolving cardiovascular conditions. Broader access to robust cardiac biomarker testing can help reduce diagnostic uncertainty, shorten time to appropriate care, and ultimately support better outcomes for people living with, or at risk of, heart disease across the region.`,
    images: [
      "https://t4.ftcdn.net/jpg/07/57/70/21/240_F_757702159___WOEHbAtlR0cXMLAbDJmHDzTft14yZthe.jpg",
      "https://t3.ftcdn.net/jpg/10/31/29/46/240_F_1031294649___z07OUuPspUZEjHwcYxiEhzOk1Qu3hLZu.jpg",
      "https://t3.ftcdn.net/jpg/10/82/34/20/240_F_1082342023___NVzpQncQZwpsut0I0Lx3NoQT9YVjlWeA.jpg",
    ],
  },
  {
    slug: "endocrine-biomarkers",
    title: "Endocrine Biomarkers",
    excerpt:
      "Endocrine disorders such as diabetes, thyroid disease, and metabolic syndromes are highly prevalent in New Zealand. Accurate measurement of endocrine biomarkers is essential for diagnosing disease and guiding clinical interventions.",
    content: `Endocrine disorders such as diabetes, thyroid disease, adrenal insufficiency and metabolic syndromes are highly prevalent in New Zealand and contribute substantially to chronic disease burden, disability and long-term health costs. The most recent estimates suggest that around 348,500 people in Aotearoa live with diabetes, with prevalence rising steadily over the past decade and higher rates seen in Pacific and Māori populations. Accurate and timely measurement of endocrine biomarkers such as fasting glucose, HbA1c, insulin, thyroid stimulating hormone (TSH) and cortisol is essential for diagnosing disease, monitoring therapy and guiding clinical interventions.

Translyx is introducing a range of innovative endocrinology biomarker solutions designed to improve diagnostic accuracy, reduce turnaround times, and integrate with routine clinical workflows in hospitals and outpatient settings. These technologies support earlier identification of metabolic dysfunction, better monitoring of treatment response, and more personalised management of endocrine conditions. For primary care clinicians, endocrinologists and community health teams, improved biomarker access helps close gaps in disease detection and management, particularly in underserved regions where diabetes and metabolic disorders are most common.`,
    images: [
      "https://as1.ftcdn.net/v2/jpg/19/02/33/72/1000_F_1902337294___woBmWv4jBQaTNffDI3ewr4GXK06lRNJN.jpg",
      "https://www.endocrine.org/-/media/endocrine/images/patient-engagement-webpage/condition-page-images/diabetes-and-glucose-metabolism/diabetes-and-endocrine-function_pe_1796x943.jpg?w=2580&hash=664F2471888EAD5F76E727B696D649E4",
      "https://www.60plusindia.com/posted_images/product/800x800/post_49490__94.png",
    ],
  },
  {
    slug: "point-of-care-testing",
    title: "Point of Care Testing",
    excerpt:
      "Point of care testing (POCT) is increasingly recognised as a vital part of modern healthcare delivery. POCT helps reduce turnaround times by providing diagnostic results near the patient.",
    content: `Point of care testing (POCT) is increasingly recognised as a vital part of modern healthcare delivery in New Zealand and overseas. POCT helps reduce turnaround times by providing diagnostic results near the patient, enabling more immediate clinical decision making, particularly in urgent or decentralized settings such as emergency departments, rural clinics and primary care. National contracting initiatives are underway to support widespread procurement of POCT equipment and consumables for hospitals and community settings.

Translyx is introducing reliable and clinically appropriate POCT solutions that are designed to integrate with existing care pathways and health information systems. These technologies help clinicians diagnose and monitor conditions such as acute illness, metabolic abnormalities and infection without the delays of central laboratory processing. By expanding access to high quality POCT across diverse care environments, Translyx supports more efficient patient care delivery and contributes to reducing health inequities, especially for patients in rural or resource limited settings.`,
    images: [
      "https://www.gener8.net/wp-content/uploads/2023/04/iStock-1456055366-1536x1024.jpg",
      "https://cdn.open-pr.com/S/c/Sc23297724_g.jpg",
      "https://as2.ftcdn.net/v2/jpg/10/97/38/15/1000_F_1097381584___auI16RubdPYIOie1eTKniyTbHtrK6DFR.jpg",
      "https://as1.ftcdn.net/v2/jpg/03/91/33/48/1000_F_391334892___qNafNLivolSj6kmmDYY3Wia2GewxtSXa.jpg",
      "http://www.genomicseducation.hee.nhs.uk/wp-content/uploads/2017/01/portable-sequencing.jpg",
    ],
  },
];
