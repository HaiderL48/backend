const asyncHandler = (requestHandler) => async (req, res, next) => {
   Promise.resolve(requestHandler()).catch((err) => next(err));
};

export { asyncHandler };
// const asyncHandler = (requestHandler) => async (req, res, next) => {
//     try {
//         await requestHandler()
//     } catch (error) {
//         res.status(err.code || 401)
//         console.log("ERROR", error);
//     }
// };
