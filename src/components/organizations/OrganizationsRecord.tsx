"use client";

import React, { useRef, useState } from "react";
import H6 from "@/components/Typography/H6";
import TableScrollGrabber from "@/components/Shared/TableScrollGrabber";
import Pagination from "@/components/Shared/Pagination";
import { useForm } from "react-hook-form";
import TextInputV2 from "@/components/Inputs/TextInputV2";
import PlusIcon from "@/components/Svgs/PlusIcon";
import ButtonBase from "@/components/Typography/ButtonBase";
import OrganizationTableHeader from "@/components/Tables/OrganizationTableHeader";
import OrganizationTableRaw from "@/components/Tables/OrganizationTableRow";
import InviteOrganizationModal from "@/components/Modals/InviteOrganizationModal";
import { useGetAllOrganizationsQuery } from "@/store/apis/Organization";

const OrganizationsRecord = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isInviteOrganizationModalOpen, setIsInviteOrganizationModalOpen] =
    useState(false);

  const tableRef = useRef<HTMLDivElement | null>(null);

  const { data: organizations } = useGetAllOrganizationsQuery(undefined);

  const { register } = useForm();

  return (
    <>
      <section className="overflow-x-hidden">
        <div className="mt-[30px] flex flex-col sm:flex-row justify-between items-center gap-4">
          <TextInputV2
            name="searchOrganizations"
            placeholder="Search Organizations"
            isIcon={true}
            className="max-w-[544px] w-full"
            register={register("searchOrganizations")}
          />

          <button
            onClick={() => setIsInviteOrganizationModalOpen(true)}
            className="py-3 px-5 rounded-[6px] bg-bg-primary-blue flex justify-start items-center gap-2 cursor-pointer text-nowrap"
          >
            <div className="w-3 h-3">
              <PlusIcon />
            </div>
            <ButtonBase className="text-text-default-white">
              Invite New Organizations
            </ButtonBase>
          </button>
        </div>
      </section>

      <section
        className="mt-[30px] mb-[48px] bg-bg-surface-primary rounded-t-2xl rounded-b-2xl overflow-hidden"
        style={{
          boxShadow: "0px 3px 8px -1px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <div
          className="px-6 py-[18px]"
          style={{
            boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
          }}
        >
          <H6 className="text-[#1F2D3D]">Organizations Record</H6>
        </div>

        <TableScrollGrabber>
          <div ref={tableRef} className="relative z-[10] overflow-x-auto">
            <div className="table w-full h-full min-w-[750px] lg:min-w-full">
              {/* Header Row */}
              <OrganizationTableHeader />

              {/* Body Row */}
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                organizations?.data?.map((organization: any, index: number) => {
                  return (
                    <OrganizationTableRaw
                      key={index}
                      tableRef={tableRef}
                      organizationImage={organization?.image}
                      organizationName={organization?.name}
                      organizationStatus={organization?.organizationStatus}
                      organizationJoinDate={organization?.createdAt}
                      playerNumber={organization?.patients?.length}
                      teams={organization?.teams}
                      country={organization?.city}
                      lastUpdated={organization?.updatedAt}
                      isLastAction={index === organizations?.data?.length - 1}
                    />
                  );
                })
              }
            </div>
          </div>
        </TableScrollGrabber>

        <div className="px-3 py-[9px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h4 className="text-[14px] font-normal leading-[23px] text-text-body-muted">
            Showing 10 items out of 250 results found
          </h4>

          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {isInviteOrganizationModalOpen && (
        <div
          className="fixed z-[10001] left-0 top-0 w-full h-full bg-[#1E52DC99] px-4 lg:px-0"
          style={{
            boxShadow: "0px 4px 20px -2px #32324714, 0px 0px 1px 0px #0C1A4B1A",
          }}
        >
          <InviteOrganizationModal
            setIsInviteOrganizationModalOpen={setIsInviteOrganizationModalOpen}
          />
        </div>
      )}
    </>
  );
};

export default OrganizationsRecord;
