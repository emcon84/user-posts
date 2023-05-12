import { css, SerializedStyles } from "@emotion/react";
import { BounceLoader } from "react-spinners";

interface LoaderSizeProps {
    size?: number | string;
    sizeUnit?: "px" | "%" | "em" | "rem";
}

interface BounceLoaderProps extends LoaderSizeProps {
    css?: SerializedStyles;
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

interface Props {
    loading: boolean;
}

const Spinner: React.FC<Props> = ({ loading }) => {
    return (
        <div className="sweet-loading">
            <BounceLoader css={override} size={60} color={"#123abc"} loading={loading} />
        </div>
    );
};

export default Spinner;
