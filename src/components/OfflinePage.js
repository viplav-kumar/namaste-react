const OfflinePage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="offline-container">
      <div className="offline-card">
        <img src="" alt="Offline" className="offline-image" />

        <h1 className="offline-title">You're Offline</h1>

        <p className="offline-description">
          Looks like your internet connection is lost. Please check your network
          and try again.
        </p>

        <button className="retry-button" onClick={handleRetry}>
          Retry Connection
        </button>

        <p className="offline-footer">
          Zingry works best with a stable internet connection.
        </p>
      </div>
    </div>
  );
};

export default OfflinePage;
