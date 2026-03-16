export const characterData = {

    id: "slayer",
    name: "Slayer",

    starters: [
        /*
        {
            id: ,
            input: ,
            label: ,
            situation: ,
            combos: [ 
                {
                    id: ,
                    notationString: ,
                    damage: ,
                    meterCost: 0,
                    difficulty: ,
                    situation: ,
                    isOptimal: false,
                    notes: ,
                    videoUrl: ,
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        },  
        */
        {
            id: "5P",
            input: "5P",
            label: "5P Starter",
            situation: "Airborne",
            combos: [
                {
                    id: "5P-optimal-1",
                    notationString: "5P > 2S dl 2H > 214P~P > C.S 2S dl 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 166,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "Airborne",
                    isOptimal: true,
                    notes: "Far range anti air 5P route.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625732/5P_Optimal_p4yubw.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5P-optimal-2",
                    notationString: "5P > C.S 2S dl 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 155,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Close range anti air 5P route. Will whiff if too far.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625728/5P_C.SOptimal_gmke77.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5P-beginner",
                    notationString: "5P > C.S 6H > 214P~P",
                    damage: 116,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Close range beginner anti air confirm.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625727/5P_C.S_dpdxba.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5P-beginner-2",
                    notationString: "5P > 5K 6H > 214P~P",
                    damage: 110,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Universal anti air combo",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625726/5P_5K_gemgky.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }
            ]
        },
        {
            id: "2P",
            input: "2P",
            label: "2P Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "2P-hit-confirm",
                    notationString: "2P > 2P 236K",
                    damage: 54,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic hitconfirm on mashes. Can get up to 3 2P depending on initial spacing.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625722/2P-hit-confirm_fj6tkr.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-counterhit",
                    notationString: "CH 2P > 5K 236K",
                    damage: 65,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Confirm from a counterhit 2P. Can use 2D in replacement for 236K, but when 2P is max range.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625721/2P-counterhit_f5k5bh.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-counterhit-optimal",
                    notationString: "CH 2P > C.S 6H > 214P~P",
                    damage: 112,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Close range counterhit confirm off of 2P.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625722/2P-counterhit-optimal_xtsuy9.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-metered-hit-confirm",
                    notationString: "2P > 2P 236K > 66RRC > 66 214K~P > C.S 2S 2H 214P~P",
                    damage: 128,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: null,
                    isOptimal: false,
                    notes: "Cashout confirm on 2P mash.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625724/2P-metered-hit-confirm_n8giqs.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2P-counterhit-metered",
                    notationString: "CH 2P > 5K 236K > 66RRC > 66 214K~P > C.S 2S 2H 214P~P",
                    damage: 148,
                    meterCost: 50,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Counterhit 2P cashout combo.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625722/2P-counterhit-metered_ybbi1w.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        },
        {
            id: "6P",
            input: "6P",
            label: "6P Starter",
            situation: "Airborne",
            combos: [
                {
                    id: "6P-hit-confirm",
                    notationString: "6P 236K",
                    damage: 66,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic anti air confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625735/6P-hit-confirm_zlpnog.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "6P-metered-confirm",
                    notationString: "6P 66RRC > 5[D] > C.S 6H 214P~P",
                    damage: 169,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Meter cashout 6P confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625736/6P-metered-confirm_tlpiof.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "6P-counterhit",
                    notationString: "CH 6P 214P~P",
                    damage: 96,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Airborne CH",
                    isOptimal: false,
                    notes: "Basic anti air counterhit",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625734/6P-counterhit_wi1qck.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "6P-optimal-counterhit",
                    notationString: "CH 6P 214P~P > C.S 2S 2H 214P~P",
                    damage: 189,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "At certain heights after a counterhit 6P, pilebunker will loop. Not consistent.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625735/6P-counterhit-optimal_dyxuqc.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "6P-metered-counterhit",
                    notationString: "CH 6P 214P~P > 66FRC 214P > C.S 2S 2H 214P~P",
                    damage: 189,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Optimal confirm with meter if you can't get the meterless route.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625736/6P-metered-confirm_tlpiof.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png",
                }
            ]
        },
        {
            id: "5K",
            input: "5K",
            label: "5K Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "5K-knockdown",
                    notationString: "5K 2D",
                    damage: 52,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic hitconfirm into oki.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625711/5K-knockdown_p7aqsm.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-antiair",
                    notationString: "5K 6H 214P~P",
                    damage: 124,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Airborne",
                    isOptimal: false,
                    notes: "Confirm on pre-jump or roundstart.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625710/5K-antiair_bhjwur.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "5K-antiair-metered",
                    notationString: "5K 6H 214P~P > 66FRC 214P > 4 C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 226,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "Airborne",
                    isOptimal: true,
                    notes: "On the rare ocassion you have meter and hit 5K as an anti air. Without the microwalk the 2H will whiff.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625711/5K-antiair-metered_f3c6mx.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "5K-whiff-punish",
                    notationString: "5K 236K",
                    damage: 64,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "5K whiff punish on ranges where 2D cannot reach",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625713/5K-whiff-punish_nsorbw.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-counterhit",
                    notationString: "5K 6H 214P~P",
                    damage: 127,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Counterhit confirm on standing opponents.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625711/5K-counterhit_bneaui.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-metered-optimal",
                    notationString: "5K 236K > 66RRC > 66 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 216,
                    meterCost: 50,
                    difficulty: "Medium",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Universal confirm midscreen with meter.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625714/5K-metered-optimal_hqp20a.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-metered-hit-confirm",
                    notationString: "5K 2D 236P > 66FRC 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 183,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: null,
                    isOptimal: true,
                    notes: "5K 2D metered hit-confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625712/5K-metered-hit-confirm_yaaj3e.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5K-universe",
                    notationString: "Universe 5K 2D > 6 C.S 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "Universe",
                    isOptimal: true,
                    notes: "Universe optimal confirm off of 5K.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625713/5K-universe_ejknvs.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        },
        {
            id: "2K",
            input: "2K",
            label: "2K Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "2K-knockdown",
                    notationString: "2K > 2D",
                    damage: 42,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic hard knockdown into okizeme",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625704/2K-knockdown_wo7tgr.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Counterhit-2K-confirm",
                    notationString: "CH 2K > 5K 236K",
                    damage: 68,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Far counterhit confirm from 2K",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625704/2K-counterhit-hit-confirm_lxhtk6.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Close-range-counterhit-2K",
                    notationString: "CH 2K > C.S 6H > 214P~P",
                    damage: 114,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Close range counterhit 2K route.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625704/2K-close-counterhit_q5syq6.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2K-metered-confirm",
                    notationString: "2K 2D 236K > 66FRC 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 141,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: true,
                    notes: "Optimal metered 2K confirm with corner carry",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625705/2K-metered-confirm_huzl0k.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2K-metered-confirm-2",
                    notationString: "2K 2D 236P > 66FRC C.S 214P~P > C.S 2S 2H 214P~P",
                    damage: 139,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "For when you don't want to corner yourself against a target with burst",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625706/2K-metered-confirm-2_xntgwi.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }
            ]
        },
        {
            id: "C.S",
            input: "C.S",
            label: "C.S Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "C.S-confirm",
                    notationString: "C.S F.S > C.S 6H 214P~P",
                    damage: 168,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Slayer's bread and butter confirm. Can switch 6H for F.S(1) or 2S for resets.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625743/C.S-confirm_kkjwof.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "C.S-counterhit",
                    notationString: "CH C.S 5[D] > C.S 214P~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 250,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Optimal C.S confirm midscreen. If near wall, detatch after the last 2S to wallstick.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625745/C.S-counterhit_urbcg2.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "C.S-corner-counterhit",
                    notationString: "c.CH C.S 5[D] > C.S dl 2S 2H 214P~P > C.S F.S 5H 236K W!",
                    damage: 233,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "Corner CH",
                    isOptimal: true,
                    notes: "Counterhit C.S confirm with corner advantage.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625745/C.S-corner-counterhit_vvqsjd.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "C.S-universe",
                    notationString: "Universe C.S 5[D] > 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: null,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "Universe",
                    isOptimal: true,
                    notes: "Universe C.S confirm.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625747/C.S-universe_kj5mzq.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "C.S-burst-punish",
                    notationString: "C.S 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 247,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Burst punish off of non 2H starters",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625743/C.S-burst-punish_o8ntkr.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                 {
                    id: "C.S-corner-burst-punish",
                    notationString: "C.S dl 2S dl 214K~P > C.S 2H 214P~P > C.S F.S 5H 236K W!",
                    damage: 231,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "Corner",
                    isOptimal: true,
                    notes: "Burst punish with corner advantage",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625745/C.S-corner-burst-punish_grkzjo.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "C.S-antiair",
                    notationString: "CH C.S > 6 2S > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 241,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "Airborne",
                    isOptimal: true,
                    notes: "Counterhit confirm, 2H will drop on big bodies",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625742/C.S-antiair_lmkzzp.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "C.S-metered-confirm",
                    notationString: "C.S 6H 214P~P > 66FRC 214P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: null,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Basic metered confirm midscreen",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625746/C.S-metered-confirm_rh9s3n.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        },
        {
            id: "F.S",
            input: "F.S",
            label: "F.S Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "F.S-basic-confirm",
                    notationString: "F.S 5H 236k",
                    damage: 96,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Anywhere",
                    isOptimal: false,
                    notes: "Basic hit-confirm",
                    videoUrl: "vhttps://res.cloudinary.com/dlts0xtuw/video/upload/v1773625750/F.S-hit-confirm_tzml0q.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "F.S-roundstart",
                    notationString: "F.S 5H 236D > 2S 214K~P > C.S 2S 2H 214P~P W!",
                    damage: 132,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "Antiair",
                    isOptimal: true,
                    notes: "Beats certain airborne roundtstarts, also works when landing as an antiair.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625752/F.S-roundstart_wwkiqh.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "F.S-counterhit",
                    notationString: "CH F.S 236[D] > 4 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214~P",
                    damage: 151,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Round start wallbreak using wild assault.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625750/F.S-counterhit_mcb7ej.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "F.S-air-counterhit",
                    notationString: "CH F.S > C.S 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 214,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: true,
                    notes: "On rare ocassions, F.S will counterhit airborne opponents.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625750/F.S-air-counterhit_qr3nhh.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
            ]
        },
        {
            id: "2S",
            input: "2S",
            label: "2S Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "2S-confirm",
                    notationString: "2S 2H 214P~P",
                    damage: 120,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic confirm off of 2S",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625738/2S-hit-confirm_tolqwy.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "2S-counterhit",
                    notationString: "CH 2S 5H 214P~P",
                    damage: 125,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "On counterhit, 5H will convert into pilebunker. Does 2 more damage than 2H.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625738/2S-counterhit_kp6iqr.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "2S-metered-confirm",
                    notationString: "2S 2H 214P~P > 66FRC 214P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 222,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: true,
                    notes: "2H will whiff on big bodies.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625739/2S-metered-confirm_qkq8wy.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }
            ]
        },
        {
            id: "5H",
            input: "5H",
            label: "5H Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "5H-confirm",
                    notationString: "5H 236K",
                    damage: 83,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic hit confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625687/5H-confirm_iasqlv.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "5H-crouch-confirm",
                    notationString: "5K 214P~P",
                    damage: 110,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "Crouching",
                    isOptimal: false,
                    notes: "Crouch confirm, also works from 2S if crouching.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625687/5H-crouch-confirm_ar7vql.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "5H-counterhit",
                    notationString: "CH 5H 214P > 2H 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 242,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Do you want to explode?",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625687/5H-confirm_iasqlv.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "5H-metered",
                    notationString: "5H 236K > 66FRC > 2S dl 2H 214P~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 218,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: null,
                    isOptimal: true,
                    notes: "First 2H must be manually delayed slightly, and the second 2S must have a micro delay.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625688/5H-metered-confirm_txvkt0.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
            ]
        },
        {
            id: "6H",
            input: "6H",
            label: "6H Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "6H-confirm",
                    notationString: "6H 214P~P",
                    damage: 114,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625694/6H-confirm_uhpxvi.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "6H-counterhit",
                    notationString: "CH 6H 214P > C.S 5[D] > C.S dl 2S dl 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 227,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Both 2S and 2H will need manual delays of around the same frame. Too early and 2S or 2H will whiff or will not convert further.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625696/6H-counterhit_fokcjk.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "6H-counterhit-2",
                    notationString: "CH 6H > dl 632146-Dash-9P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 245,
                    meterCost: 0,
                    difficulty: "Impossible",
                    situation: "CH",
                    isOptimal: true,
                    notes: "I've been in this situation 3 times and hit the combo once, usually not worth going for. Micro delay on kara P Dandy.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625696/6H-counterhit-2_adhpgq.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "6H-metered-confirm",
                    notationString: "6H 214P~P > 66FRC 214P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 242,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: true,
                    notes: "Metered 6H confirm.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625696/6H-metered-confirm_yvy7vk.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }
            ]
        },
        {
            id: "2H",
            input: "2H",
            label: "2H Starter",
            situation: "On the ground",
            combos: [
                {
                    id: "2H-confirm",
                    notationString: "2H 214P~P",
                    damage: 108,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625681/2H-confirm_uuma4m.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "2H-counterhit",
                    notationString: "CH 2H 214P > C.S dl 2S dl 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 210,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: false,
                    notes: "When 2H counterhits in the center of the hitbox.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625682/2H-counterhit_gcion6.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "2H-counterhit-2",
                    notationString: "CH 2H 214P > C.S 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 222,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "The old counterhit route we know and love. Now only works when in close ranges.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625682/2H-counterhit-2_jdwkad.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "2H-metered-confirm",
                    notationString: "2H 214P~P > 66FRC 214P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 236,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: true,
                    notes: "Metered confirm off of 2H.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625682/2H-metered-confirm_vrtnmh.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
            ]
        },
        {
            id: "5D",
            input: "5D",
            label: "5D Starter",
            situation: null,
            combos: [ 
                {
                    id: "5D-metered",
                    notationString: "5D > 5[D] > C.S 6H 214P~P",
                    damage: 131,
                    meterCost: 50,
                    difficulty: "Medium",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625630/5D-metered_a4ld9x.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5D-metered-2",
                    notationString: "5D > 66RRC > 2K > dl 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 161,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: "Midscren",
                    isOptimal: true,
                    notes: "Whiffing the 2K sets up the manual extension similar to other RRC combos.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625631/5D-metered-2_n62rb9.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "5D-universe",
                    notationString: "Universe 5D > [6] C.S 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 168,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Microwalk until you see Slayer move a frame.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625632/5D-universe_ihyxza.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }
            ]
        },
        {
            id: "2D",
            input: "2D",
            label: "2D Starter",
            situation: null,
            combos: [ 
                {
                    id: "2D-counterhit",
                    notationString: "CH 2D > C.S 5[D] > C.S 214P~P > C.S 2S 2H 214P~P",
                    damage: 199,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Basic roundstart confirm.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625618/2D-counterhit_whpggd.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2D-counterhit-2",
                    notationString: "CH 2D > [6] C.S 2H 214P~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 208,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Optimal round start confirm, to wallbreak, forego the last 2H and use 2S 214P W!.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625619/2D-counterhit-2_zlzacu.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2D-metered",
                    notationString: "2S 236P > 66FRC 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214~P",
                    damage: 187,
                    meterCost: 50,
                    difficulty: "Medium",
                    situation: null,
                    isOptimal: false,
                    notes: "Basic hit confirm off of 2D.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625620/2D-metered_ydwj0c.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "2D-metered-2",
                    notationString: "2D > 66RRC > [4] 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 214,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "While possible to do a manual extension off of 2D, it is a different timing than the others, and is therefore not recommended.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625619/2D-metered-2_gtwmms.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                
            ]
        },
        {
            id: "P-Mappa",
            input: "236P",
            label: "Pmappa Starter",
            situation: null,
            combos: [
                {
                    id: "236P-counterhit",
                    notationString: "CH 236P > 2K 236K",
                    damage: 77,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Universal confirm midscreen or in the corner.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625779/236P-counterhit_jjhunl.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "236P-corner-counterhit",
                    notationString: "CH 236P > 2P 5P 6H 214P~P W!",
                    damage: 110,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Drops on Bridget, Jack-o, Johnny, May, Slayer, and Testament. Revert to 2K confirm or use meter against the mentioned characters.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625779/236P-corner-counterhit_mdzces.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "236P-metered",
                    notationString: "236P > 66RRC 2S 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 188,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Universal metered confirm. Switch C.S 2H for C.S 2S against big bodies, which requires a different route in the corner.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625781/236P-metered_thgzuw.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }, 
                {
                    id: "236P-optimal",
                    notationString: "236P > 66RRC [4] 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 199,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Can substitute the walk back pilebunker extension with the other manual timed pilebunker extension using 214K~dlP.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625781/236P-optimal_v8bore.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        }, 
        {
            id: "K-Mappa",
            input: "236K",
            label: "Kmappa Starter",
            situation: null,
            combos: [
                {
                    id: "236K-counterhit",
                    notationString: "CH 236K > 5K 236K",
                    damage: 90,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Basic counterhit confirm",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625766/236K-counterhit_oitymh.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "236K-counterhit-2",
                    notationString: "CH 236K > 5K 6H 214P~P W!",
                    damage: 136,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "When closer to the corner, you can confirm 5K into 6H pilebunker for a wallbreak.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625767/236K-counterhit-2_tpio7q.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "236K-corner-counterhit",
                    notationString: "CH 236K > C.S dl 2S 2H 214P~P > C.S 6H 236K W!",
                    damage: 181,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Replace the last 236K with delayed Super Mappa Hunch for optimal ender.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625765/236K-corner-counterhit_kuilwu.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "236K-metered",
                    notationString: "236K > 66RRC > 2S 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 196,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: null,
                    isOptimal: false,
                    notes: "Universal confirm from anywhere, including counterhit. Replace first 2H with 2S against big bodies.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625768/236K-metered_tqqatf.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "236K-metered-optimal",
                    notationString: "236K > 66RRC > 66 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 208,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Universal midscreen confirm, works on big bodies.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625768/236K-metered-optimal_zqxv5p.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }
            ]
        },
        {
            id: "Pilebunker",
            input: "214X~P",
            label: "Pilebunker starter",
            situation: null,
            combos: [ 
                {
                    id: "Pilebunker-counterhit",
                    notationString: "CH 214X~P > 632146 Dash 9P W!",
                    damage: 135,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "CH",
                    isOptimal: false,
                    notes: "In some midrange spacings, you can convert a counterhit pilebunker into another for a wallbreak. The closer you are to the corner, the less you need a kara dandy.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625775/Pilebunker-counterhit_wrk2hz.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Pilebunker-metered",
                    notationString: "214X~P > 66RRC > 66 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 238,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "The quintessential pilebunker confirm. Has two separate manual timed variants as well. This combo will drop on Sin and Happy Chaos.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625775/Pilebunker-metered_uuv1ot.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Pilebunker-metered-2",
                    notationString: "214X~P > 66RRC > [4] 214P~P > C.S 2H 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 238,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Useful when you have corner advantage so that you avoid being bursted into the corner after the second pilebunker.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625776/Pilebunker-metered-2_k04yu0.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Pilebunker-metered-3",
                    notationString: "214X~P > 66RRC > 214K dl P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 238,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: "Midscren",
                    isOptimal: true,
                    notes: "Useful when seeking corner carry or to get out of the corner.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625777/Pilebunker-metered-3_ka6rmp.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        },
        {
            id: "It's late",
            input: "214X~S",
            label: "It's Late Starter",
            situation: null,
            combos: [ 
                {
                    id: "It's-late-counterhit",
                    notationString: "214X~S > [4] 2S 2H 214P~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 204,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "CH",
                    isOptimal: true,
                    notes: "I honestly don't have a good visual tell for if this combo will hit or not. I would recommend just grinding out the muscle memory at different spacings.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625759/It_s-late-counterhit_owyo6z.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "It's-late-counterhit-2",
                    notationString: "214X~S > C.S 5[D] > 2S 214K~P > C.S 2S 2H 214P~P.",
                    damage: 198,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Only works if the overhead is right up against the opponent.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625760/It_s-late-counterhit-2_nrirku.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "It's-late-metered",
                    notationString: "214X~S > 66PRC > C.S dl 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 197,
                    meterCost: 50,
                    difficulty: "Medium",
                    situation: null,
                    isOptimal: false,
                    notes: "Similar timing to the low, works well with the delayed PRC strike throw you do with guard crush.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625761/It_s-late-metered_ndozui.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "It's-late-metered-2",
                    notationString: "214X~S > 66RRC > [4] 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 214,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Universal confirm using red roman cancel, can substitute for the other manual timed extension.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625762/It_s-late-metered-2_ria0ty.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        },
        {
            id: "Bump Ahead",
            input: "214X~K",
            label: "Bump Ahead Starter",
            situation: null,
            combos: [ 
                 {
                    id: "Bump-Ahead-counterhit",
                    notationString: "CH 214X~K > [4] 2S 2H 214P~P > C.S dl 2S 2H 214~P > C.S 2S 2H 214P~P",
                    damage: 194,
                    meterCost: 0,
                    difficulty: "Hard",
                    situation: "CH",
                    isOptimal: true,
                    notes: "I found this to be the most consistent way to time this, but it has many ways to make it work. It is inconsistent, however.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625755/Bump-ahead-counterhit_tvydsw.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Bump-Ahead-counterhit-2",
                    notationString: "CH 214X~K > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 183,
                    meterCost: 0,
                    difficulty: "Medium",
                    situation: "CH",
                    isOptimal: false,
                    notes: "Easier than the optimal, but still requires a manual timing. May need a microwalk before the C.S, which will change how long you delay the 2S.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625755/Bump-ahead-counterhit-2_mbjnbb.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Bump-Ahead-metered",
                    notationString: "214X~K > 66PRC C.S dl 2S 214K~P > C.S dl 2S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 190,
                    meterCost: 50,
                    difficulty: "Medium",
                    situation: null,
                    isOptimal: true,
                    notes: "This is the easiest way to hit confirm the low while still getting meaningful damage.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625756/Bump-ahead-metered_glgz1g.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Bump-Ahead-metered-2",
                    notationString: "214X~K > 66RRC > [4] 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 206,
                    meterCost: 50,
                    difficulty: "Hard",
                    situation: "Midscreen",
                    isOptimal: false,
                    notes: "Can be substituted with the other manual timed extension.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625757/Bump-ahead-metered-2_wpnjjs.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
            ]
        }, 
        {
            id: "Master's Hammer",
            input: "214K~H",
            label: "Master's Hammer Starter",
            situation: null,
            combos: [ 
                {
                    id: "Master's-hammer-counterhit",
                    notationString: "CH 214X~H > [6] 2S 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 216,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: true,
                    notes: "Universal confirm off of mistimed throws on Master's Hammer. Switch the first 2H with 2S against big bodies.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625771/Master_s-hammer-counterhit_vf1pen.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Master's-hammer-counterhit-2",
                    notationString: "CH 214X~H > 214P~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 227,
                    meterCost: 0,
                    difficulty: "Easy",
                    situation: "CH",
                    isOptimal: true,
                    notes: "If you hit Master's Hammer further back, you can extend with pilebunker instead. It doesn't add meaningful damage, but can be better for routing away from burst.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625772/Master_s-hammer-counterhit-2_kc0brm.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                },
                {
                    id: "Master's-hammer-metered",
                    notationString: "214X~H > 66PRC > 214K~P > C.S 2H 214P~P > C.S 2S 2H 214P~P",
                    damage: 222,
                    meterCost: 50,
                    difficulty: "Easy",
                    situation: "Midscreen",
                    isOptimal: true,
                    notes: "Does the same damage as RRC routes and lets you hit confirm with an easier window.",
                    videoUrl: "https://res.cloudinary.com/dlts0xtuw/video/upload/v1773625772/Master_s-hammer-metered_z99zkx.webm",
                    videoFallbackImage: "images/5P/GGST_Slayer_5P.png"
                }
            ]
        }
    ] 
};
