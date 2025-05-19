import { Feature } from "@/types/feature";
import {
  BedDouble,
  BookOpenCheck,
  CalendarCheck2,
  CreditCard,
  MessageSquareText,
  ScrollText,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <BookOpenCheck className="h-8 w-8 text-white" />,
    title: "ছাত্র ব্যবস্থাপনা",
    description: "ছাত্রদের ভর্তি, তথ্য আপডেট ও ট্র্যাকিং এক জায়গায়।",
  },
  {
    id: 2,
    icon: <ScrollText className="h-8 w-8 text-white" />,
    title: "পরীক্ষা ব্যবস্থাপনা",
    description: "পরীক্ষার ফলাফল প্রকাশ ও রিপোর্ট তৈরি অত্যন্ত সহজ।",
  },

  {
    id: 3,
    icon: <CalendarCheck2 className="h-8 w-8 text-white" />,
    title: "উপস্থিতি ব্যবস্থাপনা",
    description: "শিক্ষক ও ছাত্রদের উপস্থিতি রেকর্ড এবং রিপোর্টিং।",
  },
  {
    id: 4,
    icon: <BedDouble className="h-8 w-8 text-white" />,
    title: "হোস্টেল ব্যবস্থাপনা",
    description: "আবাসিক শিক্ষার্থীদের হোস্টেল রুম ও তথ্য পরিচালনা।",
  },
  {
    id: 5,
    icon: <MessageSquareText className="h-8 w-8 text-white" />,
    title: "এসএমএস সিস্টেম",
    description: "অভিভাবকদের তথ্য জানাতে দ্রুত এসএমএস পাঠানো যায়।",
  },
  {
    id: 6,
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: "স্বয়ংক্রিয় ফি সিস্টেম",
    description: "নির্দিষ্ট সময়ে ফি জেনারেশন ও রিমাইন্ডার সিস্টেম।",
  },
];

export default featuresData;
