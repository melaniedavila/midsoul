u1 = User.create!(
  f_name: 'Matilda',
  l_name: 'Jeffries',
  email: 'matilda@example.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/matilda_jeffries.jpg")
)

u2 = User.create!(
  f_name: 'Katinka',
  l_name: 'Ingaborgovinananananana',
  email: 'katinka@example.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/katinka.png")

)

# For Guest Log In:
u3 = User.create!(
  f_name: 'Scott',
  l_name: 'Jurek',
  email: 'scott-jurek@example.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/scott-jurek.jpeg")
)

u4 = User.create!(
  f_name: 'Jacobim',
  l_name: 'Mugatu',
  email: 'jacobim@mugatu.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/mugatu.jpg")
)

u5 = User.create!(
  f_name: 'Derek',
  l_name: 'Zoolander',
  email: 'derek@bluesteel.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/derek-zoolander.jpg")
)

u6 = User.create!(
  f_name: 'Hansel',
  l_name: 'McDonald',
  email: 'hansel@whatever.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/hansel.jpg")
)

u7 = User.create!(
  f_name: 'Meekus',
  l_name: 'Smith',
  email: 'meekus@orangemocha.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/meekus.jpg")
)

u8 = User.create!(
  f_name: 'Maury',
  l_name: 'Ballstein',
  email: 'maury@example.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/maury.jpg")
)


u9 = User.create!(
  f_name: 'JP',
  l_name: 'Prewitt',
  email: 'hand@model.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/jp.jpg")
)

u10 = User.create!(
  f_name: 'Evil',
  l_name: 'DJ',
  email: 'relax@dontdoit.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/evil-dj.jpg")
)

u11 = User.create!(
  f_name: 'Larry',
  l_name: 'Zoolander',
  email: 'coalmine@nj.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/larry.jpg")
)


u12 = User.create!(
  f_name: 'Scrappy',
  l_name: 'Zoolander',
  email: 'mybrothers@merman.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/scrappy.jpg")
)

u13 = User.create!(
  f_name: 'Todd',
  l_name: 'Graham',
  email: 'foamy@latte.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/todd.jpg")
)

u14 = User.create!(
  f_name: 'Brint',
  l_name: 'Manning',
  email: 'frappa@cinno.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/brint.jpg")
)

u15 = User.create!(
  f_name: 'Rufus',
  l_name: 'Highsmith',
  email: 'jitter@bug.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/rufus.jpg")
)

u16 = User.create!(
  f_name: 'Tommy',
  l_name: 'Hilfiger',
  email: 'tommy@hilfiger.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/tommy.jpg")
)

u17 = User.create!(
  f_name: 'Natalie',
  l_name: 'Portman',
  email: 'hesalmost@toogoodlooking.com',
  password: 'password',
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/natalie.jpg")
)


route4 = Route.create!(
  creator_id: u4.id,
  title: "The Derek Zoolander Route for Kids Who Can't Run Good",
  description: '...and wanna learn to do other stuff good too',
  polyline: "ownmFrmpgMw`gFq~qCo}k@rzw@_azAgbjAi_z@zkiC",
  distance: 318,
  elevation_gain: 30
)

route2 = Route.create!(
  creator_id: u2.id,
  title: 'Bridges for Miles!',
  description: 'Lost...',
  polyline: "kopwFbvkbMrG{L|EnFxLvMhKfLpCzCLLzBlAnGlDLFnIpEkEzSEDULOl@YhBeA|EwDfRuFdXqCvMM@g@zB_DhOqCtMcBhIMf@RHBOjAb@fAb@jChAf@Xb@V~@^d@Ld@L\\D\\@B\\Lx@JPLJPHV?TAPhETxGh@bN`@xKn@pP?d@?FABLHFDBX@JFFHJFHGHCJB?HDfBhBjBnB|CvCvAzANNxBtAn@b@f@ZVPBBXXoBrCiBbCk@bAKJYXs@zAw@vAMm@?YMe@?ILU|OiTzDiFz@sArAiB`O_S`KcNjE_Gt@cAZk@l@y@dAwAb@s@FOI?I?[?An@?Z?`@?^AtBUVeEzFd@fCt@jDVt@Vp@b@n@vApCz@pAn@p@p@h@p@^fStH~JvD|Ah@fBl@fAV|@FhAAhAU`Cu@",
  distance: 5.3,
  elevation_gain: 2
)

run6 = Run.create!(
  title: 'Runway',
  runner_id: u6.id,
  route_id: route2.id,
  date: Date.today,
  description: 'Are you challenging me to a walk off, Boo-Lander?',
  duration: 1500
)

route5 = Route.create!(
  creator_id: u5.id,
  title: "It's a walk off!",
  description: 'Ultra Secret Walk Off Training Grounds',
  polyline: "o{mtGke`w@?um@rXvn@Gal@",
  distance: 1,
  elevation_gain: 1
)

