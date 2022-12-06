import CustomButton from './CustomButton';

// 유저 컴포넌트
function User(props) {
  console.log("props: ", props);
  console.log("props.user: ", props.user);
  return (
      <div className="square-style">
          {props.user.age}살 - {props.user.name}
          <CustomButton
              color="red"
              onClick={() => {
                  props.handleDelete(props.user.id);
              }}>
          삭제하기
          </CustomButton>
      </div>
  );
}

export default User;