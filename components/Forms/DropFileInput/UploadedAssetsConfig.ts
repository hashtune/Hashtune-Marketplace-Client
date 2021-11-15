import defaultFileIcon from "../../../public/dist/icons/dist/svg/heart-filled.svg";
import logicFileIcon from "../../../public/dist/icons/dist/svg/logic-pro-x.svg";
import abletonltFileIcon from "../../../public/dist/icons/dist/svg/ableton.svg";
import wavFileIcon from "../../../public/dist/icons/dist/svg/wave-file.svg";
interface UploadedAssetsConfigTypes {
  default: string;
  logic: string;
  ableton: string;
  wav: string;
  mpeg: string;
}
export const UploadedAssetsConfig = <UploadedAssetsConfigTypes>{
  default: defaultFileIcon,
  logic: logicFileIcon,
  ableton: abletonltFileIcon,
  wav: wavFileIcon,
  mpeg: defaultFileIcon,
};