run7 = Run.create!(
  title: 'Jersey Coal Mines',
  runner_id: u11.id,
  route_id: route5.id,
  date: Date.today,
  description: "Damnit Derek, I'm a coal miner, not a professional film or television actor.",
  duration: 700
)

route1 = Route.create!(
  creator_id: u1.id,
  title: 'Reservoir Loop',
  description: 'A short jog in Central Park',
  polyline: "eq}wFfzkbMQVQt@?b@F^^pAJf@Hn@B~@EzAStASz@Gp@A|@BZDNTn@Zd@TRR\\N\\FZDr@EhABnAFbBGrAE`AFfAXlAL\\X`@VZZVh@ThATjIhAp@D\\Gf@c@v@mAn@{AV}@d@eCXmAVy@`@s@b@i@j@e@h@WrA[ZORQTc@d@aBHc@Bs@Cw@SaAIUYe@_@a@oWwP_@Qc@Gk@BgCE_Ba@a@OWEg@@SF_@Z",
  distance: 1.58,
  elevation_gain: 1
)

route3 = Route.create!(
  creator_id: u3.id,
  title: 'Rio!',
  description: 'A pleasant jog along the beach.',
  polyline: "`hvjCtrrfGH_@j@yB`@JdBn@Pm@nCkK|AoG^yAd@iCzAkHtBoIt@aFVqALqBHmFPwAZu@f@o@|@m@l@QnBM|A[~B]dAQbCm@tCeAvAq@pCiBnCqB|AeAnAi@dCaBfCaBx@c@r@WpA_@xDcAfCo@rCw@dBe@rBg@tCs@FCFQ?EA[QoAEaB@wAJe@PYd@a@`Ag@d@Uf@URMFOHY@WIYOSSIW?YHWXCR@ZHZBT_@c@g@e@]Uo@]{@Sq@GM?HETMNWH]?w@?_@BYHONI|GSZFxBCrBEh@?F@HLDZHNTPt@d@f@d@{@pBEFf@DDBDFBVAtBAt@@|@HjAZdB\\dAVn@Zl@l@x@\\`@MJr@j@d@\\~Av@`Cj@zANdBDd@BHAJ?ZC`@I|Ac@h@@^NNBPCb@OXWtAwAT_@DQBYFg@JM|@m@Yi@AYIYM[CAGAYo@k@gB[@GCUa@[c@q@e@e@Wy@Ue@Ei@Ae@De@H_DnAIJOFM?KCIIAC@BDDHFJ@NCJK`CeAb@Od@Id@Eh@@d@D^Hf@RvAeBPGpCe@V?RF?EJQJMLERAR?lBp@jA^BWFONAtl@pQjBd@|@PvC\\hCRlCBjCC|CUrAQr@QlAo@p@m@j@u@\\u@Pk@Fq@Fq@XOVYpDkE^OTCB?j@l@HGPJD@TODALJ@Ad@o@DCp@DbALRF\\d@MRATf@Ah@FZPJTBRCTMXVD\\VxALV?ZCN@~@p@fAn@FBHAb@l@Db@zBbCbCzCfBfCrBdDd@dAPn@PjA@t@IlAQbAk@tAqClFeAvBQ~@Ez@Bz@Jj@Tt@b@x@bArAz@~@nAbAbBbAvAf@xA^bALdBHhB?bBMfAQp@S|A{@fAs@x@i@d@g@\\m@Vy@Hm@DmAAgBF{@Hc@n@mB`BeEbBeD~@aBNm@xCgGBE[Uz@iB_Ag@AKl@eBHM\\Bt@Nn@Tb@sAx@iDR}@g@Y_DaEuDkFoBoCWc@_EmEaBcBmAyAw@_Bg@sBKgAEeADi@b@g@JORWDKPwAAWEWYg@aFiCk@_@k@i@g@a@q@o@q@q@UQYC[GYWISUW]IWOUWOISASHk@J]A[IYQOMIWKa@GMq@YSG_@_Ap@gAn@OJIN_@@a@Ak@ASYDM?KEe@m@Ye@_@{@mB\\Q@kIqCKKKWiAyCcAgC]q@UaAMqAOO_@U}Am@OMEGAMCc@Ww@_@w@BKJIH[@MFELAFBZd@TRL@PGLMNc@NOf@W",
  distance: 4.7,
  elevation_gain: 3
)



# ####################

