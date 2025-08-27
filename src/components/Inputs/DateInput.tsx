"use client";

import { TTextInput } from "@/types/TTextInput";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { createPortal } from "react-dom";

// Extend your existing type to include date-specific props
interface TDateInput extends Omit<TTextInput, "type"> {
  onDateSelect?: (date: Date | undefined) => void;
  selectedDate?: Date;
  dateFormat?: string;
}

const DateInput = ({
  name,
  placeholder = "Select date",
  iconClassName,
  className,
  labelText,
  register,
  // value,
  // defaultValue,
  isIcon = false,
  icon,
  onChange,
  onDateSelect,
  selectedDate,
  dateFormat = "PPP", // March 7, 2025
  calenderPosition = "start",
}: TDateInput & {
  calenderPosition?: "start" | "end" | "center";
}) => {
  const [date, setDate] = useState<Date | undefined>(selectedDate);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setIsOpen(false);

    // Call the callback if provided
    if (onDateSelect) {
      onDateSelect(selectedDate);
    }

    // If using with react-hook-form, trigger onChange
    if (onChange && selectedDate) {
      const event = {
        target: {
          name,
          value: format(selectedDate, "yyyy-MM-dd"),
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  const displayValue = date ? format(date, dateFormat) : "";

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="w-full text-text-body-muted text-[16px] leading-[23px] font-semibold"
      >
        {labelText}
      </label>
      <div className="mt-3 w-full relative">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <div className="relative w-full">
              <input
                name={name}
                type="text"
                placeholder={placeholder}
                {...register}
                value={displayValue}
                readOnly
                className={`px-3 py-4 flex-1 w-full bg-[#F4F6F9] placeholder-text-natural-gray-77 text-text-natural-gray-2 text-[15px] leading-[15px] font-medium rounded-md cursor-pointer ${className}`}
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 right-3 w-[14px] h-[14px] pointer-events-none ${iconClassName}`}
              >
                {isIcon && icon}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-full p-0 z-[999] bg-[#FAFAFA]"
            align={calenderPosition}
          >
            {createPortal(
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[999] w-full h-full bg-[#1E52DC99]"
              ></div>,
              document.body
            )}
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              className="rounded-md border-0 calendar-custom"
              showOutsideDays={true}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DateInput;
