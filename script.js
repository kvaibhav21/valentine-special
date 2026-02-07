<script>
    const correctPassword = "ishuvaibhav@0121"; // Updated password for Rose Day surprise
    let enteredPassword = prompt("enter your password:");
    if (enteredPassword !== correctPassword) {
        alert("गलत पासवर्ड। प्रवेश निषेधित।");
        window.location.href = "https://www.google.com";
    }
</script>
