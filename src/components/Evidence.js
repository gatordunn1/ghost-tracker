import React from "react";
import classNames from "classnames";
import { Icon } from "./Icon";
import { EVIDENCE_CSS_MAP, STATUS } from "../constants";
import "../styles/Evidence.css";

export const Evidence = ({ evidence: { state, incrementStatus } }) => {
  const evidenceMap = React.useMemo(() => {
    const confirmed = state.confirmed.map((evidenceName) => ({
      class: STATUS.confirmed.class,
      evidenceName,
      statusIcon: STATUS.confirmed.icon,
      statusText: STATUS.confirmed.text,
    }));
    const excluded = state.excluded.map((evidenceName) => ({
      class: STATUS.excluded.class,
      evidenceName,
      statusIcon: STATUS.excluded.icon,
      statusText: STATUS.excluded.text,
    }));
    const unconfirmed = state.unconfirmed.map((evidenceName) => ({
      class: STATUS.unconfirmed.class,
      evidenceName,
      statusIcon: STATUS.unconfirmed.icon,
      statusText: STATUS.unconfirmed.text,
    }));
    const all = [...confirmed, ...excluded, ...unconfirmed];
    all.sort((a, b) => a.evidenceName.localeCompare(b.evidenceName));

    return all;
  }, [state]);

  return evidenceMap.map((e, key) => (
    <span
      className="Evidence-item"
      onClick={() => incrementStatus(e.evidenceName)}
      key={key}
    >
      <span className="Evidence-status">
        <Icon classes={[e.class]} icon={e.statusIcon} size="small" />
      </span>
      <span
        className={classNames(
          `Evidence-${EVIDENCE_CSS_MAP[e.evidenceName]}`,
          `Evidence-name-${e.statusText}`
        )}
      ></span>
    </span>
  ));
};
