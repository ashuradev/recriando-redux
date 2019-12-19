export const Types = {
  UPDATE_STATUS: 'UPDATE_STATUS'
};

export const updateStatus = (status) => 
  new Promise(resolve => setTimeout(() => resolve({
    type: Types.UPDATE_STATUS,
    payload: {
      status
    }
  })))