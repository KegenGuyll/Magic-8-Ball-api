import possibleAnswers from '../../util/possibleAnswers';

const questionService = async (question: string) => {
  try {
    const result = await possibleAnswers();
    return { success: true, body: { question, ...result } };
  } catch (err) {
    return { success: false, error: err };
  }
};

export default questionService;
