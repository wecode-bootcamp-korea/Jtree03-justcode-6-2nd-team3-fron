import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
function ReCaptcha() {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <Div>
      <ReCAPTCHA
        sitekey="6LecLRwiAAAAAB7qrVf5_nutM1cynR1ZMhHqUp67"
        onChange={onChange}
      />
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default ReCaptcha;
