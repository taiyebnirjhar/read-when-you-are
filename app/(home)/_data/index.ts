import { Emotion } from "../_types";

const emotions: Emotion[] = [
  {
    id: "happy",
    name: "Happy",
    color: "bg-yellow-400",

    bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-700",
    textColor: "text-yellow-900",
    verses: [
      {
        verse:
          "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
        reference: "Surah At-Talaq, Ayah 3",
        surahNo: 65,
        ayahNo: 3,
        arabicVerse:
          "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ",
      },
      {
        verse:
          "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        reference: "Surah Al-Baqarah, Ayah 152",
        surahNo: 2,
        ayahNo: 152,
        arabicVerse:
          "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      },
      {
        verse:
          "And it is He who sends down rain from heaven, and We produce thereby the vegetation of every kind.",
        reference: "Surah Al-An'am, Ayah 99",
        surahNo: 6,
        ayahNo: 99,
        arabicVerse:
          "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ",
      },
      {
        verse:
          "And Allah has extracted you from the wombs of your mothers not knowing a thing, and He made for you hearing and vision and intellect that perhaps you would be grateful.",
        reference: "Surah An-Nahl, Ayah 78",
        surahNo: 16,
        ayahNo: 78,
        arabicVerse:
          "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ لَعَلَّكُمْ تَشْكُرُونَ",
      },
      {
        verse:
          "And give good tidings to those who believe and do righteous deeds that they will have gardens beneath which rivers flow.",
        reference: "Surah Al-Baqarah, Ayah 25",
        surahNo: 2,
        ayahNo: 25,
        arabicVerse:
          "وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
      },
      {
        verse: "But Allah is your protector, and He is the best of helpers.",
        reference: "Surah Ali 'Imran, Ayah 150",
        surahNo: 3,
        ayahNo: 150,
        arabicVerse: "بَلِ اللَّهُ مَوْلَاكُمْ ۖ وَهُوَ خَيْرُ النَّاصِرِينَ",
      },
      {
        verse:
          "And whoever does righteous deeds, whether male or female, while being a believer - those will enter Paradise.",
        reference: "Surah An-Nisa, Ayah 124",
        surahNo: 4,
        ayahNo: 124,
        arabicVerse:
          "وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ",
      },
      {
        verse: "And Allah loves the doers of good.",
        reference: "Surah Ali 'Imran, Ayah 134",
        surahNo: 3,
        ayahNo: 134,
        arabicVerse: "وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
      },
      {
        verse:
          "And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth.",
        reference: "Surah Al-An'am, Ayah 73",
        surahNo: 6,
        ayahNo: 73,
        arabicVerse:
          "وَهُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۖ وَيَوْمَ يَقُولُ كُن فَيَكُونُ ۚ قَوْلُهُ الْحَقُّ",
      },
      {
        verse:
          "And whoever believes in Allah and does righteous deeds - He will admit him into gardens beneath which rivers flow.",
        reference: "Surah At-Taghabun, Ayah 9",
        surahNo: 64,
        ayahNo: 9,
        arabicVerse:
          "وَمَن يُؤْمِن بِاللَّهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
      },
      {
        verse: "And Allah will reward the grateful.",
        reference: "Surah Ali 'Imran, Ayah 144",
        surahNo: 3,
        ayahNo: 144,
        arabicVerse: "وَسَيَجْزِي اللَّهُ الشَّاكِرِينَ",
      },
      {
        verse:
          "And those who believe and do righteous deeds - no fear will there be concerning them, nor will they grieve.",
        reference: "Surah Al-Baqarah, Ayah 62",
        surahNo: 2,
        ayahNo: 62,
        arabicVerse:
          "إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَادُوا وَالنَّصَارَىٰ وَالصَّابِئِينَ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَعَمِلَ صَالِحًا فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
      },
      {
        verse:
          "And Allah invites to the Home of Peace and guides whom He wills to a straight path.",
        reference: "Surah Yunus, Ayah 25",
        surahNo: 10,
        ayahNo: 25,
        arabicVerse:
          "وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
      },
      {
        verse:
          "And whoever fears Allah - He will make for him of his matter ease.",
        reference: "Surah At-Talaq, Ayah 4",
        surahNo: 65,
        ayahNo: 4,
        arabicVerse:
          "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
      },
      {
        verse: "And Allah is the best of providers.",
        reference: "Surah Al-Jumu'ah, Ayah 11",
        surahNo: 62,
        ayahNo: 11,
        arabicVerse: "وَاللَّهُ خَيْرُ الرَّازِقِينَ",
      },
      {
        verse: "And whoever trusts in Allah - then He is sufficient for him.",
        reference: "Surah At-Talaq, Ayah 3",
        surahNo: 65,
        ayahNo: 3,
        arabicVerse: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      },
      {
        verse:
          "And Allah loves those who are constantly repentant and loves those who purify themselves.",
        reference: "Surah Al-Baqarah, Ayah 222",
        surahNo: 2,
        ayahNo: 222,
        arabicVerse:
          "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
      },
      {
        verse:
          "And whoever does good deeds, whether male or female, and is a believer - such will enter Paradise.",
        reference: "Surah Ghafir, Ayah 40",
        surahNo: 40,
        ayahNo: 40,
        arabicVerse:
          "مَنْ عَمِلَ سَيِّئَةً فَلَا يُجْزَىٰ إِلَّا مِثْلَهَا ۖ وَمَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ",
      },
      {
        verse: "And Allah is Forgiving and Merciful.",
        reference: "Surah Al-Baqarah, Ayah 173",
        surahNo: 2,
        ayahNo: 173,
        arabicVerse: "فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
      },
      {
        verse:
          "And those who believe and do righteous deeds will have gardens beneath which rivers flow.",
        reference: "Surah Al-Baqarah, Ayah 82",
        surahNo: 2,
        ayahNo: 82,
        arabicVerse:
          "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ ۖ هُمْ فِيهَا خَالِدُونَ",
      },
    ],
  },
  {
    id: "anxious",
    name: "Anxious",
    color: "bg-green-500",
    bgColor: "bg-gradient-to-br from-green-500 to-green-800",
    textColor: "text-green-900",
    verses: [
      {
        verse:
          "Unquestionably, by the remembrance of Allah hearts are assured.",
        reference: "Surah Ar-Ra'd, Ayah 28",
        surahNo: 13,
        ayahNo: 28,
        arabicVerse: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      },
      {
        verse:
          "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
        reference: "Surah At-Talaq, Ayah 2-3",
        surahNo: 65,
        ayahNo: 2,
        arabicVerse:
          "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
      },
      {
        verse:
          "And Allah is predominant over His affair, but most of the people do not know.",
        reference: "Surah Yusuf, Ayah 21",
        surahNo: 12,
        ayahNo: 21,
        arabicVerse:
          "وَاللَّهُ غَالِبٌ عَلَىٰ أَمْرِهِ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
      },
      {
        verse: "So be patient. Indeed, the promise of Allah is truth.",
        reference: "Surah Ar-Rum, Ayah 60",
        surahNo: 30,
        ayahNo: 60,
        arabicVerse: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ",
      },
      {
        verse: "And whoever relies upon Allah - then He is sufficient for him.",
        reference: "Surah At-Talaq, Ayah 3",
        surahNo: 65,
        ayahNo: 3,
        arabicVerse: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      },
      {
        verse:
          "And Allah will not make the believers' faith in vain. Indeed, Allah is, to the people, Kind and Merciful.",
        reference: "Surah Al-Baqarah, Ayah 143",
        surahNo: 2,
        ayahNo: 143,
        arabicVerse:
          "وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ ۚ إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَّحِيمٌ",
      },
      {
        verse:
          "And whoever fears Allah - He will make for him of his matter ease.",
        reference: "Surah At-Talaq, Ayah 4",
        surahNo: 65,
        ayahNo: 4,
        arabicVerse:
          "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
      },
      {
        verse: "And it is Allah who sends the winds, and they stir the clouds.",
        reference: "Surah Fatir, Ayah 9",
        surahNo: 35,
        ayahNo: 9,
        arabicVerse: "وَاللَّهُ الَّذِي أَرْسَلَ الرِّيَاحَ فَتُثِيرُ سَحَابًا",
      },
      {
        verse: "And Allah is with the patient.",
        reference: "Surah Al-Baqarah, Ayah 153",
        surahNo: 2,
        ayahNo: 153,
        arabicVerse: "وَاللَّهُ مَعَ الصَّابِرِينَ",
      },
      {
        verse:
          "And whoever does righteous deeds and is a believer - no fear will there be concerning them.",
        reference: "Surah Al-A'raf, Ayah 35",
        surahNo: 7,
        ayahNo: 35,
        arabicVerse:
          "فَمَنِ اتَّقَىٰ وَأَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
      },
      {
        verse: "And Allah is the best of planners.",
        reference: "Surah Al-Anfal, Ayah 30",
        surahNo: 8,
        ayahNo: 30,
        arabicVerse: "وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
      },
      {
        verse: "And whoever fears Allah - He will make for him a way out.",
        reference: "Surah At-Talaq, Ayah 2",
        surahNo: 65,
        ayahNo: 2,
        arabicVerse: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      },
      {
        verse: "And Allah is sufficient as a Disposer of affairs.",
        reference: "Surah An-Nisa, Ayah 81",
        surahNo: 4,
        ayahNo: 81,
        arabicVerse: "وَكَفَىٰ بِاللَّهِ وَكِيلًا",
      },
      {
        verse: "And whoever trusts in Allah, then He is sufficient for him.",
        reference: "Surah At-Talaq, Ayah 3",
        surahNo: 65,
        ayahNo: 3,
        arabicVerse: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      },
      {
        verse: "And Allah loves those who trust in Him.",
        reference: "Surah Ali 'Imran, Ayah 159",
        surahNo: 3,
        ayahNo: 159,
        arabicVerse: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
      },
      {
        verse:
          "And whoever is patient and forgives - indeed, that is of the matters [requiring] determination.",
        reference: "Surah Ash-Shura, Ayah 43",
        surahNo: 42,
        ayahNo: 43,
        arabicVerse:
          "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ",
      },
      {
        verse:
          "And Allah is with those who fear Him and those who are doers of good.",
        reference: "Surah An-Nahl, Ayah 128",
        surahNo: 16,
        ayahNo: 128,
        arabicVerse:
          "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ",
      },
      {
        verse:
          "And whoever fears Allah and keeps his duty to Him, He will make a way for him to get out.",
        reference: "Surah At-Talaq, Ayah 2",
        surahNo: 65,
        ayahNo: 2,
        arabicVerse: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      },
      {
        verse: "And Allah is Hearing and Knowing.",
        reference: "Surah Al-Baqarah, Ayah 137",
        surahNo: 2,
        ayahNo: 137,
        arabicVerse: "وَاللَّهُ سَمِيعٌ عَلِيمٌ",
      },
      {
        verse: "And whoever believes in Allah - He will guide his heart.",
        reference: "Surah At-Taghabun, Ayah 11",
        surahNo: 64,
        ayahNo: 11,
        arabicVerse: "وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ",
      },
    ],
  },
  {
    id: "thankful",
    name: "Thankful",
    color: "bg-orange-400",
    bgColor: "bg-gradient-to-br from-orange-400 to-orange-700",
    textColor: "text-orange-900",
    verses: [
      {
        verse:
          "And whoever is grateful - he is only grateful for [the benefit of] himself. And whoever denies [His favor] - then indeed, Allah is Free of need and Praiseworthy.",
        reference: "Surah Luqman, Ayah 12",
        surahNo: 31,
        ayahNo: 12,
        arabicVerse:
          "وَمَن شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ ۖ وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ حَمِيدٌ",
      },
      {
        verse:
          "And [remember] when your Lord proclaimed, 'If you are grateful, I will certainly give you more. But if you are ungrateful, indeed, My punishment is severe.'",
        reference: "Surah Ibrahim, Ayah 7",
        surahNo: 14,
        ayahNo: 7,
        arabicVerse:
          "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
      },
      {
        verse:
          "And if you should count the favors of Allah, you could not enumerate them.",
        reference: "Surah An-Nahl, Ayah 18",
        surahNo: 16,
        ayahNo: 18,
        arabicVerse:
          "وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا ۗ إِنَّ اللَّهَ لَغَفُورٌ رَّحِيمٌ",
      },
      {
        verse:
          "So eat of what Allah has provided for you [which is] lawful and good. And be grateful for the favor of Allah, if it is [indeed] Him that you worship.",
        reference: "Surah An-Nahl, Ayah 114",
        surahNo: 16,
        ayahNo: 114,
        arabicVerse:
          "فَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا ۚ وَاشْكُرُوا نِعْمَتَ اللَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",
      },
      {
        verse:
          "Work, O family of David, in gratitude. And few of My servants are grateful.",
        reference: "Surah Saba, Ayah 13",
        surahNo: 34,
        ayahNo: 13,
        arabicVerse:
          "اعْمَلُوا آلَ دَاوُودَ شُكْرًا ۚ وَقَلِيلٌ مِّنْ عِبَادِيَ الشَّكُورُ",
      },
      {
        verse: "And Allah will reward the grateful.",
        reference: "Surah Ali 'Imran, Ayah 144",
        surahNo: 3,
        ayahNo: 144,
        arabicVerse: "وَسَيَجْزِي اللَّهُ الشَّاكِرِينَ",
      },
      {
        verse:
          "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        reference: "Surah Al-Baqarah, Ayah 152",
        surahNo: 2,
        ayahNo: 152,
        arabicVerse:
          "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
      },
      {
        verse:
          "And whoever is grateful, he is grateful only for his own soul's good.",
        reference: "Surah Luqman, Ayah 12",
        surahNo: 31,
        ayahNo: 12,
        arabicVerse: "وَمَن شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ",
      },
      {
        verse:
          "And Allah has brought you out of the wombs of your mothers while you know nothing. And He gave you hearing, sight, and hearts that you might give thanks.",
        reference: "Surah An-Nahl, Ayah 78",
        surahNo: 16,
        ayahNo: 78,
        arabicVerse:
          "وَاللَّهُ أَخْرَجَكُم مِّن بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ لَعَلَّكُمْ تَشْكُرُونَ",
      },
      {
        verse:
          "And it is He who created for you all of that which is on the earth.",
        reference: "Surah Al-Baqarah, Ayah 29",
        surahNo: 2,
        ayahNo: 29,
        arabicVerse: "هُوَ الَّذِي خَلَقَ لَكُم مَّا فِي الْأَرْضِ جَمِيعًا",
      },
      {
        verse: "And Allah is the best of providers.",
        reference: "Surah Al-Jumu'ah, Ayah 11",
        surahNo: 62,
        ayahNo: 11,
        arabicVerse: "وَاللَّهُ خَيْرُ الرَّازِقِينَ",
      },
      {
        verse:
          "And whoever gives thanks has given thanks for [the benefit of] himself.",
        reference: "Surah An-Naml, Ayah 40",
        surahNo: 27,
        ayahNo: 40,
        arabicVerse: "وَمَن شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ",
      },
      {
        verse: "And Allah loves the grateful.",
        reference: "Surah Ali 'Imran, Ayah 144",
        surahNo: 3,
        ayahNo: 144,
        arabicVerse: "وَاللَّهُ يُحِبُّ الشَّاكِرِينَ",
      },
      {
        verse:
          "And We made from among them leaders guiding by Our command when they were patient and were certain of Our signs.",
        reference: "Surah As-Sajdah, Ayah 24",
        surahNo: 32,
        ayahNo: 24,
        arabicVerse:
          "وَجَعَلْنَا مِنْهُمْ أَئِمَّةً يَهْدُونَ بِأَمْرِنَا لَمَّا صَبَرُوا ۖ وَكَانُوا بِآيَاتِنَا يُوقِنُونَ",
      },
      {
        verse:
          "And it is He who sends down rain from the sky, and We produce thereby the vegetation of every kind.",
        reference: "Surah Al-An'am, Ayah 99",
        surahNo: 6,
        ayahNo: 99,
        arabicVerse:
          "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ",
      },
      {
        verse: "And Allah has favored some of you over others in provision.",
        reference: "Surah An-Nahl, Ayah 71",
        surahNo: 16,
        ayahNo: 71,
        arabicVerse: "وَاللَّهُ فَضَّلَ بَعْضَكُمْ عَلَىٰ بَعْضٍ فِي الرِّزْقِ",
      },
      {
        verse: "And whatever you have of favor - it is from Allah.",
        reference: "Surah An-Nahl, Ayah 53",
        surahNo: 16,
        ayahNo: 53,
        arabicVerse: "وَمَا بِكُم مِّن نِّعْمَةٍ فَمِنَ اللَّهِ",
      },
      {
        verse:
          "And He gave you from all you asked of Him. And if you should count the favor of Allah, you could not enumerate them.",
        reference: "Surah Ibrahim, Ayah 34",
        surahNo: 14,
        ayahNo: 34,
        arabicVerse:
          "وَآتَاكُم مِّن كُلِّ مَا سَأَلْتُمُوهُ ۚ وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا",
      },
      {
        verse: "And Allah is Appreciative and Knowing.",
        reference: "Surah Ash-Shura, Ayah 23",
        surahNo: 42,
        ayahNo: 23,
        arabicVerse: "وَاللَّهُ شَكُورٌ عَلِيمٌ",
      },
      {
        verse:
          "And whoever does good deeds, whether male or female, and is a believer - We will surely cause him to live a good life.",
        reference: "Surah An-Nahl, Ayah 97",
        surahNo: 16,
        ayahNo: 97,
        arabicVerse:
          "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
      },
    ],
  },
  {
    id: "lonely",
    name: "Lonely",
    color: "bg-blue-500",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-900",
    textColor: "text-blue-900",
    verses: [
      {
        verse:
          "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
        reference: "Surah Al-Baqarah, Ayah 186",
        arabicVerse:
          "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
        surahNo: 2,
        ayahNo: 186,
      },
      {
        verse:
          "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
        reference: "Surah At-Talaq, Ayah 3",
        arabicVerse:
          "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ",
        surahNo: 65,
        ayahNo: 3,
      },
      {
        verse:
          "And Allah is with those who fear Him and those who are doers of good.",
        reference: "Surah An-Nahl, Ayah 128",
        arabicVerse:
          "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ",
        surahNo: 16,
        ayahNo: 128,
      },
      {
        verse:
          "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        reference: "Surah Al-Baqarah, Ayah 152",
        arabicVerse:
          "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
        surahNo: 2,
        ayahNo: 152,
      },
      {
        verse: "And whoever fears Allah - He will make for him a way out.",
        reference: "Surah At-Talaq, Ayah 2",
        arabicVerse: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
        surahNo: 65,
        ayahNo: 2,
      },
      {
        verse:
          "And give good tidings to the patient, Who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.'",
        reference: "Surah Al-Baqarah, Ayah 155-156",
        arabicVerse:
          "وَبَشِّرِ الصَّابِرِينَ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
        surahNo: 2,
        ayahNo: 155,
      },
      {
        verse:
          "And whoever does righteous deeds, whether male or female, while being a believer - those will enter Paradise.",
        reference: "Surah An-Nisa, Ayah 124",
        arabicVerse:
          "وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ",
        surahNo: 4,
        ayahNo: 124,
      },
      {
        verse: "And Allah is sufficient as a Disposer of affairs.",
        reference: "Surah An-Nisa, Ayah 81",
        arabicVerse: "وَكَفَىٰ بِاللَّهِ وَكِيلًا",
        surahNo: 4,
        ayahNo: 81,
      },
      {
        verse: "And Allah loves those who trust in Him.",
        reference: "Surah Ali 'Imran, Ayah 159",
        arabicVerse: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
        surahNo: 3,
        ayahNo: 159,
      },
      {
        verse: "And whoever believes in Allah - He will guide his heart.",
        reference: "Surah At-Taghabun, Ayah 11",
        arabicVerse: "وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ",
        surahNo: 64,
        ayahNo: 11,
      },
      {
        verse: "And Allah is with the patient.",
        reference: "Surah Al-Baqarah, Ayah 153",
        arabicVerse: "وَاللَّهُ مَعَ الصَّابِرِينَ",
        surahNo: 2,
        ayahNo: 153,
      },
      {
        verse:
          "And whoever fears Allah and keeps his duty to Him, He will make a way for him to get out.",
        reference: "Surah At-Talaq, Ayah 2",
        arabicVerse: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
        surahNo: 65,
        ayahNo: 2,
      },
      {
        verse: "And Allah is Hearing and Knowing.",
        reference: "Surah Al-Baqarah, Ayah 137",
        arabicVerse: "وَاللَّهُ سَمِيعٌ عَلِيمٌ",
        surahNo: 2,
        ayahNo: 137,
      },
      {
        verse: "And whoever trusts in Allah, then He is sufficient for him.",
        reference: "Surah At-Talaq, Ayah 3",
        arabicVerse: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
        surahNo: 65,
        ayahNo: 3,
      },
      {
        verse:
          "And Allah invites to the Home of Peace and guides whom He wills to a straight path.",
        reference: "Surah Yunus, Ayah 25",
        arabicVerse:
          "وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        surahNo: 10,
        ayahNo: 25,
      },
      {
        verse:
          "And whoever does good deeds, whether male or female, and is a believer - We will surely cause him to live a good life.",
        reference: "Surah An-Nahl, Ayah 97",
        arabicVerse:
          "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
        surahNo: 16,
        ayahNo: 97,
      },
      {
        verse: "And Allah is the best of planners.",
        reference: "Surah Al-Anfal, Ayah 30",
        arabicVerse: "وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
        surahNo: 8,
        ayahNo: 30,
      },
      {
        verse:
          "And whoever believes in Allah and does righteous deeds - He will admit him into gardens beneath which rivers flow.",
        reference: "Surah At-Taghabun, Ayah 9",
        arabicVerse:
          "وَمَن يُؤْمِن بِاللَّهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
        surahNo: 64,
        ayahNo: 9,
      },
      {
        verse: "And Allah loves the doers of good.",
        reference: "Surah Ali 'Imran, Ayah 134",
        arabicVerse: "وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
        surahNo: 3,
        ayahNo: 134,
      },
      {
        verse:
          "And whoever fears Allah - He will make for him of his matter ease.",
        reference: "Surah At-Talaq, Ayah 4",
        arabicVerse:
          "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
        surahNo: 65,
        ayahNo: 4,
      },
    ],
  },
  {
    id: "angry",
    name: "Angry",
    color: "bg-red-500",
    bgColor: "bg-gradient-to-br from-red-500 to-red-700",
    textColor: "text-red-900",
    verses: [
      {
        verse:
          "But whoever forgives and makes reconciliation, his reward is with Allah. Indeed, He does not like wrongdoers.",
        reference: "Surah Ash-Shura, Ayah 40",
        arabicVerse:
          "فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ ۚ إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ",
        surahNo: 42,
        ayahNo: 40,
      },
      {
        verse:
          "And whoever is patient and forgives - indeed, that is of the matters [requiring] determination.",
        reference: "Surah Ash-Shura, Ayah 43",
        arabicVerse:
          "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ",
        surahNo: 42,
        ayahNo: 43,
      },
      {
        verse:
          "And those who avoid the major sins and immoralities, and when they are angry, they forgive.",
        reference: "Surah Ash-Shura, Ayah 37",
        arabicVerse:
          "وَالَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ",
        surahNo: 42,
        ayahNo: 37,
      },
      {
        verse:
          "And hasten to forgiveness from your Lord and a garden as wide as the heavens and earth, prepared for the righteous.",
        reference: "Surah Ali 'Imran, Ayah 133",
        arabicVerse:
          "وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ",
        surahNo: 3,
        ayahNo: 133,
      },
      {
        verse:
          "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better; then the one whom between you and him is enmity [will become] as though he was a devoted friend.",
        reference: "Surah Fussilat, Ayah 34",
        arabicVerse:
          "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ۚ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ",
        surahNo: 41,
        ayahNo: 34,
      },
      {
        verse:
          "The recompense for an evil is an evil like thereof; but whoever forgives and makes reconciliation, his reward is with Allah.",
        reference: "Surah Ash-Shura, Ayah 40",
        arabicVerse:
          "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا ۖ فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ",
        surahNo: 42,
        ayahNo: 40,
      },
      {
        verse:
          "And whoever is patient and forgives - indeed, that is of the matters [worthy] of determination.",
        reference: "Surah Ash-Shura, Ayah 43",
        arabicVerse:
          "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ",
        surahNo: 42,
        ayahNo: 43,
      },
      {
        verse: "And Allah loves those who act justly.",
        reference: "Surah Al-Hujurat, Ayah 9",
        arabicVerse: "وَاللَّهُ يُحِبُّ الْمُقْسِطِينَ",
        surahNo: 49,
        ayahNo: 9,
      },
      {
        verse:
          "And whoever forgives and makes reconciliation, his reward is with Allah.",
        reference: "Surah Ash-Shura, Ayah 40",
        arabicVerse: "فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ",
        surahNo: 42,
        ayahNo: 40,
      },
      {
        verse:
          "But whoever endures patiently and forgives - indeed, that is of the matters [worthy] of determination.",
        reference: "Surah Ash-Shura, Ayah 43",
        arabicVerse:
          "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ",
        surahNo: 42,
        ayahNo: 43,
      },
      {
        verse:
          "And whoever restrains himself and forgives - that is truly a matter of great resolution.",
        reference: "Surah Ash-Shura, Ayah 43",
        arabicVerse:
          "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ",
        surahNo: 42,
        ayahNo: 43,
      },
      {
        verse: "And Allah is with the patient.",
        reference: "Surah Al-Baqarah, Ayah 153",
        arabicVerse: "وَاللَّهُ مَعَ الصَّابِرِينَ",
        surahNo: 2,
        ayahNo: 153,
      },
      {
        verse:
          "And whoever fears Allah - He will make for him of his matter ease.",
        reference: "Surah At-Talaq, Ayah 4",
        arabicVerse:
          "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
        surahNo: 65,
        ayahNo: 4,
      },
      {
        verse: "And whoever relies upon Allah - then He is sufficient for him.",
        reference: "Surah At-Talaq, Ayah 3",
        arabicVerse: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
        surahNo: 65,
        ayahNo: 3,
      },
      {
        verse: "And Allah loves the righteous.",
        reference: "Surah At-Tawbah, Ayah 4",
        arabicVerse: "إِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ",
        surahNo: 9,
        ayahNo: 4,
      },
      {
        verse:
          "And whoever does good deeds, whether male or female, and is a believer - We will surely cause him to live a good life.",
        reference: "Surah An-Nahl, Ayah 97",
        arabicVerse:
          "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
        surahNo: 16,
        ayahNo: 97,
      },
      {
        verse: "And Allah is Forgiving and Merciful.",
        reference: "Surah Al-Baqarah, Ayah 173",
        arabicVerse: "فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
        surahNo: 2,
        ayahNo: 173,
      },
      {
        verse: "And whoever trusts in Allah, then He is sufficient for him.",
        reference: "Surah At-Talaq, Ayah 3",
        arabicVerse: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
        surahNo: 65,
        ayahNo: 3,
      },
      {
        verse: "And Allah loves those who trust in Him.",
        reference: "Surah Ali 'Imran, Ayah 159",
        arabicVerse: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
        surahNo: 3,
        ayahNo: 159,
      },
      {
        verse:
          "And whoever is patient and does righteous deeds - indeed, for those there will be forgiveness and great reward.",
        reference: "Surah Hud, Ayah 11",
        arabicVerse:
          "إِلَّا الَّذِينَ صَبَرُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
        surahNo: 11,
        ayahNo: 11,
      },
    ],
  },
  {
    id: "sad",
    name: "Sad",
    color: "bg-purple-500",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
    textColor: "text-purple-900",
    verses: [
      {
        verse:
          "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
        reference: "Surah Ash-Sharh, Ayah 5-6",
        arabicVerse:
          "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        surahNo: 94,
        ayahNo: 5,
      },
      {
        verse:
          "And give good tidings to the patient, Who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.'",
        reference: "Surah Al-Baqarah, Ayah 155-156",
        arabicVerse:
          "وَبَشِّرِ الصَّابِرِينَ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
        surahNo: 2,
        ayahNo: 155,
      },
      {
        verse:
          "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
        reference: "Surah At-Talaq, Ayah 3",
        arabicVerse:
          "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ",
        surahNo: 65,
        ayahNo: 3,
      },
      {
        verse: "And Allah would not punish them while they seek forgiveness.",
        reference: "Surah Al-Anfal, Ayah 33",
        arabicVerse:
          "وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ",
        surahNo: 8,
        ayahNo: 33,
      },
      {
        verse:
          "And whoever does righteous deeds, whether male or female, while being a believer - those will enter Paradise.",
        reference: "Surah An-Nisa, Ayah 124",
        arabicVerse:
          "وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ",
        surahNo: 4,
        ayahNo: 124,
      },
      {
        verse:
          "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
        reference: "Surah At-Talaq, Ayah 2-3",
        arabicVerse:
          "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
        surahNo: 65,
        ayahNo: 2,
      },
      {
        verse:
          "So be patient. Indeed, the promise of Allah is truth. And ask forgiveness for your sin and exalt [Allah] with praise of your Lord in the evening and the morning.",
        reference: "Surah Ghafir, Ayah 55",
        arabicVerse:
          "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ وَاسْتَغْفِرْ لِذَنبِكَ وَسَبِّحْ بِحَمْدِ رَبِّكَ بِالْعَشِيِّ وَالْإِبْكَارِ",
        surahNo: 40,
        ayahNo: 55,
      },
      {
        verse:
          "And it is Allah who sends the winds, and they stir the clouds, and We drive them to a dead land and give life thereby to the earth after its lifelessness. Thus is the resurrection.",
        reference: "Surah Fatir, Ayah 9",
        arabicVerse:
          "وَاللَّهُ الَّذِي أَرْسَلَ الرِّيَاحَ فَتُثِيرُ سَحَابًا فَسُقْنَاهُ إِلَىٰ بَلَدٍ مَّيِّتٍ فَأَحْيَيْنَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا ۚ كَذَٰلِكَ النُّشُورُ",
        surahNo: 35,
        ayahNo: 9,
      },
      {
        verse: "And Allah is with the patient.",
        reference: "Surah Al-Baqarah, Ayah 153",
        arabicVerse: "وَاللَّهُ مَعَ الصَّابِرِينَ",
        surahNo: 2,
        ayahNo: 153,
      },
      {
        verse: "And whoever believes in Allah - He will guide his heart.",
        reference: "Surah At-Taghabun, Ayah 11",
        arabicVerse: "وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ",
        surahNo: 64,
        ayahNo: 11,
      },
      {
        verse:
          "And whoever does good deeds, whether male or female, and is a believer - We will surely cause him to live a good life.",
        reference: "Surah An-Nahl, Ayah 97",
        arabicVerse:
          "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
        surahNo: 16,
        ayahNo: 97,
      },
      {
        verse:
          "And whoever fears Allah - He will make for him of his matter ease.",
        reference: "Surah At-Talaq, Ayah 4",
        arabicVerse:
          "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
        surahNo: 65,
        ayahNo: 4,
      },
      {
        verse: "And Allah loves those who trust in Him.",
        reference: "Surah Ali 'Imran, Ayah 159",
        arabicVerse: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
        surahNo: 3,
        ayahNo: 159,
      },
      {
        verse: "And whoever trusts in Allah, then He is sufficient for him.",
        reference: "Surah At-Talaq, Ayah 3",
        arabicVerse: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
        surahNo: 65,
        ayahNo: 3,
      },
      {
        verse: "And Allah is the best of planners.",
        reference: "Surah Al-Anfal, Ayah 30",
        arabicVerse: "وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
        surahNo: 8,
        ayahNo: 30,
      },
      {
        verse:
          "And Allah invites to the Home of Peace and guides whom He wills to a straight path.",
        reference: "Surah Yunus, Ayah 25",
        arabicVerse:
          "وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        surahNo: 10,
        ayahNo: 25,
      },
      {
        verse: "And Allah is Forgiving and Merciful.",
        reference: "Surah Al-Baqarah, Ayah 173",
        arabicVerse: "فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
        surahNo: 2,
        ayahNo: 173,
      },
      {
        verse:
          "And whoever believes in Allah and does righteous deeds - He will admit him into gardens beneath which rivers flow.",
        reference: "Surah At-Taghabun, Ayah 9",
        arabicVerse:
          "وَمَن يُؤْمِن بِاللَّهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
        surahNo: 64,
        ayahNo: 9,
      },
      {
        verse: "And Allah loves the doers of good.",
        reference: "Surah Ali 'Imran, Ayah 134",
        arabicVerse: "وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
        surahNo: 3,
        ayahNo: 134,
      },
      {
        verse:
          "And whoever is patient and does righteous deeds - indeed, for those there will be forgiveness and great reward.",
        reference: "Surah Hud, Ayah 11",
        arabicVerse:
          "إِلَّا الَّذِينَ صَبَرُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
        surahNo: 11,
        ayahNo: 11,
      },
    ],
  },
];

export default emotions;
