

export default function error({code, message}) {
    return (
        <p className="error" style={{"backgroundColor":"red"}}>
            <b>Chyba {code}:</b> {message}
        </p>
    )
}

