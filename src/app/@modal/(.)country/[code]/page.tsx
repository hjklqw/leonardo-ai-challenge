"use client";

import { useRouter } from "next/navigation";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import { CountryInfo } from "@/shared/countryInfo";

type Props = {
  params: { code: string };
};

export default function CountryModal({ params: { code } }: Props) {
  const router = useRouter();

  const minModalWidth = useBreakpointValue(
    {
      base: undefined,
      md: 1000,
    },
    { ssr: false }
  );

  return (
    <Modal isOpen={true} onClose={() => router.back()} isCentered>
      <ModalOverlay />
      <ModalContent minWidth={minModalWidth}>
        <ModalCloseButton />
        <ModalBody padding={10}>
          <CountryInfo code={code} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
