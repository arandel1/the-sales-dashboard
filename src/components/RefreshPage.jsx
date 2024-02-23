import React from 'react';

 
function RefreshPage() {
  window.location.reload(false);
}

return (
  <div>
    <button onClick={refreshPage}>Click to reload!</button>
  </div>
);

export default RefreshPage;