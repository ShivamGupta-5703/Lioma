import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div style={{backgroundColor : 'dimgray', display : 'flex', justifyContent : 'center', alignItems : 'center', height : '100vh'}}>
      <SignUp/>
    </div>
  );
}