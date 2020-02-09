let quotes = [
    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. – Harry Potter and the Sorcerer\’s Stone.",
    "It does not do well to dwell on dreams and forget to live. – Harry Potter and the Sorcerer\’s Stone.",
    "To the well-organized mind, death is but the next great adventure. – Harry Potter and the Sorcerer\’s Stone.",
    "Thoughts could leave deeper scars than almost anything else. – Harry Potter and the Order of the Phoenix.",
    "It is our choices, Harry, that show what we truly are, far more than our abilities. – Harry Potter and the Chamber of Secrets.",
    "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light. – Harry Potter and the Prisoner of Azkaban.",
    "Of course it is happening inside your head, Harry, but why on Earth should that mean it\’s not real? – Harry Potter and the Deathly Hallows.",
    "I am what I am, an\’ I\’m not ashamed. \‘Never be ashamed,\’ my ol\’ dad used ter say, \‘there\’s some who\’ll hold it against you, but they’re not worth botherin’ with. – Harry Potter and the Goblet of Fire",
    "It matters not what someone is born, but what they grow to be. – Harry Potter and the Goblet of Fire",
    "Things we lose have a way of coming back to us in the end, if not always in the way we expect. – Harry Potter and the Order of the Phoenix",
    "I think I\’ll just go down and have some pudding and wait for it all to turn up — it always does in the end. – Harry Potter and the Order of the Phoenix",
    "I mean, it\’s sort of exciting, isn\’t it, breaking the rules? – Harry Potter and the Order of the Phoenix",
    "We\’ve all got both light and dark inside us. What matters is the part we choose to act on. That\’s who we really are. – Harry Potter and the Order of the Phoenix",
    "And now, Harry, let us step out into the night and pursue that flighty temptress, adventure. – Harry Potter and the Half-Blood Prince",
    "Every human life is worth the same, and worth saving. – Harry Potter and the Deathly Hallows",
    "Never trust anything that can think for itself if you can\’t see where it keeps its brain. – Harry Potter and the Chamber of Secrets",
    "You sort of start thinking anything’s possible if you\’ve got enough nerve. – Harry Potter and the Half-Blood Prince",
    "Just because you have the emotional range of a teaspoon doesn\’t mean we all have. – Harry Potter and the Order of the Phoenix",
    "You think the dead we loved truly ever leave us? You think that we don\’t recall them more clearly in times of great trouble? – Harry Potter and the Prisoner of Azkaban",
    "Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy. – Harry Potter and the Goblet of Fire",
    "Harry, suffering like this proves you are still a man! This pain is part of being human … the fact that you can feel pain like this is your greatest strength. – Harry Potter and the Order of the Phoenix.",
    "We are only as strong as we are united, as weak as we are divided. – Harry Potter and the Goblet of Fire.",
    "Differences of habit and language are nothing at all if our aims are identical and our hearts are open. – Harry Potter and the Goblet of Fire.",
    "Understanding is the first step to acceptance, and only with acceptance can there be recovery. – Harry Potter and the Goblet of Fire.",
    "Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it. – Harry Potter and the Deathly Hallows.",
    "No good sittin\’ worryin\’ abou\’ it. What\’s comin\’ will come, an\’ we\’ll meet it when it does. – Harry Potter and the Goblet of Fire.",
];

function newQuote() {
    var randomNum = Math.floor(Math.random() * 25);
    document.getElementById("quoteDisplay").innerHTML=quotes[randomNum];
    document.getElementById("quoteDisplay").classList.add("quotesBox");
}