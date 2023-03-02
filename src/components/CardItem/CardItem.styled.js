import styled from "styled-components";

export const Container = styled.div`
 position: relative;
 width: 380px;
 height: 460px;
 background: linear-gradient(
  114.99deg,
  #471ca9 -0.99%,
  #5736a3 54.28%,
  #4b2a99 78.99%
 );
 box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
 border-radius: 20px;
`;
export const BoxLogo = styled.div`
 position: absolute;
 top: 20px;
 left: 20px;
`;

export const BoxPicture = styled.div`
 position: absolute;
 width: 308px;
 height: 168px;
 left: 36px;
 top: 28px;
`;

export const Line = styled.div`
 position: absolute;
 width: 380px;
 height: 8px;
 left: 0px;
 top: 214px;
 background: #ebd8ff;
 box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
  inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Avatar = styled.div`
  position: absolute;
 width: 80px;
 height: 80px;
 left: 150px;
 top: 178px;
 display: flex;
 border-radius: 85.9232px;
 background: #ebd8ff;
 box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
  inset 0px -2.19582px 4.39163px #ae7be3, inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Elips = styled.div`
 position: absolute;
 width: 62px;
 height: 62px;
 left: 9.48px;
 top: 9.42px;
 border-radius: 85.9232px;
 background: #5736a3;
`;
export const Image = styled.img`
 position: absolute;
 width: 62px;
 height: 62px;
 left: 9.48px;
 top: 9.42px;
 border-radius: 85.9232px;
`;
export const Text = styled.span`
 font-family: "Montserrat";
 font-weight: 500;
 font-size: 20px;
 line-height: 24px;
 text-transform: uppercase;
 color: #ebd8ff;
`;
export const BoxInfo = styled.div`
 display: flex;
 gap: 16px;
 justify-content: center;
 position: relative;
 top: 284px;
 flex-direction: column;
 align-items: center;
`;
export const Btn = styled.button`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 padding: 14px 28px;
 gap: 6px;
 position: absolute;
 width: 196px;
 height: 50px;
 left: 92px;
 top: 374px;
 background: ${(p) => (p.active ? "#5cd3a8" : "#ebd8ff")};
 box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
 border-radius: 10.3108px;
 border-color: transparent;
 font-family: "Montserrat";
 font-weight: 600;
 font-size: 18px;
 line-height: 22px;
 text-transform: uppercase;
 color: #373737;
 order: 0;
 flex-grow: 0;
`;
