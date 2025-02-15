const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/pranto/", (req, res) => {
    const uid = req.query.uid;  // URL থেকে UID নিচ্ছি

    // UID যদি ৮ থেকে ১০ অক্ষরের মধ্যে না হয়, তবে ভুল বার্তা দেখাবে
    if (uid.length < 8 || uid.length > 10) {
        return res.send("YOUR UID WRONG PLEASE TRY AGAIN");
    }

    const visits = 43;           // এখানে তুমি 43 visits ব্যবহার করছো, তবে এটা ডাইনামিক হতে পারে
    const success = 43;          // Success count
    const error = 0;             // Error count

    // সঠিক UID হলে রেসপন্স পাঠাবে
    res.send(`${uid} PLAYER GOT ${visits} VISIT...SUCCESS: ${success} ERROR: ${error} CONTACT @ASIBHASANPRANTOO`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
