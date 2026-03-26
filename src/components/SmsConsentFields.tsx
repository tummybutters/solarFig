import { cn } from "@/lib/utils";

const transactionalConsentCopy =
  "By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested from Horizon Solar Group LLC dba Solarfig. These messages may include reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt out.";

const marketingConsentCopy =
  "By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, and new product updates, among others, from Horizon Solar Group LLC dba Solarfig. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt out.";

type SmsConsentFieldsProps = {
  idPrefix: string;
  className?: string;
  textClassName?: string;
};

const consentFields = [
  { key: "transactional", name: "transactionalConsent", copy: transactionalConsentCopy },
  { key: "marketing", name: "marketingConsent", copy: marketingConsentCopy },
] as const;

const SmsConsentFields = ({
  idPrefix,
  className,
  textClassName,
}: SmsConsentFieldsProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {consentFields.map((field) => (
        <label
          key={field.key}
          htmlFor={`${idPrefix}-${field.key}`}
          className={cn("flex items-start gap-3 text-[13px] leading-[1.55] text-stone-700", textClassName)}
        >
          <input
            id={`${idPrefix}-${field.key}`}
            name={field.name}
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 rounded border border-stone-300 accent-[#6D39B5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D39B5]"
          />
          <span>{field.copy}</span>
        </label>
      ))}
    </div>
  );
};

export default SmsConsentFields;
