export const Tab = ({
  setActiveTab,
  activeTab,
  id,
  title
} : {
  setActiveTab: (tab: string) => void,
  activeTab: string,
  id: string,
  title: string
}) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  
  return (
    <li onClick={handleClick} className={"flex-fill py-3 " + (activeTab === id ? "active" : "")}>
     { title }
    </li>
  )
}