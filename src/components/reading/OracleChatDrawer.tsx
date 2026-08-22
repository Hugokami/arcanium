import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User as UserIcon, Wand2 } from 'lucide-react';
import { DrawnCard, Language, SpreadDefinition } from '../../types/tarot';
import { UserProfile } from '../../types/userProfile';
import { TarotSynergyService } from '../../services/tarotSynergyService';
import { audioService } from '../../services/audioService';

interface Message {
  id: string;
  sender: 'oracle' | 'user';
  text: string;
  timestamp: number;
}

interface OracleChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  topic: string;
  drawnCards: DrawnCard[];
  spread: SpreadDefinition;
  userProfile: UserProfile | null;
}

export const OracleChatDrawer: React.FC<OracleChatDrawerProps> = ({
  isOpen,
  onClose,
  language,
  topic,
  drawnCards,
  spread,
  userProfile
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const querent = userProfile?.name || (language === 'my' ? 'မိတ်ဆွေ' : language === 'ja' ? '探求者' : 'Seeker');
      const initialGreeting = language === 'my'
        ? `မင်္ဂလာပါ ${querent}။ "${topic}" နှင့် ပတ်သက်၍ ခင်းကျင်းထားသော ကတ်ပြားများအပေါ် မည်သည့် အကြောင်းအရာကို ထပ်မံ၍ ရှင်းလင်းစွာ မေးမြန်းလိုပါသနည်း။ အသေးစိတ် လမ်းညွှန်ပေးပါမည်။`
        : language === 'ja'
        ? `ごきげんよう、${querent}。展開されたカードと「${topic}」について、さらに深く尋ねたい問いはありますか？どのような疑問にもお答えします。`
        : `Greetings, ${querent}. The cards for "${topic}" are illuminated before us. What specific aspect of your reading would you like me to clarify further?`;

      setMessages([
        {
          id: 'm-0',
          sender: 'oracle',
          text: initialGreeting,
          timestamp: Date.now()
        }
      ]);
    }
  }, [isOpen, language, topic, userProfile]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickQuestions = language === 'my'
    ? [
        'ကျွန်ုပ်၏ ပထမဆုံး လက်တွေ့လုပ်ဆောင်ရမည့် ခြေလှမ်းမှာ အဘယ်နည်း။',
        'ဤကတ်များအရ မည်သည့် အန္တရာယ် သို့မဟုတ် သတိပေးချက်ကို အလေးထားရမည်နည်း။',
        'ကျွန်ုပ်၏ မွေးရာပါ ဇာတာနှင့် ဤနိမိတ် မည်သို့ ပဲ့တင်ထပ်နေသနည်း။',
        'အခြေအနေ အမြန်ဆုံး အောင်မြင်ရန် မည်သည့် စိတ်ထားမျိုး မွေးမြူရမည်နည်း။'
      ]
    : language === 'ja'
    ? [
        'まず最初に行うべき具体的な一歩は何ですか？',
        '最も警戒すべき影や落とし穴は何ですか？',
        '私の生まれ持った運命とこの啓示はどう響き合っていますか？',
        '状況を好転させるために必要な心の持ちようを教えてください。'
      ]
    : [
        'What is the very first practical step I should take?',
        'What hidden trap or shadow should I be most mindful of?',
        'How does my natal astrological energy influence this spread?',
        'What mindset will accelerate my best possible outcome?'
      ];

  const generateOracleResponse = (userQuery: string): string => {
    const querent = userProfile?.name || 'Seeker';
    const zodiac = userProfile?.zodiacSign;
    const elemental = TarotSynergyService.calculateElementalDignities(drawnCards, language);
    const quintessence = TarotSynergyService.calculateQuintessence(drawnCards, language);
    const topCard = drawnCards[0];
    const topName = topCard ? topCard.card.name[language] : '';

    const qLower = userQuery.toLowerCase();

    if (language === 'my') {
      if (qLower.includes('ပထမ') || qLower.includes('ခြေလှမ်း') || qLower.includes('လုပ်ဆောင်')) {
        return `အဓိက လက်တွေ့ခြေလှမ်းအတွက် **${topName}** ၏ သွန်သင်ချက်ကို အရင်ဆုံး စတင်ပါ။ ${elemental.elementalAdvice[language]} အပြင်ဘက်သို့ အတင်းအကျပ် မတွန်းအားပေးဘဲ သင့်အတွင်းစိတ်ကို အရင်တည်ငြိမ်ရှင်းလင်းအောင် ပြုလုပ်ခြင်းသည် အကောင်းဆုံး အစပြုခြင်း ဖြစ်ပါသည်။`;
      }
      if (qLower.includes('သတိ') || qLower.includes('အန္တရာယ်') || qLower.includes('ထောင်ချောက်')) {
        return `အဓိက သတိပြုရမည့်အချက်မှာ စိတ်လောကြီးခြင်းနှင့် သံသယဝင်ခြင်း ဖြစ်ပါသည်။ အထူးသဖြင့် **${quintessence.cardName[language]}** ၏ သင်ခန်းစာအရ: "${quintessence.lesson[language]}" ဤအချက်ကို သတိမမူပါက မလိုအပ်ဘဲ စိတ်ပင်ပန်းမှုများ ကြုံတွေ့ရနိုင်ပါသည်။`;
      }
      if (qLower.includes('ဇာတာ') || qLower.includes('ရာသီ')) {
        return zodiac
          ? `သင့်မွေးရာပါ ${zodiac.name[language]} ၏ ${zodiac.element} ဓာတ်သဘာဝအရ ဤကိစ္စတွင် သင့်အတွင်းစိတ်စွမ်းအားသည် အလွန်အရေးပါသော နေရာမှ ပါဝင်နေပါသည်။ ${zodiac.traits[language]}`
          : `သင့်ရာသီခွင်သည် သင့်အတွင်းစိတ်၏ သဘာဝစွမ်းအားကို ပိုမိုခိုင်မာစေပါသည်။`;
      }
      return `ကတ်ပြားများ၏ အနှစ်ချုပ်အရ "${userQuery}" နှင့် ပတ်သက်၍ အဓိက အဖြေမှာ: ကံကြမ္မာသည် **${topName}** မှတဆင့် သင့်အား အသိပေးနေပြီး၊ နောက်ဆုံးတွင် ${quintessence.lesson[language]}`;
    }

    if (language === 'ja') {
      if (qLower.includes('一歩') || qLower.includes('行動') || qLower.includes('具体')) {
        return `最初の一歩として、まず【${topName}】が示す真理を意識してください。${elemental.elementalAdvice[language]} 無理に結果を急ぐのではなく、まず足元の調和を整えることが最大の突破口です。`;
      }
      if (qLower.includes('影') || qLower.includes('警戒') || qLower.includes('落とし穴') || qLower.includes('注意')) {
        return `最も警戒すべきは、恐れからくる焦燥と自己不信です。【${quintessence.cardName[language]}】の深層の教えを忘れないでください：「${quintessence.lesson[language]}」`;
      }
      if (qLower.includes('星座') || qLower.includes('運命') || qLower.includes('ホロスコープ')) {
        return zodiac
          ? `あなたの太陽星座【${zodiac.name[language]}】（${zodiac.element}のエレメント）のエネルギーは、このスプレッドと強く調和しています。${zodiac.traits[language]}`
          : `あなたの魂の元型は、この局面において最善の直感をもたらします。`;
      }
      return `カードの深い託宣として、あなたの問い「${userQuery}」に対する答えは【${topName}】に宿っています。大いなる霊的教訓は：${quintessence.lesson[language]}`;
    }

    // English
    if (qLower.includes('step') || qLower.includes('action') || qLower.includes('first') || qLower.includes('do')) {
      return `For your first decisive move, anchor yourself in the wisdom of **${topName}**. ${elemental.elementalAdvice.en} Do not force outer velocity until your inner state is clear and steady.`;
    }
    if (qLower.includes('trap') || qLower.includes('shadow') || qLower.includes('warning') || qLower.includes('fear')) {
      return `The primary shadow to avoid is impatience and self-doubt. The overarching Quintessence (**${quintessence.cardName.en}**) counsels: "${quintessence.lesson.en}"`;
    }
    if (qLower.includes('astrolog') || qLower.includes('zodiac') || qLower.includes('natal') || qLower.includes('sign')) {
      return zodiac
        ? `As a ${zodiac.name.en} (${zodiac.element} element), your innate drive directly interfaces with this spread: ${zodiac.traits.en}`
        : `Your natal energy provides the foundational fuel for this transformation.`;
    }

    return `Looking deeply into your cards regarding "${userQuery}": the primary guidance flows from **${topName}**. The master cosmic key remains: ${quintessence.lesson.en}`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    audioService.playCardSelect();

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateOracleResponse(query);
      const oracleMsg: Message = {
        id: `o-${Date.now()}`,
        sender: 'oracle',
        text: reply,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, oracleMsg]);
      setIsTyping(false);
      audioService.playChime();
    }, 850);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#0b0812]/95 backdrop-blur-xl border-l border-[#d4af37]/35 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between bg-black/40">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37]">
            <Wand2 className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-sm sm:text-base text-[#d4af37] tracking-wider">
              {language === 'my' ? 'နိမိတ်မေးမြန်းခန်း (Oracle Communion)' : language === 'ja' ? 'オラクル対話（神託の深淵）' : 'Commune with the Oracle'}
            </h3>
            <p className="text-[11px] text-zinc-300 font-serif">
              {language === 'my' ? 'လက်ရှိ ကတ်ခင်းကျင်းမှုအပေါ် ထပ်မံမေးမြန်းပါ' : language === 'ja' ? '展開されたカードについて自由に質問してください' : 'Interactive follow-up on your active cards'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start space-x-2.5 ${m.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                m.sender === 'oracle'
                  ? 'bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37]'
                  : 'bg-purple-900/50 border border-purple-500/50 text-purple-200'
              }`}
            >
              {m.sender === 'oracle' ? <Bot className="w-3.5 h-3.5" /> : <UserIcon className="w-3.5 h-3.5" />}
            </div>

            <div
              className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-serif leading-relaxed ${
                m.sender === 'oracle'
                  ? 'bg-white/[0.05] border border-white/[0.08] text-amber-50 shadow-sm'
                  : 'bg-[#d4af37]/15 border border-[#d4af37]/40 text-amber-100'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center space-x-2 text-xs text-amber-300/70 font-serif italic pl-10">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>{language === 'my' ? 'ကံကြမ္မာ အဖြေရှာဖွေနေပါသည်…' : language === 'ja' ? 'オラクルが託宣を紡いでいます…' : 'The Oracle is reading the unseen threads…'}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompt Chips */}
      {/* Inquiry Prompt Chips */}
      <div className="p-4 border-t border-white/[0.08] bg-black/60 space-y-2 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-1 flex items-center space-x-1.5">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>{language === 'my' ? 'နိမိတ်လမ်းညွှန် မေးခွန်းများ (နှိပ်၍ မေးမြန်းပါ):' : language === 'ja' ? '神託への問い（タップして質問）:' : 'Guided Inquiry Invocations (Tap to Ask):'}</span>
        </div>
        <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pt-1">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-xs font-serif text-amber-200/90 hover:text-amber-100 bg-white/[0.04] hover:bg-[#d4af37]/20 border border-white/[0.08] hover:border-[#d4af37]/50 px-3.5 py-2 rounded-xl transition-all text-left shadow-sm active:scale-95 flex items-center space-x-1.5"
            >
              <span>✦</span>
              <span>{q}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