route6 = Route.create!(
  creator_id: u1.id,
  title: "Point Reyes National Sea Shore",
  description: 'Great in the summer',
  polyline: "ctggFx_olV|Aw@z@o@nAcBlB_DvCmGl@iA\\c@~@c@tBu@vAk@zEcCdCqAbAa@`AOlEUr@Or@e@lAaBlC{B|EyDt@_AlAiBh@g@f@Ur@KfCF`AAfAQdE{AtAs@Xa@bEeMv@}Bn@cAv@y@j@]r@Q`ACpCo@`FqAhE}AjJyDnIgDp@YvDsBtLsGvEmCh@c@^g@hAqDd@aAj@c@hCiAb@W\\g@TcARwAXg@f@YfBS|@WvDqBlGiDpDgClCqBbAk@hDeAjA{@~EyE~@o@rAq@r@e@pAeBxAuBnBsBx@w@~@e@j@Kz@A`CXbAFr@Md@Uj@q@dBsCf@eAf@kBf@kAl@o@hDkBpC_Br@q@zAuBnCaE~@aAzAeAbHkE`E{B`CcAvBw@l@IvCM`AUf@Wr@i@t@_AlFeJz@}@`@Mt@?n@EhBkAhC{AlBm@lDg@vASzAm@`L_HhAkAtF{Gx@{AdCiGdAwBjFuGzAqBd@w@fAuDj@iAbBcBfDeEhBuCf@e@jAk@vAkAn@wA^i@XSdCq@dBq@vJiHnAyAtHkKz@kBrAcEVe@`BiBlDkD|AeApEgCbEoCtHyFdAw@J\\@T?LDDG?A@ADUv@gB~Bo@fFe@xCQ^KVEb@Np@l@JZT^t@Cb@Yb@O^WTc@t@CXAPDVBn@Yz@[b@MLP@ZP@j@Dt@HNNEZc@jAqApAw@v@Up@O\\YTCr@Kn@e@^i@^y@jA{A`@]f@m@V]VMX_@Nc@j@s@h@{AfA{@b@Q\\_@|@}@PqATu@LSRMp@g@d@k@b@[d@g@NWRKV@j@QtAy@dBsAh@YVY`A_Af@y@x@}@bAcADUNQv@a@BMVKh@i@hA{@z@{@X@@WFWVYj@gAFq@VSp@K`AKp@?d@JRGP_@r@cCPy@h@kAxBgDjB_BjAo@l@a@Zs@|DeGbCcDfAeAl@Y|Au@PORWFa@Hs@VCNQFe@DQLAVLJC`@k@b@s@Zg@Re@b@Un@?j@LVF`@EZ?RQRk@xAuBP]Z[z@_@n@WhAw@bA}@fA]|@o@p@iAXc@ZEz@Bp@a@Jo@BWOYc@q@EULYX[f@_@rAgAp@m@`Ay@~A_A`@s@PSLIVCRWP[p@gAt@oBXsARyBA}@Um@N_@fBkCf@aA^{APeBNi@VSzEsA|Ds@~CcAvAc@tD}@jAGfAh@dA^zACrA[^g@lA{B|AqCb@}AXg@d@c@tBcBzAaBbDgElA{Bj@CnFwC~@Mp@U|C{ArAc@`FyBhBiBvImFrGyAdIiA|@]",
  distance: 12,
  elevation_gain: 85
)

route7 = Route.create!(
  creator_id: u2.id,
  title: "Buenos Aires",
  description: 'Stop by Recoleta',
  polyline: "hq`rEdzjcJEdBDNHDHABAb@w@l@sATc@bB{Dt@qAJKPi@nBoEl@gAZi@Vi@d@yA~@qCrA_DzBeGXs@Ps@`@cACa@QY{AwAnK}Tt@yAv@aBjCgF~@kC@YCQAGnBa@fCk@hCi@nDy@rBw@lD{@dAQd@l@x@v@|@v@t@l@LJt@h@`FcBtDoAhZcJn@OVDt@@dBQbEWdAIp@G",
  distance: 2,
  elevation_gain: 20
)

route8 = Route.create!(
  creator_id: u4.id,
  title: "Rocky Mountains",
  description: 'Bring snacks',
  polyline: "uqruFjjfdS{@vAuE`F{AhAiClAoInDyA`AiAnB]vAIz@CtAPjJIx@Wv@oAjAuB~Ag@l@k@xAc@jCIxDR|CvBpIV`BBbA@xB|@jGAp@kA|Ek@tAoAlAm@h@m@j@O]EIAAC?y@Fc@}BE[Fe@XsAPsAHmA?cAc@uCWqAQiAkBwGw@{Do@yDa@}@c@kAOqAEu@FaALa@M`@G`AN~APbAl@rAz@rEv@zDjBvG\\zB^hBP|A?d@MhA?r@YtAWfA@Xd@hC`ACDHN\\l@k@l@i@t@q@p@aAlAsETqAw@{FMgFWaB}AyFg@gDEiDPaCj@oCbA_BpDqCj@qAHy@EyDKkFXcCt@kBdAkAfEqBjIqDzAiA|BcCpBaCrAaD`AmFdAeHXiAd@}@`AaApA[`C[|C[`AAfAN~Bh@dIvAxPpB|ABv@[~B{CnCqE~@aDPcCEmCeCySk@sFGiGi@wBYyBIwBDo@zDyPVuC@_AbG[`CkBdGsBfKmJzGyGzB}CxJiHrDoJlB}DhBgF`IkK`EiF~BsDtBuMd@wDhAsD|AeCj@sCfCmGnCiD`DwBv@wCVwFAiG`@aFdBwGlEeHpDgHvGgNAwDz@}GvF_QvE}KhFoGjD_CjGoGv@e@xAaAlEwCj@k@f@uCnFmTh@iA~DiG~CmFvDsGfCwEPqCIoCaAeFeKg[oB}FkF{MoAuDe@wB_@gDMU}D_D_@k@c@]U]YwAcBcKcAyAgBQqFMc@GKwAMkDQoAu@_E{@s@c@s@I_@eA_@_DkAlAuAt@y@Xo@E[a@Qg@SI]Lw@b@_A@oCOsAc@iA_AeCEkBaAsCU{A@iDOwB_AcEa@wA@w@z@aGUiRWiERyCDiCVmA@aA^eA^}AH_FPoBb@cB^gBPM\\ILS{DgBSeAIeBYuCMqDWqECoADyALu@PQUaAT_Br@wD^oCvAwKTaBdAgE^iClA}GZsBT}C\\gBDeBu@aL[}MGqDSyDSmEQu@eBaCCu@Lg@F]Ka@kAiAa@o@q@e@w@s@iAwB{AqBQg@RcB`CcHx@wDl@_DpBuGbB_HzB_LnF}VdA_Ed@aDnAeKdA}Ff@{HdAuZ^cKVaAyAuPg@kBkE_MeDiJ_D{Fq@aB}CgK}B}HcBwEwBmDqD}D_AoBqBsH_@oDAkDGeCYm@m@e@g@MeO?_B@K?q@}Dw@yEk@yDeCsPDe@k@oGCSKYCuBDcDVgD`@iCzAyFlDoG`@eA\\aCbB}WtKa`B\\iC`AcE|DsHjUu_@lDgGv@oBp@}CZkCLgE",
  distance: 19,
  elevation_gain: 1300
)

