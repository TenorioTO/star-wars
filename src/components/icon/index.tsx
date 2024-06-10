import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const FIcon = ({ icon }: { icon: IconDefinition }) => (
  <FontAwesomeIcon icon={icon} />
);
