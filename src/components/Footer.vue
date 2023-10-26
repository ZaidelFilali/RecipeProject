<template>
    <footer class="footer-container">
        <div class="container">
            <p class="text-muted">Discover more delicious recipes and cooking tips at</p>
            <a href="https://smartslowcooker.com/blog/cooking-inspiration" class="btn btn-primary btn-lg">Get Cooking
                Inspiration</a>
            <div class="social-icons mt-3">
                <a href="https://www.instagram.com/your_instagram" target="_blank">
                    <img src="../assets/instagram.jpeg" alt="Instagram" class="social-logo" />
                </a>
                <a href="https://github.com/your_github" target="_blank">
                    <img src="../assets/github.png" alt="GitHub" class="social-logo" />
                </a>
                <a href="https://www.linkedin.com/in/your_linkedin" target="_blank">
                    <img src="../assets/linkedin.png" alt="LinkedIn" class="social-logo" />
                </a>
                <a href="https://www.snapchat.com/add/your_snapchat" target="_blank">
                    <img src="../assets/snapchat.jpg" alt="Snapchat" class="social-logo" />
                </a>
            </div>
            <p>&copy; 2023 Alpina's Recipes</p>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    background-color: #d8d8d8;
    color: white;
    width: 100%;
} 

.social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.social-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: filter 0.2s;
}

.social-logo:hover {
    filter: brightness(1.2);
}
</style>