route9 = Route.create!(
  creator_id: u5.id,
  title: "Nepal",
  description: "I'm pretty sure there's a lot more to life than being really, really, ridiculously good looking. And I plan on finding out what that is.",
  polyline: "qtpgDsuhiOuHcH}BlChEhLt@pD|ClGI`MbEzMq@`JuAtG`ChIFxFqCzBkDlGKjCaDjHi@lEaCxBqD^mBjDsFq@mC?gDjDaDfCuEpMaEpFg@pJDpLqFJq@jDvHxGLbGsFvD_CbHqHdGlD`Ns@tG{Kdw@C@GD?TyE~]mGb|@zD|TmDbQnCr]RfOkJrQuIzIaDpPqFpLyKxK}Ore@oF~Gy@dJrApEq@jFmBdIr@xAtEe@iBxFCxHuCfCBzEkNuA}G|A{GdLoFjDoG|AwKjNo@pKcDbGcJvCsIlHcHtO}EnW{FdMeFdGaNhXqB|F_AjOPfUzEbOkAfXgCvi@uBdIcZvq@cPxv@iBrPt@bUdBnWzArm@wJlwDaBlL{J|EiF^cAlHGhDJxFr@xG}@nLs@hSc@xGp@fAJxBTdAk@nHz@tIyAzGgWfOcL~DcBbCuErQsAtMgEnMeC}@iHbLsBlGkMhM_@n@uXv`AgCfUdKvg@nEfGRvOhK`p@?~SmBjCClFt@~HoBfLsBnLO`I`BvE?lK|C`_@kHbVR`QgC|JJhHmB`J}BrA`@tCkDhRcB~GUfJcBrIx@nJaA`Ik@hJfA~IkAbG_E~DqDjHD|E~A~FUfEaCdGn@jJCpLu@fBmFeAaHdCeBvBgChNcAjQ^~JyHvGiAhJ[hBpAVZzHoDjFsIdDcEsBoB|AoHs@{DjBq@hB|@lD}DbFWtEhA|A_BpAoDfEuEbAq@hAjA~@rCKsD~@sA|Bw@M`AbA{B?]m@WvC_@rAsB~E`AvBuAdE_ClBd@l@xBx@_EvAyDnAwAD@rC}@xCr@rD}ChDyAzF{@dJaDjELiBaD|CqEl@sI`C_EpFqGbFwBsBsAt@VjHs@rDNmCwBgLx@uIoDnBmBkAa@HyAYDbBaCo@aJe@`DrHfBvI_E|Sw@rEiE`@d@xCdEvBeExH~@pLy@tDgDn@pHvC{@tFgBnCm@tHrCn@VbB{ATl@zAjCfCFtNqAvGlAdKOvJuDhG}F]{Cr@~C|Dk@lBsDWiA~EbCbE{AlDsCbBdErAlBvAy@pCvCtGk@|CfCnCmBpDTl@nC_@`DxAdA`KsBtNr@jBhGyBtCThEGK|@_InCkQ|a@yBl^cGvT}GtImF|NsOhMMzJw@`N|C|LDrNwBpNyBdOKbMa@tO}ExL}CvJ}BnOx@tI`KpAj@bEgAxFRpFmBtD}HpFp@|K_@hNeGrI}ElIDfMwBlG_FK_D`DtBnFmA~NqDjHiAlEdD{@zAh@nJgDfI{AhA~CnBhIrDxB",
  distance: 41,
  elevation_gain: 943
)

