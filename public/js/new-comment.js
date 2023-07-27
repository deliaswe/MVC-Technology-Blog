const newCommentHandler = async (event) => {
    event.preventDefault();

    const post_id = window.location.toString().split('/').pop();

    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log(response.statusText);
            alert('Failed to create comment');
        }
    }
};


// event listeners
const newCommentButton = document.querySelector('#new-comment');
if (newCommentButton) {
    newCommentButton.addEventListener('click', newCommentHandler);
}