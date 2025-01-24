    // Generate random CAPTCHA
    function generateCaptcha() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789"; // Exclude confusing characters
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    return captchaText;
    }

    // Render CAPTCHA to canvas
    function renderCaptcha(text) {
        const canvas = document.getElementById("captchaCanvas");
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = "#dff0d8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw CAPTCHA text
    ctx.fillStyle = "#333";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    ctx.fillText(text, x, y);

    // Add random lines for distortion
    ctx.strokeStyle = "#999";
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
        }
    }

    // Refresh CAPTCHA
    document.getElementById("refreshCaptcha").addEventListener("click", () => {
        captchaCode = generateCaptcha();
    renderCaptcha(captchaCode);
    });

    // Validate CAPTCHA on form submit
document.getElementById("auth-form").addEventListener("submit", (event) => {
        const userInput = document.getElementById("captchaInput").value;
    if (userInput !== captchaCode) {
        event.preventDefault();
    alert("Captcha code is incorrect. Please try again.");
        }
    });

    // Initialize CAPTCHA on page load
    let captchaCode = generateCaptcha();
    renderCaptcha(captchaCode);