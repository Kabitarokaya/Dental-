document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseFloat(counter.innerText.replace(/[^\d.]/g, ''));
            let count = 0;
            const increment = target / 100;
            const interval = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.innerText = counter.innerText.includes('+') ? `${Math.round(target)}+` : target.toFixed(1);
                    clearInterval(interval);
                } else {
                    counter.innerText = counter.innerText.includes('+') ? `${Math.round(count)}+` : count.toFixed(1);
                }
            }, 80);
        };
        updateCount();
    });
});

