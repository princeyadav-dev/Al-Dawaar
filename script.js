// /* =========================
//    GLOBAL SELECTORS
// ========================= */

// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// /* =========================
//    HAMBURGER TOGGLE
// ========================= */

// if (hamburger && navLinks) {
//     hamburger.addEventListener("click", () => {
//         navLinks.classList.toggle("open");
//         hamburger.classList.toggle("active");
//     });
// }

// /* =========================
//    CLOSE MENU ON LINK CLICK (MOBILE)
// ========================= */

// const navItems = document.querySelectorAll(".nav-links a");

// navItems.forEach(link => {
//     link.addEventListener("click", () => {
//         if (navLinks.classList.contains("open")) {
//             navLinks.classList.remove("open");
//             hamburger.classList.remove("active");
//         }
//     });
// });

// /* =========================
//    ACTIVE NAV LINK (AUTO)
// ========================= */

// const currentPage = window.location.pathname.split("/").pop();

// navItems.forEach(link => {
//     if (link.getAttribute("href") === currentPage) {
//         link.classList.add("active");
//     }
// });

// /* =========================
//    SCROLL REVEAL ANIMATION
// ========================= */

// const revealElements = document.querySelectorAll(".reveal");

// const revealOnScroll = () => {
//     const windowHeight = window.innerHeight;

//     revealElements.forEach(el => {
//         const elementTop = el.getBoundingClientRect().top;
//         const revealPoint = 120;

//         if (elementTop < windowHeight - revealPoint) {
//             el.classList.add("active");
//         }
//     });
// };

// window.addEventListener("scroll", revealOnScroll);
// window.addEventListener("load", revealOnScroll);


// /* =========================
//    ORDER LOGIC (MENU PAGE)
// ========================= */

// const orderList = document.getElementById("orderList");
// const totalPriceEl = document.getElementById("totalPrice");
// const addButtons = document.querySelectorAll(".add-btn");
// const whatsappBtn = document.getElementById("whatsappOrder");
// const emailBtn = document.getElementById("emailOrder");

// let orderItems = [];

// /* =========================
//    ADD ITEM TO ORDER
// ========================= */

// addButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const card = button.closest(".menu-card");
//         const name = button.dataset.name;
//         const price = parseInt(button.dataset.price, 10);
//         const qtyInput = card.querySelector(".qty");
//         const quantity = parseInt(qtyInput.value, 10);

//         if (quantity <= 0 || isNaN(quantity)) return;

//         const existingItem = orderItems.find(item => item.name === name);

//         if (existingItem) {
//             existingItem.quantity += quantity;
//         } else {
//             orderItems.push({
//                 name,
//                 price,
//                 quantity
//             });
//         }

//         qtyInput.value = 1;
//         renderOrder();
//     });
// });

// /* =========================
//    RENDER ORDER SUMMARY
// ========================= */

// function renderOrder() {
//     orderList.innerHTML = "";
//     let total = 0;

//     orderItems.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.className = "order-item";

//         const itemTotal = item.price * item.quantity;
//         total += itemTotal;

//         li.innerHTML = `
//             <span>${item.name} × ${item.quantity}</span>
//             <span>₹${itemTotal}</span>
//             <button class="remove-btn" data-index="${index}">✕</button>
//         `;

//         orderList.appendChild(li);
//     });

//     totalPriceEl.textContent = total;

//     attachRemoveEvents();
// }

// /* =========================
//    REMOVE ITEM
// ========================= */

// function attachRemoveEvents() {
//     const removeButtons = document.querySelectorAll(".remove-btn");

//     removeButtons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             const index = btn.dataset.index;
//             orderItems.splice(index, 1);
//             renderOrder();
//         });
//     });
// }

// /* =========================
//    BUILD ORDER MESSAGE
// ========================= */

// function buildOrderMessage() {
//     if (orderItems.length === 0) return "";

//     let message = "🍽️ *New Order – Desi Angithi Dhaba*%0A%0A";
//     let total = 0;

//     orderItems.forEach(item => {
//         const itemTotal = item.price * item.quantity;
//         total += itemTotal;

//         message += `• ${item.name} × ${item.quantity} = ₹${itemTotal}%0A`;
//     });

//     message += `%0A💰 *Total Amount:* ₹${total}%0A`;
//     message += `%0A📍 Please confirm availability.`;

//     return message;
// }

// /* =========================
//    WHATSAPP ORDER
// ========================= */

// if (whatsappBtn) {
//     whatsappBtn.addEventListener("click", () => {
//         const message = buildOrderMessage();
//         if (!message) return;

//         const whatsappURL = `https://wa.me/919958792286?text=${message}`;
//         window.open(whatsappURL, "_blank");
//     });
// }

// /* =========================
//    EMAIL ORDER
// ========================= */

// if (emailBtn) {
//     emailBtn.addEventListener("click", () => {
//         const message = buildOrderMessage();
//         if (!message) return;

//         const subject = encodeURIComponent("Food Order – Desi Angithi Dhaba");
//         const body = decodeURIComponent(message.replace(/%0A/g, "\n"));

