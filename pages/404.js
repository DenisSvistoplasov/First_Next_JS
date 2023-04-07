import MainContainer from "../Components/MainContainer";

export default function NotFound() {
  return (
    <MainContainer>
      <div
        style={{color: '#f00', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'sans-serif', padding: 20}}
      >Page Not Found</div>
    </MainContainer>
  );
}