import Form from "../components/Form"

function Login () {
    return (
        <>
        <div>
            <Form route='/api/users/token/' method='login' />
        </div>
        </>
    )
}

export default Login