//         const mailURL = `mailto:animesansaryt@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
//         window.location.href = mailURL;
//     });
// }


// /* =========================
//    SAFETY: PREVENT EMPTY FORM SUBMIT
// ========================= */

// const contactForm = document.querySelector(".contact-form form");

// if (contactForm) {
//     contactForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         alert("Thank you! We will contact you shortly.");
//         contactForm.reset();
//     });
// }

// /* =========================
//    NAVBAR SHADOW ON SCROLL
// ========================= */

// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//     if (!navbar) return;

//     if (window.scrollY > 20) {
//         navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.45)";
//     } else {
//         navbar.style.boxShadow = "none";
//     }
// });

// /* =========================
//    PREVENT NEGATIVE QUANTITY
// ========================= */

// const qtyInputs = document.querySelectorAll(".qty");

// qtyInputs.forEach(input => {
//     input.addEventListener("input", () => {
//         if (input.value < 1) {
//             input.value = 1;
//         }
//     });
// });

// /* =========================
//    AUTO SCROLL TO ORDER SUMMARY
// ========================= */

// const addButtonsScroll = document.querySelectorAll(".add-btn");

// addButtonsScroll.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const summary = document.querySelector(".order-summary");
//         if (summary) {
//             summary.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start"
//             });
//         }
//     });
// });

/* =========================
   GLOBAL SELECTORS
========================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

/* =========================
   HAMBURGER TOGGLE
========================= */

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("active");
    });
}

/* =========================
   CLOSE MENU ON LINK CLICK (MOBILE)
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            hamburger.classList.remove("active");
        }
    });
});

/* =========================
   ACTIVE NAV LINK (AUTO)
========================= */

const currentPage = window.location.pathname.split("/").pop();

navItems.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =========================
   ORDER LOGIC (MENU PAGE)
========================= */

const orderList = document.getElementById("orderList");
const totalPriceEl = document.getElementById("totalPrice");
const addButtons = document.querySelectorAll(".add-btn");
const whatsappBtn = document.getElementById("whatsappOrder");
const emailBtn = document.getElementById("emailOrder");

let orderItems = [];

/* =========================
   ADD ITEM TO ORDER
========================= */

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".menu-card");
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price, 10);
        const qtyInput = card.querySelector(".qty");
        const quantity = parseInt(qtyInput.value, 10);

        if (quantity <= 0 || isNaN(quantity)) return;

        const existingItem = orderItems.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            orderItems.push({
                name,
                price,
                quantity
            });
        }

        qtyInput.value = 1;
        renderOrder();
    });
});

/* =========================
   RENDER ORDER SUMMARY
========================= */

function renderOrder() {
    orderList.innerHTML = "";
    let total = 0;

    orderItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "order-item";

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        li.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>AED ${itemTotal}</span>
            <button class="remove-btn" data-index="${index}">✕</button>
        `;

        orderList.appendChild(li);
    });

    totalPriceEl.textContent = `AED ${total}`;

    attachRemoveEvents();
}

/* =========================
   REMOVE ITEM
========================= */

function attachRemoveEvents() {
    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            orderItems.splice(index, 1);
            renderOrder();
        });
    });
}

/* =========================
   BUILD ORDER MESSAGE
========================= */

function buildOrderMessage() {
    if (orderItems.length === 0) return "";

    let message = "🍽️ *New Order – Al Dawaar Revolving Restaurant*%0A%0A";
    let total = 0;

    orderItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        message += `• ${item.name} × ${item.quantity} = AED ${itemTotal}%0A`;
    });

    message += `%0A💰 *Total Amount:* AED ${total}%0A`;
    message += `%0A📍 Please confirm availability.`;

    return message;
}

/* =========================
   WHATSAPP ORDER
========================= */

if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
        const message = buildOrderMessage();
        if (!message) return;

        const whatsappURL = `https://wa.me/97142096912?text=${message}`;
        window.open(whatsappURL, "_blank");
    });
}

/* =========================
   EMAIL ORDER
========================= */

if (emailBtn) {
    emailBtn.addEventListener("click", () => {
        const message = buildOrderMessage();
        if (!message) return;

        const subject = encodeURIComponent("Food Order – Al Dawaar Revolving Restaurant");
        const body = decodeURIComponent(message.replace(/%0A/g, "\n"));

        const mailURL = `mailto:info@aldawaarrestaurant.com?subject=${subject}&body=${encodeURIComponent(body)}`;
        window.location.href = mailURL;
    });
}


/* =========================
   SAFETY: PREVENT EMPTY FORM SUBMIT
========================= */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! We will contact you shortly.");
        contactForm.reset();
    });
}

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.45)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

/* =========================
   PREVENT NEGATIVE QUANTITY
========================= */

const qtyInputs = document.querySelectorAll(".qty");

qtyInputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value < 1) {
            input.value = 1;
        }
    });
});

/* =========================
   AUTO SCROLL TO ORDER SUMMARY
========================= */

const addButtonsScroll = document.querySelectorAll(".add-btn");

addButtonsScroll.forEach(btn => {
    btn.addEventListener("click", () => {
        const summary = document.querySelector(".order-summary");
        if (summary) {
            summary.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
