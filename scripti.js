// Array of slokas with verse and chapter/verse reference
const slokas = [
    { verse: "SLOKA:  धृतराष्ट्र उवाच।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥1.1॥", reference: "Chapter 1, Verse 1",
      translation:"TRANSLATION: धृतराष्ट्र ने कहाः हे संजय! कुरुक्षेत्र की पवित्र भूमि पर युद्ध करने की इच्छा से एकत्रित होने के पश्चात, मेरे और पाण्डु पुत्रों ने क्या किया?" },
    { verse: "SLOKA:  सञ्जय उवाच।\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत्॥1.2॥", reference: "Chapter 1, Verse 2",
        translation:"TRANSLATION: संजय बोले - उस समय वज्रव्यूह-से खड़ी हुई पाण्डव-सेना को देखकर राजा दुर्योधन द्रोणाचार्य के पास जाकर यह वचन बोला।"},
    { verse: "SLOKA:  अहंकारं बलं दर्पं कामं क्रोधं च संश्रिताः।\nमामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः॥16.18॥ ",
      translation: "TRANSLATION: अहंकार, बल, दर्प, काम और क्रोध के वशीभूत हुए परनिन्दा करने वाले ये लोग अपने और दूसरों के शरीर में स्थित मुझ (परमात्मा) से द्वेष करने वाले होते हैं।।", reference: "Chapter 16, Verse 18",
     },
    { verse: "मन: प्रसाद: सौम्यत्वं मौनमात्मविनिग्रह:।\nभावसंशुद्धिरित्येतत्तपो मानसमुच्यते॥17.16॥", reference: "Chapter 17, Verse 16",
        translation: "TRANSLATION:विचारों की शुद्धता, विनम्रता, मौन, आत्म-नियन्त्रण तथा उद्देश्य की निर्मलता इन सबको मन के तप के रूप में घोषित किया गया है।"
     }
    // Add more slokas as needed
];

// Function to get day of the year
function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Function to display sloka of the day
function displaySloka() {
    const dayOfYear = getDayOfYear();
    const slokaIndex = dayOfYear % slokas.length; // Modulo to cycle through slokas
    const sloka = slokas[slokaIndex];

    document.getElementById('sloka').textContent = sloka.verse;
    document.getElementById('reference').textContent = sloka.reference;
    document.getElementById('translation').textContent = sloka.translation;
}

// Call the function to display the sloka when page loads
window.onload = displaySloka;
