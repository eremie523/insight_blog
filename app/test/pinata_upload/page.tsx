"use client"
import { PinataSDK } from 'pinata'
import React, { useState } from 'react'

const Page = () => {
    const [file, setFile] = useState<File | null>(null)
    const [diagnosis, setDiagnosis] = useState<string | undefined>()
    const userId = 1 // Replace with actual user ID or fetch it from context or props
    const model = "v1" // Replace with actual model or fetch it from context or props
    const [isLoading, setIsLoading] = useState<boolean>(false)



    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files);

            setFile(e.target.files[0])
        }
    }

    const handleDiagnosisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiagnosis(e.target.value)
    }

    const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        if (!file) { alert("Please select a file"); return; }
        if (!diagnosis) { alert("Please enter a diagnosis"); return; }

        const pinata = new PinataSDK({
            pinataJwt: "",
            pinataGateway: "amber-wrong-cockroach-443.mypinata.cloud"
        })

        const response = await fetch('https://raphina-cardano-production.up.railway.app/getPresignedUrlFromThirdPartyService', {
            method: 'GET',
        }).then((res) => {
            if (res.status !== 200) {
                throw new Error("Failed to fetch presigned URL")
            }
            return res.json()
        })

        const upload = await pinata.upload.public.file(file!).url(response.url)

        console.log(upload);

        if (upload.cid) {
            const uploadResponse = await fetch('https://raphina-cardano-production.up.railway.app/storeDiagnosis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    scan: upload.cid,
                    diagnosis,
                    model
                }),
            }).then((res) => {
                console.log(res);
                if (res.status != 200) {
                    throw new Error("Failed to upload file")
                }
                return res.json()
            })

            if (uploadResponse.status === 200) {
                console.log(uploadResponse.message, uploadResponse.txHash);
            } else {
                console.log(uploadResponse.message);
            }
        } else {
            console.log('Upload failed')
        }
    }
    return (
        <>
            <form action="" onSubmit={handleUpload} className='flex flex-col gap-2'>
                <h1>Store Diagnosis</h1>
                <input type="text" id='diagnosis' value={diagnosis} onChange={handleDiagnosisChange} className='border' />
                <br />
                <input type='file' id='file' onChange={handleFileChange} />
                <br />
                <button type='submit' className='bg-primary-purple text-white p-3 rounded'>{isLoading ? "Loading..." : "Upload content"}</button>
            </form>
        </>
    )
}

export default Page