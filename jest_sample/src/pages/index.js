import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import '../app/globals.css'



const index = () => {
    const router = useRouter();

    const logIn = (e) => {
        e.preventDefault();
        Cookies.set("loggedin", "true");
        router.push("/calculator");

    };
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "250px" }}>
            <h1 style={{ paddingTop: "10px" }}>HOME</h1>
            <button
                type="submit"
                onClick={(e) => logIn(e)}
                className="equals"
                style={{ padding: "10px" }}
            >
                Go to Calculator
            </button>
        </div>
    )
}
export default index