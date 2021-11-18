const {User, Contract} = require("../db")

async function preCharge(req, res, next){
    try {
        const users = [
            { id: "883ba5c8-52d4-458f-ab8f-69f35ad50739", name: "Benito", last_name: "Wyldish", username: "benito", email: "benito@gmail.com", birthday: "11/03/1955", country: "Haquira", password: "benito", wallet: "", image: "", status: "active" },
            { id: "83be1418-185c-45ae-84ff-d8c439b153ec", name: "Eber", last_name: "Mithan", username: "eber", email: "eber@gmail.com", birthday: "10/10/1975", country: "Wenjiao", password: "eber", wallet: "", image: "", status: "active" },
            { id: "f40a730c-5fd7-4ed0-94b3-1f7ac26bf3a2", name: "Emma", last_name: "Blaik", username: "emma", email: "emma@gmail.com", birthday: "02/10/1987", country: "Zamboanga", password: "emma", wallet: "", image: "", status: "active" },
            { id: "b94b683b-614e-4bf2-9be6-968ca6dbde0b", name: "Leyder", last_name: "Combes", username: "leyder", email: "leyder@gmail.com", birthday: "10/09/1987", country: "Vigan", password: "leyder", wallet: "", image: "", status: "active" },
            { id: "60e2b3f6-acb4-47af-b4e8-7846899e6381", name: "Pablo", last_name: "Dollman", username: "pablo", email: "pablo@gmail.com", birthday: "09/12/1993", country: "Stockholm", password: "pablo", wallet: "", image: "", status: "active" },
            { id: "1c95f17c-71c6-4f84-b9fa-6ea6541dd78d", name: "Cherey", last_name: "Cottie", username: "ccottie4", email: "ccottie4@scientificamerican.com", birthday: "02/04/1999", country: "Sanchahe", password: "1caZy9B", wallet: "", image: "", status: "active" },
            { id: "bd2cd754-6bb5-4128-baf5-289aed832f8b", name: "Markos", last_name: "Roylance", username: "mroylance5", email: "mroylance5@ucsd.edu", birthday: "10/07/1991", country: "Kijini", password: "T58O2in", wallet: "", image: "", status: "active" },
            { id: "5c2079e8-681f-453d-a2cd-e42ba3c1700a", name: "Hewet", last_name: "Coneybeer", username: "hconeybeer6", email: "hconeybeer6@google.it", birthday: "11/03/1951", country: "Wangtuan", password: "9TrLMLfgIZ", wallet: "", image: "", status: "active" },
            { id: "fbcc828f-e372-4cf9-9851-11bfd4d037bb", name: "Jaclyn", last_name: "Bourgaize", username: "jbourgaize7", email: "jbourgaize7@ftc.gov", birthday: "07/01/1973", country: "Atbasar", password: "AFpY8KQgRc", wallet: "", image: "", status: "active" },
            { id: "010f8b83-3ffa-437b-b4d1-c4120a6c92c5", name: "Carlye", last_name: "Lelande", username: "clelande8", email: "clelande8@craigslist.org", birthday: "08/07/1998", country: "Judaydah", password: "JEJLdCpvW9M7", wallet: "", image: "", status: "active" }
          ]
          //conditions: `${{"first":"url.com/archivo.txt"}}` ejemplo de intento de dummy data json
        await User.bulkCreate(users);
      
        const contracts = [
        {
            id: "250bbbc2-8d8c-4f28-a96c-d70418d6aee4",
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
            id: "33a91796-6f7a-49aa-a4d8-ecd37adcc736",
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
            id: "24d59ef0-c136-49de-b43c-0ef76734957c",
            wallet1: "86f0c320-74d0-42d6-afa1-1c66c01b2a75",
            wallet2: "c564d34d-5d85-4390-8a4e-10a41ae73379",
            status: "done",
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
            id: "c7ca0a77-acb7-4934-a586-c47d86032373",
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
            id: "7b75d9c9-b089-4e4d-a740-bf89c5c9f329",
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
            id: "79961e33-5065-46fd-ac6b-d948d24f41f9",
            wallet1: "d862e709-2a91-43d7-8c61-7e60a1db253f",
            wallet2: "b79e9517-ce8c-4f3a-8c9e-3c2f57046bfd",
            status: "done",
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
            id: "28dbbfb7-9645-4ace-a05a-b30cc299b652",
            wallet1: "1d06325c-91a3-4a83-aea3-2619832815ec",
            wallet2: "ca79e1de-7c32-4d18-bfec-6f59ddff156c",
            status: "done",
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
            id: "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5",
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
            id: "a80ed501-693f-42f4-a528-9bf1f9c1fabb",
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
            id: "592ffd96-dd02-4a33-b479-e2235f15ee6a",
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
        ]
        await Contract.bulkCreate(contracts);
      
        let idUser = await User.findByPk("883ba5c8-52d4-458f-ab8f-69f35ad50739");
        await idUser.setContracts(["250bbbc2-8d8c-4f28-a96c-d70418d6aee4", "33a91796-6f7a-49aa-a4d8-ecd37adcc736"]);
    
        idUser = await User.findByPk("83be1418-185c-45ae-84ff-d8c439b153ec");
        await idUser.setContracts(["250bbbc2-8d8c-4f28-a96c-d70418d6aee4", "33a91796-6f7a-49aa-a4d8-ecd37adcc736", "24d59ef0-c136-49de-b43c-0ef76734957c"]);
    
        idUser = await User.findByPk("f40a730c-5fd7-4ed0-94b3-1f7ac26bf3a2");
        await idUser.setContracts(["c7ca0a77-acb7-4934-a586-c47d86032373", "33a91796-6f7a-49aa-a4d8-ecd37adcc736", "28dbbfb7-9645-4ace-a05a-b30cc299b652", "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5", "a80ed501-693f-42f4-a528-9bf1f9c1fabb"]);
    
        idUser = await User.findByPk("b94b683b-614e-4bf2-9be6-968ca6dbde0b");
        await idUser.setContracts(["28dbbfb7-9645-4ace-a05a-b30cc299b652", "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5"]);
    
        idUser = await User.findByPk("60e2b3f6-acb4-47af-b4e8-7846899e6381");
        await idUser.setContracts(["28dbbfb7-9645-4ace-a05a-b30cc299b652", "b0c2e3a9-e849-4b22-bb6f-868b5360e4a5", "a80ed501-693f-42f4-a528-9bf1f9c1fabb", "592ffd96-dd02-4a33-b479-e2235f15ee6a"]);
    
        idUser = await User.findByPk("1c95f17c-71c6-4f84-b9fa-6ea6541dd78d");
        await idUser.setContracts(["33a91796-6f7a-49aa-a4d8-ecd37adcc736", "24d59ef0-c136-49de-b43c-0ef76734957c", "c7ca0a77-acb7-4934-a586-c47d86032373"]);
    
        idUser = await User.findByPk("bd2cd754-6bb5-4128-baf5-289aed832f8b");
        await idUser.setContracts(["250bbbc2-8d8c-4f28-a96c-d70418d6aee4"]);
    
        idUser= await User.findByPk("5c2079e8-681f-453d-a2cd-e42ba3c1700a");
        await idUser.setContracts(["592ffd96-dd02-4a33-b479-e2235f15ee6a", "79961e33-5065-46fd-ac6b-d948d24f41f9", "24d59ef0-c136-49de-b43c-0ef76734957c"]);
    
        // idUser = await User.findByPk("fbcc828f-e372-4cf9-9851-11bfd4d037bb");
        // await idUser.setContracts([]);
    
        // idUser = await User.findByPk("010f8b83-3ffa-437b-b4d1-c4120a6c92c5");
        // await idUser.setContracts([]);
        console.log("Datos Cargados")
        return res.send("Datos Cargados")
    } catch(error){
        console.log(error)
        return "Datos no cargados"
    }
}

module.exports = {
    preCharge
}