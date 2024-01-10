import { Link } from "react-router-dom";

export default function ErrorPage() {

    return (
        <>
            <Link to="/users">BACK</Link>
            <h1>Ooops!!</h1>
            <h2>This page not found</h2>
        </>
    )
}