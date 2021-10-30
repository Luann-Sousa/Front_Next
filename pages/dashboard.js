import useAuth from "./../hooks/useAuth";
function Dashboard(){
  const { user } = useAuth();

  return(
    <h1>Authnticado com git : {user?.displayName}</h1>
  )
}
export default Dashboard;