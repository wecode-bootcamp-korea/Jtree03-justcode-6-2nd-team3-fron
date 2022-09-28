import axios from 'axios';
import styled from 'styled-components';

export default function ProfileImg(props) {
  const { profile_image } = props;

  // const handleFileInput = e => {
  //   setSelectedFile({selectedFile: e.target.files[0]})
  // }

  // const handlePost = () => {
  //   const formData = new FormData();
  //   formData.append('file', selectedFile);

  //   return axios.post("http://localhost:8000/profile", formData, {
  //     headers: {
  //       Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2MzgzMjgwOSwiZXhwIjoxNjYzODQzNjA5fQ.Pun_4BHb45wixa6uhUiE8X_gOfuJVRk16zbX7k8RxPM'
  //     }
  //   }).then(res => {
  //     alert('성공')
  //   }).catch(err => {
  //     alert('실패')
  //   })
  // };

  const onChangeImg = e => {
    e.preventDefault();
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append('filename', uploadFile);
      console.log(uploadFile);
      axios
        .patch('http://localhost:8000/profile/image', formData, {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE2NjQzNjYxMTksImV4cCI6MTY2NDM3NjkxOX0.Sbs903MBWGA652C0EV6SrFEsCAZyBPBnIY6EUOUE0tw',
          },
        })
        .then(res => console.log(res.data));
    }
  };

  // const handleClick = () => {
  //   const formdata = new FormData();
  //   formdata.append('filename', selectedFile[0]);
  //   // console.log(selectedFile[0]);
  // }

  return (
    <form>
      <ImgBox profile_image={profile_image}>
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={onChangeImg}
        />
        {/* <label htmlFor='input'>이게뭐야</label> */}
      </ImgBox>
      {/* <button onClick={handleClick} >안녕</button> */}
      <SaveBtn disabled={false}>프로필 사진 저장</SaveBtn>
    </form>
  );
}

const ImgBox = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 160px;
  height: 160px;
  border: 1.5px solid #d9d9d9;
  border-radius: 50%;
  background: url(${props => props.profile_image}) center center no-repeat;
  background-size: cover;
`;

const SaveBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 20px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: rgba(0, 144, 249, 1);
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    background: rgba(0, 144, 249, 0.7);
    cursor: default;
  }

  &:hover {
    background: #2b75aa;
    transition: all ease 0.5s;
  }
`;