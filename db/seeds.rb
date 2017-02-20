u1 = User.create!(
  f_name: 'test1',
  l_name: 'test1',
  email: 'test1@example.com',
  password: 'password'
)

u2 = User.create!(
  f_name: 'test2',
  l_name: 'test2',
  email: 'test2@example.com',
  password: 'password'
)

# For Guest Log In:
u3 = User.create!(
  f_name: 'Scott',
  l_name: 'Jurek',
  email: 'scott-jurek@example.com',
  password: 'password'
)

route1 = Route.create!(
  creator_id: u1.id,
  title: 'Reservoir Loop',
  description: 'A short jog in Central Park',
  polyline: "eq}wFfzkbMQVQt@?b@F^^pAJf@Hn@B~@EzAStASz@Gp@A|@BZDNTn@Zd@TRR\\N\\FZDr@EhABnAFbBGrAE`AFfAXlAL\\X`@VZZVh@ThATjIhAp@D\\Gf@c@v@mAn@{AV}@d@eCXmAVy@`@s@b@i@j@e@h@WrA[ZORQTc@d@aBHc@Bs@Cw@SaAIUYe@_@a@oWwP_@Qc@Gk@BgCE_Ba@a@OWEg@@SF_@Z",
  distance: 1.58,
  elevation_gain: 1
)

route2 = Route.create!(
  creator_id: u2.id,
  title: 'Bridges for Miles!',
  description: 'Lost...',
  polyline: "kopwFbvkbMrG{L|EnFxLvMhKfLpCzCLLzBlAnGlDLFnIpEkEzSEDULOl@YhBeA|EwDfRuFdXqCvMM@g@zB_DhOqCtMcBhIMf@RHBOjAb@fAb@jChAf@Xb@V~@^d@Ld@L\\D\\@B\\Lx@JPLJPHV?TAPhETxGh@bN`@xKn@pP?d@?FABLHFDBX@JFFHJFHGHCJB?HDfBhBjBnB|CvCvAzANNxBtAn@b@f@ZVPBBXXoBrCiBbCk@bAKJYXs@zAw@vAMm@?YMe@?ILU|OiTzDiFz@sArAiB`O_S`KcNjE_Gt@cAZk@l@y@dAwAb@s@FOI?I?[?An@?Z?`@?^AtBUVeEzFd@fCt@jDVt@Vp@b@n@vApCz@pAn@p@p@h@p@^fStH~JvD|Ah@fBl@fAV|@FhAAhAU`Cu@",
  distance: 5.3,
  elevation_gain: 2
)

route3 = Route.create!(
  creator_id: u3.id,
  title: 'Rio!',
  description: 'A pleasant jog along the beach.',
  polyline: "`hvjCtrrfGH_@j@yB`@JdBn@Pm@nCkK|AoG^yAd@iCzAkHtBoIt@aFVqALqBHmFPwAZu@f@o@|@m@l@QnBM|A[~B]dAQbCm@tCeAvAq@pCiBnCqB|AeAnAi@dCaBfCaBx@c@r@WpA_@xDcAfCo@rCw@dBe@rBg@tCs@FCFQ?EA[QoAEaB@wAJe@PYd@a@`Ag@d@Uf@URMFOHY@WIYOSSIW?YHWXCR@ZHZBT_@c@g@e@]Uo@]{@Sq@GM?HETMNWH]?w@?_@BYHONI|GSZFxBCrBEh@?F@HLDZHNTPt@d@f@d@{@pBEFf@DDBDFBVAtBAt@@|@HjAZdB\\dAVn@Zl@l@x@\\`@MJr@j@d@\\~Av@`Cj@zANdBDd@BHAJ?ZC`@I|Ac@h@@^NNBPCb@OXWtAwAT_@DQBYFg@JM|@m@Yi@AYIYM[CAGAYo@k@gB[@GCUa@[c@q@e@e@Wy@Ue@Ei@Ae@De@H_DnAIJOFM?KCIIAC@BDDHFJ@NCJK`CeAb@Od@Id@Eh@@d@D^Hf@RvAeBPGpCe@V?RF?EJQJMLERAR?lBp@jA^BWFONAtl@pQjBd@|@PvC\\hCRlCBjCC|CUrAQr@QlAo@p@m@j@u@\\u@Pk@Fq@Fq@XOVYpDkE^OTCB?j@l@HGPJD@TODALJ@Ad@o@DCp@DbALRF\\d@MRATf@Ah@FZPJTBRCTMXVD\\VxALV?ZCN@~@p@fAn@FBHAb@l@Db@zBbCbCzCfBfCrBdDd@dAPn@PjA@t@IlAQbAk@tAqClFeAvBQ~@Ez@Bz@Jj@Tt@b@x@bArAz@~@nAbAbBbAvAf@xA^bALdBHhB?bBMfAQp@S|A{@fAs@x@i@d@g@\\m@Vy@Hm@DmAAgBF{@Hc@n@mB`BeEbBeD~@aBNm@xCgGBE[Uz@iB_Ag@AKl@eBHM\\Bt@Nn@Tb@sAx@iDR}@g@Y_DaEuDkFoBoCWc@_EmEaBcBmAyAw@_Bg@sBKgAEeADi@b@g@JORWDKPwAAWEWYg@aFiCk@_@k@i@g@a@q@o@q@q@UQYC[GYWISUW]IWOUWOISASHk@J]A[IYQOMIWKa@GMq@YSG_@_Ap@gAn@OJIN_@@a@Ak@ASYDM?KEe@m@Ye@_@{@mB\\Q@kIqCKKKWiAyCcAgC]q@UaAMqAOO_@U}Am@OMEGAMCc@Ww@_@w@BKJIH[@MFELAFBZd@TRL@PGLMNc@NOf@W",
  distance: 4.7,
  elevation_gain: 3
)

run1 = Run.create!(
  title: 'Spring time!',
  runner_id: u1.id,
  route_id: route1.id,
  date: Date.today,
  description: 'Hibernation is over!',
  duration: 430
)

run2 = Run.create!(
  title: 'Brrrrr',
  runner_id: u2.id,
  route_id: route2.id,
  date: Date.today,
  description: 'Freezing today!',
  duration: 3000
)

run3 = Run.create!(
  title: 'Brazil!',
  runner_id: u3.id,
  route_id: route3.id,
  date: Date.today,
  description: 'Training for 5k',
  duration: 2256
)
