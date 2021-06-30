/**
 * @name :    express-async-handler
 * @create :  2020/05/25
 * @version : 1.0.2
 * @author :  Joël Lesenne
 * @depot :   <https://github.com/joellesenne/express-async-handler>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * Simple Middleware to manage exceptions within express routes in asynchronous
 */
const asyncHandler = (fn) => (...args) => {
  const next = args[args.length - 1]
  return Promise.resolve(fn(...args)).catch(next)
}

/**
 * Export module
 */
module.exports = asyncHandler
