import React from "react";
import { Popover, Button, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { StyledActionPopover } from "./styled";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ButtonGroup } from "src/components/Elements";
interface ActionPopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  loading: boolean;
  showSuccess: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ActionPopover: React.FC<ActionPopoverProps> = ({ anchorEl, open, loading, showSuccess, onConfirm, onClose }) => {
  if (!anchorEl) return null;
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      elevation={2}
    >
      <StyledActionPopover>
        <motion.div initial={{ x: 0 }} animate={{ x: showSuccess ? "-100%" : "0%" }} transition={{ duration: 0.3 }} className="popoverContent">
          <div className="popoverInfo">
            <div className="icon">
              <DotLottieReact style={{ transform: "scale(1.5)" }} width="100px" height="100px" src="/static/lottie/warning.lottie" autoplay loop />
            </div>
            <div className="popoverMessage">
              <h4>Are you sure you want to delete?</h4>
              <p>This action cannot be undone and may permanently remove important data.</p>
            </div>
          </div>
          <div className="popoverActions">
            <ButtonGroup
              size="small"
              buttonList={[
                { onClick: onClose, title: "Cancel", variant: "outlined", disabled: loading, icon: <span className="fad fa-ban" /> },
                { onClick: onConfirm, title: "Delete", variant: "contained", color: "red", icon: <span className="fad fa-trash" />, disabled: loading, loading },
              ]}
            />
          </div>
        </motion.div>

        <motion.div initial={{ x: 0 }} animate={{ x: showSuccess ? "0%" : "100%" }} transition={{ duration: 0.3 }} className="successMessage">
          {showSuccess && (
            <>
              <DotLottieReact style={{ width: "80px", height: "80px" }} src="/static/lottie/success.lottie" autoplay />
              <div>Deleted Successfully</div>
            </>
          )}
        </motion.div>
      </StyledActionPopover>
    </Popover>
  );
};

export default ActionPopover;
