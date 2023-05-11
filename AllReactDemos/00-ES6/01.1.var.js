function f() {
    console.log(x);
    console.log(y);
    {
        var x = 100;
        let y = 200;
    }
}

f();
