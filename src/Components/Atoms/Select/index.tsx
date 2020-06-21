import * as React from "react";
import styles from "./style";
import { SelectData } from "../../../../types/Types";

const { StyledSelect } = styles;

export interface SelectProps {
  selectData: SelectData[];
  defaultvalue: number;
  fontsize?: string;
  width?: string;
  height?: string;
  onChangeAction?: (event: any) => any;
}

export const Select: React.FC<SelectProps> = ({
  selectData,
  defaultvalue,
  fontsize,
  width,
  height,
  onChangeAction,
}) => (
  <StyledSelect
    value={defaultvalue.toString()}
    fontsize={fontsize}
    width={width}
    height={height}
    onChange={onChangeAction}
  >
    {(() => {
      const list = [];
      for (var data in selectData) {
        list.push(
          <option key={selectData[data].value} value={selectData[data].value}>
            {selectData[data].label}
          </option>
        );
      }
      return list;
    })()}
  </StyledSelect>
);

Select.defaultProps = {
  fontsize: "16px",
  width: "78px",
  height: "24px",
  onChangeAction: () => {},
};
