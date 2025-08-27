"use client";

import FilledButton from "@/components/Buttons/FilledButton";
import NoteCard from "@/components/Cards/NoteCard";
import AddNoteModal from "@/components/Modals/AddNoteModal";
import NoteCategoryArrowIcon from "@/components/Svgs/NoteCategoryArrowIcon";
import NoteSortIcon from "@/components/Svgs/NoteSortIcon";
import PlusIcon from "@/components/Svgs/PlusIcon";
import H5 from "@/components/Typography/H5";
import { problemNotes } from "@/data/problemNotes";
import React, { useState } from "react";

const ProblemNotes = () => {
  const [selectedCategory] = useState<string>("X-Rays");

  const [visibleCount, setVisibleCount] = useState(2);

  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);

  return (
    <section className="mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex justify-start items-center gap-6">
          <div className="flex justify-start items-center gap-2">
            <H5 className="text-text-default-dark !leading-[136%]">Filter</H5>

            <div className="px-3 py-1.5 bg-[#E2EAFF] flex justify-center items-center gap-1.5 rounded-[44px]">
              <h4
                className={`text-text-primary-blue text-[12px] leading-[100%] font-medium`}
              >
                {selectedCategory}
              </h4>

              <div className="w-[11px] h-[11px] ">
                <NoteCategoryArrowIcon />
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2">
            <H5 className="text-text-default-dark !leading-[136%]">Sorting</H5>

            <div className="w-[11px] h-[12px]">
              <NoteSortIcon />
            </div>
          </div>
        </div>

        <div>
          <FilledButton
            onClick={() => setIsAddNoteModalOpen(true)}
            text="Add New Button"
            className="!px-5 !py-3"
            isIcon={true}
            icon={<PlusIcon />}
          />
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {problemNotes?.slice(0, visibleCount)?.map((note) => {
          return (
            <NoteCard
              key={note.id}
              createdAt={note.createdAt}
              createdBy={note.createdBy}
              consultantName={note.consultantName}
              category={note.category}
              noteDetails={note.noteDetails}
              seenNumber={note.seenNumber}
              likeNumber={note.likeNumber}
              noteReplies={note.noteReplies}
            />
          );
        })}
      </div>

      {problemNotes?.length > visibleCount && (
        <div className="mt-[30px] flex justify-center">
          <FilledButton
            onClick={() => setVisibleCount(visibleCount + 2)}
            text="Show more"
            className="bg-bg-primary-blue !py-2.5 !w-fit !rounded-[44px]"
            textClassName="!leading-[16px]"
          />
        </div>
      )}

      {isAddNoteModalOpen && (
        <div className="fixed inset-0 z-[500] bg-[#1E52DC99]">
          <AddNoteModal setIsAddNoteModalOpen={setIsAddNoteModalOpen} />
        </div>
      )}
    </section>
  );
};

export default ProblemNotes;
