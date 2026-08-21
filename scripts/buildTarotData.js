// scripts/buildTarotData.js
import fs from 'fs';
import path from 'path';

const majorArcanaData = [
  {
    id: "fool",
    name: "The Fool",
    number: 0,
    romanNumeral: "0",
    arcana: "major",
    suit: "none",
    element: "Air",
    astrology: "Uranus",
    image: "/cards/00-TheFool.png",
    uprightKeywords: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit", "Leap of Faith"],
    reversedKeywords: ["Recklessness", "Risk-taking", "Hesitation", "Naivety", "Foolishness"],
    uprightMeaning: "The Fool stands at the edge of the cosmic precipice, ready to step into the vast unknown with pure trust. It heralds a miraculous new beginning, untainted by past regret. The universe invites you to take a leap of faith into uncharted territory.",
    reversedMeaning: "Reversed, The Fool cautions against reckless abandon or paralyzing hesitation. You may be leaping without looking at real-world hazards, or fear may be anchoring your spirit when destiny asks you to walk forward.",
    loveMeaning: {
      upright: "A fresh, exciting romantic adventure is budding. Expect spontaneous encounters and uninhibited connection.",
      reversed: "Impulsiveness or fear of commitment may create turbulence. Ensure both partners are grounded in mutual care."
    },
    careerMeaning: {
      upright: "A visionary venture, new career leap, or radical creative project is favored. Embrace innovative risks.",
      reversed: "Beware of signing unvetted contracts or acting before crucial logistical details are solidified."
    },
    spiritualMeaning: {
      upright: "Your soul is embarking on a sacred pilgrimage of innocence and wonder. Follow your pure intuition.",
      reversed: "Reconnect with childlike awe; do not let cynicism close the doors of your spiritual awakening."
    },
    advice: "Cast away fear and step boldly onto the path unpaved. Trust the universe will catch you.",
    shadowWarning: "Do not mistake careless negligence for divine courage.",
    yesNo: "Yes",
    symbolism: ["White dog (loyalty & instincts)", "White rose (purity)", "Sun (divine light)", "Cliff (infinite potential)"]
  },
  {
    id: "magician",
    name: "The Magician",
    number: 1,
    romanNumeral: "I",
    arcana: "major",
    suit: "none",
    element: "Air",
    astrology: "Mercury",
    image: "/cards/01-TheMagician.png",
    uprightKeywords: ["Manifestation", "Resourcefulness", "Power", "Inspired Action", "Mastery"],
    reversedKeywords: ["Manipulation", "Untapped Potential", "Deception", "Scattered Focus", "Illusion"],
    uprightMeaning: "With one hand pointed to the heavens and the other to the earth, The Magician channels divine will into physical reality. You possess all the elements—cups, wands, swords, and pentacles—needed to manifest your deepest desire.",
    reversedMeaning: "Reversed, The Magician warns of misdirected willpower, illusion, or untapped genius. You may feel imposter syndrome, or someone in your orbit may be using charm to disguise dishonest intentions.",
    loveMeaning: {
      upright: "Magnetic attraction and strong communicative alchemy. You have the power to co-create an extraordinary bond.",
      reversed: "Mixed signals, superficial charm, or hidden agendas. Demand emotional clarity and transparency."
    },
    careerMeaning: {
      upright: "Prime timing for launches, negotiations, and pitching bold ideas. Your skills are at peak radiance.",
      reversed: "Procrastination or scattered attention may delay progress. Focus your mastery on one distinct goal."
    },
    spiritualMeaning: {
      upright: "You are the conscious conduit between spiritual inspiration and physical creation. Speak your truth into being.",
      reversed: "Align your personal ego with higher cosmic integrity to prevent spiritual burnout."
    },
    advice: "Align intention, emotion, thought, and action. You already have every tool you require.",
    shadowWarning: "Mastery without ethics devolves into shallow manipulation.",
    yesNo: "Yes",
    symbolism: ["Infinity symbol (limitless potential)", "Ouroboros belt (eternity)", "Four altar tools (all elements mastered)", "Red cloak & white tunic (passion & purity)"]
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    number: 2,
    romanNumeral: "II",
    arcana: "major",
    suit: "none",
    element: "Water",
    astrology: "Moon",
    image: "/cards/02-TheHighPriestess.png",
    uprightKeywords: ["Intuition", "Sacred Knowledge", "Divine Feminine", "Subconscious", "Mystery"],
    reversedKeywords: ["Secrets", "Disconnected Intuition", "Superficiality", "Repressed Feelings", "Mistrust"],
    uprightMeaning: "Seated between the pillars of light and darkness, The High Priestess guards the veil of esoteric mysteries. She urges you to silence the external noise and listen to the whisper of your sacred inner intuition.",
    reversedMeaning: "When reversed, the voice of your intuition is being drowned out by analytical doubt or external pressure. Unspoken secrets or buried emotions may be clouding your inner compass.",
    loveMeaning: {
      upright: "Deep, unspoken telepathic chemistry. Secrets are revealed through emotional vulnerability.",
      reversed: "Hidden motives, emotional guardedness, or ignoring quiet red flags."
    },
    careerMeaning: {
      upright: "Trust your gut instinct regarding business proposals. Hidden information will soon come to light.",
      reversed: "Do not act on rumors or incomplete data. Look behind appearances before making commitments."
    },
    spiritualMeaning: {
      upright: "Dreams, synchronicities, and subconscious visions carry potent prophetic messages right now.",
      reversed: "Ground yourself in meditation to clear spiritual fog and reconnect with your inner oracle."
    },
    advice: "Look beyond the veil of physical appearances. Your intuition already knows the answer.",
    shadowWarning: "Do not let passive retreat keep you from engaging with the waking world.",
    yesNo: "Neutral / Unclear",
    symbolism: ["Pillars Boaz & Jachin (duality)", "Pomegranate veil (fertility of the unconscious)", "Crescent moon (intuition)", "Torah scroll (sacred wisdom)"]
  },
  {
    id: "empress",
    name: "The Empress",
    number: 3,
    romanNumeral: "III",
    arcana: "major",
    suit: "none",
    element: "Earth",
    astrology: "Venus",
    image: "/cards/03-TheEmpress.png",
    uprightKeywords: ["Abundance", "Nurturing", "Fertility", "Sensuality", "Nature & Creation"],
    reversedKeywords: ["Creative Block", "Codependency", "Neglect", "Smothering", "Emptiness"],
    uprightMeaning: "The Empress is the radiant archetype of maternal abundance, sensual beauty, and fertile creation. Whatever you nurture with devotion right now will blossom into luscious fruition.",
    reversedMeaning: "Reversed, The Empress indicates creative burnout, neglected self-care, or overbearing control. You may be pouring from an empty cup without allowing the universe to replenish you.",
    loveMeaning: {
      upright: "Harmonious, deeply nurturing, and physically passionate love. An auspicious omen for fertility and domestic bliss.",
      reversed: "Clinginess, codependency, or neglecting one's own identity inside the relationship."
    },
    careerMeaning: {
      upright: "Flourishing abundance. Creative projects, design, hospitality, and nurturing enterprises thrive.",
      reversed: "Stifled innovation, bureaucratic stagnation, or difficulty monetizing creative endeavors."
    },
    spiritualMeaning: {
      upright: "Connect with the living pulse of Mother Earth. Your body and senses are holy instruments of grace.",
      reversed: "Spend time in natural sanctuary to restore harmony to your exhausted nervous system."
    },
    advice: "Open your heart to receive the lavish bounty of life. Cultivate joy, beauty, and tender care.",
    shadowWarning: "Avoid smothering what you love through possessive fear.",
    yesNo: "Yes",
    symbolism: ["Twelve-star crown (zodiac cycles)", "Wheat field (harvest & abundance)", "Waterfall (flowing life force)", "Venus shield (love & harmony)"]
  },
  {
    id: "emperor",
    name: "The Emperor",
    number: 4,
    romanNumeral: "IV",
    arcana: "major",
    suit: "none",
    element: "Fire",
    astrology: "Aries",
    image: "/cards/04-TheEmperor.png",
    uprightKeywords: ["Authority", "Structure", "Leadership", "Stability", "Protection"],
    reversedKeywords: ["Tyranny", "Rigidity", "Lack of Discipline", "Power Struggle", "Domination"],
    uprightMeaning: "Enthroned upon stone adorned with rams' heads, The Emperor represents sovereign order, rational mastery, and structured security. He brings discipline, strategic clarity, and dependable foundation to chaos.",
    reversedMeaning: "Reversed, The Emperor manifests as micromanagement, stubborn tyranny, or conversely, a total absence of structural boundary that leads to disorder.",
    loveMeaning: {
      upright: "A solid, committed, and protective partnership with clear future expectations and loyalty.",
      reversed: "Controlling dynamics, emotional emotional rigidity, or stubborn resistance to compromise."
    },
    careerMeaning: {
      upright: "Executive leadership, organizational dominance, and long-term empire building succeed.",
      reversed: "Conflicts with authority figures, bureaucratic bottlenecks, or poor managerial discipline."
    },
    spiritualMeaning: {
      upright: "Ground spiritual insights into practical, daily disciplines and ethical principles.",
      reversed: "Do not let rigid dogma calcify your soul's fluid capacity for wonder."
    },
    advice: "Take command of your realm. Establish solid systems, uphold boundaries, and lead with honor.",
    shadowWarning: "Power that refuses to listen to wisdom inevitably crumbles.",
    yesNo: "Yes",
    symbolism: ["Stone throne (unshakeable foundation)", "Ram heads (Aries drive)", "Ankh scepter (life & sovereignty)", "Armor under robes (readiness to defend order)"]
  },
  {
    id: "hierophant",
    name: "The Hierophant",
    number: 5,
    romanNumeral: "V",
    arcana: "major",
    suit: "none",
    element: "Earth",
    astrology: "Taurus",
    image: "/cards/05-TheHierophant.png",
    uprightKeywords: ["Spiritual Wisdom", "Tradition", "Mentorship", "Institutions", "Belief Systems"],
    reversedKeywords: ["Rebellion", "Dogma", "Unorthodox Path", "New Beliefs", "Challenging Tradition"],
    uprightMeaning: "The Hierophant is the bridge between celestial wisdom and earthly tradition. He points toward sacred lineage, mentors, structured learning, and timeless moral wisdom.",
    reversedMeaning: "Reversed, The Hierophant urges you to question outdated orthodoxies. It is time to forge your own authentic spiritual doctrine and break free from dogmatic societal constraints.",
    loveMeaning: {
      upright: "Commitment, traditional milestones (marriage, rituals), and shared cultural or ethical values.",
      reversed: "Unconventional relationship dynamics, breaking away from family expectations."
    },
    careerMeaning: {
      upright: "Working effectively within established institutions, seeking a seasoned mentor, or furthering formal education.",
      reversed: "Feeling suffocated by corporate bureaucracy; time to innovate outside traditional channels."
    },
    spiritualMeaning: {
      upright: "Study sacred scriptures, ancient lineages, and proven contemplative practices under guidance.",
      reversed: "Your inner truth transcends dogma. Trust your direct, personal connection to the divine."
    },
    advice: "Honor the wisdom of the elders and find strength in shared sacred principles.",
    shadowWarning: "Never sacrifice your personal conscience at the altar of institutional conformity.",
    yesNo: "Likely Yes",
    symbolism: ["Triple tiara (three realms)", "Cross keys of Heaven (unlocking mysteries)", "Two disciples (lineage transmission)", "Hand blessing (grace)"]
  },
  {
    id: "lovers",
    name: "The Lovers",
    number: 6,
    romanNumeral: "VI",
    arcana: "major",
    suit: "none",
    element: "Air",
    astrology: "Gemini",
    image: "/cards/06-TheLovers.png",
    uprightKeywords: ["Soul Union", "Harmony", "Values Alignment", "Choice", "Unconditional Love"],
    reversedKeywords: ["Disharmony", "Misalignment", "Conflict of Values", "Indecision", "Inner Fracture"],
    uprightMeaning: "Blessed by the angel Raphael, The Lovers represents the sacred marriage of opposites, profound soul resonance, and pivotal moral crossroads governed by personal integrity.",
    reversedMeaning: "Reversed, The Lovers indicates disharmony, conflicting core values, or avoidance of an urgent moral decision. You may be seeking validation externally rather than achieving inner wholeness.",
    loveMeaning: {
      upright: "Passionate soulmate connection, mutual devotion, and transparent emotional unity.",
      reversed: "Communication breakdown, mismatched life visions, or temptation compromising loyalty."
    },
    careerMeaning: {
      upright: "Synergistic partnerships and decisions aligned with your deepest authentic values.",
      reversed: "Internal friction between practical necessity and ethical principles; partner conflict."
    },
    spiritualMeaning: {
      upright: "Integration of the divine masculine and feminine within your own consciousness.",
      reversed: "Reconcile your internal contradictions before expecting peace from external relationships."
    },
    advice: "Choose with your whole heart. Let love, authenticity, and clear moral vision guide your step.",
    shadowWarning: "Do not project your unmet needs onto another and call it destiny.",
    yesNo: "Yes",
    symbolism: ["Angel Raphael (divine blessing)", "Adam and Eve (primordial harmony)", "Tree of Life & Tree of Knowledge (cosmic choice)", "Sun overhead (radiant illumination)"]
  },
  {
    id: "chariot",
    name: "The Chariot",
    number: 7,
    romanNumeral: "VII",
    arcana: "major",
    suit: "none",
    element: "Water",
    astrology: "Cancer",
    image: "/cards/07-TheChariot.png",
    uprightKeywords: ["Victory", "Determination", "Willpower", "Focus", "Triumph over Adversity"],
    reversedKeywords: ["Loss of Control", "Aggression", "Obstacles", "Lack of Direction", "Burnout"],
    uprightMeaning: "Harnessing opposing black and white sphinxes through pure mental discipline, The Charioteer surges forward to inevitable victory. Success is earned through relentless focus and emotional mastery.",
    reversedMeaning: "Reversed, The Chariot warns of erratic momentum, running over others in reckless ambition, or feeling paralyzed because opposing forces are pulling you in conflicting directions.",
    loveMeaning: {
      upright: "Taking bold initiative in romance; overcoming external hurdles together with shared momentum.",
      reversed: "Power struggles, impatience, or one partner railroading the other's needs."
    },
    careerMeaning: {
      upright: "Unstoppable drive, promotion, rapid milestone conquest, and successful competitive bids.",
      reversed: "Projects derailed by lack of clear leadership or aggressive workplace friction."
    },
    spiritualMeaning: {
      upright: "Aligning your primal impulses and mental thoughts in service of your higher spiritual destiny.",
      reversed: "Stop trying to forcefully bend cosmic timing. Surrender the illusion of total control."
    },
    advice: "Steer the reins with calm, unwavering certainty. Victory belongs to the disciplined.",
    shadowWarning: "Ruthless momentum without empathy leaves destruction in its wake.",
    yesNo: "Yes",
    symbolism: ["Black and white sphinxes (duality harnessed)", "Starry canopy (celestial protection)", "Armor with lunar pauldrons (emotional shielding)", "City behind (stepping beyond the comfort zone)"]
  },
  {
    id: "strength",
    name: "Strength",
    number: 8,
    romanNumeral: "VIII",
    arcana: "major",
    suit: "none",
    element: "Fire",
    astrology: "Leo",
    image: "/cards/08-Strength.png",
    uprightKeywords: ["Courage", "Gentle Mastery", "Patience", "Compassion", "Inner Power"],
    reversedKeywords: ["Self-Doubt", "Raw Aggression", "Weakness", "Impatience", "Suppression"],
    uprightMeaning: "A maiden calmly closes the jaws of a roaring lion with gentle flower garlands. True strength is not brute force, but infinite patience, compassion, and the quiet mastery of the raw passions within.",
    reversedMeaning: "Reversed, Strength indicates that self-doubt, exhaustion, or explosive temper is dominating your spirit. You may be repressing your instinctual nature rather than lovingly befriending it.",
    loveMeaning: {
      upright: "Kindness, healing patience, and deep emotional security that softens guarded hearts.",
      reversed: "Insecurity, reactive arguments, or feeling emotionally overwhelmed by vulnerability."
    },
    careerMeaning: {
      upright: "Diplomatic grace under pressure. You navigate difficult colleagues and negotiations with poise.",
      reversed: "Imposter syndrome or caving to aggressive demands. Stand your ground quietly."
    },
    spiritualMeaning: {
      upright: "Alchemical transmutation of primal fear into unconditional cosmic love.",
      reversed: "Forgive yourself for perceived shortcomings; practice radical gentleness."
    },
    advice: "Lead with softness, patience, and fierce inner courage. Compassion conquers what force cannot.",
    shadowWarning: "Do not confuse passivity with genuine, poised strength.",
    yesNo: "Yes",
    symbolism: ["Lion (primal passions)", "Infinity symbol (eternal spiritual fortitude)", "Garland of roses (gentle love)", "White robe (purity of intent)"]
  },
  {
    id: "hermit",
    name: "The Hermit",
    number: 9,
    romanNumeral: "IX",
    arcana: "major",
    suit: "none",
    element: "Earth",
    astrology: "Virgo",
    image: "/cards/09-TheHermit.png",
    uprightKeywords: ["Soul Searching", "Introspection", "Solitude", "Inner Guidance", "Wisdom"],
    reversedKeywords: ["Isolation", "Loneliness", "Withdrawal", "Ignoring Truth", "Lost in the Dark"],
    uprightMeaning: "Standing atop snowy mountain peaks, The Hermit raises his lantern containing the six-pointed star of Truth. He invites you to retreat from the cacophony of the world to discover your inner illumination.",
    reversedMeaning: "Reversed, The Hermit cautions against toxic anti-social isolation or stubborn refusal to seek wise counsel. You may be hiding from the world out of fear of rejection.",
    loveMeaning: {
      upright: "A period of independent reflection to understand your true emotional needs before uniting.",
      reversed: "Emotional coldness, shutting your partner out, or chronic fear of intimacy."
    },
    careerMeaning: {
      upright: "Stepping back to re-evaluate career alignment; deep research, writing, and solitary mastery.",
      reversed: "Feeling disconnected from colleagues or stubbornly resisting collaborative feedback."
    },
    spiritualMeaning: {
      upright: "The sacred dark night of the soul where your inner light becomes your only true beacon.",
      reversed: "Re-emerge from cave into daylight; share your accumulated wisdom with fellow travelers."
    },
    advice: "Seek solitude, meditate deeply, and let the quiet voice of truth illuminate your next step.",
    shadowWarning: "Solitude enlightens, but permanent withdrawal breeds alienation.",
    yesNo: "Neutral / Unclear",
    symbolism: ["Lantern with six-pointed star (beacon of truth)", "Staff of the patriarch (journey & support)", "Snow-capped peaks (high spiritual consciousness)", "Grey cloak (invisibility to worldly distractions)"]
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    number: 10,
    romanNumeral: "X",
    arcana: "major",
    suit: "none",
    element: "Fire",
    astrology: "Jupiter",
    image: "/cards/10-WheelOfFortune.png",
    uprightKeywords: ["Destiny", "Turning Point", "Cycles of Life", "Karma", "Fortuitous Luck"],
    reversedKeywords: ["Bad Luck", "Resistance to Change", "Stagnant Cycles", "Breaking Patterns"],
    uprightMeaning: "The grand cosmic wheel turns constantly. A powerful turning point is arriving, bringing serendipitous breakthrough and karmic realignment. Prepare to seize rising opportunities.",
    reversedMeaning: "Reversed, the wheel feels stuck or spinning in reverse. Remind yourself that down-cycles are temporary phases designed to teach detachment and resilience.",
    loveMeaning: {
      upright: "Karmic encounters, fateful romantic developments, and positive shifts in partnership.",
      reversed: "Repeating old relationship patterns; external circumstances temporarily stressing romance."
    },
    careerMeaning: {
      upright: "Sudden fortunate breaks, unexpected promotions, or market turns favoring your endeavor.",
      reversed: "Setbacks or unexpected delays. Adapt quickly rather than fighting unstoppable currents."
    },
    spiritualMeaning: {
      upright: "Understanding that all life is cyclic ebb and flow. Find the motionless hub at the center of the wheel.",
      reversed: "Break the cycle of generational karma through conscious awareness."
    },
    advice: "Embrace change with an open heart. The wheel is turning in your favor; ride the wave.",
    shadowWarning: "Do not become complacent in good times or despairing during lows.",
    yesNo: "Yes",
    symbolism: ["Four winged creatures (fixed astrological signs)", "Sphinx atop wheel (wisdom & enigma)", "Anubis rising (resurrection)", "Hebrew letters YHVH (divine law)"]
  },
  {
    id: "justice",
    name: "Justice",
    number: 11,
    romanNumeral: "XI",
    arcana: "major",
    suit: "none",
    element: "Air",
    astrology: "Libra",
    image: "/cards/11-Justice.png",
    uprightKeywords: ["Truth", "Fairness", "Cause & Effect", "Karmic Law", "Integrity"],
    reversedKeywords: ["Injustice", "Dishonesty", "Bias", "Evading Accountability", "Unfair Blame"],
    uprightMeaning: "Holding the double-edged sword of truth and the balanced scales of cause and effect, Justice delivers impartial equity. What was sewn in secret will now be harvested in the clear light of day.",
    reversedMeaning: "Reversed, Justice warns of bias, self-deception, or evasion of accountability. You may feel wronged by unfair circumstances, but you must maintain your moral integrity.",
    loveMeaning: {
      upright: "Honest communication, equal emotional investment, and fair resolution of disputes.",
      reversed: "Blame-shifting, deceit, or one-sided sacrifice causing bitter resentment."
    },
    careerMeaning: {
      upright: "Legal victories, fair contractual terms, and ethical practices bringing enduring success.",
      reversed: "Shady dealings, contract disputes, or unfair treatment by higher-ups."
    },
    spiritualMeaning: {
      upright: "Karmic balancing. The universe operates on exact moral equilibrium.",
      reversed: "Acknowledge your own contribution to past mistakes to clear karmic debt."
    },
    advice: "Act with absolute honesty and fairness. The truth will be your ultimate vindication.",
    shadowWarning: "Do not mistake cold self-righteousness for divine justice.",
    yesNo: "Likely Yes",
    symbolism: ["Scales (impartial balance)", "Double-edged sword (clarity & consequences)", "Square clasp on robe (earthly law)", "Purple curtain (spiritual discernment)"]
  },
  {
    id: "hanged-man",
    name: "The Hanged Man",
    number: 12,
    romanNumeral: "XII",
    arcana: "major",
    suit: "none",
    element: "Water",
    astrology: "Neptune",
    image: "/cards/12-TheHangedMan.png",
    uprightKeywords: ["Surrender", "New Perspective", "Letting Go", "Pause", "Spiritual Sacrifice"],
    reversedKeywords: ["Stalling", "Resistance", "Martyrdom", "Needless Sacrifice", "Stagnation"],
    uprightMeaning: "Suspended upside down from the living wood with a golden halo radiating around his head, The Hanged Man voluntarily pauses the frantic chase. In stillness, a profound revelation is born.",
    reversedMeaning: "Reversed, The Hanged Man suggests stubborn resistance to necessary change, playing the martyr, or stalling endlessly to avoid making an uncomfortable decision.",
    loveMeaning: {
      upright: "Releasing ego-driven demands; seeing your partner's viewpoint from a compassionate new angle.",
      reversed: "Unhealthy self-sacrifice in a one-way relationship; dragging out a dead connection."
    },
    careerMeaning: {
      upright: "A strategic pause. Instead of forcing progress, step back to see the master solution.",
      reversed: "Feeling trapped in limbo due to indecision or fear of stepping out of the box."
    },
    spiritualMeaning: {
      upright: "Ego surrender leading directly to mystical illumination and inner peace.",
      reversed: "Let go of the need to control the timeline of the universe."
    },
    advice: "Surrender control. Pause all forced effort and look at this dilemma from an inverted lens.",
    shadowWarning: "Do not confuse helpless passivity with conscious surrender.",
    yesNo: "Neutral / Unclear",
    symbolism: ["Living T-cross (growth in pause)", "Golden halo (divine illumination)", "Inverted posture (reversal of worldly values)", "Relaxed expression (peaceful surrender)"]
  },
  {
    id: "death",
    name: "Death",
    number: 13,
    romanNumeral: "XIII",
    arcana: "major",
    suit: "none",
    element: "Water",
    astrology: "Scorpio",
    image: "/cards/13-Death.png",
    uprightKeywords: ["Transformation", "Endings", "Rebirth", "Metamorphosis", "Clearing the Old"],
    reversedKeywords: ["Fear of Change", "Holding On", "Decay", "Stagnation", "Resisting Inevitable"],
    uprightMeaning: "Riding upon a white steed under the banner of the mystic rose, Death is the sacred harbinger of profound transformation. An old cycle must die so that vibrant new life can emerge at dawn.",
    reversedMeaning: "Reversed, Death warns against desperately clinging to dying relationships, obsolete identities, or dead-end situations. Dragging out an ending only prolongs the agony.",
    loveMeaning: {
      upright: "Massive shift in romantic dynamics—either shedding toxic patterns or ending a chapter to start anew.",
      reversed: "Clinging to a relationship that has run its natural course out of fear of being alone."
    },
    careerMeaning: {
      upright: "The closure of a job or project making way for a much more fulfilling vocational calling.",
      reversed: "Staying in a soul-crushing job because the unfamiliar feels terrifying."
    },
    spiritualMeaning: {
      upright: "Ego death and spiritual rebirth. The caterpillar dissolves completely to become the butterfly.",
      reversed: "Allow grief its sacred space so that the dawn of rebirth can reach you."
    },
    advice: "Let go of what is no longer alive. Trust that every cosmic ending prepares fertile ground for rebirth.",
    shadowWarning: "Resisting natural closure turns clean grief into stagnant bitterness.",
    yesNo: "Transformative",
    symbolism: ["White horse (purity of transformation)", "Black banner with mystic rose (immortality)", "Rising sun between towers (dawn of new life)", "Skeleton armor (indestructible core of existence)"]
  },
  {
    id: "temperance",
    name: "Temperance",
    number: 14,
    romanNumeral: "XIV",
    arcana: "major",
    suit: "none",
    element: "Fire",
    astrology: "Sagittarius",
    image: "/cards/14-Temperance.png",
    uprightKeywords: ["Balance", "Moderation", "Patience", "Alchemy", "Inner Peace"],
    reversedKeywords: ["Imbalance", "Excess", "Impatience", "Extremes", "Internal Discord"],
    uprightMeaning: "An angel pours liquid between two cups—one of water, one of fire—without spilling a drop. Temperance represents divine alchemy, emotional moderation, and blending opposites into sublime harmony.",
    reversedMeaning: "Reversed, Temperance points to emotional extremes, addiction, impatience, or discord. You may be burning the candle at both ends or rushing an alchemical process that requires gentle simmer.",
    loveMeaning: {
      upright: "Deep, tranquil partnership rooted in mutual compromise, emotional healing, and serene flow.",
      reversed: "Volatile mood swings, lack of compromise, or friction caused by one-sided excess."
    },
    careerMeaning: {
      upright: "Harmonious team collaboration, balanced work-life boundaries, and steady long-term progress.",
      reversed: "Rushing negotiations, burnout from overwork, or chaotic team misalignment."
    },
    spiritualMeaning: {
      upright: "The sacred art of inner alchemy. Transmuting base emotional turmoil into spiritual gold.",
      reversed: "Restore balance through rest, detox, and gentle mindful grounding."
    },
    advice: "Practice moderation and patience. Blend conflicting viewpoints with gentle alchemy.",
    shadowWarning: "Do not compromise your essential truth in the name of false peace.",
    yesNo: "Yes",
    symbolism: ["One foot on land, one in water (unconscious & conscious integration)", "Two cups (continuous alchemical flow)", "Sun crown / triangle in square (spirit in matter)", "Path to the radiant mountain (ascension)"]
  },
  {
    id: "devil",
    name: "The Devil",
    number: 15,
    romanNumeral: "XV",
    arcana: "major",
    suit: "none",
    element: "Earth",
    astrology: "Capricorn",
    image: "/cards/15-TheDevil.png",
    uprightKeywords: ["Shadow Self", "Attachment", "Illusion of Trap", "Temptation", "Material Bondage"],
    reversedKeywords: ["Freedom", "Breaking Chains", "Reclaiming Power", "Overcoming Addiction", "Awakening"],
    uprightMeaning: "The Devil presides over two figures whose neck chains are actually loose enough to slip off at any moment. It highlights unhealthy attachments, addictions, or limiting beliefs that keep you feeling trapped.",
    reversedMeaning: "Reversed, The Devil is an extraordinary omen of liberation! You are recognizing toxic patterns, severing codependent ties, and stepping out of the shadow into sovereign freedom.",
    loveMeaning: {
      upright: "Obsessive infatuation, sexual magnetism without emotional safety, or codependency.",
      reversed: "Breaking free from toxic romance, healing trauma bonds, and restoring personal sovereignty."
    },
    careerMeaning: {
      upright: "Golden handcuffs, toxic workplace politics, or compromising integrity for material gain.",
      reversed: "Quitting an exploitative work environment or stepping into financial self-determination."
    },
    spiritualMeaning: {
      upright: "Shadow integration. Confronting the repressed fears and desires that secretly drive your behavior.",
      reversed: "Shedding generational shame and stepping into radiant spiritual autonomy."
    },
    advice: "Look closely at the chains around your neck: they are loose. You have the power to walk away.",
    shadowWarning: "Denying your shadow gives it power; acknowledge it without surrendering to it.",
    yesNo: "No",
    symbolism: ["Inverted pentagram (materiality over spirit)", "Loose neck chains (self-imposed bondage)", "Half-beast form (primal instinctual drive)", "Black pedestal (darkness of unconsciousness)"]
  },
  {
    id: "tower",
    name: "The Tower",
    number: 16,
    romanNumeral: "XVI",
    arcana: "major",
    suit: "none",
    element: "Fire",
    astrology: "Mars",
    image: "/cards/16-TheTower.png",
    uprightKeywords: ["Sudden Awakening", "Shaking Foundations", "Revelation", "Breakthrough", "Liberation"],
    reversedKeywords: ["Disaster Avoided", "Fear of Breakdown", "Delayed Inevitable", "Internal Crisis"],
    uprightMeaning: "Divine lightning strikes the crown of an artificial tower built on false pride, shattering illusions in an instant. Though shocking, The Tower is a sacred mercy: it destroys only what was built on lies to set you free.",
    reversedMeaning: "Reversed, The Tower signifies delaying an inevitable collapse out of fear, or undergoing a profound internal spiritual upheaval that does not manifest as outer drama.",
    loveMeaning: {
      upright: "A sudden revelation or truth-bomb that permanently alters the relationship dynamic.",
      reversed: "Ignoring the cracks in the foundation, hoping problems will disappear on their own."
    },
    careerMeaning: {
      upright: "Unexpected corporate shakeup, project cancellation, or sudden departure leading to greater freedom.",
      reversed: "Rebuilding carefully after a recent professional shock; crisis management."
    },
    spiritualMeaning: {
      upright: "The shattering of dogmatic ego illusions. You are liberated from mental prison.",
      reversed: "Accept the breakdown of outdated identities so that genuine spiritual reconstruction can occur."
    },
    advice: "Do not grieve the fall of a fortress built on illusion. Breathe in the open sky and build on bedrock.",
    shadowWarning: "Do not cling to burning timbers; step forward into the truth.",
    yesNo: "No",
    symbolism: ["Lightning bolt (sudden divine truth)", "Crown blasted off (ego stripped of false royalty)", "Twenty-two flames (Yod drops of cosmic grace)", "Falling figures (equality before universal truth)"]
  },
  {
    id: "star",
    name: "The Star",
    number: 17,
    romanNumeral: "XVII",
    arcana: "major",
    suit: "none",
    element: "Air",
    astrology: "Aquarius",
    image: "/cards/17-TheStar.png",
    uprightKeywords: ["Hope", "Healing", "Inspiration", "Divine Serenity", "Spiritual Renewal"],
    reversedKeywords: ["Hopelessness", "Despair", "Disconnection", "Lack of Faith", "Discouragement"],
    uprightMeaning: "Under a brilliant eight-pointed celestial star, a maiden pours nourishing water onto land and pool. After the storm of The Tower, The Star brings deep peace, spiritual renewal, and boundless hope for the future.",
    reversedMeaning: "Reversed, The Star indicates temporary loss of faith, feeling cynical, or struggling to see the light at the end of the tunnel. Look up: the stars have not stopped shining.",
    loveMeaning: {
      upright: "Profound soul healing, unconditional trust, and serene optimism for romantic harmony.",
      reversed: "Feeling jaded by past heartbreak; opening your heart feels scary but necessary."
    },
    careerMeaning: {
      upright: "Inspired vision, creative flow, recognition for humanitarian or visionary work.",
      reversed: "Creative exhaustion, imposter doubts, or feeling uninspired by current routines."
    },
    spiritualMeaning: {
      upright: "Direct communion with the cosmic heart. You are a channel of divine starlight and healing grace.",
      reversed: "Rekindle your spiritual practice through gentle gratitude and quiet meditation."
    },
    advice: "Have faith. You are divinely protected and guided toward your highest, most beautiful destiny.",
    shadowWarning: "Do not drift into wishful daydreaming without grounding your vision in reality.",
    yesNo: "Yes",
    symbolism: ["Eight-pointed central star (cosmic guide)", "Seven smaller stars (chakras / sacred planets)", "Ibis bird in tree (wisdom of Thoth)", "Water poured on land and pool (nourishing spirit and earth)"]
  },
  {
    id: "moon",
    name: "The Moon",
    number: 18,
    romanNumeral: "XVIII",
    arcana: "major",
    suit: "none",
    element: "Water",
    astrology: "Pisces",
    image: "/cards/18-TheMoon.png",
    uprightKeywords: ["Illusion", "Intuition", "Subconscious Fears", "Dreams", "Unseen Depths"],
    reversedKeywords: ["Clarity Emerging", "Conquering Fear", "Truth Revealed", "Dispelling Deception"],
    uprightMeaning: "The Moon shines over a path winding between two towers into dark waters, where a crayfish emerges from the primal depths. Not everything is as it appears. Beware of deceptive illusions and trust your psychic currents.",
    reversedMeaning: "Reversed, The Moon brings the dissipation of fog! Misunderstandings are cleared, deceit is exposed, and emotional fears lose their hypnotic grip on your consciousness.",
    loveMeaning: {
      upright: "Complex emotional undercurrents, projection of past insecurities, or hidden secrets.",
      reversed: "Clear revelations, honest heart-to-heart talks, and overcoming irrational jealousy."
    },
    careerMeaning: {
      upright: "Unclear proposals, workplace politics, or incomplete contracts. Do not rush into deals.",
      reversed: "Unmasking dishonest competitors or seeing the true financial reality of a situation."
    },
    spiritualMeaning: {
      upright: "Navigating the labyrinth of dreams and astral depths. Trust your emotional intuition over surface logic.",
      reversed: "Releasing subconscious dread and finding grounded psychic equilibrium."
    },
    advice: "Do not make drastic decisions in the fog. Pay attention to your dreams and wait for the sun to rise.",
    shadowWarning: "Do not allow paranoid projections to ruin genuine connections.",
    yesNo: "Likely No",
    symbolism: ["Dog and wolf (tame and wild aspects of mind)", "Crayfish (primitive subconscious memory)", "Two towers (threshold of unknown)", "Drops of yod dew (divine mercy descending into darkness)"]
  },
  {
    id: "sun",
    name: "The Sun",
    number: 19,
    romanNumeral: "XIX",
    arcana: "major",
    suit: "none",
    element: "Fire",
    astrology: "Sun",
    image: "/cards/19-TheSun.png",
    uprightKeywords: ["Joy", "Success", "Vitality", "Radiance", "Celebration & Truth"],
    reversedKeywords: ["Temporary Cloud", "Diminished Joy", "Over-Optimism", "Delayed Celebration"],
    uprightMeaning: "A joyful naked child crowned with flowers rides a white pony under the golden rays of a smiling sun. The Sun is the ultimate card of triumph, radiant vitality, warmth, abundance, and pure happiness.",
    reversedMeaning: "Reversed, The Sun still shines—it is merely obscured by a passing cloud. You may be experiencing slight fatigue or temporary self-doubt, but victory remains assured.",
    loveMeaning: {
      upright: "Blissful romance, playful laughter, mutual warmth, and vibrant celebratory love.",
      reversed: "Minor misunderstandings or needing to inject playfulness back into the connection."
    },
    careerMeaning: {
      upright: "Tremendous success, public accolades, profitable outcomes, and charismatic leadership.",
      reversed: "Slow-building recognition; remain enthusiastic as rewards are arriving soon."
    },
    spiritualMeaning: {
      upright: "Total alignment with the divine light. Radiant joy, gratitude, and spontaneous bliss.",
      reversed: "Reconnect with your inner child's capacity for unconditional joy and play."
    },
    advice: "Radiate your light unapologetically. Celebrate your blessings and share your warmth with all.",
    shadowWarning: "Do not let blinding ego blind you to subtle details.",
    yesNo: "Yes",
    symbolism: ["Smiling sun (source of all conscious life)", "Naked child (purity & vulnerability)", "White horse (vitality & innocent strength)", "Four sunflowers (four elements blooming)"]
  },
  {
    id: "judgement",
    name: "Judgement",
    number: 20,
    romanNumeral: "XX",
    arcana: "major",
    suit: "none",
    element: "Fire",
    astrology: "Pluto",
    image: "/cards/20-Judgement.png",
    uprightKeywords: ["Spiritual Calling", "Rebirth", "Absolution", "Awakening", "Definitive Decision"],
    reversedKeywords: ["Self-Doubt", "Harsh Self-Criticism", "Ignoring the Call", "Regret", "Stagnation"],
    uprightMeaning: "The archangel Gabriel sounds the golden trumpet of resurrection, and figures rise from their stone tombs with arms outstretched. You are called to a higher purpose: forgive the past, shed guilt, and rise renewed.",
    reversedMeaning: "Reversed, Judgement warns that chronic self-doubt and harsh self-criticism are causing you to ignore a clear calling from destiny. Stop dwelling in regret.",
    loveMeaning: {
      upright: "Forgiveness, major relationship milestones, and clarity on whether to unite or cleanly part.",
      reversed: "Holding old grudges, refusing to forgive past hurts, or ignoring relationship warning bells."
    },
    careerMeaning: {
      upright: "Answering your true vocational calling; decisive evaluations and well-deserved promotions.",
      reversed: "Hesitating to step up into leadership due to fear of failure or imposter thoughts."
    },
    spiritualMeaning: {
      upright: "Cosmic resurrection. You are hearing the trumpet of your soul's highest evolutionary chapter.",
      reversed: "Release guilt and shame; you are completely absolved when you choose to forgive yourself."
    },
    advice: "Answer the clarion call of your higher self. Forgive everything behind you and rise.",
    shadowWarning: "Do not judge yourself or others with unforgiving cruelty.",
    yesNo: "Yes",
    symbolism: ["Archangel Gabriel with trumpet (divine awakening)", "Figures rising from tombs (resurrection of consciousness)", "Red cross banner (redemption & healing)", "Mountains in background (unshakeable cosmic truths)"]
  },
  {
    id: "world",
    name: "The World",
    number: 21,
    romanNumeral: "XXI",
    arcana: "major",
    suit: "none",
    element: "Earth",
    astrology: "Saturn",
    image: "/cards/21-TheWorld.png",
    uprightKeywords: ["Completion", "Wholeness", "Integration", "Triumph", "Cosmic Harmony"],
    reversedKeywords: ["Incompletion", "Lack of Closure", "Shortcuts", "Delayed Fulfillment"],
    uprightMeaning: "Dancing within a green laurel wreath holding two wands of mastery, the cosmic dancer celebrates total completion. You have integrated every lesson of the fool's journey and stand in radiant wholeness.",
    reversedMeaning: "Reversed, The World indicates that you are mere steps away from final completion, but you are procrastinating or seeking shortcuts. Finish what you started to claim your crown.",
    loveMeaning: {
      upright: "Complete emotional fulfillment, soulmate union, or shared global adventures.",
      reversed: "Needing closure from an old chapter before this partnership can reach its full grandeur."
    },
    careerMeaning: {
      upright: "Culmination of a major life achievement, international success, and master-level recognition.",
      reversed: "A project is 95% done; push through the final details to lock in your victory."
    },
    spiritualMeaning: {
      upright: "Enlightenment, cosmic consciousness, and profound oneness with all creation.",
      reversed: "Integrate your spiritual insights into daily life rather than seeking endless new teachings."
    },
    advice: "Rejoice in your mastery. You have completed the sacred circle and stand whole.",
    shadowWarning: "Do not stop running just before crossing the victory finish line.",
    yesNo: "Yes",
    symbolism: ["Laurel wreath of victory (infinite achievement)", "Red infinity ribbons (eternal continuity)", "Four living creatures (mastery over all four elements)", "Two batons (command over conscious and unconscious)"]
  }
];

