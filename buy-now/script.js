function buyNow(product, price, qtyId) {
    let qty = document.getElementById(qtyId).value;
    let message = `Hello! I want to buy ${qty} x ${product} at ₹${price*qty}.`;
    let whatsappUrl = `https://wa.me/919526226011?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
