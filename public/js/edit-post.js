// get the post id from the endpoint
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

// update the post
const updateCarPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};

// delete the post
const deleteCarPost = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
};

// envent listeners
const updateCarPostButton = document.querySelector('#update-car-post');

if (updateCarPostButton) {
    updateCarPostButton.addEventListener('click', updateCarPost);
}

const deleteCarPostButton = document.querySelector('#delete-car-post');

if (deleteCarPostButton) {
    deleteCarPostButton.addEventListener('click', deleteCarPost);
}
