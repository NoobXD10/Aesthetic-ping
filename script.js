document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const ball1 = document.getElementById('ball1');
    const ball2 = document.getElementById('ball2');

    const boxRect = box.getBoundingClientRect();
    const ballRadius = ball1.offsetWidth / 2;
    const speed = 2;

    const balls = [
        { el: ball1, x: boxRect.width / 4, y: boxRect.height / 2, dx: speed, dy: speed },
        { el: ball2, x: 3 * boxRect.width / 4, y: boxRect.height / 2, dx: -speed, dy: speed }
    ];

    function updateBall(ball) {
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x - ballRadius < 0 || ball.x + ballRadius > boxRect.width) {
            ball.dx = -ball.dx;
        }

        if (ball.y - ballRadius < 0 || ball.y + ballRadius > boxRect.height) {
            ball.dy = -ball.dy;
        }

        ball.el.style.transform = `translate(${ball.x - ballRadius}px, ${ball.y - ballRadius}px)`;
    }

    function animate() {
        balls.forEach(updateBall);
        requestAnimationFrame(animate);
    }

    animate();
});