route10 = Route.create!(
  creator_id: u6.id,
  title: "Mount Vesuvius",
  description: "So I'm rappelling down Mount Vesuvius when suddenly I slip, and I start to fall. Just falling, ahh ahh, I'll never forget the terror.",
  polyline: "qvcxFgixvAb@r@?DANI`@@RJf@@ABAHAFDBH?LEFIBGAEIAKBIKq@AOJa@?Ss@kAMKGCaAAi@Wu@_@U?aAV[Nc@ZG@GAYUi@Y[UWYIOCU@MH{AEYS{@g@kAUUm@g@aA]OU@]HSLETBZCJELQb@u@NQHAL@PNNVv@|@N@FC@KCKqB_DyA}AQYe@eAkAkA?SJKD@rAv@hAx@f@f@D@DBDADE?KCI[Qe@a@mBaC?QFIH@FD^X^HL?HEFMBKDa@Ji@Na@r@i@BG?IGKsAY_@MOMc@uAmAiCGMICMAOD_@ZWHc@?OIw@y@Uu@Q[[_@s@e@COFKXEDGBG@i@BWHYJg@?UIKI?IB]`@M@UGyAe@e@QIM@GNWRg@A_@OoAWkAGEKAKDGDINCLAVA|AGZONeB~@e@J_@@OEIIE]QcA_@_AIIQAKHm@p@[Hg@Ca@GSKKKCODQTk@r@uCTsADs@Cq@I]cDkFUg@[cBkBcKE_@B_@JYVYZMfBq@~@c@`@KbACv@@|@NzAh@j@LL@LETUL[D[E[KUYSa@Qq@]m@UQKKS[_AYaAMWOOm@W_@Ws@eAk@w@e@m@_@w@g@qAa@g@WOQSASHMHCH@jAbAr@h@`@f@NPPHNBN?XCXCd@Hn@v@NEFK?KIO_@e@c@Wu@[QKIM[{@_@o@k@w@i@u@_@YiAKOGEQFMHCl@Df@HlCz@^L\\ZPRh@Hx@JPIBMCIIGQCy@GUQg@iAc@s@iEeDeA_Ak@qAWg@a@c@MSI[Ea@Be@JoBCs@E_@A_@BWNk@Bg@By@DQNYPYJm@VyAVi@dA}A|@uAJITGt@KZOd@]ZOl@WnAu@PMNc@ReAF_ACeCYkDW}Be@cAeAaCwD{HIa@Fo@h@yA@MA]EQw@}A[c@YUc@c@UWOSq@}AIa@Co@EaAK}@SiAGaACq@@q@PyBJiALk@Tc@XYt@IPQBQBwBFc@HQ~@g@NUDO?]Gi@Cc@DWfAeEHIDAXHFB@F@f@CbB?b@BZ",
  distance: 5,
  elevation_gain: 612
)

route11 = Route.create!(
  creator_id: u11.id,
  title: "Prospect Park",
  description: "Damnit Derek, I'm a coal miner, not a professional film or television actor.",
  polyline: "}yewF|~mbMPKZa@d@eARq@^_Ar@kAtAmBXdAFlAN~@_@f@ITC`@D^Hp@Dr@@Z]^U^S^U~@w@Le@d@W\\_@hA_@|AO|@CfAD?L@\\D`@@VEb@STKNCdAHr@XDf@AV[`BTRbAtA`@d@d@ZjB|@v@h@bA|@hArAj@|@h@u@LLf@b@X^V`@Vj@Tl@Ld@j@hBTd@V\\N?^@|@Dl@?RGROn@eAXy@H_@DY\\Bj@RLo@Pi@Xo@nA{ANWZu@n@aB`@o@x@w@NgBCc@K[e@oASYe@a@u@g@mBgA]][a@GO]y@g@s@WQQG}@IgAI{@YOIi@]c@c@IK_@_Ac@wAKu@CiAJsBAm@SkASwAEo@Be@Ha@r@{Bo@PgCF_ALgHlCcCbAWPWZeBbC[j@",
  distance: 2,
  elevation_gain: 18
)

run1 = Run.create!(
  title: 'Spring time!',
  runner_id: u1.id,
  route_id: route1.id,
  date: Date.today,
  description: "By the way, you were wrong about my outfit. It's the Cheryl Ladd collection and I got it at JC Penney's. On sale!",
  duration: 430
)

run2 = Run.create!(
  title: 'Brrrrr',
  runner_id: u2.id,
  route_id: route2.id,
  date: Date.today,
  description: 'I do not like snoopy reporter with lack of fashion sense, not one little bit.',
  duration: 3000
)

run3 = Run.create!(
  title: 'Brazil again!',
  runner_id: u3.id,
  route_id: route3.id,
  date: Date.today,
  description: 'Training for 5k again',
  duration: 2250
)

run4 = Run.create!(
  title: 'Brazil!',
  runner_id: u3.id,
  route_id: route3.id,
  date: Date.yesterday,
  description: 'Training for 5k',
  duration: 2256
)

