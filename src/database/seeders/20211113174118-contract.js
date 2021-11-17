'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contracts', [
      {
        id: uuidv4(),
        wallet1: "6d6e55fa-7aa7-4b35-8c1d-b772c02572bb",
        wallet2: "3b09a6f3-a61a-48af-9f84-d2f9f8167a91",
        status: "pending",
        conditions: {
          name: "mally Poreless Perfection Glowing Foundation Tan",
          shortdescription: "Supplement Left Lacrimal Duct with Nonaut Sub, Endo",
          longdescription: "Other repair of laceration of eyelid, partial-thickness",
          amount: "$5.68",
          coin: "Yuan Renminbi",
          condition: {
            c1: "mally Poreless Perfection Glowing Foundation Tan",
            c2: "Mawhinney"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "7047c56d-1c54-4a27-bc32-09ed7039dd0e",
        wallet2: "0312a9d4-40d9-40b4-9425-7da178f22f2b",
        status: "pending",
        conditions: {
          name: "Suboxone",
          shortdescription: "Excision of Right Thorax Muscle, Perc Endo Approach",
          longdescription: "Repair of current obstetric laceration of corpus uteri",
          amount: "$1.14",
          coin: "Rial",
          condition: {
            c1: "Suboxone",
            c2: "Dumbarton"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "86f0c320-74d0-42d6-afa1-1c66c01b2a75",
        wallet2: "c564d34d-5d85-4390-8a4e-10a41ae73379",
        status: "pending",
        conditions: {
          name: "Simvastatin",
          shortdescription: "Repair Right External Ear, Open Approach",
          longdescription: "Revision of ureterointestinal anastomosis",
          amount: "$3.65",
          coin: "Dollar",
          condition: {
            c1: "Simvastatin",
            c2: "Grace"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "16af5241-cef6-4e2b-a244-83bd6dfe70f1",
        wallet2: "1c471904-3f51-4051-b02a-fa4fc7fb5884",
        status: "pending",
        conditions: {
          name: "Olanzapine",
          shortdescription: "Supplement Head with Synthetic Substitute, Open Approach",
          longdescription: "Other operations on cornea",
          amount: "$5.66",
          coin: "Euro",
          condition: {
            c1: "Olanzapine",
            c2: "Fettiplace"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "35e1d828-0379-4147-a39f-e2f4c4f2fe36",
        wallet2: "d60e98e7-cb53-4b53-9f8c-e873c153059a",
        status: "pending",
        conditions: {
          name: "Hydrocortisone",
          shortdescription: "Bypass L Fallopian Tube to L Fallop w Nonaut Sub, Perc Endo",
          longdescription: "Other arthrotomy, other specified sites",
          amount: "$8.06",
          coin: "Zloty",
          condition: {
            c1: "Hydrocortisone",
            c2: "Lyford"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "d862e709-2a91-43d7-8c61-7e60a1db253f",
        wallet2: "b79e9517-ce8c-4f3a-8c9e-3c2f57046bfd",
        status: "pending",
        conditions: {
          name: "NEXICLEAR ACNE TREATMENT",
          shortdescription: "Dilation of R Ext Carotid with 3 Drug-elut, Perc Approach",
          longdescription: "Sphenoidectomy",
          amount: "$6.98",
          coin: "Real",
          condition: {
            c1: "NEXICLEAR ACNE TREATMENT",
            c2: "Mathon"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "1d06325c-91a3-4a83-aea3-2619832815ec",
        wallet2: "ca79e1de-7c32-4d18-bfec-6f59ddff156c",
        status: "pending",
        conditions: {
          name: "Simcor",
          shortdescription: "Destruction of Anus, Open Approach",
          longdescription: "Microscopic examination of specimen from upper gastrointestinal tract and of vomitus, cell block and Papanicolaou smear",
          amount: "$1.76",
          coin: "Peso",
          condition: {
            c1: "Simcor",
            c2: "Vicioso"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "2d7554fc-f20e-4527-9957-fcad26fe92ba",
        wallet2: "1c00f51b-87b2-4831-8c4d-49b6ea7631a1",
        status: "pending",
        conditions: {
          name: "Rx Act all day pain relief",
          shortdescription: "Replacement of L Post Tib Art with Nonaut Sub, Open Approach",
          longdescription: "Correction of ureteropelvic junction",
          amount: "$5.56",
          coin: "Peso",
          condition: {
            c1: "Rx Act all day pain relief",
            c2: "Duffer"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "ff0d4c55-0f54-4c91-8ef0-7e4fb1ca787b",
        wallet2: "a75e4fe2-ac54-465b-a450-2fb00cdea362",
        status: "pending",
        conditions: {
          name: "Isovue-M",
          shortdescription: "Transplantation of Nervous System into POC, Perc Approach",
          longdescription: "Lysis of other anterior synechiae",
          amount: "$8.77",
          coin: "Real",
          condition: {
            c1: "Isovue-M",
            c2: "Joselin"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "d701d5cc-bc3f-4a6b-a85e-400567015bfd",
        wallet2: "f35ee685-3549-4349-834c-ccb343b4f83c",
        status: "pending",
        conditions: {
          name: "Metformin Hydrochloride",
          shortdescription: "Isotope Administration to Whole Body using Strontium 90",
          longdescription: "Closed reduction of separated epiphysis, other specified bone",
          amount: "$5.60",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Metformin Hydrochloride",
            c2: "Scudder"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "cda50d71-9bf3-4319-8abc-104295d0a0be",
        wallet2: "8bf0625a-ec42-44c7-80cd-355fc260e5f9",
        status: "pending",
        conditions: {
          name: "Nicorette",
          shortdescription: "Dilation of Lower Artery with Drug-elut Intra, Perc Approach",
          longdescription: "Closed reduction of fracture without internal fixation, tarsals and metatarsals",
          amount: "$1.06",
          coin: "Dollar",
          condition: {
            c1: "Nicorette",
            c2: "Munford"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "5abb3cc1-0f90-4f8b-b8a7-4006eb567e9b",
        wallet2: "6b0aca42-dff0-40c0-b7c7-1b6b7d3ed5d3",
        status: "pending",
        conditions: {
          name: "KLOR-CON M",
          shortdescription: "Drainage of R Post Tib Art, Perc Endo Approach, Diagn",
          longdescription: "Other local excision or destruction of lesion of joint, hand and finger",
          amount: "$9.06",
          coin: "Real",
          condition: {
            c1: "KLOR-CON M",
            c2: "Yarmouth"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "c6653046-e6dd-4eea-8f13-6054ffc7431b",
        wallet2: "a560c692-21c9-47b0-b0a8-009a7a828312",
        status: "pending",
        conditions: {
          name: "Zolpidem Tartrate",
          shortdescription: "Replacement of Back Skin with Synth Sub, Extern Approach",
          longdescription: "Suture of laceration of urethra",
          amount: "$7.72",
          coin: "Dollar",
          condition: {
            c1: "Zolpidem Tartrate",
            c2: "Clink"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "83f104db-21cb-4fcb-bd0e-0acfd8fac4e0",
        wallet2: "ed608cba-8ae1-4d12-aa6d-5bb821799058",
        status: "pending",
        conditions: {
          name: "Piperacillin and Tazobactam",
          shortdescription: "Drainage of Upper Jaw, Perc Endo Approach, Diagn",
          longdescription: "Bilateral endoscopic ligation and division of fallopian tubes",
          amount: "$2.57",
          coin: "Zloty",
          condition: {
            c1: "Piperacillin and Tazobactam",
            c2: "Kopisch"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "695d5743-f514-41ea-b8c3-8bdc9773c63d",
        wallet2: "257cf60c-93fa-47b9-a017-c43b3771495a",
        status: "pending",
        conditions: {
          name: "Exchange Select Calcium Antacid",
          shortdescription: "Change Drain Dev in Epididymis/Sperm Cord, Extern Approach",
          longdescription: "Other operations on nasal sinuses",
          amount: "$5.77",
          coin: "Rupiah",
          condition: {
            c1: "Exchange Select Calcium Antacid",
            c2: "de Quesne"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "35af7af2-da02-4709-bd89-37df9f1f7a23",
        wallet2: "93d21a09-723f-4458-ab1e-b0e8986c14eb",
        status: "pending",
        conditions: {
          name: "Butalbital, Acetaminophen and Caffeine",
          shortdescription: "Bypass R Int Iliac Art to Low Ex Art w Nonaut Sub, Open",
          longdescription: "Closure of external fistula of trachea",
          amount: "$3.18",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Butalbital, Acetaminophen and Caffeine",
            c2: "Cottingham"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "6a3a3d5f-2270-4db2-b0d2-fc84aaa522df",
        wallet2: "831c3b6c-aed2-47fb-b425-3569169ccc4e",
        status: "pending",
        conditions: {
          name: "TRAMADOL HYDROCHLORIDE",
          shortdescription: "Excision of Cervical Vertebra, Percutaneous Approach, Diagn",
          longdescription: "Application of hybrid external fixator device",
          amount: "$0.89",
          coin: "Dollar",
          condition: {
            c1: "TRAMADOL HYDROCHLORIDE",
            c2: "Pauluzzi"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "aa8dd4c0-96be-41fc-96b6-38def36c4299",
        wallet2: "996cff2a-b0ed-42ac-9f36-f95130ce0b55",
        status: "pending",
        conditions: {
          name: "Cefuroxime Axetil",
          shortdescription: "Reposition Left Metatarsal-Tarsal Joint, Perc Approach",
          longdescription: "Closed reduction of fracture without internal fixation, tarsals and metatarsals",
          amount: "$8.70",
          coin: "Rupiah",
          condition: {
            c1: "Cefuroxime Axetil",
            c2: "Fairbard"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "cee72357-c529-4f8c-8d20-e92a3b7745cc",
        wallet2: "ed76b064-1acb-4176-b1a7-44052c0c3501",
        status: "pending",
        conditions: {
          name: "Nabumetone",
          shortdescription: "Change Drainage Device in Spleen, External Approach",
          longdescription: "Removal of other foreign body without incision from head and neck",
          amount: "$5.71",
          coin: "Rupee",
          condition: {
            c1: "Nabumetone",
            c2: "Woodham"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "582302f4-638e-4d7e-bf56-cadc658174c4",
        wallet2: "217c26ef-52d4-4bfc-96e1-fb17bc1738f2",
        status: "pending",
        conditions: {
          name: "Tussin DMMaximum Strength",
          shortdescription: "Transfer Right Abdomen Muscle with Subcu, Open Approach",
          longdescription: "Transabdominal endoscopy of large intestine",
          amount: "$5.56",
          coin: "Som",
          condition: {
            c1: "Tussin DMMaximum Strength",
            c2: "Blowen"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "07a431bb-30b8-4c75-8f7d-6fcb3641745d",
        wallet2: "60b72645-6c95-4071-b1aa-5e2cca29aa37",
        status: "pending",
        conditions: {
          name: "Hydromorphone Hydrochloride",
          shortdescription: "Drainage of Colic Vein with Drainage Device, Open Approach",
          longdescription: "Esophagogastroplasty",
          amount: "$0.59",
          coin: "Rupiah",
          condition: {
            c1: "Hydromorphone Hydrochloride",
            c2: "Gilbertson"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "305fe358-3486-4029-9a53-abe28c2fe47f",
        wallet2: "40512f7a-888a-40d1-a834-dc200d6a2c80",
        status: "pending",
        conditions: {
          name: "Hepar Stannum 6/10",
          shortdescription: "Supplement Bilateral Breast with Synth Sub, Open Approach",
          longdescription: "Endarterectomy, other thoracic vessels",
          amount: "$7.99",
          coin: "Euro",
          condition: {
            c1: "Hepar Stannum 6/10",
            c2: "Teck"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "7f4ae561-c57e-4b60-99bd-bb32bd8f3c4b",
        wallet2: "5282c34d-4659-4a1d-b8ca-7788946d1596",
        status: "pending",
        conditions: {
          name: "Clarithromycin",
          shortdescription: "Replacement of R Orbit with Synth Sub, Perc Endo Approach",
          longdescription: "Rhythm electrocardiogram",
          amount: "$1.76",
          coin: "Euro",
          condition: {
            c1: "Clarithromycin",
            c2: "Sultan"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "188e46ef-70ea-4483-88a8-7719d1474449",
        wallet2: "fedc9b5a-6a4c-42da-981d-796c96e237a7",
        status: "pending",
        conditions: {
          name: "SUGAR FREE GREEN TEA WITH ECHINACEA COUGH SUPPRESSANT THROAT DROPS",
          shortdescription: "Insertion of Ext Fix into R Elbow Jt, Perc Endo Approach",
          longdescription: "Open biopsy of kidney",
          amount: "$3.74",
          coin: "Ruble",
          condition: {
            c1: "SUGAR FREE GREEN TEA WITH ECHINACEA COUGH SUPPRESSANT THROAT DROPS",
            c2: "Aiers"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "277a113b-2c3f-4586-94d4-e501bb1900fb",
        wallet2: "1056b0ad-373c-4cfa-8c2d-2f953e034633",
        status: "pending",
        conditions: {
          name: "Rizatriptan Benzoate",
          shortdescription: "Bypass L Popl Art to Low Ex Art with Autol Vn, Open Approach",
          longdescription: "Other tenonectomy of hand",
          amount: "$8.88",
          coin: "Euro",
          condition: {
            c1: "Rizatriptan Benzoate",
            c2: "Sheehy"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "539d8a4c-38a0-451e-add7-e9fdbd2b6fd0",
        wallet2: "b59baabf-0b96-4208-a868-87836f6bde82",
        status: "pending",
        conditions: {
          name: "Fiore Rx CranApple Crush Antifungal Nail Polish",
          shortdescription: "Division of Basal Ganglia, Percutaneous Approach",
          longdescription: "Other diagnostic procedures on fetus and amnion",
          amount: "$5.78",
          coin: "Sol",
          condition: {
            c1: "Fiore Rx CranApple Crush Antifungal Nail Polish",
            c2: "Dunlea"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "42e4eaa8-e92f-4f2a-bedd-42744d0842dd",
        wallet2: "efeea6fd-1694-4d28-b05b-d66fc1132bc1",
        status: "pending",
        conditions: {
          name: "benzonatate",
          shortdescription: "Removal of Int Fix from L Knee Jt, Perc Endo Approach",
          longdescription: "Removal of vaginal or vulvar packing",
          amount: "$2.76",
          coin: "Peso",
          condition: {
            c1: "benzonatate",
            c2: "McGarry"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "ffe4649f-bb04-4793-ba8a-3fdc023dbe40",
        wallet2: "b9b79dac-774a-4e35-9a66-68594ba5f408",
        status: "pending",
        conditions: {
          name: "Finasteride",
          shortdescription: "Release Right Femoral Vein, Percutaneous Endoscopic Approach",
          longdescription: "Microscopic examination of peritoneal and retroperitoneal specimen, toxicology",
          amount: "$2.89",
          coin: "Peso",
          condition: {
            c1: "Finasteride",
            c2: "Ousby"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "46967562-dc18-4623-885f-798b5a538983",
        wallet2: "9cf42a5b-1519-419d-a02f-06af4bb51cb5",
        status: "pending",
        conditions: {
          name: "Rizatriptan Benzoate",
          shortdescription: "Tendons, Replacement",
          longdescription: "Other computer assisted surgery",
          amount: "$5.60",
          coin: "Euro",
          condition: {
            c1: "Rizatriptan Benzoate",
            c2: "Wallbrook"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "9d642724-673e-4ec9-bfa8-0141a4792f04",
        wallet2: "e75f4171-182e-43af-bd3e-2a893e549fd8",
        status: "pending",
        name: "Lice Treatment",
        "last_name": "Sautter",
        shortdescription: "CT Scan of Abd using L Osm Contrast, Unenh, Enhance",
        longdescription: "Insertion of non-drug-eluting peripheral (non-coronary) vessel stent(s)",
        amount: "$4.85",
        coin: "Peso",
        condition: {
          c1: "Lice Treatment",
          c2: "Sautter"
        },
        conditions: {
          name: "Lice Treatment",
          shortdescription: "CT Scan of Abd using L Osm Contrast, Unenh, Enhance",
          longdescription: "Insertion of non-drug-eluting peripheral (non-coronary) vessel stent(s)",
          amount: "$4.85",
          coin: "Peso",
          condition: {
            c1: "Lice Treatment",
            c2: "Sautter"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "0115e0d3-5888-4c89-b2cd-b685db98ea42",
        wallet2: "5e0c94c6-a6ec-4bee-8bba-f778a95918ed",
        status: "pending",
        conditions: {
          name: "Pepper Tree",
          shortdescription: "Computerized Tomography (CT Scan) of Bi Pelvic Vein",
          longdescription: "Excision of seminal vesicle",
          amount: "$7.49",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Pepper Tree",
            c2: "Goding"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "61bab556-67ee-453f-b370-1f5d8c8cf5c1",
        wallet2: "b0379c27-a791-4833-96b0-bc3f71385688",
        status: "pending",
        conditions: {
          name: "Bioelements",
          shortdescription: "Beam Radiation of Diaphragm using Electrons, Intraoperative",
          longdescription: "Other operations on adrenal glands, nerves, and vessels",
          amount: "$0.05",
          coin: "Ruble",
          condition: {
            c1: "Bioelements",
            c2: "Lait"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "ff6195f4-39da-4aed-ad51-c47a49e88b72",
        wallet2: "a0d6d69b-ff6a-481c-a0e7-23005d5479be",
        status: "pending",
        conditions: {
          name: "PHACE BIOACTIVE SOOTHING DAY Plus PRIMER BROAD-SPECTRUM SPF 46",
          shortdescription: "Fragmentation in Small Intestine, External Approach",
          longdescription: "Other division of soft tissue",
          amount: "$3.64",
          coin: "Peso",
          condition: {
            c1: "PHACE BIOACTIVE SOOTHING DAY Plus PRIMER BROAD-SPECTRUM SPF 46",
            c2: "Barrott"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "80cea637-7dd7-4821-bc0c-9423f835ce6e",
        wallet2: "fcf0a67b-c37a-47f6-9f14-e75f13a32f11",
        status: "pending",
        conditions: {
          name: "Fresh PearSilk Antibacterial Foaming Hand",
          shortdescription: "Beam Radiation of Mouth using Neutrons",
          longdescription: "Pharyngeal diverticulectomy",
          amount: "$0.24",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Fresh PearSilk Antibacterial Foaming Hand",
            c2: "Birk"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "3cad1b04-a650-4325-9efc-dc0e7c260078",
        wallet2: "9edf2caa-500f-4d46-badb-49c9577bd89d",
        status: "pending",
        conditions: {
          name: "Diclofenac Sodium",
          shortdescription: "Release Right Hip Muscle, Percutaneous Endoscopic Approach",
          longdescription: "Other and open repair of indirect inguinal hernia",
          amount: "$3.18",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Diclofenac Sodium",
            c2: "Goter"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "d402668c-5beb-4f03-bde6-adc17a99626a",
        wallet2: "be3d0c63-09e5-45d6-b597-f07d30eade41",
        status: "pending",
        conditions: {
          name: "Amlobenz",
          shortdescription: "Excision of Ileocecal Valve, Via Opening",
          longdescription: "Other heart revascularization",
          amount: "$4.61",
          coin: "Peso",
          condition: {
            c1: "Amlobenz",
            c2: "Kneel"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "a6b64ea4-50d6-4821-bfd0-73bad00f88eb",
        wallet2: "6438d1af-5457-4aa6-8113-e7d8e1603652",
        status: "pending",
        conditions: {
          name: "PROVIGIL",
          shortdescription: "Revise VAD Reservoir in Low Extrem Subcu/Fascia, Open",
          longdescription: "Closure of urethrostomy",
          amount: "$8.90",
          coin: "Euro",
          condition: {
            c1: "PROVIGIL",
            c2: "Moxstead"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "e3db4f35-1300-4dce-aced-d731375532e8",
        wallet2: "456740bd-c8cf-4fdf-8b9c-73ee021ab864",
        status: "pending",
        conditions: {
          name: "Insomnia Relief",
          shortdescription: "Restrict of L Com Carotid with Extralum Dev, Open Approach",
          longdescription: "Evacuation of thrombosed hemorrhoids",
          amount: "$6.88",
          coin: "Rupiah",
          condition: {
            c1: "Insomnia Relief",
            c2: "Symson"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "f21d13cf-dc21-4051-99fb-11652f3e9462",
        wallet2: "a2fa6370-01a1-4a57-a510-5524c4ce9dcf",
        status: "pending",
        conditions: {
          name: "Nitroglycerin Transdermal Delivery System",
          shortdescription: "Supplement R Knee with Nonaut Sub, Perc Endo Approach",
          longdescription: "Total breech extraction with forceps to aftercoming head",
          amount: "$7.94",
          coin: "Rufiyaa",
          condition: {
            c1: "Nitroglycerin Transdermal Delivery System",
            c2: "Nouch"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "eba6047d-d537-4264-b046-0839b0ca5495",
        wallet2: "8f1dd2a0-7022-42ba-a59f-1183d2631d26",
        status: "pending",
        conditions: {
          name: "Gazyva",
          shortdescription: "Insertion of Monopln Ext Fix into R Low Femur, Open Approach",
          longdescription: "Excision of hemorrhoids",
          amount: "$3.60",
          coin: "Hryvnia",
          condition: {
            c1: "Gazyva",
            c2: "Smurthwaite"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "2d718726-8226-46d6-86fb-1f398065a9cb",
        wallet2: "d799df49-67bb-4093-b9a2-0a729ae72268",
        status: "pending",
        conditions: {
          name: "Valproic",
          shortdescription: "Beam Radiation of Maxilla using Photons 1 - 10 MeV",
          longdescription: "Other total mandibulectomy",
          amount: "$1.45",
          coin: "Rupiah",
          condition: {
            c1: "Valproic",
            c2: "Pellant"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "0eb54d3b-fed3-4326-88aa-19a9ea56235a",
        wallet2: "47e417fe-aee7-4d8f-aeb6-1f0b26e48632",
        status: "pending",
        conditions: {
          name: "Sulfamethoxazole and Trimethoprim",
          shortdescription: "Replacement of Left Tibia with Autol Sub, Open Approach",
          longdescription: "Orthotic evaluation",
          amount: "$6.52",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Sulfamethoxazole and Trimethoprim",
            c2: "Kohnemann"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "181bfef8-8496-4e1f-b0f7-e275f63ae300",
        wallet2: "61ca03b4-6728-464c-bc78-15fccc293742",
        status: "pending",
        conditions: {
          name: "Res-Q Topical Analgesic Soothing",
          shortdescription: "Supplement Left Orbit with Nonaut Sub, Perc Endo Approach",
          longdescription: "Local excision of lesion or tissue of bone, patella",
          amount: "$1.27",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Res-Q Topical Analgesic Soothing",
            c2: "Falkner"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "f79d0c8d-1500-4e89-9fcb-3951b77ee9af",
        wallet2: "26ec85b7-0908-4976-8fb3-a041d8a9bb7e",
        status: "pending",
        conditions: {
          name: "Docusate Sodium",
          shortdescription: "Replace of L Int Carotid with Synth Sub, Perc Endo Approach",
          longdescription: "Repair of sympathetic nerve or ganglion",
          amount: "$7.35",
          coin: "Euro",
          condition: {
            c1: "Docusate Sodium",
            c2: "Skegg"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "829ddbbf-dfb7-4c73-b232-8c52a28c5fc9",
        wallet2: "521e5672-2bbe-40f2-b479-ee8f92eb5551",
        status: "pending",
        conditions: {
          name: "Multi Flower",
          shortdescription: "Restrict of L Parotid Duct with Extralum Dev, Perc Approach",
          longdescription: "Removal of urethral stent",
          amount: "$6.55",
          coin: "Peso",
          condition: {
            c1: "Multi Flower",
            c2: "O'Hederscoll"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "fecb945f-4e4a-4de0-b479-779cfacb3323",
        wallet2: "9e9d4da8-a28b-468e-a71a-5f2026631a54",
        status: "pending",
        conditions: {
          name: "RISPERDAL",
          shortdescription: "Fragmentation in Small Intestine, Via Opening",
          longdescription: "Ligation and stripping of varicose veins, other vessels of head and neck",
          amount: "$8.48",
          coin: "Euro",
          condition: {
            c1: "RISPERDAL",
            c2: "Cossons"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "4ae3925b-3312-4349-9ce0-88b4190b8755",
        wallet2: "04be9dc8-d299-435a-92e7-8fd2aad19fac",
        status: "pending",
        conditions: {
          name: "Sore Throat",
          shortdescription: "Fusion T-lum Jt w Synth Sub, Ant Appr A Col, Open",
          longdescription: "Repair of blepharoptosis by resection or advancement of levator muscle or aponeurosis",
          amount: "$7.53",
          coin: "Dollar",
          condition: {
            c1: "Sore Throat",
            c2: "Slowan"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "f97526cc-9d66-4eb5-b261-a548811bc516",
        wallet2: "a2af5d6d-a616-440d-938e-158f79fcea8d",
        status: "pending",
        conditions: {
          name: "Good Neighbor Pharmacy",
          shortdescription: "Fluoroscopy Mult Cor Art w L Osm Contrast, Laser Intraop",
          longdescription: "Removal of foreign body from tonsil and adenoid by incision",
          amount: "$5.49",
          coin: "Euro",
          condition: {
            c1: "Good Neighbor Pharmacy",
            c2: "Casserley"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "3e28025c-f114-42b0-b7a9-a8e6268f1439",
        wallet2: "a8fb01c3-3bb0-4626-9030-21b41ccacd31",
        status: "pending",
        conditions: {
          name: "Icy Hot Naturals",
          shortdescription: "Supplement Left 5th Toe with Autol Sub, Open Approach",
          longdescription: "Percutaneous (endoscopic) jejunostomy [PEJ]",
          amount: "$0.17",
          coin: "Koruna",
          condition: {
            c1: "Icy Hot Naturals",
            c2: "Bouzek"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "0c981c69-62ae-48e9-8c2c-bf248ddaf30c",
        wallet2: "1ad0fd84-193e-4f5d-a0fd-7c263fd16baa",
        status: "pending",
        conditions: {
          name: "Treatment Set TS334946",
          shortdescription: "Division of Right Ear Skin, External Approach",
          longdescription: "Other antesternal esophagocolostomy",
          amount: "$5.84",
          coin: "Krone",
          condition: {
            c1: "Treatment Set TS334946",
            c2: "Haversham"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "53241104-0d48-49c9-b26e-63edd0fb66b7",
        wallet2: "8b45bc7e-3995-4b7b-be52-2ea2a9d8e25b",
        status: "pending",
        conditions: {
          name: "Equaline Childrens Pain and Fever",
          shortdescription: "Removal of Monitoring Device from Bladder, Endo",
          longdescription: "General physical examination",
          amount: "$8.96",
          coin: "Euro",
          condition: {
            c1: "Equaline Childrens Pain and Fever",
            c2: "Maggill'Andreis"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "5c14bf3d-bebd-45c1-89b0-e5e18dab9b44",
        wallet2: "1e95ac50-e28e-40b7-b35b-10387f97dd0d",
        status: "pending",
        conditions: {
          name: "Carvedilol",
          shortdescription: "Bypass R Fallopian Tube to Uterus w Synth Sub, Open",
          longdescription: "Other gastroenterostomy without gastrectomy",
          amount: "$0.93",
          coin: "Peso",
          condition: {
            c1: "Carvedilol",
            c2: "Jacquemot"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "dc1635f1-ef1b-4fa5-b96c-ec1e5e934bb1",
        wallet2: "188ac4e7-1f1b-4d26-9d29-c8a6956f97bc",
        status: "pending",
        conditions: {
          name: "Torsemide",
          shortdescription: "Occlusion of Left Internal Jugular Vein, Perc Approach",
          longdescription: "Vaginal reconstruction",
          amount: "$4.22",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Torsemide",
            c2: "Valdes"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "3077a28f-f63f-4770-910e-e1247d5a321e",
        wallet2: "5c93d3c8-3851-42fa-94d9-5b0cc214d1e3",
        status: "pending",
        conditions: {
          name: "Metoprolol Tartrate",
          shortdescription: "Removal of Monitor Dev from Spinal Cord, Extern Approach",
          longdescription: "Other repair of penis",
          amount: "$6.07",
          coin: "Shilling",
          condition: {
            c1: "Metoprolol Tartrate",
            c2: "Dowsett"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "fdbd5509-1be3-44c0-819b-9031a0943bd5",
        wallet2: "de9b9082-337a-4fdc-aa6e-507c612cc308",
        status: "pending",
        conditions: {
          name: "Woodwards Mycocide Clinical NS",
          shortdescription: "Repair Bilateral Adrenal Glands, Percutaneous Approach",
          longdescription: "Exposure of tooth",
          amount: "$4.06",
          coin: "Colon",
          condition: {
            c1: "Woodwards Mycocide Clinical NS",
            c2: "Hayhurst"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "803af0e1-7378-40a3-8e1c-818fa3f0b0cf",
        wallet2: "28615ecd-a553-4666-90b3-816f5f40b13f",
        status: "pending",
        conditions: {
          name: "Childrens Pain and Fever",
          shortdescription: "Inspection of Right Upper Extremity, Perc Endo Approach",
          longdescription: "Other conjunctivoplasty",
          amount: "$5.34",
          coin: "Hryvnia",
          condition: {
            c1: "Childrens Pain and Fever",
            c2: "Pringer"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "010b7b68-683d-4c5a-a1c3-50ed5be731b3",
        wallet2: "5aa1782f-90d8-424b-a0a1-afcd972b3fa8",
        status: "pending",
        conditions: {
          name: "ALFALFA POLLEN",
          shortdescription: "Excision of R Less Saphenous, Perc Endo Approach, Diagn",
          longdescription: "Injection of therapeutic substance into testis",
          amount: "$8.27",
          coin: "Ruble",
          condition: {
            c1: "ALFALFA POLLEN",
            c2: "Rubinowitz"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "a4778066-8fb5-4a94-bdbc-f486f1b8185d",
        wallet2: "94a309f7-f6f8-4170-b092-0345c285c179",
        status: "pending",
        conditions: {
          name: "Levetiracetam",
          shortdescription: "Drainage of Lingula Bronchus with Drainage Device, Endo",
          longdescription: "Microscopic examination of specimen from lower gastrointestinal tract and of stool, toxicology",
          amount: "$1.24",
          coin: "Sol",
          condition: {
            c1: "Levetiracetam",
            c2: "Monkton"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "e95de537-af33-4956-bbf0-6e29418d57ed",
        wallet2: "6cda0c13-a7b4-47c9-98e9-a4e44b718307",
        status: "pending",
        conditions: {
          name: "Silka",
          shortdescription: "Resection of Left Sphenoid Bone, Open Approach",
          longdescription: "Ligation and stripping of varicose veins, abdominal veins",
          amount: "$6.29",
          coin: "Ruble",
          condition: {
            c1: "Silka",
            c2: "Haggas"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "d94cacd0-d8db-4bbe-823b-1f614339a59e",
        wallet2: "7b1c37cf-cd8a-465e-8a31-c726bc182398",
        status: "pending",
        conditions: {
          name: "Forma-Ray",
          shortdescription: "Replacement of Soft Palate with Nonaut Sub, Perc Approach",
          longdescription: "Other fixation of large intestine",
          amount: "$0.62",
          coin: "Euro",
          condition: {
            c1: "Forma-Ray",
            c2: "Conklin"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "5f2bca44-56b0-458b-a0b5-61518311ea55",
        wallet2: "2e8634f4-a2b1-465f-96b6-4b62b3820b3a",
        status: "pending",
        conditions: {
          name: "Bupivacaine Hydrochloride",
          shortdescription: "Restrict Cisterna Chyli w Extralum Dev, Perc Endo",
          longdescription: "Endovascular replacement of pulmonary valve",
          amount: "$2.05",
          coin: "Euro",
          condition: {
            c1: "Bupivacaine Hydrochloride",
            c2: "Doale"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "55d9a472-d8f6-479d-9f80-46b3c3284ba0",
        wallet2: "1540308c-72d3-4ea5-96fd-c9058c3c1207",
        status: "pending",
        conditions: {
          name: "FACE IT OIL CUT DUAL BB EMULSION SPF20",
          shortdescription: "Introduce Platelet Inhibitor in Central Vein, Perc",
          longdescription: "Closed reduction of separated epiphysis, unspecified site",
          amount: "$3.53",
          coin: "Yuan Renminbi",
          condition: {
            c1: "FACE IT OIL CUT DUAL BB EMULSION SPF20",
            c2: "Civitillo"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "29b79ac0-06a3-4803-b1cb-a35adcb977cd",
        wallet2: "2c754ca9-8651-4f06-bb12-55ccd58cc07b",
        status: "pending",
        conditions: {
          name: "Indomethacin",
          shortdescription: "Fluoroscopy of Bi Pelvic Vein using L Osm Contrast, Guidance",
          longdescription: "Ureteroneocystostomy",
          amount: "$4.24",
          coin: "Ruble",
          condition: {
            c1: "Indomethacin",
            c2: "Kinane"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "596749b8-f3c1-4ea7-a8a4-d4f291c6b558",
        wallet2: "2a08c062-e1a4-49b3-ac80-d040e4da92af",
        status: "pending",
        conditions: {
          name: "Gold Bond Ultimate Protection",
          shortdescription: "Drainage of Appendix with Drain Dev, Perc Endo Approach",
          longdescription: "Replacement of ventricular shunt",
          amount: "$5.40",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Gold Bond Ultimate Protection",
            c2: "Siddele"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "66e5457c-cc0a-4ec3-90b6-e7e508a1e744",
        wallet2: "8ddd351b-9d78-449f-bd6e-f4081c8f3b72",
        status: "pending",
        conditions: {
          name: "Healthy Accents Naproxen Sodium",
          shortdescription: "Supplement R Pulm Art with Synth Sub, Perc Approach",
          longdescription: "Rectal packing",
          amount: "$2.36",
          coin: "Hryvnia",
          condition: {
            c1: "Healthy Accents Naproxen Sodium",
            c2: "Cisco"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "f47357db-d8ca-478a-b1e7-4e1b45d85fca",
        wallet2: "6bff2a88-3d1a-4a37-a999-99bf108fabc1",
        status: "pending",
        conditions: {
          name: "ESIKA HD COLOR HIGH DEFINITION COLOR SPF 20",
          shortdescription: "Replace of L Axilla Art with Autol Sub, Perc Endo Approach",
          longdescription: "Incision of vessel, lower limb veins",
          amount: "$1.58",
          coin: "Yuan Renminbi",
          condition: {
            c1: "ESIKA HD COLOR HIGH DEFINITION COLOR SPF 20",
            c2: "Kirk"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "be442b12-97ac-4209-8c2b-a6baea0df965",
        wallet2: "cc1d2560-9554-4b6f-9c89-9051fc3be72b",
        status: "pending",
        conditions: {
          name: "Wal-Zyr",
          shortdescription: "Imaging, Connective Tissue, Ultrasonography",
          longdescription: "Repair of mallet finger",
          amount: "$5.62",
          coin: "Hryvnia",
          condition: {
            c1: "Wal-Zyr",
            c2: "Exley"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "87ae6e5e-6b90-4cd5-a547-4d3426320b11",
        wallet2: "7d269861-87df-4a0d-ae6c-e0605958a389",
        status: "pending",
        conditions: {
          name: "MINOXIDIL",
          shortdescription: "Occlusion L Ext Jugular Vein w Extralum Dev, Perc Endo",
          longdescription: "Clinical test of hearing",
          amount: "$4.07",
          coin: "Dollar",
          condition: {
            c1: "MINOXIDIL",
            c2: "Lambdon"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "30714e4a-9a3a-48da-a286-e328fc859f56",
        wallet2: "97de5f95-f006-4e8a-bf7b-e027c70541e0",
        status: "pending",
        conditions: {
          name: "Simvastatin",
          shortdescription: "Bypass Asc Colon to Rectum w Autol Sub, Perc Endo",
          longdescription: "Microscopic examination of specimen from bladder, urethra, prostate, seminal vesicle, perivesical tissue, and of urine and semen, cell block and Papanicolaou smear",
          amount: "$9.67",
          coin: "Euro",
          condition: {
            c1: "Simvastatin",
            c2: "Girhard"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "93fb9103-8b0a-4e10-8ed0-bf605262fc40",
        wallet2: "62bd7655-e0be-441f-8300-18fecbb43e0d",
        status: "pending",
        conditions: {
          name: "Metformin Hydrochloride",
          shortdescription: "Division of Median Nerve, Percutaneous Endoscopic Approach",
          longdescription: "Exploration of tendon sheath of hand",
          amount: "$5.63",
          coin: "Baht",
          condition: {
            c1: "Metformin Hydrochloride",
            c2: "Heymes"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "6b07fef9-72fc-4ef0-997c-401d755c6e32",
        wallet2: "fdfd58fd-e1a1-4fc2-bcde-2b7911f0cf69",
        status: "pending",
        conditions: {
          name: "Dexamethasone Sodium Phosphate",
          shortdescription: "Fusion Occip Jt w Synth Sub, Post Appr P Col, Open",
          longdescription: "Iontophoresis",
          amount: "$7.59",
          coin: "Zloty",
          condition: {
            c1: "Dexamethasone Sodium Phosphate",
            c2: "Crocket"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "46af85c4-3ef3-4ef1-a826-8dd2d534340f",
        wallet2: "d3d2926f-22b5-45cb-953f-df0b70981318",
        status: "pending",
        conditions: {
          name: "ckone waterfresh face make up SPF 15",
          shortdescription: "Supplement L Low Lobe Bronc w Nonaut Sub, Perc Endo",
          longdescription: "Administration of poliomyelitis vaccine",
          amount: "$8.82",
          coin: "Zloty",
          condition: {
            c1: "ckone waterfresh face make up SPF 15",
            c2: "Humpage"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "6a559e4d-10ef-4276-858c-84d82b97898b",
        wallet2: "b4967aa1-b9fc-4542-84b6-14e791576de4",
        status: "pending",
        conditions: {
          name: "Lactulose",
          shortdescription: "Revision of Ext Fix in L Knee Jt, Perc Endo Approach",
          longdescription: "Incision and drainage of scrotum and tunica vaginalis",
          amount: "$4.27",
          coin: "Peso",
          condition: {
            c1: "Lactulose",
            c2: "Colling"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "0f9d3c73-7c9b-4ad5-a9ad-b2cfc9d02cf5",
        wallet2: "1c27f50b-c373-4cb8-9b8b-58fbb84a8edc",
        status: "pending",
        conditions: {
          name: "INON",
          shortdescription: "Release Cul-de-sac, Via Natural or Artificial Opening",
          longdescription: "Conization of cervix",
          amount: "$9.40",
          coin: "Ruble",
          condition: {
            c1: "INON",
            c2: "Garthshore"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "ad18f8c4-0ac3-49bd-9e42-444d35992539",
        wallet2: "3d3aed30-cacb-424e-a940-3d326487e010",
        status: "pending",
        conditions: {
          name: "Losartan Potassium",
          shortdescription: "Reposition L Toe Phalanx Jt with Ext Fix, Perc Endo Approach",
          longdescription: "Incision of nose",
          amount: "$4.89",
          coin: "Dollar",
          condition: {
            c1: "Losartan Potassium",
            c2: "Heeley"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "00a81ebb-cff2-4af7-b8ca-55af397521b5",
        wallet2: "7edb42a7-bf32-410c-bf67-10871b66edf8",
        status: "pending",
        conditions: {
          name: "Econazole Nitrate",
          shortdescription: "Restrict Mesenteric Lymph w Intralum Dev, Perc",
          longdescription: "Aspiration and lavage of nasal sinus, not otherwise specified",
          amount: "$6.61",
          coin: "Rupiah",
          condition: {
            c1: "Econazole Nitrate",
            c2: "Gawkes"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "0867428b-0047-4cd5-b9ad-902fd120a387",
        wallet2: "5a15ceb7-6f47-4ac9-b968-86dbb0f97f90",
        status: "pending",
        conditions: {
          name: "BUSULFEX",
          shortdescription: "Drainage of Thymus, Open Approach",
          longdescription: "Marsupialization of laryngeal cyst",
          amount: "$6.97",
          coin: "Hryvnia",
          condition: {
            c1: "BUSULFEX",
            c2: "Fildes"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "aa8cf3d7-5b0f-4324-a9b8-c38b61ff9917",
        wallet2: "9ee25ee7-6dc1-474b-b44e-57b89f3d9482",
        status: "pending",
        conditions: {
          name: "Sucralfate",
          shortdescription: "Supplement Inf Mesent Vein w Synth Sub, Perc Endo",
          longdescription: "Gracilis muscle transplant for anal incontinence",
          amount: "$1.30",
          coin: "Yuan Renminbi",
          condition: {
            c1: "Sucralfate",
            c2: "Andrich"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "5aedcd66-5bb7-41fc-9a77-43772858f594",
        wallet2: "c7dcb8fd-a430-4dce-9aa1-fc72e94ddf23",
        status: "pending",
        conditions: {
          name: "AUGMENTIN",
          shortdescription: "Extirpation of Matter from Right Vocal Cord, Perc Approach",
          longdescription: "Synovectomy, hand and finger",
          amount: "$5.10",
          coin: "Peso",
          condition: {
            c1: "AUGMENTIN",
            c2: "Swatheridge"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "2cbff633-e43d-442f-91ed-f0f3639a345a",
        wallet2: "45e2adf1-fbe5-4953-be29-b721572a5750",
        status: "pending",
        conditions: {
          name: "nicotine",
          shortdescription: "Repair Coronary Artery, Four or More Arteries, Open Approach",
          longdescription: "Systemic arterial pressure monitoring",
          amount: "$0.10",
          coin: "Real",
          condition: {
            c1: "nicotine",
            c2: "McGowan"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "cc57bb97-0376-4a62-8304-098ce51b177d",
        wallet2: "b36e7c3a-7ce6-418a-8f53-d02876e7fc46",
        status: "pending",
        conditions: {
          name: "Yellow Hornet hymenoptera venom Venomil Diagnostic",
          shortdescription: "Supplement R Low Arm & Wrist Muscle w Synth Sub, Perc Endo",
          longdescription: "Skeletal x-ray of lower limb, not otherwise specified",
          amount: "$4.75",
          coin: "Real",
          condition: {
            c1: "Yellow Hornet hymenoptera venom Venomil Diagnostic",
            c2: "Gettings"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "e9f9c08b-fdd7-4a86-acc8-6a041cf3d6f6",
        wallet2: "f4fa447a-b82d-4539-a851-a6f7981004e2",
        status: "pending",
        conditions: {
          name: "Treatment Set TS350622",
          shortdescription: "Repair Right Maxilla, Percutaneous Approach",
          longdescription: "Sequestrectomy, humerus",
          amount: "$3.16",
          coin: "Dong",
          condition: {
            c1: "Treatment Set TS350622",
            c2: "Coleridge"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "a22dba13-2f99-4f32-933c-5e2d4c9a9a89",
        wallet2: "f19871b4-b93d-46ce-92c0-9e09865bcc3f",
        status: "pending",
        conditions: {
          name: "cocoa butter, phenylephrine hydrochloride, shark liver oil",
          shortdescription: "Placement, Anatomical Regions, Dressing",
          longdescription: "Replacement of automatic cardioverter/defibrillator pulse generator only",
          amount: "$2.55",
          coin: "Zloty",
          condition: {
            c1: "cocoa butter, phenylephrine hydrochloride, shark liver oil",
            c2: "Heel"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "546fd01c-6ddf-43f3-8969-3f980aa96bfd",
        wallet2: "e0cb7e73-78a8-465d-8c5e-61b954417386",
        status: "pending",
        conditions: {
          name: "POPULUS ALBA POLLEN",
          shortdescription: "Replacement of L Foot Art with Synth Sub, Open Approach",
          longdescription: "Implant of pulsation balloon",
          amount: "$0.05",
          coin: "Rupee",
          condition: {
            c1: "POPULUS ALBA POLLEN",
            c2: "Kindley"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "7c84d6d9-0d59-496c-b582-ec5f4a4c038e",
        wallet2: "d568d29d-3474-47f2-af2a-cf456f9ec588",
        status: "pending",
        conditions: {
          name: "Gerbil Epithelium",
          shortdescription: "Dilation of Left Colic Artery, Open Approach",
          longdescription: "Removal of thoracotomy tube or pleural cavity drain",
          amount: "$7.76",
          coin: "Peso",
          condition: {
            c1: "Gerbil Epithelium",
            c2: "Caselick"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "cff01f1f-5021-4766-95c8-6098755808e4",
        wallet2: "b0a3c258-f984-4d1e-b206-e1af575e00fb",
        status: "pending",
        conditions: {
          name: "PHENERGAN",
          shortdescription: "Transplantation of Large Intestine, Zooplast, Open Approach",
          longdescription: "Ligation of hemorrhoids",
          amount: "$1.18",
          coin: "Yuan Renminbi",
          condition: {
            c1: "PHENERGAN",
            c2: "Lensch"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "a3216357-0efc-474b-a581-876635d13e27",
        wallet2: "387eea7a-dec5-450b-a047-59767fa504f0",
        status: "pending",
        conditions: {
          name: "Anti-Bacterial Hand Sanitizer",
          shortdescription: "Removal of Bandage on Left Finger",
          longdescription: "Biopsy of joint structure, foot and toe",
          amount: "$0.98",
          coin: "Ruble",
          condition: {
            c1: "Anti-Bacterial Hand Sanitizer",
            c2: "Pagram"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "21cfb17f-1e3c-4f68-94be-2eab6dfdbe6c",
        wallet2: "878efffe-08ec-4f43-88ad-a9e1026535ac",
        status: "pending",
        conditions: {
          name: "TEMODAR",
          shortdescription: "Extirpation of Matter from R Radial Art, Perc Endo Approach",
          longdescription: "Other partial ostectomy, humerus",
          amount: "$7.28",
          coin: "Rupiah",
          condition: {
            c1: "TEMODAR",
            c2: "Coldridge"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "1935ae2d-f0c6-47c5-85f3-d0801cf25976",
        wallet2: "44819a97-77b9-41d4-b2f9-eb2cd7a3d88b",
        status: "pending",
        conditions: {
          name: "Phentermine Hydrochloride",
          shortdescription: "Reposition R Low Arm & Wrist Tendon, Perc Endo Approach",
          longdescription: "Removal of both fallopian tubes at same operative episode",
          amount: "$9.48",
          coin: "Peso",
          condition: {
            c1: "Phentermine Hydrochloride",
            c2: "Mockett"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "cc5f55c4-e7f2-4e93-9e5b-0636cd253ae0",
        wallet2: "2c4ceae5-6f81-4b51-890c-7d8d0fa5466f",
        status: "pending",
        conditions: {
          name: "CLARINSMEN Antiperspirant ALL DAY DRY ALCOHOL-FREE",
          shortdescription: "Drainage of Bladder Neck with Drainage Device, Endo",
          longdescription: "Ventricular shunt to circulatory system",
          amount: "$8.89",
          coin: "Balboa",
          condition: {
            c1: "CLARINSMEN Antiperspirant ALL DAY DRY ALCOHOL-FREE",
            c2: "Yorston"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "0f424f83-2a7d-4e3d-887c-813e67bef1df",
        wallet2: "7a420423-7cde-4e3f-af5d-67b46c6b5238",
        status: "pending",
        conditions: {
          name: "leader sinus congestion and pain",
          shortdescription: "Reattachment of Right Testis, Perc Endo Approach",
          longdescription: "Abdominal proctopexy",
          amount: "$8.36",
          coin: "Dinar",
          condition: {
            c1: "leader sinus congestion and pain",
            c2: "Vlahos"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "45d71e50-0e85-4ac7-bae7-5f3da61a01c8",
        wallet2: "d5d08431-1455-4f5b-bdb3-c21226d22dc9",
        status: "pending",
        conditions: {
          name: "Retin-A",
          shortdescription: "Plain Radiography of Cervical Spine, Densitometry",
          longdescription: "Replacement of indwelling urinary catheter",
          amount: "$8.14",
          coin: "Real",
          condition: {
            c1: "Retin-A",
            c2: "Webermann"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "5d704547-1da9-4e97-9c05-7fe9acddcb05",
        wallet2: "ab7ec6f6-c88d-4507-9be1-2a03d4346e7f",
        status: "pending",
        conditions: {
          name: "Amlodipine and Atorvastatin",
          shortdescription: "Excision of Hard Palate, External Approach",
          longdescription: "Operations on globus pallidus",
          amount: "$1.83",
          coin: "Lek",
          condition: {
            c1: "Amlodipine and Atorvastatin",
            c2: "Juszkiewicz"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "bbaabbdd-0026-4645-9dc1-4fc292c8bf38",
        wallet2: "40aba580-ab3b-472a-8bf4-ee7ea96cf9ad",
        status: "pending",
        conditions: {
          name: "ANTIBACTERIAL HAND SP WITH LIGHT MOISTURIZERS",
          shortdescription: "Excision of Right Parotid Duct, Open Approach",
          longdescription: "Carotid sinus stimulation",
          amount: "$0.86",
          coin: "Yuan Renminbi",
          condition: {
            c1: "ANTIBACTERIAL HAND SP WITH LIGHT MOISTURIZERS",
            c2: "Ghiron"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "fe393f6b-a8cb-448d-89a3-d8ae7d8b00ec",
        wallet2: "9444a063-ddd9-4aa3-837f-37f8994e115f",
        status: "pending",
        conditions: {
          name: "losartan potassium and hydrochlorothiazide",
          shortdescription: "Bypass L Com Iliac Art to L Ext Ilia w Autol Vn, Perc Endo",
          longdescription: "Removal of cholecystostomy tube",
          amount: "$8.84",
          coin: "Euro",
          condition: {
            c1: "losartan potassium and hydrochlorothiazide",
            c2: "McTiernan"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "6518c6e4-6204-4601-a6bf-570746f884a6",
        wallet2: "bfc2179f-16c2-4c84-a6e2-bad8e4582080",
        status: "pending",
        conditions: {
          name: "BICILLIN L-A",
          shortdescription: "Dilate of Low Esophag with Intralum Dev, Perc Endo Approach",
          longdescription: "Disarticulation of knee",
          amount: "$3.43",
          coin: "Dollar",
          condition: {
            c1: "BICILLIN L-A",
            c2: "Barthelet"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "72281f20-b7ef-453b-9826-093ec55d96d8",
        wallet2: "fe939731-723d-4ce4-9f17-b8616883b2ce",
        status: "pending",
        conditions: {
          name: "Levofloxacin",
          shortdescription: "Computerized Tomography (CT Scan) of Left Elbow",
          longdescription: "Other genitourinary instillation",
          amount: "$6.59",
          coin: "Zloty",
          condition: {
            c1: "Levofloxacin",
            c2: "Lavallin"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "c0ebda83-8a06-4241-826a-eaed4b487df2",
        wallet2: "974f4e10-b264-4363-b964-e2504e9caea9",
        status: "pending",
        conditions: {
          name: "Speed Stick",
          shortdescription: "Replace of R Thorax Tendon with Nonaut Sub, Open Approach",
          longdescription: "Bilateral exploration of adrenal field",
          amount: "$3.79",
          coin: "Dollar",
          condition: {
            c1: "Speed Stick",
            c2: "Brammar"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "d186ef9c-7d33-44da-ad7e-ad5595b02533",
        wallet2: "638c3115-881f-4b87-87a5-f436ac8cb6b7",
        status: "pending",
        conditions: {
          name: "Renewal Eczema Moisturizing",
          shortdescription: "Reposition Left Acetabulum, External Approach",
          longdescription: "Cystometrogram",
          amount: "$8.29",
          coin: "Euro",
          condition: {
            c1: "Renewal Eczema Moisturizing",
            c2: "Playdon"
          }
        }
      },
      {
        id: uuidv4(),
        wallet1: "898ec8ab-e843-47f0-ad7a-502baf358d89",
        wallet2: "54c31892-2b20-449f-8270-5b8e585edf0f",
        status: "pending",
        conditions: {
          name: "Levofloxacin",
          shortdescription: "Ultrasonography of Left Kidney",
          longdescription: "Rehabilitation, not elsewhere classified",
          amount: "$3.24",
          coin: "Peso",
          condition: {
            c1: "Levofloxacin",
            c2: "Beckwith"
          }
        }
      }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contracts', "", {});
  }
};
