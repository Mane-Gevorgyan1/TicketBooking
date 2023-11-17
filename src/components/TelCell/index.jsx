import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CryptoJS from 'crypto-js'
import { Buffer } from "buffer"

export const TelCell = () => {

    const [price, setPrice] = useState()


    useEffect(() => {
        if (price) {
            document.getElementById('form').submit()
        }
        setPrice(params.price)
        window.location = '/'
    }, [price])

    const generateOrderNumber = () => {
        const timestamp = Date.now()
        const randomNum = Math.floor(Math.random() * 1000)
        return `ORD-${timestamp}-${randomNum}`
    }



    const issuerId = generateOrderNumber()
    const encodedProduct = new Buffer.from('222').toString('base64')
    const encodedIssuerId = new Buffer.from(issuerId).toString('base64')
    const security_code = getTelcellSecurityCode(
        process.env.REACT_APP_TELCELL_SHOP_KEY,
        process.env.REACT_APP_TELCELL_ISSUER,
        "֏",
        price,
        encodedProduct,
        encodedIssuerId,
        "1"
    )

    function getTelcellSecurityCode(shop_key, issuer, currency, price, product, issuer_id, valid_days) {
        return CryptoJS.MD5(shop_key + issuer + currency + price + product + issuer_id + valid_days).toString();
    }

    const params = useParams()

    return (
        <form id='form' style={{ margin: "20px" }} target="_blank" action="https://telcellmoney.am/invoices" method="POST" >
            <input type="hidden" name="action" value="PostInvoice" />
            <input type="hidden" name="issuer" value={process.env.REACT_APP_TELCELL_ISSUER} />
            <input type="hidden" name="currency" value="֏" />
            <input type="hidden" name="price" value={price} />
            <input type="hidden" name="product" value={encodedProduct} />
            <input type="hidden" name="issuer_id" value={encodedIssuerId} />
            <input type="hidden" name="valid_days" value="1" />
            <input type="hidden" name="lang" value="am" />
            <input type="hidden" name="security_code" value={security_code} />

        </form>
    )
}