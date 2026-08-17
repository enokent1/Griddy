export default `
    .btn {
        position: relative;
        padding: 0.5rem 1.5rem;
        background: transparent;
        border: 2px solid aquamarine;
        overflow: hidden;
        transition: all 0.2s ease;
    }

    .btn-text {
        position: relative;
        color: aquamarine;
        z-index: 2;
    }

    .btn:hover .btn-text {
        color: black;
    }

    .btn::before {
        position: absolute;
        top: 0;
        left: -20%;
        content: "";
        width: 10%;
        height: 100%;
        transform: skewX(45deg);
        background-color: aquamarine;
        z-index: 1;
        transition: 0.3s ease;
    }

    .btn:hover::before {
        width: 150%;
    }
`