// Helper to generate minor arcana data cleanly
const suitsConfig = [
  {
    suit: 'cups',
    element: 'Water',
    theme: 'Emotions, Love, Intuition & Relationships',
    names: {
      1: 'Ace of Cups', 2: 'Two of Cups', 3: 'Three of Cups', 4: 'Four of Cups',
      5: 'Five of Cups', 6: 'Six of Cups', 7: 'Seven of Cups', 8: 'Eight of Cups',
      9: 'Nine of Cups', 10: 'Ten of Cups', 11: 'Page of Cups', 12: 'Knight of Cups',
      13: 'Queen of Cups', 14: 'King of Cups'
    },
    files: {
      1: 'Cups01.png', 2: 'Cups02.png', 3: 'Cups03.png', 4: 'Cups04.png',
      5: 'Cups05.png', 6: 'Cups06.png', 7: 'Cups07.png', 8: 'Cups08.png',
      9: 'Cups09.png', 10: 'Cups10.png', 11: 'Cups11.png', 12: 'Cups12.png',
      13: 'Cups13.png', 14: 'Cups14.png'
    },
    cards: [
      {
        num: 1,
        upKeywords: ["Overflowing Love", "New Feelings", "Spiritual Awakening", "Compassion"],
        revKeywords: ["Emotional Drain", "Blocked Love", "Repressed Feelings", "Self-Doubt"],
        upMeaning: "The holy grail overflows with five streams of spiritual grace into a lotus pool. A fountain of deep love, emotional renewal, and intuitive awakening opens in your life.",
        revMeaning: "Reversed, the cup is tipped over. You may be experiencing emotional exhaustion or holding back vulnerability due to old wounds. Practice self-compassion.",
        yesNo: "Yes"
      },
      {
        num: 2,
        upKeywords: ["Unified Love", "Mutual Attraction", "Soul Partnership", "Harmony"],
        revKeywords: ["Misunderstanding", "Imbalance", "Broken Trust", "Separation"],
        upMeaning: "Two souls pledge their cups beneath the winged lion of passion and the Caduceus of Hermes. A blessed, balanced romantic or business union founded on mutual respect.",
        revMeaning: "Reversed, tension or mismatched expectations cloud the connection. Restore honest dialogue and address underlying power imbalances.",
        yesNo: "Yes"
      },
      {
        num: 3,
        upKeywords: ["Celebration", "Friendship", "Sisterhood", "Community Joy"],
        revKeywords: ["Overindulgence", "Gossip", "Third-Party Friction", "Isolation"],
        upMeaning: "Three maidens raise their cups in a circle of joy and harvest. Rejoice with your soul tribe, celebrate achievements, and bask in loving camaraderie.",
        revMeaning: "Reversed, beware of social drama, excluding others, or excessive escapism. Reconnect with authentic, supportive friendships.",
        yesNo: "Yes"
      },
      {
        num: 4,
        upKeywords: ["Contemplation", "Apathy", "Missed Opportunity", "Re-evaluation"],
        revKeywords: ["New Motivation", "Acceptance", "Seizing Opportunity", "Awakening"],
        upMeaning: "Seated beneath a tree with arms crossed, a figure ignores the golden cup offered from the cloud. Guard against boredom and apathy blinding you to unexpected blessings.",
        revMeaning: "Reversed, you are breaking out of your emotional rut, opening your eyes, and ready to embrace the gifts life is offering.",
        yesNo: "Likely No"
      },
      {
        num: 5,
        upKeywords: ["Grief", "Loss", "Focus on the Negative", "Regret"],
        revKeywords: ["Healing", "Acceptance", "Moving On", "Seeing What Remains"],
        upMeaning: "A cloaked figure mourns over three spilled cups, failing to notice two full cups standing upright behind them. Honor your grief, but remember that love and hope endure.",
        revMeaning: "Reversed, the healing journey begins. You turn around to discover the full cups behind you, ready to rebuild with greater wisdom.",
        yesNo: "No"
      },
      {
        num: 6,
        upKeywords: ["Nostalgia", "Childhood Innocence", "Reunion", "Sweet Memories"],
        revKeywords: ["Stuck in the Past", "Clinging to Childhood", "Moving Forward"],
        upMeaning: "A boy offers a flower-filled cup to a young girl in an enchanted garden. Fond memories, childhood innocence, and sweet nostalgic reunions bring comfort.",
        revMeaning: "Reversed, do not romanticize the past at the expense of your present reality. Cherish memories, but live firmly in today.",
        yesNo: "Yes"
      },
      {
        num: 7,
        upKeywords: ["Illusion", "Choices", "Daydreaming", "Wishful Thinking"],
        revKeywords: ["Clarity", "Concrete Decision", "Disillusionment", "Focus"],
        upMeaning: "Seven floating cups contain jewels, castles, dragons, and laurels. You face tempting possibilities, but many are mirages. Ground your imagination in realistic action.",
        revMeaning: "Reversed, the clouds clear. You distinguish fantasy from reality and make a firm, pragmatic choice.",
        yesNo: "Neutral / Unclear"
      },
      {
        num: 8,
        upKeywords: ["Walking Away", "Disillusionment", "Seeking Higher Meaning", "Sacred Departure"],
        revKeywords: ["Fear of Leaving", "Aimless Wandering", "Accepting Status Quo"],
        upMeaning: "Under the eclipsed moon, a pilgrim turns their back on eight neatly stacked cups to climb the mountain of higher truth. It is time to leave behind what no longer nourishes your spirit.",
        revMeaning: "Reversed, hesitating to walk away from a toxic situation or feeling lost without direction. Find the courage to step forward.",
        yesNo: "No"
      },
      {
        num: 9,
        upKeywords: ["Contentment", "Wish Fulfillment", "Emotional Satisfaction", "Gratitude"],
        revKeywords: ["Smugness", "Superficial Joy", "Unfulfilled Desire", "Materialism"],
        upMeaning: "Known as the Wish Card! A smiling figure sits before nine gleaming cups with arms folded in deep contentment. Your heart's desire is coming into joyful manifestation.",
        revMeaning: "Reversed, getting what you wished for only to realize it lacks deeper soul fulfillment. Seek inner satisfaction over external bragging.",
        yesNo: "Yes"
      },
      {
        num: 10,
        upKeywords: ["Domestic Bliss", "Harmonious Family", "Divine Love", "True Wholeness"],
        revKeywords: ["Family Friction", "Broken Home", "Shattered Peace", "Unrealistic Expectations"],
        upMeaning: "A loving couple and dancing children celebrate under a radiant rainbow of ten cups. The pinnacle of emotional fulfillment, lasting family harmony, and soul sanctuary.",
        revMeaning: "Reversed, family tension, domestic misalignment, or feeling disconnected from loved ones. Heal bonds with gentle compassion.",
        yesNo: "Yes"
      },
      {
        num: 11,
        upKeywords: ["Creative Intuition", "Heartfelt Message", "Curiosity", "Emotional Youth"],
        revKeywords: ["Emotional Immaturity", "Insecurity", "Gossip", "Blocked Intuition"],
        upMeaning: "A playful youth holds a cup from which a fish pops out to say hello. Expect delightful messages, intuitive flashes, and spontaneous creative sparks.",
        revMeaning: "Reversed, emotional tantrums, moodiness, or disappointing news. Nurture your sensitive heart without succumbing to drama.",
        yesNo: "Yes"
      },
      {
        num: 12,
        upKeywords: ["Romance", "Chivalry", "Following Your Heart", "Poetic Quest"],
        revKeywords: ["Unrealistic Fantasy", "Fickle Emotions", "Heartbreak", "Love Bombing"],
        upMeaning: "A graceful knight rides a gentle steed, carrying the cup of devotion. An invitation to romance, poetic inspiration, and following your heart's truest calling.",
        revMeaning: "Reversed, watch out for smooth talkers who promise castles in the air but vanish when real commitment is required.",
        yesNo: "Yes"
      },
      {
        num: 13,
        upKeywords: ["Compassion", "Intuitive Depth", "Emotional Healer", "Nurturing Heart"],
        revKeywords: ["Emotional Overwhelm", "Martyrdom", "Insecurity", "Co-dependence"],
        upMeaning: "Enthroned at the sea's edge holding an ornate chalice, the Queen of Cups embodies boundless empathy, emotional intelligence, and psychic receptivity.",
        revMeaning: "Reversed, drowning in other people's emotional turbulence. Set firm psychic boundaries to protect your gentle spirit.",
        yesNo: "Yes"
      },
      {
        num: 14,
        upKeywords: ["Emotional Balance", "Compassionate Leader", "Wisdom", "Calm in Storms"],
        revKeywords: ["Emotional Manipulation", "Moodiness", "Coldness", "Suppression"],
        upMeaning: "Floating upon turbulent waves while remaining calm and composed, the King of Cups masters emotional storms through wisdom, diplomacy, and steady compassion.",
        revMeaning: "Reversed, emotional tyranny, passive-aggressive manipulation, or suppressing feelings until they erupt destructively.",
        yesNo: "Yes"
      }
    ]
  },
  {
    suit: 'pentacles',
    element: 'Earth',
    theme: 'Wealth, Material Manifestation, Health & Career',
    names: {
      1: 'Ace of Pentacles', 2: 'Two of Pentacles', 3: 'Three of Pentacles', 4: 'Four of Pentacles',
      5: 'Five of Pentacles', 6: 'Six of Pentacles', 7: 'Seven of Pentacles', 8: 'Eight of Pentacles',
      9: 'Nine of Pentacles', 10: 'Ten of Pentacles', 11: 'Page of Pentacles', 12: 'Knight of Pentacles',
      13: 'Queen of Pentacles', 14: 'King of Pentacles'
    },
    files: {
      1: 'Pentacles01.png', 2: 'Pentacles02.png', 3: 'Pentacles03.png', 4: 'Pentacles04.png',
      5: 'Pentacles05.png', 6: 'Pentacles06.png', 7: 'Pentacles07.png', 8: 'Pentacles08.png',
      9: 'Pentacles09.png', 10: 'Pentacles10.png', 11: 'Pentacles11.png', 12: 'Pentacles12.png',
      13: 'Pentacles13.png', 14: 'Pentacles14.png'
    },
    cards: [
      {
        num: 1,
        upKeywords: ["Material Abundance", "New Financial Venture", "Prosperity", "Grounded Opportunity"],
        revKeywords: ["Missed Investment", "Greed", "Financial Insecurity", "Poor Foundation"],
        upMeaning: "A divine hand extends a golden coin above a lush garden archway. A golden seed of tangible wealth, career breakthrough, and physical vitality is planted in your life.",
        revMeaning: "Reversed, poor planning or rash spending could sabotage an opportunity. Review your financial foundations before committing.",
        yesNo: "Yes"
      },
      {
        num: 2,
        upKeywords: ["Balance", "Multitasking", "Adaptability", "Financial Agility"],
        revKeywords: ["Overwhelmed", "Financial Chaos", "Dropping the Ball", "Disorganization"],
        upMeaning: "A juggler balances two golden coins within an infinity loop as waves roll behind him. Adaptability, staying agile with resources, and managing multiple priorities smoothly.",
        revMeaning: "Reversed, stretching yourself too thin. Juggling too many balls at once will lead to a crash. Simplify your workload.",
        yesNo: "Likely Yes"
      },
      {
        num: 3,
        upKeywords: ["Master Craftsmanship", "Team Collaboration", "Skill Recognition", "Quality"],
        revKeywords: ["Poor Teamwork", "Lack of Skill", "Misalignment", "Sloppy Work"],
        upMeaning: "A stonemason works diligently in a sanctuary, consulting with architects and elders. Superb collaboration, refined craftsmanship, and professional acclaim.",
        revMeaning: "Reversed, friction among team members, lack of cohesion, or cutting corners in production. Realign standards.",
        yesNo: "Yes"
      },
      {
        num: 4,
        upKeywords: ["Security", "Frugality", "Conservative Wealth", "Holding Tight"],
        revKeywords: ["Greed", "Scarcity Mindset", "Possessiveness", "Financial Block"],
        upMeaning: "A figure grips four coins tightly, sitting upon them and holding one atop his crown. Financial security is solid, but fear of loss may be closing your heart to generous flow.",
        revMeaning: "Reversed, releasing a tight grip on money or conversely, reckless financial bleeding. Shift from fear to conscious abundance.",
        yesNo: "Likely Yes"
      },
      {
        num: 5,
        upKeywords: ["Hardship", "Financial Strain", "Feeling Left in the Cold", "Spiritual Poverty"],
        revKeywords: ["Recovery", "Charity Found", "End of Financial Winter", "Forgiveness"],
        upMeaning: "Two impoverished travelers walk through snow past a glowing stained-glass church window. Hardship and feeling excluded. Look up: spiritual and material sanctuary is right beside you.",
        revMeaning: "Reversed, the harsh winter thaws. Help arrives, debts clear, and you are welcomed into warm abundance once again.",
        yesNo: "No"
      },
      {
        num: 6,
        upKeywords: ["Generosity", "Charity", "Fair Sharing", "Wealth Circulation"],
        revKeywords: ["One-Sided Debt", "Selfishness", "Strings Attached", "Power Imbalance"],
        upMeaning: "A wealthy merchant balances scales while sharing coins with humble seekers. Fair financial flow, generous philanthropy, and karmic reward for sharing your blessings.",
        revMeaning: "Reversed, beware of gifts with manipulative strings attached or feeling indebted to someone who exploits your gratitude.",
        yesNo: "Yes"
      },
      {
        num: 7,
        upKeywords: ["Patience", "Long-term Investment", "Harvest Assessment", "Steady Growth"],
        revKeywords: ["Impatience", "Wasted Effort", "Poor Yield", "Second-Guessing"],
        upMeaning: "A farmer leans upon his spade, thoughtfully gazing at the lush grapevines laden with golden coins. Your hard work is growing steadily; exercise patient faith for the harvest.",
        revMeaning: "Reversed, feeling disappointed with slow progress or realizing effort was invested in barren soil. Pivot your strategy.",
        yesNo: "Likely Yes"
      },
      {
        num: 8,
        upKeywords: ["Mastery", "Diligence", "Skill Building", "Apprenticeship", "Detail Focus"],
        revKeywords: ["Perfectionism", "Monotony", "Lack of Ambition", "Careless Work"],
        upMeaning: "A craftsman meticulously chisels one coin after another on his workbench. Total dedication to your craft, honing expertise, and turning disciplined practice into gold.",
        revMeaning: "Reversed, burnout from repetitive grinding or cutting corners. Remember the inspiring passion that first started your craft.",
        yesNo: "Yes"
      },
      {
        num: 9,
        upKeywords: ["Self-Sufficiency", "Luxury", "Independence", "Refined Solitude"],
        revKeywords: ["Overspending", "Superficial Status", "Financial Dependence"],
        upMeaning: "An elegant woman in a gilded robe strolls through her lush vineyard with a hooded falcon on her wrist. The summit of independent wealth, refined taste, and hard-earned serenity.",
        revMeaning: "Reversed, living beyond your means to impress others, or feeling isolated despite material comfort.",
        yesNo: "Yes"
      },
      {
        num: 10,
        upKeywords: ["Generational Wealth", "Legacy", "Family Security", "Long-term Empire"],
        revKeywords: ["Family Dispute Over Money", "Loss of Heritage", "Short-sightedness"],
        upMeaning: "Three generations gather in a grand archway surrounded by loyal hounds and ten gleaming pentacles. Enduring family legacy, generational abundance, and permanent stability.",
        revMeaning: "Reversed, disputes over wills, estates, or family businesses. Guard against sacrificing familial love for cold wealth.",
        yesNo: "Yes"
      },
      {
        num: 11,
        upKeywords: ["Ambitious Student", "Financial Opportunity", "Grounded Goal", "Studiousness"],
        revKeywords: ["Procrastination", "Lack of Follow-Through", "Unrealistic Ideas"],
        upMeaning: "A diligent youth gazes reverently at the golden coin floating above his hands in a green meadow. A grounded learner ready to build practical wealth and manifest tangible dreams.",
        revMeaning: "Reversed, big dreams with zero daily follow-through. Get organized and do the unglamorous groundwork.",
        yesNo: "Yes"
      },
      {
        num: 12,
        upKeywords: ["Efficiency", "Routine", "Unshakeable Reliability", "Hard Work"],
        revKeywords: ["Stubbornness", "Workaholic", "Obsessive Rigidity", "Stagnation"],
        upMeaning: "A knight on a sturdy draft horse surveys the plowed fields with calm resolve. The most dependable worker in the tarot—slow, methodical, unstoppable progress.",
        revMeaning: "Reversed, becoming so stubborn and rigid that you miss nimble opportunities. Inject some spontaneity into your routine.",
        yesNo: "Yes"
      },
      {
        num: 13,
        upKeywords: ["Practical Nurturer", "Abundance", "Down-to-Earth", "Financial Security"],
        revKeywords: ["Materialistic", "Neglecting Home", "Smothering Insecurity"],
        upMeaning: "Enthroned amidst roses, fruit trees, and running rabbits, the Queen of Pentacles holds her golden coin with tender grace. Earth mother energy—practical, prosperous, and welcoming.",
        revMeaning: "Reversed, neglecting physical health or becoming consumed by status and surface appearances.",
        yesNo: "Yes"
      },
      {
        num: 14,
        upKeywords: ["Financial Empire", "Master Businessman", "Security", "Abundant Stability"],
        revKeywords: ["Greed", "Financial Corruption", "Ruthless Materialism"],
        upMeaning: "Enthroned in a castle flanked by carved bull heads and luscious vines, the King of Pentacles is the ultimate master of wealth, business strategy, and reliable patronage.",
        revMeaning: "Reversed, measuring all human worth purely by money or engaging in cutthroat corporate tactics.",
        yesNo: "Yes"
      }
    ]
  },
  {
    suit: 'swords',
    element: 'Air',
    theme: 'Mind, Intellect, Truth, Communication & Conflict',
    names: {
      1: 'Ace of Swords', 2: 'Two of Swords', 3: 'Three of Swords', 4: 'Four of Swords',
      5: 'Five of Swords', 6: 'Six of Swords', 7: 'Seven of Swords', 8: 'Eight of Swords',
      9: 'Nine of Swords', 10: 'Ten of Swords', 11: 'Page of Swords', 12: 'Knight of Swords',
      13: 'Queen of Swords', 14: 'King of Swords'
    },
    files: {
      1: 'Swords01.png', 2: 'Swords02.png', 3: 'Swords03.png', 4: 'Swords04.png',
      5: 'Swords05.png', 6: 'Swords06.png', 7: 'Swords07.png', 8: 'Swords08.png',
      9: 'Swords09.png', 10: 'Swords10.png', 11: 'Swords11.png', 12: 'Swords12.png',
      13: 'Swords13.png', 14: 'Swords14.png'
    },
    cards: [
      {
        num: 1,
        upKeywords: ["Mental Breakthrough", "Raw Truth", "Clarity", "Sharp Discernment"],
        revKeywords: ["Confusion", "Cruel Words", "Clouded Judgment", "Misinformation"],
        upMeaning: "A hand emerges from the clouds holding an upright double-edged sword crowned with laurels. Pure mental clarity, breakthrough insights, and cutting through deception with razor truth.",
        revMeaning: "Reversed, weaponizing words to inflict pain, or swimming in mental fog and confusion. Seek objective facts before speaking.",
        yesNo: "Yes"
      },
      {
        num: 2,
        upKeywords: ["Stalemate", "Difficult Choice", "Blocked Emotions", "Truce"],
        revKeywords: ["Indecision Ending", "Truth Revealed", "Lifting the Blindfold"],
        upMeaning: "A blindfolded figure balances two crossed swords before a calm sea. A painful stalemate caused by avoiding an uncomfortable truth. You cannot stay neutral forever.",
        revMeaning: "Reversed, the blindfold is removed. You face the music, break the gridlock, and make the necessary decision.",
        yesNo: "Neutral / Unclear"
      },
      {
        num: 3,
        upKeywords: ["Heartbreak", "Grief", "Emotional Pain", "Painful Truth", "Sorrow"],
        revKeywords: ["Healing Heartbreak", "Releasing Grief", "Forgiveness", "Recovery"],
        upMeaning: "Three swords pierce a glowing red heart beneath stormy storm clouds. Deep sorrow, betrayal, or sharp emotional pain. Acknowledge your tears; only felt grief can heal.",
        revMeaning: "Reversed, the storm passes. Healing begins as you pull the swords from your heart and step toward emotional renewal.",
        yesNo: "No"
      },
      {
        num: 4,
        upKeywords: ["Rest", "Sanctuary", "Rejuvenation", "Meditation", "Mental Retreat"],
        revKeywords: ["Burnout", "Restlessness", "Forced Exile", "Exhaustion"],
        upMeaning: "A knight lies in peaceful repose upon his tomb, hands folded in prayer beneath three swords. Essential mental rest, quiet sanctuary, and recharging your spirit.",
        revMeaning: "Reversed, pushing through severe mental exhaustion without resting. If you do not choose to rest, your body will choose it for you.",
        yesNo: "Likely Yes"
      },
      {
        num: 5,
        upKeywords: ["Hollow Victory", "Conflict", "Hostility", "Selfish Ambition"],
        revKeywords: ["Reconciliation", "Ending Feuds", "Forgiving Wrongs", "Moving Past"],
        upMeaning: "A victor smiles smirkily holding three swords as defeated companions walk away in sorrow. A hollow victory won through cruel arrogance. Win the battle, lose the war.",
        revMeaning: "Reversed, laying down weapons, admitting wrongdoing, and seeking genuine reconciliation and truce.",
        yesNo: "No"
      },
      {
        num: 6,
        upKeywords: ["Transition", "Leaving Rough Waters", "Moving Forward", "Healing Journey"],
        revKeywords: ["Baggage Carried", "Turbulent Waters", "Resisting Transition"],
        upMeaning: "A ferryman guides a woman and child across choppy waters toward a peaceful shore, with six swords standing in the boat. A necessary transition toward calmer, safer horizons.",
        revMeaning: "Reversed, dragging unresolved emotional baggage into new chapters or struggling against an inevitable move.",
        yesNo: "Yes"
      },
      {
        num: 7,
        upKeywords: ["Strategy", "Stealth", "Deception", "Resourcefulness", "Hidden Agendas"],
        revKeywords: ["Confession", "Exposed Deceit", "Coming Clean", "Tactical Rethink"],
        upMeaning: "A sly figure tiptoes away from a military camp carrying five swords, leaving two behind. Secretive maneuvers, tactical stealth, or someone not playing with full transparency.",
        revMeaning: "Reversed, secrets are exposed, conscience demands honesty, and deceit falls apart in the light.",
        yesNo: "Likely No"
      },
      {
        num: 8,
        upKeywords: ["Self-Imposed Traps", "Mental Prison", "Victim Mentality", "Helplessness"],
        revKeywords: ["Freedom", "Realizing Options", "Empowerment", "Stepping Out"],
        upMeaning: "A bound and blindfolded figure stands encircled by eight swords in muddy water. The bonds are loose and the path is open—your prison is constructed purely of mental limiting beliefs.",
        revMeaning: "Reversed, breaking free from self-limiting beliefs, taking accountability, and reclaiming your power.",
        yesNo: "No"
      },
      {
        num: 9,
        upKeywords: ["Anxiety", "Nightmares", "Overthinking", "Despair", "Guilt"],
        revKeywords: ["Dawn After Darkness", "Overcoming Anxiety", "Seeking Help", "Hope"],
        upMeaning: "A figure sits up in bed weeping into their hands beneath nine black swords. Paralyzing anxiety, middle-of-the-night panic, and mental catastrophes magnified by fear.",
        revMeaning: "Reversed, the nightmare breaks. Morning arrives with relief, finding that reality is far gentler than your worst fears.",
        yesNo: "No"
      },
      {
        num: 10,
        upKeywords: ["Rock Bottom", "Definitive Ending", "Betrayal", "Dawn on the Horizon"],
        revKeywords: ["Recovery", "Rising Again", "Surviving the Worst", "Healing"],
        upMeaning: "A figure lies pinned to the ground by ten swords, but a golden dawn breaks over the dark sea. The painful chapter is completely over—the only way forward is up.",
        revMeaning: "Reversed, surviving the worst storm of your life and beginning the courageous resurrection back into light.",
        yesNo: "No"
      },
      {
        num: 11,
        upKeywords: ["Sharp Intellect", "Curiosity", "Vigilance", "Mental Agility"],
        revKeywords: ["Gossip", "Deceptive Spying", "Tactless Words", "Paranoia"],
        upMeaning: "A dynamic youth holds his sword poised, looking back over his shoulder on windy hills. Keen curiosity, witty intelligence, and uncovering the truth through vigilant observation.",
        revMeaning: "Reversed, all talk and no action, online trolling, or hurtful gossiping. Channel mental energy constructively.",
        yesNo: "Yes"
      },
      {
        num: 12,
        upKeywords: ["Fierce Ambition", "Decisive Action", "Speed", "Intellectual Force"],
        revKeywords: ["Recklessness", "Tactless Arrogance", "Burnout", "Rushing Blindly"],
        upMeaning: "A knight charges full tilt into the storm with sword raised high. Fierce mental drive, rapid execution, and charging fearlessly into debate or critical problem-solving.",
        revMeaning: "Reversed, reckless impulsiveness, steamrolling others' emotions, or rushing into disastrous mistakes without thinking.",
        yesNo: "Likely Yes"
      },
      {
        num: 13,
        upKeywords: ["Perceptive Intellect", "Clear Boundaries", "Honest Truth", "Independence"],
        revKeywords: ["Cold Bitterness", "Cruel Judgment", "Cynicism", "Emotional Wall"],
        upMeaning: "Enthroned in the clouds with sword held straight and left hand welcoming, the Queen of Swords possesses razor discernment, tragic wisdom, and uncompromising truth.",
        revMeaning: "Reversed, becoming so hardened and cynical by past betrayals that you treat everyone with cold suspicion.",
        yesNo: "Yes"
      },
      {
        num: 14,
        upKeywords: ["Mental Authority", "Truth & Justice", "Strategic Genius", "Impartiality"],
        revKeywords: ["Tyranny", "Cold Manipulation", "Abuse of Power", "Dogmatism"],
        upMeaning: "Enthroned holding an upright blade, the King of Swords commands through flawless logic, ethical law, intellectual mastery, and absolute impartiality.",
        revMeaning: "Reversed, weaponizing intellect for cold manipulation, cruelty, or heartless legalism.",
        yesNo: "Yes"
      }
    ]
  },
  {
    suit: 'wands',
    element: 'Fire',
    theme: 'Passion, Creativity, Willpower, Action & Spirit',
    names: {
      1: 'Ace of Wands', 2: 'Two of Wands', 3: 'Three of Wands', 4: 'Four of Wands',
      5: 'Five of Wands', 6: 'Six of Wands', 7: 'Seven of Wands', 8: 'Eight of Wands',
      9: 'Nine of Wands', 10: 'Ten of Wands', 11: 'Page of Wands', 12: 'Knight of Wands',
      13: 'Queen of Wands', 14: 'King of Wands'
    },
    files: {
      1: 'Wands01.png', 2: 'Wands02.png', 3: 'Wands03.png', 4: 'Wands04.png',
      5: 'Wands05.png', 6: 'Wands06.png', 7: 'Wands07.png', 8: 'Wands08.png',
      9: 'Wands09.png', 10: 'Wands10.png', 11: 'Wands11.png', 12: 'Wands12.png',
      13: 'Wands13.png', 14: 'Wands14.png'
    },
    cards: [
      {
        num: 1,
        upKeywords: ["Creative Spark", "Inspiration", "Passion", "Bold Initiative"],
        revKeywords: ["Creative Block", "Lack of Passion", "Delays", "Hesitation"],
        upMeaning: "A divine hand bursts from the clouds grasping a sprouting wooden wand. A volcanic surge of creative energy, sexual passion, and entrepreneurial inspiration electrifies your path.",
        revMeaning: "Reversed, passion fizzling out or creative blocks. Reconnect with what genuinely lights your soul on fire.",
        yesNo: "Yes"
      },
      {
        num: 2,
        upKeywords: ["Vision", "Global Planning", "Future Horizons", "Stepping Forward"],
        revKeywords: ["Fear of Unknown", "Playing It Safe", "Poor Planning", "Hesitation"],
        upMeaning: "A lord stands upon his castle battlement holding a globe and a staff, gazing out across the sea. You have conquered your current domain; now plan your next grand expansion.",
        revMeaning: "Reversed, staying in your comfort zone out of fear of the unknown. Expand your vision beyond the horizon.",
        yesNo: "Likely Yes"
      },
      {
        num: 3,
        upKeywords: ["Expansion", "Foresight", "Ships Coming In", "Long-term Momentum"],
        revKeywords: ["Delays", "Frustration", "Obstacles to Growth", "Homesickness"],
        upMeaning: "A visionary watches his merchant ships sail across golden waters. Your long-term plans are bearing fruit; expansion, travel, and rewarding momentum arrive.",
        revMeaning: "Reversed, supply chain delays, missed connections, or plans stalling. Stay patient and maintain your long-term focus.",
        yesNo: "Yes"
      },
      {
        num: 4,
        upKeywords: ["Celebration", "Homecoming", "Harmonious Sanctuary", "Milestone Joy"],
        revKeywords: ["Family Tension", "Delayed Homecoming", "Transient Instability"],
        upMeaning: "Two maidens celebrate beneath a flower-laden arbor of four wands with a castle in the background. Joyous milestones, weddings, housewarmings, and festive sanctuary.",
        revMeaning: "Reversed, minor domestic tension or feeling ungrounded in your living situation. Create sanctuary within yourself.",
        yesNo: "Yes"
      },
      {
        num: 5,
        upKeywords: ["Competition", "Conflict", "Bickering", "Creative Friction"],
        revKeywords: ["Conflict Resolution", "Agreement", "Avoiding Drama", "Harmony"],
        upMeaning: "Five youths clash their staves in chaotic scrimmage. Healthy competition, creative friction, or petty disagreements. Channel this turbulent energy into productive focus.",
        revMeaning: "Reversed, finding harmony, settling petty disputes, and ending pointless competitive bickering.",
        yesNo: "No"
      },
      {
        num: 6,
        upKeywords: ["Public Victory", "Acclaim", "Triumph", "Pride & Recognition"],
        revKeywords: ["Fallen Ego", "Public Disgrace", "Ego Tripping", "Lack of Recognition"],
        upMeaning: "A crowned hero rides a decorated white horse through cheering crowds with a laurel wreath on his wand. Public triumph, well-earned recognition, and celebratory success.",
        revMeaning: "Reversed, letdown after inflated hype, or craving external validation. Anchor your self-worth internally.",
        yesNo: "Yes"
      },
      {
        num: 7,
        upKeywords: ["Defending Your Ground", "Courage", "Perseverance", "Standing Tall"],
        revKeywords: ["Overwhelmed", "Surrendering", "Exhaustion", "Compromise"],
        upMeaning: "Standing on a high ridge, a brave defender fights off six rising staves from below. You have the high ground! Stand your ground courageously against all opposition.",
        revMeaning: "Reversed, feeling overwhelmed by constant pressure or fighting unnecessary battles. Pick your battles wisely.",
        yesNo: "Yes"
      },
      {
        num: 8,
        upKeywords: ["Rapid Speed", "Swift Action", "Sudden Messages", "Air Travel", "Momentum"],
        revKeywords: ["Delays", "Miscommunication", "Panic", "Rushing Headlong"],
        upMeaning: "Eight wands fly in perfect formation through the clear sky toward the earth. Fast-moving momentum, rapid communication, travel, and sudden positive developments.",
        revMeaning: "Reversed, chaotic delays, misdirected anger, or jumping the gun before timing is right.",
        yesNo: "Yes"
      },
      {
        num: 9,
        upKeywords: ["Resilience", "Grit", "Last Line of Defense", "Courage in Weariness"],
        revKeywords: ["Paranoia", "Defensive Walls", "Burnout", "Giving Up Near the End"],
        upMeaning: "A wounded warrior leans upon his staff before a palisade of eight wands, eyes alert. You have endured fierce battles and are battle-weary, but victory is within reach—hold the line!",
        revMeaning: "Reversed, paranoia causing you to see enemies where there are none, or total exhaustion. Lower your defensive shields safely.",
        yesNo: "Likely Yes"
      },
      {
        num: 10,
        upKeywords: ["Burden", "Overwhelmed", "Carrying Too Much", "Heavy Responsibility"],
        revKeywords: ["Delegating", "Releasing Burdens", "Burnout Recovery", "Lightening Load"],
        upMeaning: "A worker stumbles toward the city carrying an unbearable bundle of ten heavy wands. You have taken on too much responsibility; put down the burden before you collapse.",
        revMeaning: "Reversed, learning to say no, delegating tasks, and releasing burdens that were never yours to carry.",
        yesNo: "No"
      },
      {
        num: 11,
        upKeywords: ["Enthusiastic Messenger", "Creative Adventure", "Free Spirit", "Discovery"],
        revKeywords: ["Scattered Ideas", "Childish Tantrums", "Lack of Commitment"],
        upMeaning: "A stylish youth in salamander-patterned robes raises his wand in the desert. Spirited curiosity, exciting adventure proposals, and passionate new beginnings.",
        revMeaning: "Reversed, starting a hundred projects with zero follow-through, or impatience derailing good ideas.",
        yesNo: "Yes"
      },
      {
        num: 12,
        upKeywords: ["Passionate Drive", "Fearless Action", "Adventure", "Charisma"],
        revKeywords: ["Hot-Headed Recklessness", "Unpredictable", "Burnout", "Arrogance"],
        upMeaning: "A knight's fiery steed rears up amidst red dunes as he charges forward in armor of flame. Dynamic charisma, unstoppable ambition, and sweeping romantic passion.",
        revMeaning: "Reversed, short-fused temper, reckless drama, or charging into situations without considering consequences.",
        yesNo: "Yes"
      },
      {
        num: 13,
        upKeywords: ["Charismatic Radiance", "Confidence", "Fierce Independence", "Warmth & Passion"],
        revKeywords: ["Jealousy", "Insecurity", "Demanding Drama", "Egoism"],
        upMeaning: "Enthroned with a black cat at her feet and a sunflower in her hand, the Queen of Wands exudes magnetic confidence, warmth, fierce loyalty, and irresistible radiance.",
        revMeaning: "Reversed, jealousy, insecurity, or creating dramatic scenes to demand center stage.",
        yesNo: "Yes"
      },
      {
        num: 14,
        upKeywords: ["Visionary Leader", "Dynamic Inspiration", "Big Picture Mastery", "Honor"],
        revKeywords: ["Tyrant", "Impatience", "Unrealistic Demands", "Arrogance"],
        upMeaning: "Enthroned in robes of salamanders and lions holding a living staff, the King of Wands leads with visionary inspiration, bold enterprise, and commanding charisma.",
        revMeaning: "Reversed, an overbearing dictator who makes impossible demands and refuses to listen to counsel.",
        yesNo: "Yes"
      }
    ]
  }
];

