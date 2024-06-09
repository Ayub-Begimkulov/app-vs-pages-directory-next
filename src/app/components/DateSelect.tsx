"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface DateSelectProps {
  date: string;
  title: string;
}

export function DateSelect({ date, title }: DateSelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`${pathname}?date=${event.target.value}`);
  };

  return (
    <div>
      <h3>{title}</h3>
      <input type="date" value={date} onChange={onChange} />
    </div>
  );
}
