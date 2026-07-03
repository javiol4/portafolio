/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface DesignPlaygroundProps {
  showGrid: boolean;
  onToggleGrid: (show: boolean) => void;
  hoverLockedId: string | null;
  onHoverLockChange: (id: string | null) => void;
}

export default function DesignPlayground({
  showGrid,
  onToggleGrid,
  hoverLockedId,
  onHoverLockChange,
}: DesignPlaygroundProps) {
  return null;
}
