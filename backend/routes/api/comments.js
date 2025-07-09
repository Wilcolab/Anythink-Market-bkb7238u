/**
 * GET /:postId
 * Retrieves all comments associated with a specific post.
 *
 * @route GET /:postId
 * @param {Request} req - Express request object containing the postId as a route parameter.
 * @param {Response} res - Express response object used to send the response.
 * @returns {Object[]} 200 - An array of comment objects for the specified post.
 * @returns {Object} 500 - Internal server error message if fetching fails.
 */
router.get("/:postId", async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});