run5 = Run.create!(
  title: 'Bridge Hills!',
  runner_id: u3.id,
  route_id: route2.id,
  date: Date.yesterday,
  description: 'Hills workouts',
  duration: 2256
)

run8 = Run.create!(
  title: 'Half Marathon Training',
  runner_id: u1.id,
  route_id: route6.id,
  date: Date.today,
  description: "What? Hey, guys, that show is in three hours. Derek is dead unless we get that evidence. Do you guys... ",
  duration: 7200
)

run9 = Run.create!(
  title: 'Brisk Jog',
  runner_id: u2.id,
  route_id: route7.id,
  date: Date.today,
  description: "I suggest you and your Kmart Jaclyn Smith Collection outfit... stay the hell away from Derek Zoolander!",
  duration: 960
)

run10 = Run.create!(
  title: 'Scoping out Derelicte Grounds',
  runner_id: u4.id,
  route_id: route10.id,
  date: Date.today,
  description: "As a caterpillar becomes a butterfly, so must you become Derelicte! ",
  duration: 4000
)

run11 = Run.create!(
  title: 'Who Am I?',
  runner_id: u5.id,
  route_id: route10.id,
  date: Date.today,
  description: "[phone rings] God?",
  duration: 100000
)

run12 = Run.create!(
  title: "What's the dealio, yo?",
  runner_id: u6.id,
  route_id: route11.id,
  date: Date.today,
  description: "I felt like, \"This guy's really hurting me.\" And it hurt",
  duration: 1000
)


friend_request1 = FriendRequest.create!(
  requestor_id: u1.id,
  requestee_id: u2.id,
  status: 0
)

friend_request2 = FriendRequest.create!(
  requestor_id: u2.id,
  requestee_id: u3.id,
  status: 1
)

friend_request4 = FriendRequest.create!(
  requestor_id: u4.id,
  requestee_id: u3.id,
  status: 1
)

friend_request5 = FriendRequest.create!(
  requestor_id: u6.id,
  requestee_id: u5.id,
  status: 1
)

friend_request6 = FriendRequest.create!(
  requestor_id: u4.id,
  requestee_id: u5.id,
  status: 2
)

friend_request7 = FriendRequest.create!(
  requestor_id: u12.id,
  requestee_id: u3.id,
  status: 0
)

friend_request8 = FriendRequest.create!(
  requestor_id: u7.id,
  requestee_id: u3.id,
  status: 0
)

friend_request9 = FriendRequest.create!(
  requestor_id: u8.id,
  requestee_id: u3.id,
  status: 0
)

friend_request10 = FriendRequest.create!(
  requestor_id: u11.id,
  requestee_id: u3.id,
  status: 1
)

friend_request11 = FriendRequest.create!(
  requestor_id: u6.id,
  requestee_id: u3.id,
  status: 1
)

friend_request12 = FriendRequest.create!(
  requestor_id: u5.id,
  requestee_id: u3.id,
  status: 1
)

friend_request13 = FriendRequest.create!(
  requestor_id: u1.id,
  requestee_id: u3.id,
  status: 1
)

friendship1 = Friendship.create!(
  user_id: u2.id,
  friend_id: u3.id
)

friendship2 = Friendship.create!(
  user_id: u3.id,
  friend_id: u2.id
)

friendship3 = Friendship.create!(
  user_id: u4.id,
  friend_id: u3.id
)

friendship4 = Friendship.create!(
  user_id: u3.id,
  friend_id: u4.id
)

friendship5 = Friendship.create!(
  user_id: u5.id,
  friend_id: u6.id
)

friendship6 = Friendship.create!(
  user_id: u6.id,
  friend_id: u5.id
)

friendship7 = Friendship.create!(
  user_id: u3.id,
  friend_id: u1.id
)

friendship8 = Friendship.create!(
  user_id: u1.id,
  friend_id: u3.id
)

friendship9 = Friendship.create!(
  user_id: u3.id,
  friend_id: u5.id
)

friendship10 = Friendship.create!(
  user_id: u5.id,
  friend_id: u3.id
)

friendship11 = Friendship.create!(
  user_id: u6.id,
  friend_id: u3.id
)

friendship12 = Friendship.create!(
  user_id: u3.id,
  friend_id: u6.id
)

friendship13 = Friendship.create!(
  user_id: u3.id,
  friend_id: u11.id
)

friendship14 = Friendship.create!(
  user_id: u11.id,
  friend_id: u3.id
)

comment1 = Comment.create!(
  author_id: u5.id,
  commentable_id: route4.id,
  commentable_type: 'Route',
  body: 'What is this? A route for ants?'
)

comment2 = Comment.create!(
  author_id: u4.id,
  commentable_id: route4.id,
  commentable_type: 'Route',
  body: 'What?'
)

comment3 = Comment.create!(
author_id: u5.id,
commentable_id: route4.id,
commentable_type: 'Route',
body: 'How can we be expected to teach children to learn how to run if ' \
  "they can't even fit inside the route?"
)

