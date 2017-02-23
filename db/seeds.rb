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
  profile_picture: File.open("./app/assets/images/seed_profile_pictures/jp.jpg")
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

route4 = Route.create!(
  creator_id: u4.id,
  title: "The Derek Zoolander Route for Kids Who Can't Run Good",
  description: '...and wanna learn to do other stuff good too',
  polyline: "ownmFrmpgMw`gFq~qCo}k@rzw@_azAgbjAi_z@zkiC",
  distance: 318,
  elevation_gain: 30
)

route5 = Route.create!(
  creator_id: u5.id,
  title: "It's a walk off!",
  description: 'Ultra Secret Walk Off Training Grounds',
  polyline: "o{mtGke`w@?um@rXvn@Gal@",
  distance: 1,
  elevation_gain: 1
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


run6 = Run.create!(
  title: 'Runway',
  runner_id: u6.id,
  route_id: route2.id,
  date: Date.today,
  description: 'Are you challenging me to a walk off, Boo-Lander?',
  duration: 1500
)

run6 = Run.create!(
  title: 'Jersey Coal Mines',
  runner_id: u11.id,
  route_id: route5.id,
  date: Date.today,
  description: "Damnit Derek, I'm a coal miner, not a professional film or television actor.",
  duration: 700000
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
  body: 'What is this? A route for ants? How can we be expected to teach ' \
  'children to learn how to run if they can\'t even fit inside the route.'
)

comment2 = Comment.create!(
  author_id: u4.id,
  commentable_id: rout4.id,
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
