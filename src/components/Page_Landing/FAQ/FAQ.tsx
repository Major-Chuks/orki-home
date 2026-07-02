import { useState } from "react";
import styles from "./FAQ.module.css";
import { MinusIcon, PlusIcon } from "lucide-react";
import FadeIn from "../Animations/FadeIn";

const TABS = [
  {
    label: "About Orki",
    questions: [
      {
        q: "What is Orki?",
        a: "Orki is a financial technology platform, not a bank. We use USDC and USDT — digital dollars — to move money at internet speed, with lower fees and no borders. Our licensed partners handle the infrastructure to keep your funds secure",
      },
      {
        q: "Who is Orki for?",
        a: "Freelancers, remote workers, and businesses who need to get paid globally, hold multiple currencies, and move money without the friction of traditional banking.",
      },
      {
        q: "What countries does Orki support?",
        a: "Orki is available globally with a focus on MENA and South Asia. You can receive payments from 150+ countries.",
      },
      {
        q: "Is Orki regulated?",
        a: "Orki operates under applicable regulatory frameworks in its markets. All users go through identity verification. Our infrastructure partners hold the relevant financial licences.",
      },
      {
        q: "Is there a monthly fee?",
        a: "No. Creating an account and holding a balance is free. You only pay fees when you transact — 1% on payment link and invoice payments. No monthly or maintenance fees.",
      },
      {
        q: "What is a stablecoin?",
        a: "A digital currency pegged 1:1 to a real currency. USDC is always worth exactly $1. It settles instantly and globally without a bank in the middle.",
      },
    ],
  },
  {
    label: "Payments and Accounts",
    questions: [
      {
        q: "How do I get paid on Orki?",
        a: "Three ways — share a payment link, use your virtual account details for bank transfers, or send an invoice. All three land in your Orki wallet.",
      },
      {
        q: "Does my client need crypto to pay me?",
        a: "No. Via your virtual account they pay like a normal bank transfer — no crypto needed on their end. Via payment link they need USDC or USDT in any wallet. Neither requires an Orki account.",
      },
      {
        q: "How does invoicing work?",
        a: "Create an invoice in Orki with the amount, currency, and client details. Orki generates a payment link your client uses to pay. Once paid, funds land in your wallet and the invoice is marked settled.",
      },
      {
        q: "What is a virtual account?",
        a: "A real bank account number in USD, EUR, or AED that you own on Orki. Share the details with anyone and they pay you via standard bank transfer. Funds arrive directly in your wallet.",
      },
      {
        q: "How do I deposit money into Orki from my bank?",
        a: "Use your Orki virtual account details and initiate a standard bank transfer from your bank. Funds arrive in your wallet automatically.",
      },
      {
        q: "How fast do payments arrive?",
        a: "Stablecoin payments under 30 seconds. Bank transfers to your virtual account typically 1–2 business days.",
      },
      {
        q: "How do I send money to someone?",
        a: "Add a recipient — enter their crypto wallet address or virtual account details. Select the amount and token, confirm with your passkey. Crypto transfers arrive within seconds. No Orki account needed on the receiving end.",
      },
      {
        q: "How do I withdraw to my bank?",
        a: "Add a recipient — either a crypto wallet address or a virtual account. Go to Send, select your recipient, enter the amount, and confirm with your passkey. Crypto withdrawals arrive within seconds. Bank withdrawals typically take 1–3 business days. Fees are shown in the app before you confirm.",
      },
      {
        q: "What chains does my Orki wallet support?",
        a: "Ethereum, Solana, Polygon, and Base. Your wallet holds USDC and USDT across all four chains in one place.",
      },
      {
        q: "Can I hold other tokens besides USDC and USDT?",
        a: "Currently Orki focuses on USDC and USDT. Support for additional tokens is on the roadmap.",
      },
      {
        q: "How does currency conversion work?",
        a: "If you receive in USD and want to withdraw in AED, Orki converts at the current rate. The conversion rate and any applicable fee are shown before you confirm.",
      },
      {
        q: "Are there transaction limits?",
        a: "Yes — limits apply to comply with AML regulations. Your current limits are shown in the app.",
      },
      {
        q: "What happens if a client requests a refund?",
        a: "You initiate the refund from your Orki wallet — send the amount back to the client's wallet address or virtual account. Refunds on stablecoin payments are on-chain transactions and cannot be reversed once sent, so always confirm the details before proceeding.",
      },
    ],
  },
  {
    label: "Security and Verification",
    questions: [
      {
        q: "Does Orki hold my funds?",
        a: "No. Your funds are in a self-custodial wallet only you control. Orki cannot move or access your money. Every transaction requires your passkey.",
      },
      {
        q: "What is a passkey?",
        a: "A secure, passwordless way to sign in and approve transactions using Face ID or fingerprint. Nothing moves without your explicit approval.",
      },
      {
        q: "What happens if I lose my phone?",
        a: "Your wallet is tied to your Orki account, not your device. Recover access on a new device using your account credentials and identity verification.",
      },
      {
        q: "How long does verification take?",
        a: "Seconds to create an account. KYC typically under 5 minutes. Once approved we notify you straight away.",
      },
      {
        q: "What do I need to verify my account?",
        a: "A government-issued ID — passport or Emirates ID — and a short selfie check.",
      },
      {
        q: "Can businesses use Orki?",
        a: "Yes. Business accounts require company registration documents, trade licence, and verification of beneficial owners. KYB typically takes same day to next business day.",
      },
    ],
  },
];

function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOpenQuestion(0);
  };

  return (
    <section id="faq" className={styles.section}>
      <span className={styles.square1} />
      <span className={styles.square2} />

      <div className={styles.inner}>
        <FadeIn delay={0.1}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className={styles.subheading}>
            Learn how Orki helps businesses move money securely, compliantly,
            and globally.
          </p>
        </FadeIn>

        <div className={styles.tabs}>
          {TABS.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              className={`${styles.tab} ${index === activeTab ? styles.tabActive : ""}`}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.accordion}>
          {TABS[activeTab].questions.map((item, index) => {
            const isOpen = openQuestion === index;
            return (
              <div
                key={item.q}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.itemHeader}
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                >
                  <span className={styles.itemQuestion}>{item.q}</span>
                  <span
                    className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}
                  >
                    <div className={styles.toggleIcon}>
                      <PlusIcon size={16} />
                    </div>
                  </span>
                </button>
                <div className={styles.faqBody}>
                  <div className={styles.faqBodyInner}>
                    <p className={styles.itemAnswer}>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