comment4 = Comment.create!(
  author_id: u4.id,
  commentable_id: route4.id,
  commentable_type: 'Route',
  body: 'Derek, this is just a small-'
)

comment5 = Comment.create!(
  author_id: u5.id,
  commentable_id: route4.id,
  commentable_type: 'Route',
  body: 'I don\'t wanna hear your excuses! The route has to be at least...' \
  'three times bigger than this!'
)

comment6 = Comment.create!(
  author_id: u4.id,
  commentable_id: route4.id,
  commentable_type: 'Route',
  body: 'He\'s absolutely right.'
)

comment7 = Comment.create!(
  author_id: u5.id,
  commentable_id: route4.id,
  commentable_type: 'Route',
  body: 'Thank you.'
)

comment8 = Comment.create!(
  author_id: u6.id,
  commentable_id: run12.id,
  commentable_type: 'Run',
  body: "Who are you tryin' to get crazy with, ese? Don't you know I'm loco? "
)

comment9 = Comment.create!(
  author_id: u5.id,
  commentable_id: run8.id,
  commentable_type: 'Run',
  body: "Why do you hate models, Matilda?"
)

comment10 = Comment.create!(
  author_id: u1.id,
  commentable_id: run8.id,
  commentable_type: 'Run',
  body: "Honestly?"
)

comment11 = Comment.create!(
  author_id: u6.id,
  commentable_id: run8.id,
  commentable_type: 'Run',
  body: "Yes"
)

comment12 = Comment.create!(
  author_id: u1.id,
  commentable_id: run8.id,
  commentable_type: "Run",
  body: "I think they're vain, stupid, and incredibly self-centered."
)

comment13 = Comment.create!(
  author_id: u6.id,
  commentable_id: run8.id,
  commentable_type: 'Run',
  body: "I totally agree with you. But how do you feel about male models?"
)

comment14 = Comment.create!(
  author_id: u4.id,
  commentable_id: run6.id,
  commentable_type: 'Run',
  body: "It's that damn Hansel! He's so hot right now!"
)

comment15 = Comment.create!(
  author_id: u5.id,
  commentable_id: route5.id,
  commentable_type: 'Route',
  body: "Moisture is the essence of wetness, and wetness is the essence of beauty."
)

comment16 = Comment.create!(
  author_id: u1.id,
  commentable_id: route9.id,
  commentable_type: 'Route',
  body: "I've been trying to reach you for a week."
)

comment17 = Comment.create!(
  author_id: u5.id,
  commentable_id: route9.id,
  commentable_type: 'Route',
  body: "A week? What, are you having a whack attack? I saw you this afternoon, dum-dum."
)

comment18 = Comment.create!(
  author_id: u1.id,
  commentable_id: route9.id,
  commentable_type: 'Route',
  body: "That was last Friday."
)

comment19 = Comment.create!(
  author_id: u5.id,
  commentable_id: route9.id,
  commentable_type: 'Route',
  body: "Uhh Earth to Matilda, I was at a day spa. Day, D-A-I-Y-E. Okay?"
)


comment20 = Comment.create!(
  author_id: u5.id,
  commentable_id: run11.id,
  commentable_type: 'Run',
  body: "Are you here to tell me what a bad eugoogoolizer I am?"
)

comment21 = Comment.create!(
  author_id: u1.id,
  commentable_id: run11.id,
  commentable_type: 'Run',
  body: "A what?"
)

comment22 = Comment.create!(
  author_id: u5.id,
  commentable_id: run11.id,
  commentable_type: 'Run',
  body: "A eugoogoolizer... one who speaks at funerals."
)

comment23 = Comment.create!(
  author_id: u5.id,
  commentable_id: run11.id,
  commentable_type: 'Run',
  body: "Or did you think I was too stupid to know what a eugoogooly was?"
)

comment24 = Comment.create!(
  author_id: u6.id,
  commentable_id: route6.id,
  commentable_type: 'Route',
  body: "Excuse me, bra."
)

comment25 = Comment.create!(
  author_id: u5.id,
  commentable_id: route6.id,
  commentable_type: 'Route',
  body: "You're excused, and I'm not your bra!"
)


comment31 = Comment.create!(
  author_id: u4.id,
  commentable_id: route8.id,
  commentable_type: 'Route',
  body: "Todd, are you not aware that I get farty and bloated with a foamy latte?"
)

comment32 = Comment.create!(
  author_id: u13.id,
  commentable_id: route8.id,
  commentable_type: 'Route',
  body: "My mistake, Jacobim!"
)


comment33 = Comment.create!(
  author_id: u8.id,
  commentable_id: route2.id,
  commentable_type: 'Route',
  body: "What do we do when we fall off the horse?"
)

comment34 = Comment.create!(
  author_id: u5.id,
  commentable_id: route2.id,
  commentable_type: 'Route',
  body: "...fall off the horse..."
)

