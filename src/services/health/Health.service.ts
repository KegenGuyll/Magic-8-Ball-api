export const healthService = async () => {
  try {
    return { success: true, body: 'good' };
  } catch (err) {
    return { success: false, error: err };
  }
};

export default healthService;
