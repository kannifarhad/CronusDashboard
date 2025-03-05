import styled from "@emotion/styled";

export const StyledActionPopover = styled.div`
  width: 375px;
  overflow: hidden;
  position: relative;

  .popoverContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 15px;
    .popoverInfo {
      display: flex;
      align-items: center;
      .icon {
        min-width: 80px;
        min-height: 80px;
        height: auto;
        width: 80px;
        display: flex;
        align-items: center;
      }
    }
    .popoverMessage {
      padding-left: 10px;
      h4 {
        font-size: 17px;
        line-height: 110%;
        margin: 0px;
        margin-bottom: 5px;
        font-weight: 600;
      }
      p {
        font-size: 11px;
        line-height: 110%;
      }
      text-align: left;
    }

    .popoverActions {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
    }
  }

  .successMessage {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #04c985;
    align-items: center;
  }
`;
