export const TabContent = ({
  activeTab,
  id,
  children
}: {
  activeTab: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    activeTab === id ? (
      <article>
        <div className="tab-content mt-3">
          { children }
        </div>
      </article>
    ) : null
  );
}