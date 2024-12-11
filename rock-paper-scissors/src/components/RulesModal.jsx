const RulesModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative rounded-lg bg-white p-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-dark-text">RULES</h2>
            <button onClick={onClose}>
              <img src="/icon-close.svg" alt="Close" className="h-5 w-5" />
            </button>
          </div>
          <img src="/image-rules-bonus.svg" alt="Game Rules" className="h-[300px] w-[300px]" />
        </div>
      </div>
    );
  };
  
  export default RulesModal;
  