comment35 = Comment.create!(
  author_id: u8.id,
  commentable_id: route2.id,
  commentable_type: 'Route',
  body: "... we... get back on!"
)

comment36 = Comment.create!(
  author_id: u5.id,
  commentable_id: route2.id,
  commentable_type: 'Route',
  body: "Sorry, Maury. I'm not a gymnast."
)

comment37 = Comment.create!(
  author_id: u10.id,
  commentable_id: route1.id,
  commentable_type: 'Route',
  body: "Relax, don't do it. When you wanna come to it."
)

comment37 = Comment.create!(
  author_id: u5.id,
  commentable_id: route7.id,
  commentable_type: 'Route',
  body: "Look, I gotta go pee, but I'd really like to continue talking about this conversation when I come back."
)

comment37 = Comment.create!(
  author_id: u5.id,
  commentable_id: run7.id,
  commentable_type: 'Run',
  body: "... I think I'm getting the Black Lung, Pop. It's not very well ventilated down there."
)

comment40 = Comment.create!(
  author_id: u11.id,
  commentable_id: run7.id,
  commentable_type: 'Run',
  body: "For Christ's sake, Derek, you've been down there one day. Talk to me in thirty years."
)

comment41 = Comment.create!(
  author_id: u6.id,
  commentable_id: route10.id,
  commentable_type: 'Route',
  body: "I care desperately about what I do. "
)

comment42 = Comment.create!(
  author_id: u6.id,
  commentable_id: route10.id,
  commentable_type: 'Route',
  body: "Do I know what product I'm selling? No."
)

comment43 = Comment.create!(
  author_id: u6.id,
  commentable_id: route10.id,
  commentable_type: 'Route',
  body: "Do I know what I'm doing today? No. But I'm here, and I'm gonna give it my best shot. "
)

comment44 = Comment.create!(
  author_id: u9.id,
  commentable_id: route11.id,
  commentable_type: 'Route',
  body: "Male models don't think for themselves."
)

comment45 = Comment.create!(
  author_id: u5.id,
  commentable_id: route11.id,
  commentable_type: 'Route',
  body: "That's not true!"
)

comment46 = Comment.create!(
  author_id: u9.id,
  commentable_id: route11.id,
  commentable_type: 'Route',
  body: "Yes it is, Derek."
)

comment47 = Comment.create!(
  author_id: u5.id,
  commentable_id: route11.id,
  commentable_type: 'Route',
  body: "Okay."
)

comment48 = Comment.create!(
  author_id: u5.id,
  commentable_id: run1.id,
  commentable_type: 'Run',
  body: "Wait a minute. I might just have an idea. They'll be looking for us at Maury's right?"
)

comment49 = Comment.create!(
  author_id: u5.id,
  commentable_id: run1.id,
  commentable_type: 'Run',
  body: "But they won't be looking for... not us."
)


comment50 = Comment.create!(
  author_id: u14.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "Or the way Hansel combs his hair?"
)

comment51 = Comment.create!(
  author_id: u7.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "Or like, doesn't, it's like, ex-squeeze me, but have you ever heard of styling gel?"
)

comment52 = Comment.create!(
  author_id: u14.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "I'm sure Hansel's heard of styling gel, he's a male model."
)

comment53 = Comment.create!(
  author_id: u7.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "Uh, earth to Brint, I was making a joke."
)

comment54 = Comment.create!(
  author_id: u14.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "Uh, Earth to Meekus, duh, okay I knew that!"
)

comment55 = Comment.create!(
  author_id: u7.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "Uh earth to Brint, I'm not so sure you did cuz you were all 'well I'm sure he's heard of styling gel'..."
)

comment56 = Comment.create!(
  author_id: u7.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "like you *didn't* know it was a joke!"
)

comment57 = Comment.create!(
  author_id: u14.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "I knew it was a joke Meekus, I just didn't get it right away!"
)

comment58 = Comment.create!(
  author_id: u7.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "Earth to Brint..."
)

comment59 = Comment.create!(
  author_id: u5.id,
  commentable_id: run2.id,
  commentable_type: 'Run',
  body: "Would you guys stop it already?"
)

comment60 = Comment.create!(
  author_id: u5.id,
  commentable_id: run9.id,
  commentable_type: 'Run',
  body: "Well I guess it all started the first time I went through the second grade."
)

comment61 = Comment.create!(
  author_id: u5.id,
  commentable_id: run9.id,
  commentable_type: 'Run',
  body: "I caught my reflection in a spoon while I was eating my cereal. And I remember thinking..."
)

comment62 = Comment.create!(
  author_id: u5.id,
  commentable_id: run9.id,
  commentable_type: 'Run',
  body: "\"wow, you're ridiculously good looking, maybe you could do that for a career.\""
)

comment63 = Comment.create!(
  author_id: u1.id,
  commentable_id: run9.id,
  commentable_type: 'Run',
  body: "Do what for a career?"
)

comment64 = Comment.create!(
  author_id: u5.id,
  commentable_id: run9.id,
  commentable_type: 'Run',
  body: "Be professionally good looking."
)