// Compile all cards
const allCards = [];

// Push Major Arcana
for (const card of majorArcanaData) {
  allCards.push(card);
}

// Generate Minor Arcana
for (const suitConfig of suitsConfig) {
  for (const item of suitConfig.cards) {
    const num = item.num;
    const name = suitConfig.names[num];
    const fileName = suitConfig.files[num];
    const id = `${suitConfig.suit}-${num}`;

    allCards.push({
      id,
      name,
      number: num,
      arcana: "minor",
      suit: suitConfig.suit,
      element: suitConfig.element,
      astrology: `${suitConfig.theme} - Rank ${num}`,
      image: `/cards/${fileName}`,
      uprightKeywords: item.upKeywords,
      reversedKeywords: item.revKeywords,
      uprightMeaning: item.upMeaning,
      reversedMeaning: item.revMeaning,
      loveMeaning: {
        upright: `In love, ${name} emphasizes ${item.upKeywords.slice(0, 2).join(' and ').toLowerCase()}. It fosters deep emotional warmth and mutual growth.`,
        reversed: `In romance, reversed ${name} warns of ${item.revKeywords.slice(0, 2).join(' or ').toLowerCase()}. Honest communication is required.`
      },
      careerMeaning: {
        upright: `In career matters, ${name} signals ${item.upKeywords.slice(0, 2).join(' and ').toLowerCase()}. Focus on your core purpose.`,
        reversed: `In professional endeavors, reversed ${name} suggests ${item.revKeywords.slice(0, 2).join(' or ').toLowerCase()}. Realign your strategy.`
      },
      spiritualMeaning: {
        upright: `On your soul path, ${name} brings ${item.upKeywords[0].toLowerCase()} and connects you with your higher spiritual flame.`,
        reversed: `In your spiritual practice, reversed ${name} invites you to heal ${item.revKeywords[0].toLowerCase()} through inner contemplation.`
      },
      advice: `Harness the wisdom of ${name}: align with ${item.upKeywords[0].toLowerCase()} and act from authentic integrity.`,
      shadowWarning: `Be mindful of ${item.revKeywords[0].toLowerCase()} obscuring your true light.`,
      yesNo: item.yesNo,
      symbolism: [`${suitConfig.suit} iconography`, "Elemental alignment", `Sacred numerology of ${num}`]
    });
  }
}

const fileContent = `import { TarotCard } from '../types/tarot';

export const TAROT_DECK: TarotCard[] = ${JSON.stringify(allCards, null, 2)};

export const CARD_BACK_IMAGE = '/cards/CardBacks.png';

export function getCardById(id: string): TarotCard | undefined {
  return TAROT_DECK.find(c => c.id === id);
}

export function getRandomCards(count: number, allowReversed = true): { card: TarotCard; isReversed: boolean }[] {
  const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    card,
    isReversed: allowReversed ? Math.random() > 0.65 : false
  }));
}
`;

fs.writeFileSync('src/data/tarotDeck.ts', fileContent, 'utf-8');
console.log(`Successfully generated src/data/tarotDeck.ts with ${allCards.length} cards.`);
