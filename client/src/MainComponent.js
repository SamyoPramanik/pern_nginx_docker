const { useCallback, useState, useEffect } = require("react");

export const MainComponent = () => {
    const [values, setValues] = useState([]);
    const [number, setNumber] = useState("");
    const getAllNumbers = useCallback(async () => {
        const values = await fetch("/api/values/all");
        const data = await values.json();
        setValues(data);
    }, []);

    const saveNumber = useCallback(
        async (e) => {
            e.preventDefault();
            console.log(number);
            await fetch("/api/values", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ value: number }),
            });
            setNumber("");
        },
        [number, setNumber]
    );

    useEffect(() => {
        getAllNumbers();
    }, []);

    return (
        <div>
            <button onClick={getAllNumbers}>Get all numbers</button>
            <span>Values</span>
            <div>
                {values?.map((value, index) => (
                    <div key={index}>{value.number}</div>
                ))}
            </div>
            <form onSubmit={saveNumber}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};
